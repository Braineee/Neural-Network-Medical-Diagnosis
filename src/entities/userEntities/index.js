const userEntity = require('./user.entity');
const userSchema = require('../../schemas/userSchemas/user.schema');

async function validate(body) {
  return await userSchema.validate(body);
}

const makeUserEntity = userEntity({ validate });

module.exports = makeUserEntity;