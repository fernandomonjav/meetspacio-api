import app from './app'
import config from './config'

function main() {
  app.listen(config.port, () => {
    console.log(`Server on port ${config.port}`)
  })
}

main()
