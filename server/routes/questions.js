import { Router } from 'express'
import { getQuestions } from '../controllers/questionController.js'

const router = Router()

// GET /api/questions?chapter=<chapterId>&limit=<10-20>
router.get('/', getQuestions)

export default router
