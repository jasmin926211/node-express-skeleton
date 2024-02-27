import userService from "services/users";
import logger from "appConfig/logger";

const getUserById = (req, res, next) =>{
  logger.info(`Executing getUserById`);
  userService.getUserByIdService(req.params)
  .then((user) => {
    logger.info(`Executing getUserById was successful`);
    res.status(200).json(user);
  })
  .catch((err) => {      
    next(err);
  });
};

module.exports = getUserById;
