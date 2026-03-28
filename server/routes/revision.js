import { Router } from 'express'
import { generateRevision } from '../controllers/revisionController.js'

const router = Router()

// POST /api/revision
router.post('/', generateRevision)

export default router
