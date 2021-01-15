import { Request, Response } from 'express'
import ListHotUsersService from '../services/ListHotUsersService'

class ListHotUsersController {
  public async get (request: Request, response: Response): Promise<Response> {
    const { orderBy } = request.body

    const listHotUsers = new ListHotUsersService()
    const hotPosts = await listHotUsers.execute(orderBy)
    return response.json(hotPosts)
  }
}
export default ListHotUsersController
