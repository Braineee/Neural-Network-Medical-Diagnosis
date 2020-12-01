const makeConnectDbMiddleware = ({ database }) => {
  const ConnectDbMiddlerware = async (req, res, next) => {
    database.sequelize.authenticate()
    .then(() => {
      console.log('Connection to database established.');
      return next();
    })
    .catch(err => {
      console.log(`Error:${err}`);
      return res.status(HTTPStatus.SERVICE_UNAVAILABLE).json({ responseType: 'success', message: 'Database connection not available at the moment.'});
    });
  }

  return ConnectDbMiddlerware;
}

module.exports = makeConnectDbMiddleware;