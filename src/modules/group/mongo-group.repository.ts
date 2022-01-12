import { Collection } from 'mongodb'
import { Mongo } from '../../database/mongo'
import { uuidToBinary } from '../../utils/mongo-uuid'
import { Group } from './group.entity'
import { GroupRepository } from './group.repository'
import { MongoGroup } from './mongo-group.entity'
import { MongoGroupMapper } from './mongo-group.mapper'

export class MongoGroupRepository implements GroupRepository {
  private getCollection(): Collection<MongoGroup> {
    return Mongo.getInstance().db.collection('groups')
  }

  async getGroups(): Promise<Group[]> {
    const collection = this.getCollection()

    const groups = await collection.find().toArray()

    return groups.map((group) => MongoGroupMapper.toDomain(group))
  }

  async saveGroup(group: Group): Promise<void> {
    const collection = this.getCollection()

    const persistence = MongoGroupMapper.toPersistence(group)

    await collection.insertOne(persistence)
  }

  async getGroupById(id: string): Promise<Group | undefined> {
    const collection = this.getCollection()

    const group = await collection.findOne({ _id: uuidToBinary(id) })

    return group ? MongoGroupMapper.toDomain(group) : undefined
  }

  async getGroupByUsername(username: string): Promise<Group | undefined> {
    const collection = this.getCollection()

    const group = await collection.findOne({ username })

    return group ? MongoGroupMapper.toDomain(group) : undefined
  }

  async updateGroup(group: Group): Promise<void> {
    const collection = this.getCollection()

    const persistence = MongoGroupMapper.toPersistence(group)

    await collection.updateOne({ _id: uuidToBinary(group.getId()) }, { $set: persistence })
  }

  async deleteGroup(group: Group): Promise<void> {
    const collection = this.getCollection()

    await collection.deleteOne({ _id: uuidToBinary(group.getId()) })
  }
}
