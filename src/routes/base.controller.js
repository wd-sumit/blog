import catchAsync from '@helpers/catchAsync';
import Response from '@helpers/response';

class BaseController {
  constructor(service) {
    this.service = service;
    this.catchAsync = catchAsync;
    this.response = Response.send;
  }
}

export default BaseController;
