const signInEntity = require('./sign-in.entity');
const signInSchema = require('../../schemas/authSchemas/sign-in.schema');

async function validate(body) {
  //console.log(body);
  return await signInSchema.validate(body);
}

const makeSignInEntity = signInEntity({ validate });

module.exports = makeSignInEntity;