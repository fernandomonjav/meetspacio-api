export interface UserDto {
  id: string
  name: string
  username: string
  bio?: string
  websiteUrl?: string
  createdAt: string
  updatedAt: string
}

export interface CreateUserDto {
  name: string
  username: string
}

export interface UpdateUserDto {
  name?: string
  username?: string
  bio?: string
  websiteUrl?: string
}
