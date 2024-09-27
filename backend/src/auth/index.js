const express = require('express');
const { register, login, logout, refresh, loginWithGoogle } = require('./authController');

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/refresh', refresh);
authRouter.post('/login/google', loginWithGoogle);

module.exports = authRouter;