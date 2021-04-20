import { Service } from 'typedi';
import Repo from './BaseRepo';
import TaskModel from '../models/Task';

@Service()
class TaskRepo extends Repo<TaskModel> {
  constructor() {
    super(TaskModel, {
      relations: [
        'responsible',
      ],
    });
  }
}

export default TaskRepo;
