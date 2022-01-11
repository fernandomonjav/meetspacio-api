import { NextFunction, Request, Response, Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to Meetspacio API' })
})

router.use((error: Error, request: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(error)
  }

  res
    .status(500)
    .json({ status: 500, message: 'Something went wrong', error: 'Internal Server Error' })
})

export default router
