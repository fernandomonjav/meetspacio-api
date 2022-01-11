interface Config {
  port: number | string
  appUrl: string
}

const config: Config = {
  port: process.env.PORT || 8080,
  appUrl: process.env.APP_URL as string,
}

export default config
