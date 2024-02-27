import userService from "services/users";
import logger from "appConfig/logger";

const createUser = (req, res, next) => {
  logger.info(`Executing createUser controller`);
  userService.createUserService(req.body)
    .then((user) => {
      logger.info(`Executing createUser was successful`);
      res.status(200).json(user);
    })
    .catch((err) => {      
      next(err);
    });
}

module.exports = createUser;
