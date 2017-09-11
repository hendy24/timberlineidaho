var mongoose = require('mongoose');

exports.recent = function(cb) {
  mongoose.fetch({}, cb);
};
