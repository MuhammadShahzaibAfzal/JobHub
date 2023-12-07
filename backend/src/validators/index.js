import Joi from "joi";

export const createJobSchema = Joi.object({
  title: Joi.string().required().min(4).max(100),
  description: Joi.string().required(),
  minExperience: Joi.string().required(),
  requirements: Joi.string().required(),
  responsibilities: Joi.string().required(),
  deadline: Joi.date().required(),
  level: Joi.string().required(),
  status: Joi.string().optional(),
  numberOfSeats: Joi.number().min(1).max(20).required(),
  location: Joi.string().required(),
});