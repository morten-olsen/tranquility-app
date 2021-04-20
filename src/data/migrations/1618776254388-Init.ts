import {MigrationInterface, QueryRunner, Table} from "typeorm";

class Init1618776254388 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'items',
        columns: [{
          name: 'id',
          type: 'string',
        }],
      }),
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
  }
}

export default Init1618776254388;
