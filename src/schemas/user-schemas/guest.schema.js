const Joi = require("joi");

const guestUser = {};

// Define the schema
guestUser.schema = Joi.object({

  firstName: Joi.string().required(),
  
  email: Joi.string().email({ minDomainSegments: 2 }).required(),

  password: Joi.string().required(),

});

// Validate the schema
guestUser.validate = async (body) => {
  try {
    const result = await guestUser.schema.validateAsync(body);
  } catch (error) {
    throw new Error(error.details[0].message);
  }
};

module.exports = guestUser;