import express from 'express'
import mongoose from 'mongoose'
import userRouter from './module/user/user.router'
import authRouter from './module/auth/auth.router'
const app = express()

app.use(express.json())

app.use('/users', userRouter)
app.use('/auth', authRouter)

app.listen(8000, async () => {
  try {
    // protocolo, usuario, senha, dominio, porta, banco)
    const result = await mongoose.connect('mongodb://username:password@localhost:27017/ecommerce?authSource=admin')
    console.log(result ? 'Database ON' : 'Database OFF')

    console.log('E-commerce ON')
  } catch (error: any) {
    console.error('Erro ao conectar com o banco de dados', error.message)
  }
})