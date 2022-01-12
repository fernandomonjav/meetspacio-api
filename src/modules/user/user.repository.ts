import { User } from './user.entity'

export interface UserRepository {
  getUsers(): Promise<User[]>
  saveUser(user: User): Promise<void>
  getUserById(id: string): Promise<User | undefined>
  getUserByUsername(username: string): Promise<User | undefined>
  updateUser(user: User): Promise<void>
  deleteUser(user: User): Promise<void>
}
