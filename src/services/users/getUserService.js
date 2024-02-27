import generateSuccessResponse from "utils/generateResponse";
import ServerException from "utils/exceptions/index";
import models from "models";
import logger from "appConfig/logger";


const getUserService = () => {
  logger.info(`Executing getUserService`);
  return new Promise((resolve, reject) => {    
    return models.User.findAll()
      .then((users) => {
        logger.info(`Executing getUserService was successful`);
        return resolve(
          generateSuccessResponse("User Registered Successfully", users)
        );
      })
      .catch((error) => {  
        logger.error(`Uncaught error occurred status : 500 ${error.error}`);
        return reject(new ServerException("Unable to create user", error));
      });
  });
};

module.exports = getUserService;