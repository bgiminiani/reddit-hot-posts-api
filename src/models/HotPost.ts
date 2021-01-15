import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('hotposts')
class HotPosts {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  postTitle: string

  @Column()
  authorName: string

  @Column()
  author_name: string

  @Column()
  creationDate: Date

  @Column()
  numberOfUps: number

  @Column()
  numberOfComments: number
}
export default HotPosts
