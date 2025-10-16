import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const categories = [
    { name: 'Books', icon: 'book', count: 24 },
    { name: 'Electronics', icon: 'laptop', count: 15 },
    { name: 'Furniture', icon: 'lamp', count: 8 },
    { name: 'Clothing', icon: 'tshirt', count: 19 },
    { name: 'Bikes', icon: 'bicycle', count: 5 },
    { name: 'Others', icon: 'grid', count: 12 },
  ];

  const featuredProducts = [
    {
      id: 1,
      title: 'Calculus Textbook',
      price: 20,
      category: 'Books',
      image: 'https://images.unsplash.com/photo-1544947950-3c2d0af426ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      postedDate: '2023-10-10'
    },
    {
      id: 2,
      title: 'Mountain Bike',
      price: 150,
      category: 'Bikes',
      image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      postedDate: '2023-10-15'
    },
    {
      id: 3,
      title: 'Gaming Laptop',
      price: 750,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      postedDate: '2023-10-12'
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section bg-light py-5 mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Buy & Sell Within Campus</h1>
              <p className="lead mb-4">Find great deals on used textbooks, electronics, furniture, and more from your fellow students.</p>
              <div className="d-flex gap-3">
                <Link to="/products" className="btn btn-primary btn-lg">
                  <i className="bi bi-search me-2"></i>Browse Listings
                </Link>
                <Link to="/sell" className="btn btn-outline-primary btn-lg">
                  <i className="bi bi-plus-circle me-2"></i>Sell an Item
                </Link>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Students on campus" 
                className="img-fluid rounded-3 shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section mb-5">
        <div className="container">
          <h2 className="mb-4">Shop by Category</h2>
          <div className="row g-4">
            {categories.map((category, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2">
                <Link to={`/category/${category.name.toLowerCase()}`} className="text-decoration-none">
                  <div className="card h-100 border-0 shadow-sm hover-shadow transition-all text-center p-4">
                    <div className="mb-3">
                      <i className={`bi bi-${category.icon} fs-1 text-primary`}></i>
                    </div>
                    <h5 className="mb-0">{category.name}</h5>
                    <small className="text-muted">{category.count} items</small>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="featured-section mb-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0">Featured Listings</h2>
            <Link to="/products" className="btn btn-outline-primary">View All</Link>
          </div>
          <div className="row g-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                  <div className="position-relative">
                    <img 
                      src={product.image} 
                      className="card-img-top" 
                      alt={product.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <span className="position-absolute top-0 end-0 bg-primary text-white px-2 py-1 m-2 rounded-pill small">
                      {product.category}
                    </span>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <h4 className="text-primary mb-0">${product.price}</h4>
                      <Link to={`/product/${product.id}`} className="btn btn-sm btn-outline-primary">
                        View Details
                      </Link>
                    </div>
                  </div>
                  <div className="card-footer bg-transparent border-0 pt-0">
                    <small className="text-muted">
                      <i className="bi bi-clock me-1"></i> 
                      Posted {new Date(product.postedDate).toLocaleDateString()}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">How It Works</h2>
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <div className="bg-white p-4 rounded-3 h-100">
                <div className="icon-wrapper bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                  <i className="bi bi-search fs-3"></i>
                </div>
                <h4>1. Find What You Need</h4>
                <p className="mb-0">Browse through hundreds of listings from students in your campus.</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="bg-white p-4 rounded-3 h-100">
                <div className="icon-wrapper bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                  <i className="bi bi-chat-dots fs-3"></i>
                </div>
                <h4>2. Contact Seller</h4>
                <p className="mb-0">Message the seller directly to ask questions or make an offer.</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="bg-white p-4 rounded-3 h-100">
                <div className="icon-wrapper bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                  <i className="bi bi-currency-dollar fs-3"></i>
                </div>
                <h4>3. Make a Deal</h4>
                <p className="mb-0">Meet on campus to complete your purchase safely and securely.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
