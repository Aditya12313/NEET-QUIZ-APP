import { Router } from 'express'

const router = Router()

// GET /api/chapters
// Stub endpoint to satisfy legacy routing requirements
router.get('/', (req, res) => {
  res.json({ message: 'Chapters endpoint active', status: 'ok', chapters: [] })
})

export default router
