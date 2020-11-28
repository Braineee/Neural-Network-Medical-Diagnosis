const makeRegisterGuestController = ({ registerGuestService }) => {
  const registerGuestController = async (httpRequest) => {
    try {
      const data = await registerGuestService( httpRequest.body );
      return { statusCode: 201, data: data, message: "Request was successful.", error: false };
    } catch (error) {
      console.log(e);
      return res.status(422).json({ message: error.message, error: true });
    }
  }

  return registerGuestController;
}

module.exports = makeRegisterGuestController