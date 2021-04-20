import { PrimaryColumn } from 'typeorm';

abstract class BaseModel {
  @PrimaryColumn()
  public id!: string;

  public isNew: boolean = false;
}

export default BaseModel;
