const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// Get all bookings
router.get('/', async (req, res) => {
    const bookings = await Booking.find();
    res.json(bookings);
});

// Create a new booking
router.post('/', async (req, res) => {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
});

// Delete a booking
router.delete('/:id', async (req, res) => {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;
