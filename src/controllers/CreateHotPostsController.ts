import axios from 'axios'
import { Request, Response } from 'express'
import { parseISO, formatISO, fromUnixTime } from 'date-fns'
import CreateHotPostsService from '../services/CreateHotPostsService'
import { IHotPost } from '../protocols'

class CreateHotPostsController {
  public async post (request: Request, response: Response): Promise<void> {
    const URI_HOTPOSTS = 'https://api.reddit.com/r/artificial/hot'
    try {
      const redditResponse = await axios.get(URI_HOTPOSTS)
      const responseData = redditResponse.data

      const { children } = responseData.data
      const hotPostsParam: IHotPost[] = []
      children.map(child => {
        const hotPost: IHotPost = {
          postTitle: child.data.title,
          authorName: child.data.author_fullname,
          author_name: child.data.author,
          creationDate: parseISO(formatISO(fromUnixTime(child.data.created))),
          numberOfUps: child.data.ups,
          numberOfComments: child.data.num_comments
        }
        hotPostsParam.push(hotPost)
      })

      const createHotPosts = new CreateHotPostsService()
      const hotPosts = await createHotPosts.execute(hotPostsParam)

      response.json(hotPosts)
    } catch (error) {
      console.error(error)
    }
  }
}
export default CreateHotPostsController
