const express = require('express');
const  indexRouter = express.Router();
const {indexView} = require('../Controllers/indexController');

indexRouter.get('/', indexView);
module.exports = indexRouter;