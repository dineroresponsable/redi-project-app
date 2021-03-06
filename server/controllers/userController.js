var restful = require('node-restful');

module.exports = function(app, route) {
	// setup the controller for REST
	var rest = restful.model(
		'user',
		app.models.user
	).methods(['get', 'put', 'post', 'delete']);

	// register this endpoint with the application
	rest.register(app, route);

	// return middleware
	return function(request, response, next) {
		next();
	};
};