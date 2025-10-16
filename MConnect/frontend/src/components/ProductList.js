import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products, loading }) => {
  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="alert alert-info" role="alert">
        No products available. Be the first to list an item!
      </div>
    );
  }

  return (
    <div className="row">
      <h2 className="mb-4">Available Items</h2>
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <div className="card h-100">
            <img 
              src={product.image} 
              className="card-img-top" 
              alt={product.title} 
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text text-muted">{product.category}</p>
              <p className="card-text">
                <strong>${product.price}</strong>
              </p>
              <p className="card-text text-truncate">{product.description}</p>
              <Link to={`/product/${product.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
            <div className="card-footer text-muted">
              <small>Posted by {product.seller} on {new Date(product.postedDate).toLocaleDateString()}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
