const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    vehicle: String,
    date: Date
});

module.exports = mongoose.model('Booking', bookingSchema);
