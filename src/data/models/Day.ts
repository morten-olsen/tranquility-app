import BaseModel from './BaseModel';
import { Entity, ManyToOne, ManyToMany, JoinTable, Column } from 'typeorm';
import Member from './Member';
import Dish from './Dish';

@Entity('days')
class Day extends BaseModel {
  @Column({
    nullable: true,
  })
  public notes?: string;

  @ManyToOne(() => Member, member => member?.id)
  @JoinTable()
  public dropoffKid?: Member

  @ManyToOne(() => Member, member => member?.id)
  @JoinTable()
  public pickupKid?: Member

  @ManyToMany(() => Dish, dish => dish?.id)
  @JoinTable()
  public mealPlan?: Dish[];
}

export default Day;

