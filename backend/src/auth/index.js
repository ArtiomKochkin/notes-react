const express = require('express');
const { register, login, logout, refresh } = require('./authController');

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/refresh', refresh);

module.exports = authRouter;