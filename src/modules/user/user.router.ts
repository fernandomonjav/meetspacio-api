import { Router } from 'express'
import { MongoUserRepository } from './mongo-user.repository'
import { UserController } from './user.controller'
import { UserService } from './user.service'

const userRouter = Router()

const userRepository = new MongoUserRepository()
const userService = new UserService(userRepository)
const userController = new UserController(userService)

userRouter.get('/', userController.getUsers)
userRouter.post('/', userController.createUser)

userRouter.get('/:username', userController.getUser)
userRouter.patch('/:username', userController.updateUser)
userRouter.delete('/:username', userController.deleteUser)

export default userRouter
