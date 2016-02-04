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

exports.User = mongoose.model('User', require('./user'));
