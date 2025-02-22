import { Request, Response } from 'express'
import { Aluno } from './aluno.d'

let alunos: Aluno[] = []

const getAluno = (req: Request, res: Response) => {
  res.json({
    msg: 'GET Alunos',
    data: alunos,
  })
}

const getAlunoById = (req: Request, res: Response) => {
  const aluno = alunos.find(aluno => aluno.id === Number(req.params.id))

  res.json({
    msg: 'GET Alunos',
    data: aluno,
  })
}

const createAluno = (req: Request, res: Response) => {
  alunos.push(req.body)
  res.json({
    msg: 'POST Alunos'
  })
}

const updateAluno = (req: Request, res: Response) => {
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
}

export const deleteAluno = (req: Request, res: Response) => {
  alunos = alunos.filter((aluno: any) => Number(req.params.id) !== aluno.id)
  res.json({
    msg: 'DELETE Alunos'
  })
}

export default {
  getAluno,
  getAlunoById,
  createAluno,
  updateAluno,
  deleteAluno,
}