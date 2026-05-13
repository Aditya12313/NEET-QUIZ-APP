import { Router } from 'express'

const router = Router()

// GET /api/quiz
// Stub endpoint to satisfy legacy routing requirements
router.get('/', (req, res) => {
  res.json({ message: 'Quiz endpoint active', status: 'ok' })
})

export default router
