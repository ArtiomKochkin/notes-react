const jwt = require('jsonwebtoken');

const JWT_ACCESS_SECRET = 'access_jwt_secret';
const JWT_REFRESH_SECRET = 'refresh_jwt_secret';

const accessTokenAge = 30;
const refreshTokenAge = 60;

// функция для получения токенов
const getTokens = (username) => ({
  accessToken: jwt.sign({ username }, JWT_ACCESS_SECRET, { 
    expiresIn: `${accessTokenAge}m` 
  }),
  refreshToken: jwt.sign({ username }, JWT_REFRESH_SECRET, {
    expiresIn: `${refreshTokenAge}d`
  }),
});

// Middleware для проверки токенов
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token missing' });
  }

  jwt.verify(token, JWT_ACCESS_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({ message: 'Access token expired or invalid' });
    }
    req.user = user;
    next();
  });
};

module.exports = {
  getTokens,
  authenticateToken,
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
  refreshTokenAge,
}