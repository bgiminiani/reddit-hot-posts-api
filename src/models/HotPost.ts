import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('hotposts')
class HotPosts {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  postTitle: string

  @Column()
  authorName: string

  @Column({ nullable: true })
  authorFullname: string

  @Column()
  creationDate: Date

  @Column()
  numberOfUps: number

  @Column()
  numberOfComments: number
}
export default HotPosts
