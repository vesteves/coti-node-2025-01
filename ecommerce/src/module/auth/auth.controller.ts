import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { getByEmail } from '../user/user.repository'

const login = async (req: Request, res: Response) => {
  // TODO verificar se o e-mail é de um usuário válido
  const user = await getByEmail(req.body.email)
  // caso não, retornar uma mensagem para o cliente
  if (!user) {
    res.status(404).json({
      msg: 'Usuário não encontrado'
    })

    return
  }
  // caso sim, verificar se a senha corresponde
  const result = await bcrypt.compare(req.body.password, user.password)

  if (!result) {
    res.status(401).json({
      msg: 'A senha está errada'
    })

    return
  }

  res.json({
    data: 'Usuário encontrado e pronto para se autenticar'
  })
}

export default {
  login,
}