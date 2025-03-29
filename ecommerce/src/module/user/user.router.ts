import { Router } from 'express'
import userController from './user.controller'
import { authMiddleware } from '../../middleware/auth'
import { validateSchemaMiddleware } from '../../middleware/validateSchema'
import { createUserSchema, updateUserSchema } from './user.schema'

const router = Router()

router.get('/', userController.getUser)

router.get('/:id', userController.getUserById)

router.post('/', authMiddleware, validateSchemaMiddleware(createUserSchema), userController.createUser)

router.put('/:id', authMiddleware, validateSchemaMiddleware(updateUserSchema), userController.updateUser)

router.delete('/:id', authMiddleware, userController.deleteUser)

export default router