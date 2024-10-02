const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const cors = require("cors");

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

app.use(cors());

// Import routes
const routes = require('./routes/rezeptRouter');

// Use routes
app.use('/api', routes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));
  console.log(process.env.MONGODB_URI);

// Set up server to listen on a specific port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
