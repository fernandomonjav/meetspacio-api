export interface UserDTO {
  id: string
  name: string
  username: string
  bio?: string
  websiteUrl?: string
  createdAt: string
  updatedAt: string
}

export interface CreateUserDTO {
  name: string
  username: string
}

export interface UpdateUserDTO {
  name?: string
  username?: string
  bio?: string
  websiteUrl?: string
}
