import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import userRouter from './module/user/user.router'
import authRouter from './module/auth/auth.router'
// import { authMiddleware } from './middleware/auth'
const app = express()

app.use(express.json())

// app.use('/users', authMiddleware, userRouter)
app.use('/users', userRouter)
app.use('/auth', authRouter)

app.listen(8000, async () => {
  try {
    // protocolo, usuario, senha, dominio, porta, banco)
    const databaseString = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}?authSource=admin`
    const result = await mongoose.connect(databaseString)
    console.log(result ? 'Database ON' : 'Database OFF')

    console.log('E-commerce ON')
  } catch (error: any) {
    console.error('Erro ao conectar com o banco de dados', error.message)
  }
})