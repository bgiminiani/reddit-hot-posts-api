import express from 'express'
import axios from 'axios'
import IHotPost from './IHotPost'

import './database'

const app = express()

const URI_HOTPOSTS = 'https://api.reddit.com/r/artificial/hot'
app.post('/', async (request, response) => {
  const hotPosts: IHotPost[] = []
  try {
    const redditResponse = await axios.get(URI_HOTPOSTS)
    const responseData = redditResponse.data
    const { children } = responseData.data
    children.map(child => {
      const hotPost: IHotPost = {
        postTitle: child.data.title,
        authorName: child.data.author_fullname,
        author_name: child.data.author,
        creationDate: child.data.created,
        numberOfUps: child.data.ups,
        numberOfComments: child.data.num_comments
      }
      hotPosts.push(hotPost)
    })
    response.json(hotPosts)
  } catch (error) {
    console.error(error)
  }
})

app.listen('3334', () => console.log('Server is running on port 3334'))
