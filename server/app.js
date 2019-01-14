require('dotenv').config();

var express = require('express');
var app = express();
var test = require('./controllers/testcontroller');
var authTest = require('./controllers/authtestcontroller');
var user = require('./controllers/usercontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync(); //{force: true} to reset tables

app.use(bodyParser.json());

app.use(require('./middleware/headers'));

app.use('/test', test);

app.use('/api/user', user);

app.use(require('./middleware/validate-session'));

app.use('/authtest', authTest);

app.listen(3000, () => {
    console.log('App is listening on 3000', 'this is a test')
});