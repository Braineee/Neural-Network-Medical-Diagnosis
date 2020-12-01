const makeSignInEntity = require('../../entities/authEntities');

const makeSignIn = ({ userDao, verifyPassword, generateJWT }) => {

  const SignIn = async (signInData) => {
    // check the sign in info
    const signInEntity = await new makeSignInEntity(signInData).execute();

    //console.log(signInEntity);
    // fetch the user by their email
    const user = await userDao.findByEmail(signInEntity.getEmail());
    if (!user) throw new Error('Incorrect credentials.');

    // verify the password
    const isValidPassword = verifyPassword(user.password, signInEntity.getPassword());
    if (!isValidPassword) throw new Error('Incorrect credentials');

    // remove the password
    delete user.dataValues.password;

    // create a jwt
    user.dataValues.authToken = generateJWT(user, signInEntity.getRememberMe());

    // return the user data
    return user;

  }

  return SignIn;
}

module.exports = makeSignIn;