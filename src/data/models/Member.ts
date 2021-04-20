import BaseModel from './BaseModel';
import { Entity, Column } from 'typeorm';

@Entity('members')
class Member extends BaseModel {
  @Column()
  public name!: string;
}

export default Member;
