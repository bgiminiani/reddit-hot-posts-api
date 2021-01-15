import { getCustomRepository } from 'typeorm'
import HotPost from '../models/HotPost'
import HotPostsRepository from '../repositories/HotPostsRepository'

interface IRequest {
  orderBy: string
}

class ListHotUsersService {
  public async execute (orderBy: string): Promise<HotPost[]> {
    const hotPostsRepository = getCustomRepository(HotPostsRepository)
    const hotUsers = await hotPostsRepository.listUsersBy(orderBy)
    return hotUsers
  }
}
export default ListHotUsersService
