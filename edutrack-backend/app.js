const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Temporary test route
app.get('/', (req, res) => {
  res.send('EduTrack backend is working!');
});

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.use('/api/courses', require('./routes/courses'));

module.exports = app;