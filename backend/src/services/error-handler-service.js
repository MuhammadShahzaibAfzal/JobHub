class ErrorHandlerService extends Error {
  constructor(status, msg) {
    super();
    this.status = status;
    this.message = msg;
  }

  static notFoundError(msg = "Not Found !") {
    return new ErrorHandlerService(404, msg);
  }

  static badRequest(msg = "Bad Request !") {
    return new ErrorHandlerService(400, msg);
  }

  static unAuthorized(msg = "UnAuthorized") {
    return new ErrorHandlerService(401, msg);
  }
}

export default ErrorHandlerService;
