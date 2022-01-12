export interface GroupDTO {
  id: string
  name: string
  username: string
  description?: string
  websiteUrl?: string
  createdAt: string
  updatedAt: string
}

export interface CreateGroupDTO {
  name: string
  username: string
  description?: string
}

export interface UpdateGroupDTO {
  name?: string
  username?: string
  description?: string
  websiteUrl?: string
}
