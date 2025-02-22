import { Router } from 'express'
import alunoController from './aluno.controller'
export const router = Router()

router.get('/alunos', alunoController.getAluno)

router.get('/alunos/:id', alunoController.getAlunoById)

router.post('/alunos', alunoController.createAluno)

router.put('/alunos/:id', alunoController.updateAluno)

router.delete('/alunos/:id', alunoController.deleteAluno)

export default router