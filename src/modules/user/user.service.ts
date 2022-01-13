import { CreateUserDto, UpdateUserDto } from './user.dto'
import { User } from './user.entity'
import { UserRepository } from './user.repository'

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUsers(): Promise<User[]> {
    const users = await this.userRepository.getUsers()

    return users
  }

  async createUser(data: CreateUserDto): Promise<User> {
    const userExists = await this.userRepository.getUserByUsername(data.username)

    if (userExists) {
      throw new Error('Username is already in use')
    }

    const user = User.create({ ...data })

    await this.userRepository.saveUser(user)

    return user
  }

  async getUserProfile(username: string): Promise<User> {
    const user = await this.userRepository.getUserByUsername(username)

    if (!user) {
      throw new Error('User does not exist')
    }

    return user
  }

  async getUser(userId: string): Promise<User> {
    const user = await this.userRepository.getUserById(userId)

    if (!user) {
      throw new Error('User does not exist')
    }

    return user
  }

  async updateUser(userId: string, data: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.getUserById(userId)

    if (!user) {
      throw new Error('User does not exist')
    }

    if (data.username) {
      if (data.username !== user.getUsername()) {
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

  async deleteUser(userId: string): Promise<User> {
    const user = await this.userRepository.getUserById(userId)

    if (!user) {
      throw new Error('User does not exist')
    }

    await this.userRepository.deleteUser(user)

    return user
  }
}
