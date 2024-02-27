import generateSuccessResponse from "utils/generateResponse";
import ServerException from "utils/exceptions/index";
import models from "models";
import logger from "appConfig/logger";

/**
 * 
 * @param {
 * firstName:string
 * lastName:string
 * email:email
 * } user 
 */
const createUserService = (user) => {
  logger.info(`Executing createUserService`);
  return new Promise((resolve, reject) => {
    return models.User.create(user)
      .then((savedUser) => {
        logger.info(`Executing createUserService was successful`);
        return resolve(
          generateSuccessResponse("User Registered Successfully", savedUser)
        );
      })
      .catch((error) => {
        logger.error(
          `Error occurred while executing createUserService ${error.error}`
        );
        return reject(new ServerException("Unable to create user"));
      });
  });
};

module.exports = createUserService;
