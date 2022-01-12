import { v4 as uuid } from 'uuid'

export interface UserProps {
  id: string
  name: string
  username: string
  bio?: string
  websiteUrl?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface CreateUserProps {
  name: string
  username: string
}

export interface UpdateUserProps {
  name?: string
  username?: string
  bio?: string
  websiteUrl?: string
}

export class User {
  private readonly id: string
  private name: string
  private username: string
  private bio?: string
  private websiteUrl?: string
  private createdAt: Date
  private updatedAt: Date

  constructor(props: UserProps) {
    this.id = props.id
    this.name = props.name
    this.username = props.username
    this.bio = props.bio || undefined
    this.websiteUrl = props.websiteUrl || undefined
    this.createdAt = props.createdAt || new Date()
    this.updatedAt = props.updatedAt || props.createdAt || new Date()
  }

  getId(): string {
    return this.id
  }

  getName(): string {
    return this.name
  }

  getUsername(): string {
    return this.username
  }

  getBio(): string | undefined {
    return this.bio
  }

  getWebsiteUrl(): string | undefined {
    return this.websiteUrl
  }

  getCreatedAt(): Date {
    return this.createdAt
  }

  getUpdatedAt(): Date {
    return this.updatedAt
  }

  static create(props: CreateUserProps) {
    return new User({
      id: uuid(),
      name: props.name,
      username: props.username,
      createdAt: new Date(),
    })
  }

  update(props: UpdateUserProps) {
    let key: keyof typeof props

    for (key in props) {
      const prop = props[key]

      if (prop) {
        this[key] = prop
        this.updatedAt = new Date()
      }
    }
  }

  static generate(props: UserProps) {
    return new User(props)
  }
}
