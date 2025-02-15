import express from 'express'
import alunoController from './aluno/aluno.controller'
const app = express()

// responsável em fazer com que o projeto entenda body requisition com json
app.use(express.json())
app.use(alunoController)

app.listen(8000, () => {
  console.log('Server on')
})