import { Service } from 'typedi';
import BaseRepo from './BaseRepo';
import Member from '../models/Member';

@Service()
class MemberRepo extends BaseRepo<Member> {
  constructor() {
    super(Member);
  }
}

export default MemberRepo;
