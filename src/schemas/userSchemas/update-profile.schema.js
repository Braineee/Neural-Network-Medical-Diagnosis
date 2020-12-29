const Joi = require("joi");

const updateProfile = {};

// Define the schema
updateProfile.schema = Joi.object({

  userUuid: Joi.string().required(),

  phone: Joi.string().required(),

  age: Joi.number().required(),

  gender: Joi.string().required(),

  address: Joi.string().required(),

  type: Joi.string().required(),

});

// Validate the schema
updateProfile.validate = async (body) => {
  try {
    const result = await updateProfile.schema.validateAsync(body);
  } catch (error) {
    throw new Error(error.details[0].message);
  }
};

module.exports = updateProfile;