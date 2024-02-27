import userService from "services/users";
import logger from "appConfig/logger";

const getUsers = (req, res, next) =>{
  logger.info(`Executing getUsers`);
  userService.getUserService()
  .then((user) => {
    logger.info(`Executing getUsers was successful`);
    res.status(200).json(user);
  })
  .catch((err) => {   
    next(err);
  });
};

module.exports = getUsers;
