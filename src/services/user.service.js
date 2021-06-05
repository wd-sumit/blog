import BaseService from './base.service';
import { User } from '@models';

class UserService extends BaseService {
  async findAll(options) {
    const result = await super.findAll(options);
    return result;
  }
}

export default new UserService(User);
