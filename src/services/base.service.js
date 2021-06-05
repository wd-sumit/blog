import APIError from '@helpers/apiError';

class BaseService {
  constructor(model) {
    this.model = model;
    this.Error = APIError;
  }

  async findAll(options = {}) {
    const { raw, ...option } = options;
    const rows = await this.model.findAll(option);

    return rows;
  }
}

export default BaseService;
