'use strict';

var app = require('./lib/server');

if(!module.parent) {
	var port = process.env.PORT || 8000;
	app.listen(port);
}
