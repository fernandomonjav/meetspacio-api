import { CreateUserDTO, UpdateUserDTO } from './user.dto'
import { User } from './user.entity'
import { UserRepository } from './user.repository'

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUsers(): Promise<User[]> {
    const users = await this.userRepository.getUsers()

    return users
  }

  async createUser(data: CreateUserDTO): Promise<User> {
    const userExists = await this.userRepository.getUserByUsername(data.username)

    if (userExists) {
      throw new Error('Username is already in use')
    }

    const user = User.create({ ...data })

    await this.userRepository.saveUser(user)

    return user
  }

  async getUser(username: string): Promise<User> {
    const user = await this.userRepository.getUserByUsername(username)

    if (!user) {
      throw new Error('User does not exist')
    }

    return user
  }

  async updateUser(username: string, data: UpdateUserDTO): Promise<User> {
    const user = await this.userRepository.getUserByUsername(username)

    if (!user) {
      throw new Error('User does not exist')
    }

    if (data.username) {
      if (data.username !== username) {
        const userExists = await this.userRepository.getUserByUsername(data.username)

        if (userExists) {
          throw new Error('Username is already in use')
        }
      }
    }

    user.update(data)

    await this.userRepository.updateUser(user)

    return user
  }

  async deleteUser(username: string): Promise<User> {
    const user = await this.userRepository.getUserByUsername(username)

    if (!user) {
      throw new Error('User does not exist')
    }

    await this.userRepository.deleteUser(user)

    return user
  }
}
