require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mconnect', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to MConnect API' });
});

// Sample product route (we'll expand this later)
app.get('/api/products', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Calculus Textbook',
      price: 20,
      description: 'Like new condition, barely used',
      category: 'Books',
      seller: 'John Doe',
      contact: 'john@college.edu',
      image: 'https://via.placeholder.com/150',
      postedDate: '2023-10-10'
    },
    {
      id: 2,
      title: 'Bicycle',
      price: 100,
      description: 'Good condition, used for 1 year',
      category: 'Vehicles',
      seller: 'Jane Smith',
      contact: 'jane@college.edu',
      image: 'https://via.placeholder.com/150',
      postedDate: '2023-10-15'
    }
  ]);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
