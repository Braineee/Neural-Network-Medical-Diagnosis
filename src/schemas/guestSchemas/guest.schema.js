const Joi = require("joi");

const guestSchema = {};

// Define the schema
guestSchema.schema = Joi.object({

  firstname: Joi.string().required(),

  lastname: Joi.string().required(),
  
  email: Joi.string().email({ minDomainSegments: 2 }).required(),

  password: Joi.string().required(),

});

// Validate the schema
guestSchema.validate = async (body) => {
  try {
    const result = await guestSchema.schema.validateAsync(body);
  } catch (error) {
    throw new Error(error.details[0].message);
  }
};

module.exports = guestSchema;