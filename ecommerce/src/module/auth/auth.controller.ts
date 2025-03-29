import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { getByEmail } from '../user/user.repository'

const login = async (req: Request, res: Response) => {
  // TODO verificar se o e-mail é de um usuário válido
  const user = await getByEmail(req.body.email)
  // caso não, retornar uma mensagem para o cliente
  if (!user) {
    res.status(401).json({
      msg: 'Erro no usuário ou senha'
    })

    return
  }
  // caso sim, verificar se a senha corresponde
  const result = await bcrypt.compare(req.body.password, user.password)

  if (!result) {
    res.status(401).json({
      msg: 'Erro no usuário ou senha'
    })

    return
  }

  // TODO entregar o token válido para meu cliente
  const token = jwt.sign(user._id.toString(), process.env.JWT_SECRET || '')

  // Bearer Token
  res.json({
    token: `Bearer ${token}`
  })
}

const me = async (_: Request, res: Response) => {
  res.json({
    _id: res.locals.user._id,
    email: res.locals.user.email
  })
}

export default {
  login,
  me,
}