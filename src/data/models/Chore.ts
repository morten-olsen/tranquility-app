import BaseModel from './BaseModel';
import { Entity, Column, JoinColumn, OneToOne } from 'typeorm';
import Member from './Member';

@Entity('chores')
class Chore extends BaseModel {
  @Column()
  public name!: string;

  @Column()
  public regularity!: number;

  @OneToOne(() => Member)
  @JoinColumn()
  responsible: Member;
}

export default Chore;
