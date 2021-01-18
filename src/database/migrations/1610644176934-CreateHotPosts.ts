import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateHotPosts1610644176934 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'hotposts',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'post_title',
            type: 'varchar'
          },
          {
            name: 'author_fullname',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'author_name',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'created',
            type: 'timestamp with time zone'
          },
          {
            name: 'ups',
            type: 'integer',
            isNullable: true
          },
          {
            name: 'comments',
            type: 'integer',
            isNullable: true
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('hotposts')
  }
}
