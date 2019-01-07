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
    var testData = 'Test data for endpoint two';

    TestModel.create({
        testdata: testData
    }).then(data => {
        res.send(data)
    });
});

router.post('/three', (req, res) => {
    var testData = req.body.testdata.item;

    TestModel.create({
        testdata: testData
    })
    res.send('Test three went through')
    console.log('Test three went through')
});

router.post('/four', (req, res) => {
    var testData = req.body.testdata.item;

    TestModel.create({
        testdata: testData
    }).then(
        message = () => {
            res.send('Test 4 went through');
        }
    );
});

router.post('/five', (req, res) => {
    var testData = req.body.testdata.item;

    TestModel.create({
        testdata: testData
    }).then(
        message = (data) => {
            res.send(data);
        }
    )
});

router.post('/six', (req, res) => {
    var testData = req.body.testdata.item;

    TestModel.create({
        testdata: testData
    }).then(
        message = (testData) => {
            res.json({
                testdata: testData
            });
        }
    );
});

router.post('/seven', (req, res) => {
    var testData = req.body.testdata.item;

    TestModel.create({
        testdata: testData
    }).then(
        createSuccess = (testData) => {
            res.json({
                testdata: testData
            });
        }, createError = (err) => {
            res.send(500, err.message);
        }
    );
});

module.exports = router;
