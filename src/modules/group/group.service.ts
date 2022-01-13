import { CreateGroupDto, UpdateGroupDto } from './group.dto'
import { Group } from './group.entity'
import { GroupRepository } from './group.repository'

export class GroupService {
  constructor(private readonly groupRepository: GroupRepository) {}

  async getGroups(): Promise<Group[]> {
    const groups = await this.groupRepository.getGroups()

    return groups
  }

  async createGroup(data: CreateGroupDto): Promise<Group> {
    const groupExists = await this.groupRepository.getGroupByUsername(data.username)

    if (groupExists) {
      throw new Error('Username is already in use')
    }

    const group = Group.create(data)

    await this.groupRepository.saveGroup(group)

    return group
  }

  async getGroupProfile(username: string): Promise<Group> {
    const group = await this.groupRepository.getGroupByUsername(username)

    if (!group) {
      throw new Error('Group does not exist')
    }

    return group
  }

  async getGroup(groupId: string): Promise<Group> {
    const group = await this.groupRepository.getGroupById(groupId)

    if (!group) {
      throw new Error('Group does not exist')
    }

    return group
  }

  async updateGroup(groupId: string, data: UpdateGroupDto): Promise<Group> {
    const group = await this.groupRepository.getGroupById(groupId)

    if (!group) {
      throw new Error('Group does not exist')
    }

    if (data.username) {
      if (data.username !== group.getUsername()) {
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

  async deleteGroup(groupId: string): Promise<Group> {
    const group = await this.groupRepository.getGroupById(groupId)

    if (!group) {
      throw new Error('Group does not exist')
    }

    await this.groupRepository.deleteGroup(group)

    return group
  }
}
