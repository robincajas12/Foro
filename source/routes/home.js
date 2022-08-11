const express = require('express');
const  homeRouter = express.Router();
const {homeView} = require('../Controllers/homeController');

homeRouter.get('/home', homeView);
module.exports = homeRouter;