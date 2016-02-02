/**
 * @overview
 *
 * @author pengxiangxiong@baidu.com
 * @version 2016/02/02
 */

'use strict';

var config = require('../config');
var mongoose = require('mongoose');

mongoose.connect(config.mongodb.connect, {
    server: {
        poolSize: config.mongodb.poolSize
    }
});

var userSchema = new mongoose.Schema({
    name : String,
    password : String,
    email : String
}, {
    collection : 'users'
});

var userModel = mongoose.model('user', userSchema);

exports.save = function (name, password, callback) {
    var user = {
        name : name,
        password : password
    };
    user = new userModel(user);
    user.save(function (err) {
        callback(err);
    });
};

exports.get = function (name, callback) {
    userModel.findOne({name : name}, function (err, user) {
        if (err) return callback(err);
        callback(null, user);
    });
};
