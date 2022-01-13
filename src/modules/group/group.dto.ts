export interface GroupDto {
  id: string
  name: string
  username: string
  description?: string
  websiteUrl?: string
  createdAt: string
  updatedAt: string
}

export interface CreateGroupDto {
  name: string
  username: string
  description?: string
}

export interface UpdateGroupDto {
  name?: string
  username?: string
  description?: string
  websiteUrl?: string
}
