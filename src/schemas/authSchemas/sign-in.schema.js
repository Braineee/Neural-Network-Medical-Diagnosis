const Joi = require("joi");

const signInSchema = {};

// Define the schema
signInSchema.schema = Joi.object({
  
  email: Joi.string().email({ minDomainSegments: 2 }).required(),

  password: Joi.string().required(),

  remember_me: Joi.bool().required(),

});

// Validate the schema
signInSchema.validate = async (body) => {
  try {
    const result = await signInSchema.schema.validateAsync(body);
  } catch (error) {
    throw new Error(error.details[0].message);
  }
};

module.exports = signInSchema;