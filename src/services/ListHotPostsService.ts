import { getCustomRepository } from 'typeorm'
import { IHotPost } from '../protocols'
import HotPostsRepository from '../repositories/HotPostsRepository'

interface IRequest {
  initialDate: Date
  finalDate: Date
  orderBy: string
}

class ListHotPostsService {
  public async execute ({ initialDate, finalDate, orderBy }: IRequest): Promise<IHotPost[]> {
    const hotPostsRepository = getCustomRepository(HotPostsRepository)
    const hotPosts = await hotPostsRepository.listByDateInterval(initialDate, finalDate)
    return this.sortBy(hotPosts, orderBy)
  }

  private sortBy (hotPosts: IHotPost[], orderBy: string): IHotPost[] {
    if (orderBy === 'ups') {
      return hotPosts.sort((post0, post1) => (post0.numberOfUps < post1.numberOfUps) ? 1 : -1)
    } else {
      return hotPosts.sort((post0, post1) => (post0.numberOfComments < post1.numberOfComments) ? 1 : -1)
    }
  }
}
export default ListHotPostsService
