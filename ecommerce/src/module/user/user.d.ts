import { createUserSchema, updateUserSchema } from './user.schema'
import { z } from 'zod'

export interface User {
  email: string
  password: string
}

export type CreateUser = z.infer<createUserSchema>

export type UpdateUser = z.infer<updateUserSchema>