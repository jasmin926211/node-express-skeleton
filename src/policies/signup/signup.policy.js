let Joi = require("joi");
const { combineValidationMessages, generateMandatoryFieldMessage, generateInvalidDataTypeMessage } = require('../../utilities/validations');

const signupPolicy = {
  body: Joi.object().keys({
    id: Joi.allow(),
    firstName: Joi.string()
      .required()
      .messages({
        ...combineValidationMessages(
          ["any.required", "string.empty"],
          generateMandatoryFieldMessage("Email")
        ),
        "string.pattern.base": "Please enter valid email address",
      }),
    lastName: Joi.string()
      .required()
      .messages({
        ...combineValidationMessages(
          ["any.required", "string.empty"],
          generateMandatoryFieldMessage("Email")
        ),
        "string.pattern.base": "Please enter valid email address",
      }),
    email: Joi.string()
      .required()
      .messages({
        ...combineValidationMessages(
          ["any.required", "string.empty"],
          generateMandatoryFieldMessage("Email")
        ),
        "string.pattern.base": "Please enter valid email address",
      }),
    password: Joi.string()
      .required()
      .messages({
        ...combineValidationMessages(
          ["any.required", "string.empty"],
          generateMandatoryFieldMessage("Password")
        ),
        ...generateInvalidDataTypeMessage("string", "Password"),
      }),
  }),
};

module.exports = signupPolicy;