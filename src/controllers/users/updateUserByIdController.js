import userService from "services/users";
import logger from "appConfig/logger";

const updateUserById = (req, res, next) =>{
  logger.info(`Executing updateUserById `);
  userService.updateUserService(req.body)
  .then((user) => {
    logger.info(`Executing updateUserById  was successful`);
    res.status(204).json(user);
  })
  .catch((err) => {      
    next(err);
  });
};

module.exports = updateUserById;
