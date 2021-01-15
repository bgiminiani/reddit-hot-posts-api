import { EntityRepository, Repository, Between } from 'typeorm'
import { IHotPost } from '../protocols'
import HotPost from '../models/HotPost'

@EntityRepository(HotPost)
class HotPostsRepository extends Repository<HotPost> {
  public async listByDateInterval (
    initialDate: Date,
    finalDate: Date
  ): Promise<IHotPost[]> {
    const findHotPosts = await this.find({
      where: {
        creationDate: Between(initialDate, finalDate)
      }
    })
    return findHotPosts
  }
}
export default HotPostsRepository
