var express = require('express');
var router = express.Router();
var sequelize = require('../db');

router.post('/one', (req, res) => {
    res.send("Test 1 went through")
});

module.exports = router;