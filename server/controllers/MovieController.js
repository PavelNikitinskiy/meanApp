var Resource = require('resourcejs');
module.exports = function(app, route) {

  Resource(app, '', route, app.models.movie).rest();

  return function(req, res, next) {
    next();
  };
};
