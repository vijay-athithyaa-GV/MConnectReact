import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="alert alert-warning">
        Product not found. <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="row">
        <div className="col-md-6">
          <img 
            src={product.image} 
            alt={product.title} 
            className="img-fluid rounded"
            style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p className="text-muted">{product.category}</p>
          <h3 className="text-primary mb-4">${product.price}</h3>
          
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Description</h5>
              <p className="card-text">{product.description}</p>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Seller Information</h5>
              <p className="mb-1"><strong>Name:</strong> {product.seller}</p>
              <p className="mb-1"><strong>Contact:</strong> {product.contact}</p>
              <p className="mb-0"><strong>Posted on:</strong> {new Date(product.postedDate).toLocaleDateString()}</p>
            </div>
          </div>

          <div className="d-grid gap-2 d-md-flex">
            <button className="btn btn-primary btn-lg me-md-2">
              <i className="bi bi-chat-dots me-2"></i>Message Seller
            </button>
            <button className="btn btn-outline-secondary btn-lg">
              <i className="bi bi-heart me-2"></i>Save Item
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-5">
        <Link to="/" className="btn btn-outline-secondary">
          <i className="bi bi-arrow-left me-2"></i>Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
