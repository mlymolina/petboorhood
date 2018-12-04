const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/petborhood';

const db = mongoose.connect(mongoUri);

module.exports = db;
