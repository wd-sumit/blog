class Response {
  static send(res, data, statusCode = 200, message = undefined) {
    res.status(statusCode).json({
      status: 'success',
      isSuccess: true,
      message,
      data,
    });
  }

  static sendError(err, req, res, next) {
    err.status = err.status || 'error';
    err.statusCode = err.statusCode || 500;

    res.status(err.statusCode).json({
      status: err.status,
      isSuccess: false,
      message: err.message,
      err,
    });
  }
}

export default Response;
