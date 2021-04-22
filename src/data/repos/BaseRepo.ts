import { Service, Inject } from 'typedi';
import { Connection, FindManyOptions, Repository} from 'typeorm';
import BaseModel from '../models/BaseModel';

interface Options<T extends BaseModel> {
  relations?: string[];
  setupNewEntity?: (entity: T, id: string) => T;
}

@Service()
abstract class BaseRepo<T extends BaseModel> {
  @Inject()
  private _connection!: Connection;
  private _repo?: Repository<T>;
  private _entity: new () => T;
  private _options: Options<T>;

  constructor(entity: new () => T, options: Options<T> = {}) {
    this._entity = entity;
    this._options = options;
  }

  protected get connection() {
    return this._connection;
  }

  protected get repo() {
    if (!this._repo) {
      this._repo = this._connection.getRepository(this._entity);
    }
    return this._repo;
  }

  public get = async (id: string): Promise<T> => {
    let item = await this.repo.findOne(id, {
      relations: this._options.relations,
    });
    if (!item) {
      item = new this._entity();
      item.id = new Date().getTime().toString();
      if (this._options.setupNewEntity) {
        item = this._options.setupNewEntity(item, id);
      }
      item.isNew = true;
    }
    return item;
  };

  public getAll = async () => {
    const options: FindManyOptions = {};
    if (this._options.relations) {
      options.relations = this._options.relations;
    }
    const items = await this.repo.find(options);
    return items;
  }

  public remove = async (id: string) => {
    const current = await this.get(id);
    await this.repo.remove(current);
  };

  public set = async (entity: Partial<T>) => {
    console.log('e', entity);
    if (entity.isNew) {
      entity.created = new Date().getUTCDate();
    }
    entity.updated = new Date().getUTCDate();
    await this.repo.save(entity);
    /*if (!entity.isNew) {
      await this.repo.save({
        ...entity,
        updated: new Date().getTime(),
      });
    } else {
      await this.repo.insert([{
        ...entity,
        created: new Date().getTime(),
        updated: new Date().getTime(),
      }]);
    }*/
  };
}

export default BaseRepo;
