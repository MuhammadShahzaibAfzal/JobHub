import { DEBUG_MODE } from "../config/index.js";
import ErrorHandlerService from "../services/error-handler-service.js";
import Joi from "joi";

export const errorHandlerMiddleware = (err, req, res, next) => {
  let status = 500;
  let data = {
    message: "Internal Server Error !",
    ...(DEBUG_MODE === "true" && { originalMessage: err.message }),
  };

  if (err instanceof ErrorHandlerService) {
    status = err.status;
    data = {
      message: err.message,
    };
  }

  if (err instanceof Joi.ValidationError) {
    status = 422;
    data = {
      message: err.message,
    };
  }
  return res.status(status).json(data);
};
