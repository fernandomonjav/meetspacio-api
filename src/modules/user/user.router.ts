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

userRouter.get('/:userId', userController.getUser)
userRouter.patch('/:userId', userController.updateUser)
userRouter.delete('/:userId', userController.deleteUser)

export default userRouter
