const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '#Aditya123',
    database: 'hotel_management'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});

// Endpoint: Get All Rooms
app.get('/api/rooms', (req, res) => {
    const query = 'SELECT * FROM rooms';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
            return;
        }
        res.json(results);
    });
});

// Endpoint: Add Booking
app.post('/api/bookings', (req, res) => {
    const { name, email, room_id, check_in_date, check_out_date } = req.body;
    const query = `
        INSERT INTO bookings (name, email, room_id, check_in_date, check_out_date)
        VALUES (?, ?, ?, ?, ?)
    `;
    db.query(query, [name, email, room_id, check_in_date, check_out_date], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
            return;
        }
        res.json({ message: 'Booking successful', bookingId: result.insertId });
    });
});

// Start the Server
app.listen(port, () => {
    console.log(Server is running on http://localhost:${port});
});