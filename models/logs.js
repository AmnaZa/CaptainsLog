const mongoose = require('./connection');

const { Schema, model } = mongoose;

// Define the schema for captain's logs
const logSchema = new Schema({
    title: String,       // Title of the log entry
    entry: String,       // Log entry content
    shipIsBroken: Boolean // Whether the ship is broken (true/false)
});

// Create the Log model based on the schema
const Log = model('Log', logSchema);

module.exports = Log;
