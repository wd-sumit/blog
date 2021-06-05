import BaseController from '../base.controller';
import UserService from '@services/user.service';

class UserController extends BaseController {
  findAll() {
    return this.catchAsync(async (req, res, next) => {
      const result = await this.service.findAll();

      this.response(res, result, 200);
    });
  }
}

export default new UserController(UserService);
