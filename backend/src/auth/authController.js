const bcrypt = require('bcryptjs');
const cookie = require("cookie");
const jwt = require('jsonwebtoken');

const { users } = require('./data');
const { getTokens, JWT_REFRESH_SECRET, refreshTokenAge } = require('./utils');

// Регистрация пользователя
exports.register = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { username, password: hashedPassword };

  users.push(user);

  const { accessToken, refreshToken } = getTokens(username);

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: refreshTokenAge * 60 * 24 * 1000,
      sameSite: 'strict',
      secure: false, 
    })
  )
  res.status(201).json({ message: 'User registered', accessToken });
};

// Вход пользователя
exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(400).json({ message: "Пользователь не найден" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Пользователь не найден" });
  }

  const { accessToken, refreshToken } = getTokens(username);

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: refreshTokenAge * 60 * 24 * 1000,
      sameSite: 'strict',
      secure: false, 
    })
  )
  res.status(200).json({ accessToken });
}

// Выход пользователя
exports.logout = async (req, res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("refreshToken", "", {
      httpOnly: true,
      maxAge: 0,
      sameSite: 'strict',
      secure: false, 
    })
  );
  res.sendStatus(200);
}

// Обновление токенов 
exports.refresh = (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(403).json({ message: "Ошибка авторизации. Пожалуйста, войдите заново." });
  }

  jwt.verify(refreshToken, JWT_REFRESH_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Ошибка авторизации. Пожалуйста, войдите заново." });

    const { accessToken, refreshToken: newRefreshToken } = getTokens(user.username);
    
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("refreshToken", newRefreshToken, {
        httpOnly: true,
        maxAge: refreshTokenAge * 60 * 24 * 1000,
        sameSite: 'strict',
        secure: false, 
      })
    );
    
    return res.status(200).json({ accessToken });
  });
};