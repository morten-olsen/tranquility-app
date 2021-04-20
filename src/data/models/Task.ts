import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import BaseModel from './BaseModel';
import Chore from './Chore';
import Member from './Member';

@Entity('tasks')
class Task extends BaseModel {
  @Column()
  public name!: string;

  @Column()
  public completed: boolean = false;

  @ManyToOne(() => Member)
  @JoinColumn()
  public responsible?: Member;

  @ManyToOne(() => Chore)
  @JoinColumn()
  public chore?: Chore;
}

export default Task;
