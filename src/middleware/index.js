const NotFoundMiddleware = require("./not-found.middleware");
const ErrorMiddleware = require("./error.middleware");
const AuthMiddleware = require("./auth.middleware");
const ParseIntMiddleware = require("./parse-int.middleware");
const CacheMiddleware = require("./cache.middleware");
module.exports = {
  NotFoundMiddleware,
  ErrorMiddleware,
  AuthMiddleware,
  ParseIntMiddleware,
  CacheMiddleware
}