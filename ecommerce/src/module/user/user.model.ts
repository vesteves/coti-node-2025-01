import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
}, {
  timestamps: true
})

export const userModel = mongoose.model('users', userSchema)