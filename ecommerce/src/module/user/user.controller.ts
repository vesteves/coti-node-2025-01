import { Request, Response } from 'express'
import type { User } from './user.d'

const users: User[] = []

const getUser = (req: Request, res: Response) => {
  // TODO pentelhar o Vitor sobre query parameter
  res.json({
    data: users
  })
}

const getUserById = (req: Request, res: Response) => {
  const user = users.find(user => user.id === parseInt(req.params.id, 10))

  res.json({
    data: user
  })
}

const createUser = (req: Request, res: Response) => {
  users.push(req.body)

  res.json({
    data: users
  })
}

const updateUser = (req: Request, res: Response) => {
  for (let index = 0; index < users.length; index++) {
    const user = users[index]
    if (user.id === parseInt(req.params.id, 10)) {
      users[index] = {
        ...users[index],
        ...req.body
      }
    }
  }

  res.json({
    data: users
  })
}

const deleteUser = (req: Request, res: Response) => {
  for (let index = 0; index < users.length; index++) {
    const user = users[index];
    if (user.id === Number(req.params.id)) {
      users.splice(index, 1)
    }
  }
  res.json({
    data: users
  })
}

export default {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}