require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory data store
const products = [
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
  },
  {
    id: 3,
    title: 'Graphing Calculator',
    price: 50,
    description: 'TI-84 Plus, works perfectly',
    category: 'Electronics',
    seller: 'Alex Johnson',
    contact: 'alex@college.edu',
    image: 'https://via.placeholder.com/150',
    postedDate: '2023-10-20'
  }
];

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to MConnect API' });
});

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Get single product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

// Add a new product
app.post('/api/products', (req, res) => {
  const newProduct = {
    id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
    ...req.body,
    postedDate: new Date().toISOString().split('T')[0]
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Update a product
app.put('/api/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Product not found' });

  const updatedProduct = { ...products[index], ...req.body };
  products[index] = updatedProduct;
  res.json(updatedProduct);
});

// Delete a product
app.delete('/api/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Product not found' });

  const deletedProduct = products.splice(index, 1)[0];
  res.json({ message: 'Product deleted', product: deletedProduct });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});