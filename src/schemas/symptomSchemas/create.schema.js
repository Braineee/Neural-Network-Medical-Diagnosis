const Joi = require("joi");

const create = {};

// Define the schema
create.schema = Joi.object({

  userUuid: Joi.string().required(),

  symptomId: Joi.string().required(),

  symptomName: Joi.string().required(),

  symptomDescription: Joi.string().required(),

});

// Validate the schema
create.validate = async (body) => {
  try {
    const result = await create.schema.validateAsync(body);
  } catch (error) {
    throw new Error(error.details[0].message);
  }
};

module.exports = create;