import { Request, Response } from 'express'
import CreateHotPostsService from '../services/CreateHotPostsService'
import GetHotPostsFromRedditAPIService from '../services/GetHotPostsFromRedditAPIService'

class CreateHotPostsController {
  public async post (request: Request, response: Response): Promise<void> {
    try {
      const getHotPostsFromRedditAPI = new GetHotPostsFromRedditAPIService()
      const hotPostsParams = await getHotPostsFromRedditAPI.execute()

      const createHotPosts = new CreateHotPostsService()
      const hotPosts = await createHotPosts.execute(hotPostsParams)

      response.json(hotPosts)
    } catch (error) {
      console.error(error)
    }
  }
}
export default CreateHotPostsController
