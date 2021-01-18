import axios from 'axios'
import { parseISO, formatISO, fromUnixTime } from 'date-fns'
import { IHotPost } from '../protocols'

class GetHotPostsFromRedditAPIService {
  public async execute (): Promise<IHotPost[]> {
    const URI_HOTPOSTS = process.env.URI_API_REDDIT_HOTPOSTS
    try {
      const redditResponse = await axios.get(URI_HOTPOSTS)
      const responseData = redditResponse.data

      const { children } = responseData.data
      const hotPostsParam: IHotPost[] = []
      children.map(child => {
        const hotPost: IHotPost = {
          postTitle: child.data.title,
          authorName: child.data.author_fullname,
          authorFullName: child.data.author,
          creationDate: parseISO(formatISO(fromUnixTime(child.data.created))),
          numberOfUps: child.data.ups,
          numberOfComments: child.data.num_comments
        }
        hotPostsParam.push(hotPost)
      })
      return hotPostsParam
    } catch (error) {
      console.error(error)
    }
  }
}
export default GetHotPostsFromRedditAPIService

