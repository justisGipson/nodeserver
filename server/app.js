var express = require('express');
var app = express();
var test = require('./controllers/testcontroller')
var sequelize = require('./db');

sequelize.sync();

app.use('/test', test)