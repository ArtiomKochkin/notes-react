const jwt = require('jsonwebtoken');

const JWT_ACCESS_SECRET = 'access_jwt_secret';
const JWT_REFRESH_SECRET = 'refresh_jwt_secret';

const getTokens = (username) => ({
  accessToken: jwt.sign({ username }, JWT_ACCESS_SECRET, { 
    expiresIn: "30s" 
  }),
  refreshToken: jwt.sign({ username }, JWT_REFRESH_SECRET, {
    expiresIn: "3600s"
  }),
});


module.exports = {
  getTokens,
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET
}