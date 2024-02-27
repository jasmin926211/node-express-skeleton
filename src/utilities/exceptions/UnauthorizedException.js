const generateException = require("./generateException");
class UnauthorizedException extends Error {
  constructor(exception) {
    super();
    generateException(this, 401, "Unauthorized request", exception);
  }
}

module.exports = UnauthorizedException;
