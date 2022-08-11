const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const loginRouter = require('./routes/login');
const homeRouter = require('./routes/home');
const indexRouter = require('./routes/indexRouter');

app.set('view engine', 'ejs');
app.set('views', (path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(loginRouter);
app.use(homeRouter);
app.use(indexRouter);

app.listen(3000, ()=> console.log('server is running'));