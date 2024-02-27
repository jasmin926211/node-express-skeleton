function generateException(errorInstance, statusCode, title, exception) {
  errorInstance.statusCode = exception.statusCode || statusCode;
  errorInstance.title = exception.title || title;
  errorInstance.description =
    typeof exception === "string" ? exception : exception.description;
}
module.exports = generateException;
