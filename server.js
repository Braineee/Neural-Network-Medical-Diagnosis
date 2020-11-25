// Require the initial env 
require('dotenv').config();

// Require the actual env file for the app enviroment
// require('dotenv').config({ path: `./.env.${process.env.APP_ENV}` }); 

// Require the app
const app = require("./src/app");

// Require the app url and port configuration
const { url, port, enviroment } = require("./src/config/server.config");

// Start the server
app.listen(port, () => console.log(`Evisit data center API server started on ${enviroment}: ${url}:${port}`));
