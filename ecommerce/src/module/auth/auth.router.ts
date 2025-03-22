import { Router } from 'express'
import authController from './auth.controller'
import authMiddleware from '../../middleware/auth'

const router = Router()

router.post('/login', authController.login)
router.get('/me', authMiddleware, authController.me)

export default router