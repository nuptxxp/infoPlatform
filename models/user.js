/**
 * @overview
 *
 * @author pengxiangxiong@baidu.com
 * @version 2016/02/03
 */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = new Schema({
    name : String,
    password : String
});

module.exports = User;
