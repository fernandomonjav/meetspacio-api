import app from './app'
import config from './config'
import { Mongo } from './database/mongo'

async function main() {
  const mongo = Mongo.getInstance()

  await mongo.connect()

  app.listen(config.port, () => {
    console.log(`Server on port ${config.port}`)
  })
}

main()
