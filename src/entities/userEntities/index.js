const userEntity = require('./user.entity');
const userSchema = require('../../schemas/userSchemas/update-profile.schema');

async function validateProfileUpdate(body) {
  return await userSchema.validate(body);
}

const makeUserEntity = userEntity({ validateProfileUpdate });

module.exports = makeUserEntity;