import { v4 as uuid } from 'uuid'

export interface GroupProps {
  id: string
  name: string
  username: string
  description?: string
  websiteUrl?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface CreateGroupProps {
  name: string
  username: string
  description?: string
}

export interface UpdateGroupProps {
  name?: string
  username?: string
  description?: string
  websiteUrl?: string
}

export class Group {
  private readonly id: string
  private name: string
  private username: string
  private description?: string
  private websiteUrl?: string
  private createdAt: Date
  private updatedAt: Date

  private constructor(props: GroupProps) {
    this.id = props.id
    this.name = props.name
    this.username = props.username
    this.description = props.description || undefined
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

  getDescription(): string | undefined {
    return this.description
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

  static create(props: CreateGroupProps) {
    return new Group({
      id: uuid(),
      name: props.name,
      username: props.username,
      description: props.description,
      createdAt: new Date(),
    })
  }

  update(props: UpdateGroupProps) {
    let key: keyof typeof props

    for (key in props) {
      const prop = props[key]

      if (prop) {
        this[key] = prop
        this.updatedAt = new Date()
      }
    }
  }

  static generate(props: GroupProps) {
    return new Group(props)
  }
}
