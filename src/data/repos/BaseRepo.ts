import { Service, Inject } from 'typedi';
import { Connection, FindManyOptions, Repository} from 'typeorm';
import BaseModel from '../models/BaseModel';

interface Options {
  relations?: string[]
}

@Service()
abstract class BaseRepo<T extends BaseModel> {
  @Inject()
  private _connection!: Connection;
  private _repo?: Repository<T>;
  private _entity: new () => T;
  private _options: Options;

  constructor(entity: new () => T, options: Options = {}) {
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
    if (entity.id) {
      await this.repo.save({
        ...entity,
      });
    } else {
      const id = new Date().getTime().toString();
      await this.repo.insert({
        ...entity,
        id,
      });
    }
  };
}

export default BaseRepo;
