import generateSuccessResponse from "utils/generateResponse";
import ServerException from "utils/exceptions/index";
import models from "models";
import ResourceNotFoundException from "utils/exceptions/ResourceNotFoundException";
import logger from "appConfig/logger";

/**
 * 
 * @param { 
 * firstName:string
 * lastName:string
 * email:email
 * } data 
 */
const updateUserService = (data) => {
  logger.info(`Executing updateUserService`);
  return new Promise((resolve, reject) => {    
    return models.User.update(data, { where: { id: data.id } }).then((users) => {
        if(users != 0){
          logger.info(`Executing updateUserService was successful`);
          return resolve(
            generateSuccessResponse("User Registered Successfully", users)
          );
        }else{
          return reject(new ResourceNotFoundException("User Not Found"));
        }

      })
      .catch((error) => {
        logger.error(`Uncaught error occurred status : 500 ${error.error}`);
        return reject(new ServerException("Unable to create user", error));
      });
  });
};

module.exports = updateUserService;
