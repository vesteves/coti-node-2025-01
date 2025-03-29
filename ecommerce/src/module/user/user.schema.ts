import { z } from 'zod'

export const createUserSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(8)
})

export const updateUserSchema = z.object({
  email: z.string().trim().email().optional(),
  password: z.string().min(8).optional()
})
