import { isBefore } from 'date-fns'
import { getCustomRepository } from 'typeorm'
import HotPost from '../models/HotPost'
import HotPostsRepository from '../repositories/HotPostsRepository'
import AppError from '../shared/errors/AppError'

interface IRequest {
  initialDate: Date
  finalDate: Date
  orderBy: string
}

class ListHotPostsService {
  public async execute ({ initialDate, finalDate, orderBy }: IRequest): Promise<HotPost[]> {
    const hotPostsRepository = getCustomRepository(HotPostsRepository)

    if(isBefore(finalDate, initialDate)){
      throw new AppError('The initialDate cannot be greater than the finalDate')
    }

    const hotPosts = await hotPostsRepository.listByDateInterval({
      initialDate,
      finalDate,
      orderBy
    })
    if (orderBy === 'ups') {
      return hotPosts.sort((post0, post1) => (post0.numberOfUps < post1.numberOfUps) ? 1 : -1)
    } else {
      return hotPosts.sort((post0, post1) => (post0.numberOfComments < post1.numberOfComments) ? 1 : -1)
    }
  }
}
export default ListHotPostsService
