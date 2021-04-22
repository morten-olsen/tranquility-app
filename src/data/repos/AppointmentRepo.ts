import { Service } from 'typedi';
import Repo from './BaseRepo';
import AppointmentModel from '../models/Appointment';

@Service()
class AppointmentRepo extends Repo<AppointmentModel> {
  constructor() {
    super(AppointmentModel, {
    });
  }
}

export default AppointmentRepo;
