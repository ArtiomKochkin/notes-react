const bcrypt = require('bcryptjs');
const cookie = require("cookie");

const { users } = require('./data');
const { getTokens } = require('./utils');

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
      maxAge: 3600,
    })
  )

  res.status(201).json({ message: 'User registered', accessToken });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const { accessToken, refreshToken } = getTokens(username);

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 3600,
    })
  )

  res.status(200).json({ accessToken });
}

exports.logout = async (req, res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("refreshToken", "", {
      httpOnly: true,
      maxAge: 0
    })
  );
  res.sendStatus(200);
}