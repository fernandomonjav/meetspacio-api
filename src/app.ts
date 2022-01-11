import cors from 'cors'
import express from 'express'
import config from './config'
import router from './router'

const app = express()

app.use(cors({ origin: config.appUrl }))
app.use(express.json())

app.use(router)

export default app
