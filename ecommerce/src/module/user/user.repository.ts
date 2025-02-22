import type { User } from './user.d'
import { userModel } from './user.model'

export const getAll = async () => {
  return await userModel.find().exec()
}

export const getById = async (_id: string) => {
  return await userModel.findById(_id).exec()
}

export const save = async (user: User) => {
  return await userModel.create(user)
}

export const update = async (_id: string, user: User) => {
  return await userModel.updateOne({
    _id
  }, {
    ...user
  }).exec()
}

export const remove = async (_id: string) => {
  return await userModel.deleteOne({ _id }).exec()
}