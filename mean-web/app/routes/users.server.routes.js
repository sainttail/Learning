/**
 * Created by Eakawat on 10/6/2015 AD.
 */
var users = require('../controllers/users.server.controller');

module.exports = function (app) {
    app.route('/users').post(users.create).get(users.list);

    app.route('/users/:userId').get(users.read).put(users.update).delete(users.delete);

    app.param('userId', users.userByID);
};