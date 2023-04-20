const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;
const API_URL = process.env.API_URL;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
const REFRESH_EXPIRES_IN = process.env.REFRESH_EXPIRES_IN;
const JWT_SECRET = process.env.JWT_SECRET;
const NODE_ENV = process.env.NODE_ENV;
const DB_NAME = process.env.DB_NAME;

module.exports = {
  PORT,
  DB_URI,
  API_URL,
  REFRESH_EXPIRES_IN,
  REFRESH_TOKEN_SECRET,
  JWT_EXPIRES_IN,
  JWT_SECRET,
  NODE_ENV,
  DB_NAME,
};
