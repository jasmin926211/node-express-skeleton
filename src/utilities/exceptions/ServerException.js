const generateException = require("./generateException");
class ServerException extends Error {
  constructor(exception) {
    super();    
    generateException(this,408, "Request Timed out", exception);
  }
}

module.exports = ServerException;
