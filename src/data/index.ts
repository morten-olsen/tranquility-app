import * as SQLite from 'expo-sqlite';

interface DataConfig {
  server?: {
    url: string;
  }
}

class Data {
  constructor() {
    this._db = SQLite.openDatabase('main', 'init');
  }

  private _db: SQLite.Database;

  public addEvent = (event: any) => new Promise((resolve, reject) => {
    this._db.transaction((trx) => {
      trx.executeSql('');
      resolve();
    }, reject);
  });

  public sync = async () => {
  };
}

export {
  DataConfig,
}

export default Data;
