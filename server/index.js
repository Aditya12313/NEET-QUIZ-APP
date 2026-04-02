import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import questionRoutes  from './routes/questions.js'
import submitRoutes    from './routes/submit.js'
import revisionRoutes  from './routes/revision.js'

const app  = express()
const PORT = process.env.PORT || 5000
const MAX_PORT_RETRIES = Number(process.env.PORT_RETRY_ATTEMPTS || 10)

// Global crash handlers
process.on('uncaughtException', (err) => {
  console.error('❌ UNCAUGHT EXCEPTION: Server shutting down...', err)
  process.exit(1)
})

process.on('unhandledRejection', (err) => {
  console.error('❌ UNHANDLED REJECTION: Server shutting down...', err)
  process.exit(1)
})
// ── Middleware ────────────────────────────────────────────────────────────────
// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`)
  next()
})

// CORS configuration - allowing all origins temporarily per requirements
app.use(cors({
  origin: '*', // Allow all origins including Vercel frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())

// ── Routes ────────────────────────────────────────────────────────────────────
app.use('/api/questions', questionRoutes)
app.use('/api/submit',    submitRoutes)
app.use('/api/revision',  revisionRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    environment: process.env.NODE_ENV || 'development',
    time: new Date().toISOString() 
  })
})

// Serve static frontend files in production
app.use(express.static(path.join(__dirname, '../dist')))

// Catch-all for frontend routing
app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'Not found' })
  }
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

// Global Express error handler
app.use((err, req, res, next) => {
  console.error('❌ Express error:', err.stack)
  res.status(500).json({ error: 'Internal Server Error', message: err.message })
})

// ── Connect to MongoDB then start server ──────────────────────────────────────
const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI) {
  console.error('❌ CRITICAL ERROR: MONGO_URI environment variable is missing!')
  console.error('Please set MONGO_URI in your Railway project variables.')
  process.exit(1)
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`✅ MongoDB connected: ${MONGO_URI}`)

    const startServer = (initialPort) => {
      const basePort = Number(initialPort)
      let retries = 0

      const tryListen = (portToTry) => {
        const server = app.listen(portToTry, () => {
          console.log(`🚀 Production Server successfully running and accepting connections!`)
          console.log(`📡 Listening on port: ${portToTry}`)
          console.log(`🌍 Health check available at: /api/health`)
        })

        server.on('error', (err) => {
          if (err.code === 'EADDRINUSE' && retries < MAX_PORT_RETRIES) {
            retries += 1
            const nextPort = portToTry + 1
            console.warn(`⚠️ Port ${portToTry} is in use. Retrying on ${nextPort}...`)
            tryListen(nextPort)
            return
          }

          console.error('❌ Server failed to start:', err.message)
          process.exit(1)
        })
      }

      tryListen(basePort)
    }

    startServer(PORT)
  })
  .catch(err => {
    console.error('❌ MongoDB connection failed:', err.message)
    process.exit(1)
  })
