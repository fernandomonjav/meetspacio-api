import { Binary } from 'mongodb'

export interface MongoGroup {
  _id: Binary
  name: string
  username: string
  description?: string
  websiteUrl?: string
  createdAt: Date
  updatedAt: Date
}
