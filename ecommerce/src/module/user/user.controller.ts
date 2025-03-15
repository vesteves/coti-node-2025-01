import { Request, Response } from 'express'
import { getAll, getById, save, update, remove } from './user.repository'

const getUser = async (req: Request, res: Response) => {
  // TODO pentelhar o Vitor sobre query parameter
  const result = await getAll()

  res.json({
    data: result
  })
}

const getUserById = async (req: Request, res: Response) => {
  try {
    const result = await getById(req.params.id)

    res.json({
      data: result
    })
  } catch (error) {
    res.status(500).json({
      error
    })
  }
}

const createUser = async (req: Request, res: Response) => {
  const result = await save(req.body)

  res.status(201).json({
    data: result
  })
}

const updateUser = async (req: Request, res: Response) => {
  const result = await update(req.params.id, req.body)

  res.json({
    data: result
  })
}

const deleteUser = async (req: Request, res: Response) => {
  const result = await remove(req.params.id)

  res.json({
    data: result
  })
}

export default {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}