import { TransactionRepository, Repository, Transaction, getRepository } from 'typeorm'
import { IHotPost } from '../protocols'
import HotPost from '../models/HotPost'

class CreateHotPostsService {
  private readonly hotPostsRepository: Repository<HotPost> = getRepository(HotPost)

  async execute (hotPosts: IHotPost[]): Promise<IHotPost[]> {
    await this.executeTransaction(hotPosts, this.hotPostsRepository)
    return hotPosts
  }

  @Transaction()
  private async executeTransaction (hotPosts: IHotPost[],
    @TransactionRepository(HotPost)
    hotPostsRepository: Repository<HotPost>): Promise<IHotPost[]> {

    await hotPostsRepository
      .createQueryBuilder()
      .delete()
      .from(HotPost)
      .execute()

    await hotPostsRepository
      .createQueryBuilder()
      .insert()
      .into(HotPost)
      .values(hotPosts)
      .execute()

    return hotPosts
  }
}

export default CreateHotPostsService
