import { Router } from 'express'
import { submitQuiz } from '../controllers/submitController.js'

const router = Router()

// POST /api/submit
router.post('/', submitQuiz)

export default router
