import { Service } from 'typedi';
import BaseRepo from './BaseRepo';
import Day from '../models/Day';

@Service()
class DayRepo extends BaseRepo<Day> {
  constructor() {
    super(Day, {
      relations: [
        'pickupKid',
        'dropoffKid',
        'mealPlan',
      ],
      setupNewEntity: (item, id) => {
        item.id = id;
        return item;
      },
    });
  }
}

export default DayRepo;
