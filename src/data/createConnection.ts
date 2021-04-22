import { createConnection as createSQLConnection } from 'typeorm';
//import init from './migrations/1618776254388-Init';
import Appointment from './models/Appointment';
import Member from './models/Member';
import Chore from './models/Chore';
import Task from './models/Task';
import Day from './models/Day';
import Dish from './models/Dish';

const createConnection = async () => {
  const connection = await createSQLConnection({
    type: 'expo',
    database: 'data4.db',
    driver: require('expo-sqlite'),
    entities: [
      Member,
      Appointment,
      Chore,
      Task,
      Day,
      Dish,
    ],
    //migrations: [init],
    //migrationsRun: true,
    //synchronize: false,
    synchronize: true,
  });

  return connection;
};

export default createConnection;
