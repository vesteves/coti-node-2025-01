import express from 'express'
import alunoRouter from './aluno/aluno.router'
const app = express()

// responsável em fazer com que o projeto entenda body requisition com json
app.use(express.json())
app.use(alunoRouter)

app.listen(8000, () => {
  console.log('Server on')
})