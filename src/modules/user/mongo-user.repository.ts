import { Collection } from 'mongodb'
import { Mongo } from '../../database/mongo'
import { uuidToBinary } from '../../utils/mongo-uuid'
import { MongoUser } from './mongo-user.entity'
import { MongoUserMapper } from './mongo-user.mapper'
import { User } from './user.entity'
import { UserRepository } from './user.repository'

export class MongoUserRepository implements UserRepository {
  private getCollection(): Collection<MongoUser> {
    return Mongo.getInstance().db.collection('users')
  }

  async getUsers(): Promise<User[]> {
    const collection = this.getCollection()

    const users = await collection.find().toArray()

    return users.map((user) => MongoUserMapper.toDomain(user))
  }

  async saveUser(user: User): Promise<void> {
    const collection = this.getCollection()

    const persistence = MongoUserMapper.toPersistence(user)

    await collection.insertOne(persistence)
  }

  async getUserById(id: string): Promise<User | undefined> {
    const collection = this.getCollection()

    const user = await collection.findOne({ _id: uuidToBinary(id) })

    return user ? MongoUserMapper.toDomain(user) : undefined
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const collection = this.getCollection()

    const user = await collection.findOne({ username })

    return user ? MongoUserMapper.toDomain(user) : undefined
  }

  async updateUser(user: User): Promise<void> {
    const collection = this.getCollection()

    const persistence = MongoUserMapper.toPersistence(user)

    await collection.updateOne({ _id: uuidToBinary(user.getId()) }, { $set: persistence })
  }

  async deleteUser(user: User): Promise<void> {
    const collection = this.getCollection()

    await collection.deleteOne({ _id: uuidToBinary(user.getId()) })
  }
}
