const config = require('./database');

let dbConfig;

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
  dbConfig = config.development;
} else {
  dbConfig = config.production;
}
let cadenaDeConexion = {
  database: dbConfig.database,
  username: dbConfig.username,
  password: dbConfig.password,
  host: dbConfig.host,
  dialect: dbConfig.dialect,
};

module.exports = {
  PORT: process.env.PORT,
  MYSQL_URI: cadenaDeConexion,
  APPLICATION_NAME: process.env.APPLICATION_NAME,
  JWT_SECRET: process.env.JWT_SECRET,
  CACHE_KEY: process.env.CACHE_KEY,
  SWAGGER_PATH: `../config/swagger/${process.env.SWAGGER_DOC}.json`,
  LOG_PATH: process.env.LOG_PATH
}
