var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');

// router.get('/', function (req, res) {
//     res.send('Hey!!! This is a test route!')
//    });

router.post('/one', (req, res) => {
    res.send("Got post message")
});

router.post('/two', (req, res) => {
    let testData = 'Test data for endpoint two';

    TestModel.create({
        testdata: testData
    }).then(dataFromDatabase => {
        res.send('Test two went through')
    })
});

module.exports = router;
