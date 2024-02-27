import generateSuccessResponse from "utils/generateResponse";
import ServerException from "utils/exceptions/index";
import models from "models";
import ResourceNotFoundException from "utils/exceptions/ResourceNotFoundException";
import logger from "appConfig/logger";

/**
 * 
 * @param { id:string } params 
 */
const getUserByIdService = (params) => {
  console.log("Hello Manoj");

  logger.info(`Executing getUserByIdService`);
  return new Promise((resolve, reject) => {    
    return models.User.findByPk(params.id)
      .then((users) => {
        if(users){
          logger.info(`Executing getUserByIdService was successful`);
          return resolve(
            generateSuccessResponse("User Registered Successfully", users)
          );
        }else{
          return reject(new ResourceNotFoundException("User Not Found"));
        }

      })
      .catch((error) => {        
        return reject(new ServerException("Unable to create user", error));
      });
  });
};

module.exports = getUserByIdService;
