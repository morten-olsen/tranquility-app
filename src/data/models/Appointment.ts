import BaseModel from './BaseModel';
import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import Member from './Member';

@Entity('appointments')
class Appointment extends BaseModel {
  @Column()
  public name!: string;

  @Column()
  public allDay!: boolean;

  @Column()
  public startTime!: number;

  @Column()
  public endTime!: number;

  @Column()
  public location!: string;

  @Column()
  public description?: string;

  @ManyToMany(() => Member)
  @JoinTable()
  public members!: Member[];
}

export default Appointment;
