'use strict';

var mongodb = require('../models/mongodb');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', {title : 'Express'});
    });
    app.post('/users', function (req, res) {
        var name = req.query.name || 'name';
        var password = req.query.password || 'password';
        mongodb.save(name, password, function (err) {
            if (err) {
                res.json({code : 1, msg : err.stack});
            } else {
                res.json({code : 0, msg : 'save success'});
            }
        });
    });
    app.get('/users', function (req, res) {
        var name = req.query.name;
        mongodb.get(name, function (err, users) {
            console.log(users);
        });
    });
};
