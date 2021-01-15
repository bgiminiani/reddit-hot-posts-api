import { Request, Response } from 'express'
import { parseISO } from 'date-fns'
import ListHotPostsService from '../services/ListHotPostsService'

class ListHotPostsController {
  public async get (request: Request, response: Response): Promise<Response> {
    const { initialDate, finalDate, orderBy } = request.body

    const parsedInitialDate = parseISO(initialDate)
    const parsedfinalDate = parseISO(finalDate)

    const listHotPosts = new ListHotPostsService()
    const hotPosts = await listHotPosts.execute({
      initialDate: parsedInitialDate,
      finalDate: parsedfinalDate,
      orderBy
    })
    return response.json(hotPosts)
  }
}
export default ListHotPostsController
