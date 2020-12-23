const userEntity = require('./user.entity');
const userSchema = require('../../schemas/userSchemas/update-profile.schema');

async function validate(body) {
  return await userSchema.validate(body);
}

const makeUserEntity = userEntity({ validate });

module.exports = makeUserEntity;