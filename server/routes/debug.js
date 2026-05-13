import { Router } from 'express'
import mongoose from 'mongoose'

const router = Router()

// GET /api/debug/collections
router.get('/collections', async (req, res) => {
  try {
    const db = mongoose.connection.db
    if (!db) {
      return res.status(500).json({ error: 'Database not connected' })
    }

    const collections = await db.listCollections().toArray()
    const stats = []

    for (const col of collections) {
      const count = await db.collection(col.name).countDocuments()
      stats.push({ name: col.name, count })
    }

    return res.json({ status: 'ok', collections: stats })
  } catch (err) {
    console.error('[GET /api/debug/collections] Error:', err)
    return res.status(500).json({ error: 'Failed to fetch collections', message: err.message, stack: err.stack })
  }
})

export default router
