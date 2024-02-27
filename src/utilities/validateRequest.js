const { BadRequestException } = require('./exceptions');
const logger = require("../../config/logger");

/**
 *
 * @param {json} policy It is a simple json object which should have either
 *  of headers, params, query, body the value of these parameters could be a function or
 *  a valid Joi Schema if it is a function the function needs to return an object with
 *  either response param or error param
 *
 * @param {boolean} failFast determines if you want to continue validating
 *  after failure of one validation and move on to next validation.
 *  Example: If headers validation fails move on to body validation if failFast is false,
 *  for Joi specific failfast please pass { abortEarly: false } to joi validation method
 *
 * This middleware takes in a policy object and if the policy validation succeeds it
 * passes on to the next middleware, if the validation failes it returns response with
 * bad request
 *
 */
const validateRequest = (policy, failFast = true) => {
    return (req, res, next) => {
      logger.info(
        `Validating request params for ${req.url} request of type ${req.method}`
      );
      let validationErrors = [];
      Object.keys(policy).some((rule) => {
        let error;
        if (typeof policy[rule] !== "function") {
          const { error: validationError } = policy[rule].validate(req[rule]);
          if (validationError) {
            error = validationError.details[0].message.toString();
          }
        } else {
          error = policy[rule](req).error;
        }
        if (error) {
          validationErrors.push(error);
          return failFast;
        }
      });
      if (validationErrors.length > 0) {
        logger.error(
          `Request validation for ${req.url} request of type ${req.method} failed with errors [${validationErrors}]`
        );      
        throw new BadRequestException(`${validationErrors}`);
      }
      logger.info(
        `Request validation for ${req.url} request of type ${req.method} was successful`
      );
      return next();
    };
  };
  module.exports = validateRequest;