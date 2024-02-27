import userService from "services/users";
import logger from "appConfig/logger";

const deleteUserById = (req, res, next) =>{
  logger.info(`Executing deleteUserById`);
  userService.deleteUserByIdService(req.params)
  .then((user) => {
    logger.info(`Executing deleteUserById was successful`);
    res.status(204).json(user);
  })
  .catch((err) => {      
    next(err);
  });
};

module.exports = deleteUserById;
