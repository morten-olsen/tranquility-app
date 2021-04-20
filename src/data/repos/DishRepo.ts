import { Service } from 'typedi';
import BaseRepo from './BaseRepo';
import DishModel from '../models/Dish';

@Service()
class DishRepo extends BaseRepo<DishModel> {
  constructor() {
    super(DishModel);
  }

  public getAll = async () => {
    const members = await this.repo.find();
    return members;
  };
}

export default DishRepo;
