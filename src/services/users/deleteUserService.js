import generateSuccessResponse from "utils/generateResponse";
import ServerException from "utils/exceptions/index";
import models from "models";
import ResourceNotFoundException from "utils/exceptions/ResourceNotFoundException";
import logger from "appConfig/logger";
/**
 * 
 * @param {id:string} params 
 */
const deleteUserByIdService = (params) => {
  logger.info(`Executing deleteUserByIdService`);
  return new Promise((resolve, reject) => {    
    return models.User.destroy({
      where: {
         id: params.id //this will be your id that you want to delete
      }
    }).then((users) => {
        if(users){
          logger.info(`Executing deleteUserByIdService was successful`);
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
module.exports = deleteUserByIdService;
