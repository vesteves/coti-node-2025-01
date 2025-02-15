import { Router, Request, Response } from 'express'
import { Aluno } from './aluno.d'
export const router = Router()

let alunos: Aluno[] = []

router.get('/alunos', (req: Request, res: Response) => {
  res.json({
    msg: 'GET Alunos',
    data: alunos,
  })
})

router.get('/alunos/:id', (req: Request, res: Response) => {
  const aluno = alunos.find(aluno => aluno.id === Number(req.params.id))

  res.json({
    msg: 'GET Alunos',
    data: aluno,
  })
})

router.post('/alunos', (req: Request, res: Response) => {
  alunos.push(req.body)
  res.json({
    msg: 'POST Alunos'
  })
})

router.put('/alunos/:id', (req: Request, res: Response) => {
  alunos = alunos.map((aluno: any) => {
    if (Number(req.params.id) === aluno.id) {
      return {
        ...aluno,
        ...req.body,
      }
    }
    return aluno
  })

  res.json({
    msg: 'PUT Alunos'
  })
})

router.delete('/alunos/:id', (req: Request, res: Response) => {
  alunos = alunos.filter((aluno: any) => Number(req.params.id) !== aluno.id)
  res.json({
    msg: 'DELETE Alunos'
  })
})

export default router