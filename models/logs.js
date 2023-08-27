const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  title: String,
  entry: String,
  shipIsBroken: Boolean,
  createdAt: { type: Date, default: Date.now }
});

const Log = mongoose.model('Log', logSchema);

module.exports = Log;
