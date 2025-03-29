import type { CreateUser, UpdateUser } from './user.d'
import { userModel } from './user.model'
import bcrypt from 'bcrypt'

export const getAll = async () => {
  return await userModel.find().lean().exec()
}

export const getById = async (_id: string) => {
  return await userModel.findById(_id).lean().exec()
}

export const getByEmail = async (email: string) => {
  return await userModel.findOne({ email }).lean().exec()
}

export const save = async (user: CreateUser) => {
  user.password = await bcrypt.hash(user.password, await bcrypt.genSalt())

  return await userModel.create(user)
}

export const update = async (_id: string, user: UpdateUser) => {
  if (user.password) {
    user.password = await bcrypt.hash(user.password, await bcrypt.genSalt())
  }

  return await userModel.updateOne({
    _id
  }, {
    ...user
  }).lean().exec()
}

export const remove = async (_id: string) => {
  return await userModel.deleteOne({ _id }).lean().exec()
}