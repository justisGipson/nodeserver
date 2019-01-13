var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var AuthTestModel = sequelize.import('../models/authtest');

router.get('/getall', (req, res) => {
    var userid = req.user.id;

    AuthTestModel.findAll({
        where: {owner: userid}
    })
    .then(findAllSuccess = (data) => {
        res.json(data);
    },
    findAllError = (err) => {
        res.send(500, err.message);
    }
    );
});

router.post('/create', (req, res) => {
    var owner = req.user.id;
    var authTestData = req.body.authtestdata.item;

    AuthTestModel.create({
        authtestdata: authTestData,
        owner: owner
    })
    .then(
        createSuccess = (authtestdata) => {
            res.json({
                authtestdata: authtestdata
            });
        },
        createError = (err) => {
            res.send(500, err.message);
        }
    );
});

router.get('/:id', (req, res) => {
    var data = req.params.id;
    var userid =req.user.id;

    AuthTestModel.findOne({
        where: {id: data, owner: userid}
    }).then(
        findOneSuccess = (data) => {
            res.json(data);
        },
        findOneError = (err) => {
            res.send(500, err.message);
        }
    );
});

router.delete('/delete/:id', (req, res) => {
    var data = req.params.id;
    var userid = req.user.id;

    AuthTestModel.destroy({
        where: {id: data, owner: userid}
    }).then(
        deleteLogSuccess = (data) => {
            res.send('you removed a log');
        },
        deleteLogError = (err) => {
            res.send(500, err.message);
        }
    );
});

router.put('/update/:id', (req, res) => {
    var data = req.params.id;
    var authtestdata = req.body.authtestdata.item;

    AuthTestModel.update({
        authtestdata: authtestdata
    }, {where: {id: data}} ).then(
        updateSuccess = (updatedLog) => {
            res.json({
                authtestdata: authtestdata
            });
        },
        updateError = (err) => {
            res.send(500, err.message);
        }
    )
});

module.exports = router;