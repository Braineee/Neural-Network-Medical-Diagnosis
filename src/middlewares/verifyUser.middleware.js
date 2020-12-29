const makeVerifyUserMiddleware = ({ validateUserToken, HTTPStatus }) => {
  const verifyUserMiddleware = async (req, res, next) => {
    try {

      const user = await new validateUserToken(req).validateUser();

      req.user = user.getUserDetails();

      if (req.body) req.body.userUuid = user.getUserUuid();
      if (req.params) req.params.userUuid = user.getUserUuid();

      next();

    } catch(err) {
      return res.status(HTTPStatus.UNPROCESSABLE_ENTITY).json({ message: err.message, error: true });
    }
  }

  return verifyUserMiddleware;
}

module.exports = makeVerifyUserMiddleware;