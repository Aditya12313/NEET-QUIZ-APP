import mongoose from 'mongoose'
import UserProgress from '../models/UserProgress.js'

/**
 * POST /api/submit
 * Body: { chapter: String, score: Number, total: Number, weakTags: [String] }
 * Updates or creates the progress document for Hitashi's chapter attempt.
 */
export async function submitQuiz(req, res) {
  try {
    if (mongoose.connection.readyState !== 1) {
      console.error(`[POST /api/submit] Database not connected. ReadyState: ${mongoose.connection.readyState}`);
      return res.status(500).json({ error: 'Database connection is not established' })
    }

    const { chapter, score, total, weakTags = [] } = req.body
    if (!chapter || score === undefined || total === undefined) {
      return res.status(400).json({ error: 'chapter, score and total are required' })
    }

    // Merge weakTags: keep unique union of existing + new
    const existing = await UserProgress.findOne({ user: 'Hitashi', chapter }).lean()
    const mergedWeakTags = existing
      ? [...new Set([...existing.weakTags, ...weakTags])]
      : weakTags

    const progress = await UserProgress.findOneAndUpdate(
      { user: 'Hitashi', chapter },
      {
        $inc: { attempted: total, correct: score },
        $set: { weakTags: mergedWeakTags, lastAccessed: new Date() },
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    )

    return res.json({ success: true, progress })
  } catch (err) {
    console.error('submitQuiz error:', err)
    return res.status(500).json({ error: 'Failed to save progress' })
  }
}
