import { Router } from 'express'
import ListHotUsersController from '../controllers/ListHotUsersController'

const hotusersRouter = Router()
const listHotUsersController = new ListHotUsersController()

hotusersRouter.get('/', listHotUsersController.get)

export default hotusersRouter
