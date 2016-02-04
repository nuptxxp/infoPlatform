'use strict';

var userControl = require('../controller/user.js');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', {title : 'Express'});
    });
    app.post('/users', function (req, res) {
        var name = req.body.name || 'name';
        var password = req.body.password || 'password';
        userControl.save(name, password, function (err) {
            if (err) {
                res.json({code : 1, msg : err.stack});
            } else {
                res.json({code : 0, msg : 'save success'});
            }
        });
    });
    app.get('/users', function (req, res) {
        var name = req.query.name;
        userControl.get(name, function (err, users) {
            res.send(users);
        });
    });
};
