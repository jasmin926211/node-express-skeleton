import config from "config";

import express from "express";

import controllers from "controllers/index";
import logger from "appConfig/logger";
import models from "models";
const app = express();

// Parse application/json
app.use(express.json());

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Setting middleware for static resources
app.use(express.static("public"));

// Loading all the routes
app.use("/v1", controllers);

// Default 500 is returned if the route is not available
app.use((err, req, res, next) => {
  if (err.statusCode && err.title) {
    res.status(err.statusCode).json({
      error: {        
        title: err.title,
        description: err.description,
      }
    });
  } else {
    logger.error(`Uncaught error occurred status : 500 ${err.stack}`);
    res.status(500).json({
      error: {
        title: "Request timed out",
        description: "Request has timed out, please try again",
      }
    });
  }
});

// Function to start express server
function startServer() {
  const port = config.get("port");
  return models.sequelize.sync().then(() =>
    app.listen(port, function () {
      logger.error(`Service Monitor Running on port ${port} environment`);
    })
  );
}

// This function is not used much, it can be used in test-cases when server is mocked
function stopServer() {
  app.close(function () {
    process.exit();
  });
}

// Start the server
startServer();

/**
 *  We are exporting start and stop server so that this
 * can be accessed by test cases to mock the server
 **/
module.exports = {
  startServer,
  stopServer,
};
