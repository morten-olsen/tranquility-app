import { Service } from 'typedi';
import MemberRepo from './MemberRepo';
import DayRepo from './DayRepo';
import TaskRepo from './TaskRepo';
import DishRepo from './DishRepo';

@Service()
class Repos {
  constructor(
    public memberRepo: MemberRepo,
    public dayRepo: DayRepo,
    public taskRepo: TaskRepo,
    public dishRepo: DishRepo,
  ) {}
}

export default Repos;
