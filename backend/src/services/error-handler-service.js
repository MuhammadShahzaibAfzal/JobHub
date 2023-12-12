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

  static wrongCredentials(msg = "Invalid Credentials ! ") {
    return new ErrorHandlerService(400, msg);
  }

  static validationError(msg = "All fields are required") {
    return new ErrorHandlerService(422, msg);
  }
}

export default ErrorHandlerService;
