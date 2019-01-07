require('dotenv').config();

var express = require('express');
var app = express();
var test = require('./controllers/testcontroller');
var user = require('./controllers/usercontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync(); //{force: true} to reset tables

app.use(bodyParser.json());

app.use('/test', test);

app.use('/api/user', user);

app.listen(3000, () => {
    console.log('App is listening on 3000')
});