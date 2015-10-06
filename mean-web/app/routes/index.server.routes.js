/**
 * Created by Eakawat on 10/6/2015 AD.
 */
// Define the routes module' method
module.exports = function(app) {
    // Load the 'index' controller
    var index = require('../controllers/index.server.controller');

    // Mount the 'index' controller's 'render' method
    app.get('/', index.render);
};