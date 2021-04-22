import { Column, PrimaryColumn } from 'typeorm';

abstract class BaseModel {
  @PrimaryColumn()
  public id!: string;

  @Column()
  public created!: number;

  @Column()
  public updated!: number;

  @Column({ nullable: true })
  public deleted?: number;

  public isNew: boolean = false;
}

export default BaseModel;
