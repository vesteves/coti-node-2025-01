import { Router } from 'express'
import userController from './user.controller'
import { authMiddleware } from '../../middleware/auth'

const router = Router()

router.get('/', authMiddleware, userController.getUser)

router.get('/:id', authMiddleware, userController.getUserById)

router.post('/', userController.createUser)

router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)

export default router