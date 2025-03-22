import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { getById } from '../module/user/user.repository'

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    res.status(403).json({
      error: 'Token não encontrado'
    })
    return
  }

  try {
    const userId = jwt.verify(req.headers.authorization.replace('Bearer ', ''), process.env.JWT_SECRET || '')

    const user = await getById(userId as string)

    if (!user) {
      console.error('Usuário não encontrado')
      res.status(401).json({
        error: 'Usuário não tem permissão'
      })
      return
    }

    res.locals.user = user
    next()
  } catch (error: any) {
    res.status(401).json({
      error: 'Usuário não tem permissão'
    })
  }
}

export default authMiddleware