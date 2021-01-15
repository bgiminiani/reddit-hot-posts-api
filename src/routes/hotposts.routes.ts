import { Router } from 'express'
import ListHotPostsController from '../controllers/ListHotPostsController'

const hotpostsRouter = Router()
const listHotPostsController = new ListHotPostsController()

hotpostsRouter.get('/', listHotPostsController.get)

export default hotpostsRouter
