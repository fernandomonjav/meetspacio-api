import { Group } from './group.entity'

export interface GroupRepository {
  getGroups(): Promise<Group[]>
  saveGroup(group: Group): Promise<void>
  getGroupById(id: string): Promise<Group | undefined>
  getGroupByUsername(username: string): Promise<Group | undefined>
  updateGroup(group: Group): Promise<void>
  deleteGroup(group: Group): Promise<void>
}
