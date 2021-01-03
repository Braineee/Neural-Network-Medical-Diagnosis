const MakeCreateSymptomController = ({ createSymptomService, HTTPStatus }) => {
  const createSymptomController = async (httpRequest) => {
    try {
      const data = await createSymptomService( httpRequest.body );
      //return { statusCode: 201, data: data, message: "Request was successful.", error: false };
      return {
        headers: {'Content-Type': 'application/json', 'Last-Modified': new Date().toUTCString()},
        statusCode: HTTPStatus.CREATED,
        body: { message: "Request Successful", error: false,  data}
      }
    } catch (err) {
      console.log(err);
      //return res.status(422).json({ message: error.message, error: true });
      return {
        headers: {'Content-Type': 'application/json'},
        statusCode: HTTPStatus.UNPROCESSABLE_ENTITY,
        body: { message: "Request failed", error: err.message }
      }
    }
  }
  return createSymptomController;
}

module.exports = MakeCreateSymptomController