import { Service } from 'typedi';
import TimeService from './TimeService';

@Service()
class Services {
  constructor(
    public timeService: TimeService,
  ) {}
}

export default Services;
