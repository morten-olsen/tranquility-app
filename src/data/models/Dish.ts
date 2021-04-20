import BaseModel from './BaseModel';
import { Entity, Column } from 'typeorm';

@Entity('dishes')
class Dish extends BaseModel {
  @Column()
  public name!: string;

  @Column()
  public includesKid: boolean = false;
}

export default Dish;
