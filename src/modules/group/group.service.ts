import { CreateGroupDTO, UpdateGroupDTO } from './group.dto'
import { Group } from './group.entity'
import { GroupRepository } from './group.repository'

export class GroupService {
  constructor(private readonly groupRepository: GroupRepository) {}

  async getGroups(): Promise<Group[]> {
    const groups = await this.groupRepository.getGroups()

    return groups
  }

  async createGroup(data: CreateGroupDTO): Promise<Group> {
    const groupExists = await this.groupRepository.getGroupByUsername(data.username)

    if (groupExists) {
      throw new Error('Username is already in use')
    }

    const group = Group.create(data)

    await this.groupRepository.saveGroup(group)

    return group
  }

  async getGroup(username: string): Promise<Group> {
    const group = await this.groupRepository.getGroupByUsername(username)

    if (!group) {
      throw new Error('Group does not exist')
    }

    return group
  }

  async updateGroup(username: string, data: UpdateGroupDTO): Promise<Group> {
    const group = await this.groupRepository.getGroupByUsername(username)

    if (!group) {
      throw new Error('Group does not exist')
    }

    if (data.username) {
      if (data.username !== username) {
        const groupExists = await this.groupRepository.getGroupByUsername(data.username)

        if (groupExists) {
          throw new Error('Username is already in use')
        }
      }
    }

    group.update(data)

    await this.groupRepository.updateGroup(group)

    return group
  }

  async deleteGroup(username: string): Promise<Group> {
    const group = await this.groupRepository.getGroupByUsername(username)

    if (!group) {
      throw new Error('Group does not exist')
    }

    await this.groupRepository.deleteGroup(group)

    return group
  }
}
