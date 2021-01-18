import { EntityRepository, Repository, Between } from 'typeorm'
import { IListByDateIntervalParams } from '../protocols'
import HotPost from '../models/HotPost'

@EntityRepository(HotPost)
class HotPostsRepository extends Repository<HotPost> {
  public async listByDateInterval ({
    initialDate,
    finalDate,
    orderBy
  }: IListByDateIntervalParams): Promise<HotPost[]> {
    const findHotPosts = await this.find({
      where: {
        creationDate: Between(initialDate, finalDate)
      }
    })
    if (orderBy === 'ups') {
      return findHotPosts.sort((post0, post1) => (post0.numberOfUps < post1.numberOfUps) ? 1 : -1)
    } else {
      return findHotPosts.sort((post0, post1) => (post0.numberOfComments < post1.numberOfComments) ? 1 : -1)
    }
  }

  public async listUsersBy (orderBy: string): Promise<HotPost[]> {
    const findHotPosts = await this.find({
      select: [
        'authorName',
        'authorFullName',
        'creationDate',
        'numberOfUps',
        'numberOfComments'
      ]
    })
    if (orderBy === 'ups') {
      return findHotPosts.sort((post0, post1) => (post0.numberOfUps < post1.numberOfUps) ? 1 : -1)
    } else {
      return findHotPosts.sort((post0, post1) => (post0.numberOfComments < post1.numberOfComments) ? 1 : -1)
    }
  }
}
export default HotPostsRepository
