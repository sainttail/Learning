/**
 * Created by Eakawat on 10/6/2015 AD.
 */
var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function () {
    var db = mongoose.connect(config.db);

    require('../app/models/user.server.model');

    return db;
};
