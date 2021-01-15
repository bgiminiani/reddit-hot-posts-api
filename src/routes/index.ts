import { Router } from 'express'
import hotpostsRouter from './hotposts.routes'

const routes = Router()

routes.use('/hotposts', hotpostsRouter)

export default routes
