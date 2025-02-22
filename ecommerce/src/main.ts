import express from 'express'
import userRouter from './module/user/user.router'
const app = express()

app.use(express.json())

app.use('/users', userRouter)

app.listen(8000, () => {
  console.log('E-commerce ON')
})