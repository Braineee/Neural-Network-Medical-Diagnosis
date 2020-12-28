const makeSignInController = ({ signInService, HTTPStatus }) => {
  const SignInController = async (httpRequest) => {
    try {
      const data = await signInService( httpRequest.body );
      
      return {
        headers: {'Content-Type': 'application/json', 'Last-Modified': new Date().toUTCString()},
        statusCode: HTTPStatus.OK,
        body: { message: "Request Successful", error: false,  data}
      }
    } catch (err) {
      return {
        headers: {'Content-Type': 'application/json'},
        statusCode: HTTPStatus.UNPROCESSABLE_ENTITY,
        body: { message: "Request failed", error: err.message }
      }
    }
  }

  return SignInController;
}

module.exports = makeSignInController