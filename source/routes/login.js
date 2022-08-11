const express = require('express');
const loginRouter = express.Router();
const {loginView, registerView} = require('../Controllers/registerController');

loginRouter.get('/login', loginView);
loginRouter.get('/register', registerView);
module.exports = loginRouter;