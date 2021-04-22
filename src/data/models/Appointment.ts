import BaseModel from './BaseModel';
import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import Member from './Member';

@Entity('appointments')
class Appointment extends BaseModel {
  @Column()
  public name!: string;

  @Column({ nullable: true })
  public allDay?: boolean;

  @Column()
  public startDate!: number;

  @Column()
  public endDate!: number;

  @Column({ nullable: true })
  public location?: string;

  @Column({ nullable: true })
  public description?: string;

  @ManyToMany(() => Member)
  @JoinTable()
  public members!: Member[];
}

export default Appointment;
