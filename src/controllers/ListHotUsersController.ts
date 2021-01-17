import { Request, Response } from 'express'
import ListHotUsersService from '../services/ListHotUsersService'

class ListHotUsersController {
  public async get (request: Request, response: Response): Promise<Response> {
    try {
      const { orderBy } = request.body

      if(!['ups','comments'].includes(orderBy)){
        return response.json({error: `Orderby invalid: must be 'ups' or 'comments'`})
      }

      const listHotUsers = new ListHotUsersService()
      const hotPosts = await listHotUsers.execute(orderBy)
      return response.json(hotPosts)
      
    } catch (error) {
      console.error(error) 
      return response.json({error: 'Internal Server Error'})
    }
  }
}
export default ListHotUsersController
