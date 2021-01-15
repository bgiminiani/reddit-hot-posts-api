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
            name: 'title',
            type: 'varchar'
          },
          {
            name: 'author_fullname',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'author',
            type: 'varchar'
          },
          {
            name: 'created',
            type: 'timestamp with time zone'
          },
          {
            name: 'ups',
            type: 'integer'
          },
          {
            name: 'comments',
            type: 'integer'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('hotposts')
  }
}
