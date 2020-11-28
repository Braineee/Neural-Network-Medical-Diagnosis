const Joi = require("joi");

const userSchema = {};

// Define the schema
userSchema.schema = Joi.object({

  firstName: Joi.string().required(),

  lastName: Joi.string().required(),
  
  email: Joi.string().email({ minDomainSegments: 2 }).required(),

  phone: Joi.string().required(),

  age: Joi.number().required(),

  gender: Joi.number().required(),

  address: Joi.number().required(),

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