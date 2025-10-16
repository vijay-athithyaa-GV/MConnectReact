import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import SellItem from './components/SellItem';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

// Sample data
const sampleProducts = [
  {
    id: 1,
    title: 'Calculus Textbook',
    price: 20,
    description: 'Like new condition, barely used. Includes all practice problems with solutions.',
    category: 'Books',
    seller: 'John Doe',
    contact: 'john@college.edu',
    image: 'https://images.unsplash.com/photo-1544947950-3c2d0af426ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    postedDate: '2023-10-10',
    condition: 'Like New',
    location: 'Main Campus',
    tags: ['textbook', 'math', 'calculus']
  },
  {
    id: 2,
    title: 'Mountain Bike',
    price: 150,
    description: 'Good condition, used for 1 year. Recently serviced with new tires and brakes.',
    category: 'Bikes',
    seller: 'Jane Smith',
    contact: 'jane@college.edu',
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    postedDate: '2023-10-15',
    condition: 'Good',
    location: 'North Campus',
    tags: ['bicycle', 'transportation', 'outdoor']
  },
  {
    id: 3,
    title: 'Gaming Laptop',
    price: 750,
    description: 'High-performance gaming laptop with RTX 3060, 16GB RAM, 1TB SSD. Great for gaming and development.',
    category: 'Electronics',
    seller: 'Alex Johnson',
    contact: 'alex@college.edu',
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    postedDate: '2023-10-12',
    condition: 'Excellent',
    location: 'Engineering Building',
    tags: ['laptop', 'gaming', 'computer']
  },
  {
    id: 4,
    title: 'Desk Chair',
    price: 45,
    description: 'Ergonomic office chair, adjustable height and tilt. Great for long study sessions.',
    category: 'Furniture',
    seller: 'Mike Wilson',
    contact: 'mike@college.edu',
    image: 'https://images.unsplash.com/photo-1505797149-43ae086595e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    postedDate: '2023-10-18',
    condition: 'Good',
    location: 'Dorm Area',
    tags: ['chair', 'office', 'ergonomic']
  },
  {
    id: 5,
    title: 'Graphing Calculator',
    price: 80,
    description: 'TI-84 Plus CE graphing calculator. Works perfectly, includes case and charging cable.',
    category: 'Electronics',
    seller: 'Sarah Lee',
    contact: 'sarah@college.edu',
    image: 'https://images.unsplash.com/photo-1587145820099-1b333d444b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    postedDate: '2023-10-17',
    condition: 'Like New',
    location: 'Math Building',
    tags: ['calculator', 'math', 'tools']
  },
  {
    id: 6,
    title: 'Winter Jacket',
    price: 60,
    description: 'North Face winter jacket, size M. Waterproof and insulated, perfect for cold weather.',
    category: 'Clothing',
    seller: 'Emily Chen',
    contact: 'emily@college.edu',
    image: 'https://images.unsplash.com/photo-1551028719-00167d1e1b0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    postedDate: '2023-10-16',
    condition: 'Good',
    location: 'Student Union',
    tags: ['jacket', 'winter', 'clothing']
  }
];

function App() {
  const [products] = useState(sampleProducts);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/sell" element={<SellItem />} />
            <Route 
              path="/products" 
              element={<ProductList products={products} loading={false} />} 
            />
            <Route 
              path="/product/:id" 
              element={<ProductDetail products={products} />} 
            />
            <Route 
              path="/category/:category" 
              element={({ match }) => {
                const category = match?.params?.category;
                const filtered = products.filter(
                  p => p.category.toLowerCase() === category.toLowerCase()
                );
                return <ProductList products={filtered} loading={false} />;
              }} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
