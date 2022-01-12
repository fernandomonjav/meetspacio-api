import { Binary } from 'mongodb'

export interface MongoUser {
  _id: Binary
  name: string
  username: string
  bio?: string
  websiteUrl?: string
  createdAt: Date
  updatedAt: Date
}
