import dotenv from 'dotenv'
dotenv.config()
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
import quizRoutes      from './routes/quiz.js'
import chaptersRoutes  from './routes/chapters.js'
import debugRoutes     from './routes/debug.js'

const app  = express()
// Render uses process.env.PORT automatically
const PORT = process.env.PORT || 8080

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
app.use('/api/quiz',      quizRoutes)
app.use('/api/chapters',  chaptersRoutes)
app.use('/api/debug',     debugRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: "ok" });
});

// Catch-all for unhandled routes (API only)
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Global Express error handler
app.use((err, req, res, next) => {
  console.error('❌ Express error:', err.stack)
  res.status(500).json({ error: 'Internal Server Error', message: err.message })
})


// ── Start Express Server Independently ──────────────────────────────────────────
// Handled at the bottom

// ── Connect to MongoDB ────────────────────────────────────────────────────────
const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI

  if (!MONGO_URI) {
    console.warn('⚠️ WARNING: MONGO_URI environment variable is missing!')
    console.warn('Database features will not work until set in Render environment variables.')
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

// 1. Connect to Database (Async, Non-Blocking)
connectDB()

// 2. Start Web Server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
