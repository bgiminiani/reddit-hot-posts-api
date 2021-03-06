import { Request, Response } from 'express'
import { parseISO, isValid } from 'date-fns'
import ListHotPostsService from '../services/ListHotPostsService'

class ListHotPostsController {
  public async get (request: Request, response: Response): Promise<Response> {
    try {
      const { initialDate, finalDate, orderBy } = request.body

      const initialDateIsValid = isValid(new Date(initialDate))
      if(!initialDateIsValid) {
        return response.json({error: `Date invalid: initialDate`})
      }

      const finalDateIsValid = isValid(new Date(finalDate))
      if(!finalDateIsValid) {
        return response.json({error: `Date invalid: finalDate`})
      }

      if(!['ups','comments'].includes(orderBy)){
        return response.json({error: `Orderby invalid: must be 'ups' or 'comments'`})
      }
      
      const parsedInitialDate = parseISO(initialDate)
      const parsedfinalDate = parseISO(finalDate)

      const listHotPosts = new ListHotPostsService()
      const hotPosts = await listHotPosts.execute({
        initialDate: parsedInitialDate,
        finalDate: parsedfinalDate,
        orderBy
      })
      return response.json(hotPosts)
    } catch (error) {
      console.error(error) 
      return response.json(error)
    }
  }
}
export default ListHotPostsController
