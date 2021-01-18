import 'reflect-metadata'
import 'dotenv/config'
import 'express-async-error'

import express, {Request, Response, NextFunction} from 'express'
import routes from './routes'
import AppError from '../src/shared/errors/AppError'
import managerCron from './shared/infra/cron/ManagerCron'

import './database'

const app = express()
app.use(express.json())
app.use(routes)

managerCron.run()

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server Error',
  });
});

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
