import { Router } from 'express'
import ListHotPostsController from '../controllers/ListHotPostsController'
import CreateHotPostsController from '../controllers/CreateHotPostsController'

const hotpostsRouter = Router()
const listHotPostsController = new ListHotPostsController()
const createHotPostsController = new CreateHotPostsController()

hotpostsRouter.get('/', listHotPostsController.get)

hotpostsRouter.post('/', createHotPostsController.post)

export default hotpostsRouter
