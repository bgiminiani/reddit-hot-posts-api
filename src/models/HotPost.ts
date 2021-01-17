import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('hotposts')
class HotPosts {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  postTitle: string

  @Column({ 
    name: 'post_title',
    nullable: true
   })
  authorName: string

  @Column({ 
    name: 'author_fullname',
    nullable: true 
  })
  authorFullname: string

  @Column({name: 'created'})
  creationDate: Date

  @Column({ 
    name: 'ups',
    nullable: true 
  })
  numberOfUps: number

  @Column({ 
    name: 'comments',
    nullable: true 
  })
  numberOfComments: number
}
export default HotPosts
