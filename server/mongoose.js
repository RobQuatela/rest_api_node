const mongoose = require('mongoose');

const {connectionString} = require('../config/mongo.config');

mongoose.connect(connectionString);

module.exports = {
    mongoose
};