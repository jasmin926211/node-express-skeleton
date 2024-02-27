const Sentry = require("@sentry/node");
import config from "config";
const dsnPath = config.get("dsn");
const SentryLogger = (dsn) => {
  Sentry.init({ dsn:dsnPath});
  return Sentry;
};
module.exports = SentryLogger;