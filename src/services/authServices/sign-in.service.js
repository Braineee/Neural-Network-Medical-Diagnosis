const makeSignInEntity = require('../../entities/authEntities');

const makeSignIn = ({ userDao, verifyPassword, generateJWT }) => {

  const SignIn = async (signInData) => {
    // check the sign in info
    const signInEntity = await new makeSignInEntity(signInData).execute();

    // fetch the user by their email
    const user = await userDao.findByEmail(signInEntity.getEmail());
    if (!user) throw new Error('Incorrect credentials.');

    // verify the password
    const isValidPassword = verifyPassword(user.password, signInEntity.getPassword());
    if (!isValidPassword) throw new Error('Incorrect credentials')

    // create a jwt
    user.authToken = generateJWT(user, signInData.getRememberMe());

    // return the user data
    return user;

  }

  return SignIn;
}

module.exports = makeSignIn;