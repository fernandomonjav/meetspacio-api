import { Db, MongoClient } from 'mongodb'
import config from '../config'

export class Mongo {
  readonly client: MongoClient
  readonly db: Db

  private static instance: Mongo

  private constructor() {
    this.client = new MongoClient(config.mongo.url)
    this.db = this.client.db(config.mongo.dbName)
  }

  static getInstance(): Mongo {
    if (!this.instance) {
      this.instance = new Mongo()
    }

    return this.instance
  }

  async connect(): Promise<void> {
    await this.client.connect()
  }
}
