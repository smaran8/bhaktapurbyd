const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bookingsRoute = require('./routes/bookings');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Use routes
app.use('/api/bookings', bookingsRoute);

// Serve the admin panel
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/admin.ejs')); // Adjust for your template engine
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
