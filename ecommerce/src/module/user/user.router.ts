import { Router } from 'express'
import userController from './user.controller'

const router = Router()

router.get('/', userController.getUser)

router.get('/:id', userController.getUserById)

router.post('/', userController.createUser)

router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)

export default router