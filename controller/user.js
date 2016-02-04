/**
 * @overview
 *
 * @author pengxiangxiong@baidu.com
 * @version 2016/02/03
 */

'use strict';

var mongodb = require('../models/mongodb');
var async = require('async');

exports.save = function (name, password, callback) {
    var user = new mongodb.User();
    user.name = name;
    user.password = password;
    user.save(callback);
};

exports.get = function (name, callback) {
    mongodb.User.findOne({
        name : name
    }, callback);
}
