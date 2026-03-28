import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import questionRoutes  from './routes/questions.js'
import submitRoutes    from './routes/submit.js'
import revisionRoutes  from './routes/revision.js'

const app  = express()
const PORT = process.env.PORT || 5000

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors())
app.use(express.json())

// ── Routes ────────────────────────────────────────────────────────────────────
app.use('/api/questions', questionRoutes)
app.use('/api/submit',    submitRoutes)
app.use('/api/revision',  revisionRoutes)

// Health check
app.get('/api/health', (_req, res) => res.json({ status: 'ok', time: new Date() }))

// 404 fallback
app.use((_req, res) => res.status(404).json({ error: 'Not found' }))

// ── Connect to MongoDB then start server ──────────────────────────────────────
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet'

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`✅ MongoDB connected: ${MONGO_URI}`)
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`))
  })
  .catch(err => {
    console.error('❌ MongoDB connection failed:', err.message)
    process.exit(1)
  })
