// server.js
// ---------------
// Step 0: Load environment variables (MUST be first)
require('dotenv').config();

// Step 1: Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Step 2: Create Express app
const app = express();

// Step 3: Middleware
app.use(cors());              // Allow cross-origin requests (Angular client)
app.use(express.json());      // Parse JSON body

// Step 4: Test root route
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Step 5: Connect to MongoDB
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error('Error: MONGO_URI is undefined. Make sure .env exists and has MONGO_URI.');
  process.exit(1);
}
if (mongoURI) {
  console.error('Mongo Server connected succefully');
}

mongoose.co
