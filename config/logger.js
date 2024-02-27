const sentry = require("./sentry");
class Logger {
  constructor(options) {
    this.sentryInstance = sentry(options.dsn);
  }
  debug(message) {    
      this.sentryInstance.captureMessage(message, {
        level: "debug",
      });    
  }
  info(message) {    
      this.sentryInstance.captureMessage(message);    
  }
  warn(message) {    
      this.sentryInstance.captureException(message, {
        level: "warning",
      });
  }
  error(message) {
    this.sentryInstance.captureException(message, {
      level: "error",
    });
  }
  fatal(message) {
    this.sentryInstance.captureException(message, {
      level: "fatal",
    });
  }
}
const logger = new Logger({dsn:3412341});
module.exports = logger;