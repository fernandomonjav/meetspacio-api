import { Handler } from 'express'
import { UserMapper } from './user.mapper'
import { UserService } from './user.service'

export class UserController {
  constructor(private readonly userService: UserService) {}

  getUsers: Handler = async (req, res, next) => {
    try {
      const users = await this.userService.getUsers()

      res.json({ users: users.map((user) => UserMapper.toDTO(user)) })
    } catch (error) {
      next(error)
    }
  }

  createUser: Handler = async (req, res, next) => {
    try {
      const user = await this.userService.createUser(req.body)

      res.json({ users: UserMapper.toDTO(user) })
    } catch (error) {
      next(error)
    }
  }

  getUserProfile: Handler = async (req, res, next) => {
    try {
      const user = await this.userService.getUserProfile(req.params.username)

      res.json({ users: UserMapper.toDTO(user) })
    } catch (error) {
      next(error)
    }
  }

  getUser: Handler = async (req, res, next) => {
    try {
      const user = await this.userService.getUser(req.params.userId)

      res.json({ user: UserMapper.toDTO(user) })
    } catch (error) {
      next(error)
    }
  }

  updateUser: Handler = async (req, res, next) => {
    try {
      const user = await this.userService.updateUser(req.params.userId, req.body)

      res.json({ user: UserMapper.toDTO(user) })
    } catch (error) {
      next(error)
    }
  }

  deleteUser: Handler = async (req, res, next) => {
    try {
      const user = await this.userService.deleteUser(req.params.userId)

      res.json({ user: UserMapper.toDTO(user) })
    } catch (error) {
      next(error)
    }
  }
}
