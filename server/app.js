var express = require('express');
var app = express();
var test = require('./controllers/testcontroller')
var sequelize = require('./db');

sequelize.sync();

app.listen(3000, function(){
    console.log('App is listening on 3000')
});

app.use('/test', test);