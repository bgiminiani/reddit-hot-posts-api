import { Router } from 'express'
import hotpostsRouter from './hotposts.routes'
import hotusersRouter from './hotusers.routes'

const routes = Router()

routes.use('/hotposts', hotpostsRouter)
routes.use('/hotusers', hotusersRouter)

export default routes
