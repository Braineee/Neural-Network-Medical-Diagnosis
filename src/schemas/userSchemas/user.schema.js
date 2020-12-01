const Joi = require("joi");

const userSchema = {};

// Define the schema
userSchema.schema = Joi.object({

  userUuid: Joi.string().required(),

  firstname: Joi.string().required(),
  
  lastname: Joi.string().required(),

  email: Joi.string().email({ minDomainSegments: 2 }).required(),

  phone: Joi.string().required(),

  age: Joi.string().required(),

  gender: Joi.string().required(),

  address: Joi.string().required(),

});

// Validate the schema
userSchema.validate = async (body) => {
  try {
    const result = await userSchema.schema.validateAsync(body);
  } catch (error) {
    throw new Error(error.details[0].message);
  }
};

module.exports = userSchema;