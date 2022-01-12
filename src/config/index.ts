interface Config {
  port: number | string
  appUrl: string
  mongo: {
    url: string
    dbName: string
  }
}

const config: Config = {
  port: process.env.PORT || 8080,
  appUrl: process.env.APP_URL as string,
  mongo: {
    url: process.env.MONGO_URL as string,
    dbName: process.env.MONGO_DB as string,
  },
}

export default config
