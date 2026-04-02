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
// Railway provides process.env.PORT automatically
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


// ── Start Express Server Independently ──────────────────────────────────────────
const startServer = (initialPort) => {
  const basePort = Number(initialPort)
  let retries = 0

  const tryListen = (portToTry) => {
    // Railway requires binding to 0.0.0.0 so the app is accessible externally!
    const server = app.listen(portToTry, '0.0.0.0', () => {
      console.log(`🚀 Production Server successfully running and accepting connections!`)
      console.log(`📡 Listening on host: 0.0.0.0, port: ${portToTry}`)
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

// ── Connect to MongoDB ────────────────────────────────────────────────────────
const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI

  if (!MONGO_URI) {
    console.warn('⚠️ WARNING: MONGO_URI environment variable is missing!')
    console.warn('Database features will not work until set in Railway variables.')
    return
  }

  try {
    await mongoose.connect(MONGO_URI)
    // Extract cluster part safely safely without exposing passwords:
    const safeUrl = MONGO_URI.includes('@') ? MONGO_URI.split('@')[1].split('/')[0] : 'localhost'
    console.log(`✅ MongoDB successfully connected to: ${safeUrl}`)
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message)
    console.error('⚠️ NOTE: The server is still running, but database routes will fail.')
    console.error('👉 Ensure you have whitelisted 0.0.0.0/0 in MongoDB Atlas Network Access.')
  }
}

// 1. Start Web Server
startServer(PORT)

// 2. Connect to Database (Async, Non-Blocking)
connectDB()
