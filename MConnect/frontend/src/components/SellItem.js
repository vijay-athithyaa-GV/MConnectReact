import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SellItem = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
    description: '',
    condition: 'excellent',
    images: [],
    contactEmail: '',
    phone: ''
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const categories = [
    'Books',
    'Electronics',
    'Furniture',
    'Clothing',
    'Bikes',
    'Other'
  ];

  const conditions = [
    { value: 'new', label: 'Brand New' },
    { value: 'excellent', label: 'Like New' },
    { value: 'good', label: 'Good' },
    { value: 'fair', label: 'Fair' },
    { value: 'poor', label: 'Poor' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setFormData(prev => ({
          ...prev,
          images: [...prev.images, reader.result]
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Item listed:', formData);
      setIsSubmitting(false);
      setSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          title: '',
          category: '',
          price: '',
          description: '',
          condition: 'excellent',
          images: [],
          contactEmail: '',
          phone: ''
        });
        setPreviewImage(null);
        setSuccess(false);
        // Show success message
        alert('Your item has been listed successfully!');
        navigate('/');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="sell-item-page py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm border-0">
              <div className="card-header bg-white py-3">
                <h2 className="h4 mb-0">List an Item for Sale</h2>
                <p className="text-muted mb-0">Fill in the details of your item below</p>
              </div>
              <div className="card-body p-4">
                {success && (
                  <div className="alert alert-success">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Your item has been listed successfully!
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  {/* Basic Information */}
                  <div className="mb-4">
                    <h5 className="mb-3 border-bottom pb-2">Basic Information</h5>
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label fw-bold">Item Title *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Calculus Textbook 3rd Edition"
                      />
                    </div>
                    
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="category" className="form-label fw-bold">Category *</label>
                        <select
                          className="form-select"
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a category</option>
                          {categories.map((category, index) => (
                            <option key={index} value={category.toLowerCase()}>
                              {category}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="price" className="form-label fw-bold">Price ($) *</label>
                        <div className="input-group">
                          <span className="input-group-text">$</span>
                          <input
                            type="number"
                            className="form-control"
                            id="price"
                            name="price"
                            min="0"
                            step="0.01"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            placeholder="0.00"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label fw-bold">Description *</label>
                      <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        rows="4"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        placeholder="Describe your item in detail..."
                      ></textarea>
                      <div className="form-text">
                        Include details like brand, model, condition, and any defects.
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <label className="form-label fw-bold">Condition *</label>
                      <div className="d-flex flex-wrap gap-3">
                        {conditions.map((condition) => (
                          <div key={condition.value} className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="condition"
                              id={`condition-${condition.value}`}
                              value={condition.value}
                              checked={formData.condition === condition.value}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor={`condition-${condition.value}`}>
                              {condition.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Photos */}
                  <div className="mb-4">
                    <h5 className="mb-3 border-bottom pb-2">Photos</h5>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="upload-area border rounded-3 p-4 text-center">
                          {previewImage ? (
                            <img 
                              src={previewImage} 
                              alt="Preview" 
                              className="img-fluid mb-2 rounded"
                              style={{ maxHeight: '150px' }}
                            />
                          ) : (
                            <div className="py-4">
                              <i className="bi bi-images fs-1 text-muted mb-2 d-block"></i>
                              <p className="mb-0 small">Upload a photo of your item</p>
                            </div>
                          )}
                          <label className="btn btn-outline-primary btn-sm mt-2">
                            <i className="bi bi-upload me-1"></i> Choose File
                            <input 
                              type="file" 
                              className="d-none" 
                              accept="image/*"
                              onChange={handleImageChange}
                            />
                          </label>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="alert alert-info">
                          <i className="bi bi-info-circle-fill me-2"></i>
                          <strong>Tips for great photos:</strong>
                          <ul className="mb-0 mt-2">
                            <li>Use natural lighting</li>
                            <li>Show any defects or damage</li>
                            <li>Take photos from multiple angles</li>
                            <li>Avoid using filters</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="mb-4">
                    <h5 className="mb-3 border-bottom pb-2">Contact Information</h5>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="contactEmail" className="form-label fw-bold">Email Address *</label>
                        <input
                          type="email"
                          className="form-control"
                          id="contactEmail"
                          name="contactEmail"
                          value={formData.contactEmail}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(123) 456-7890"
                        />
                        <div className="form-text">Optional, but recommended for faster responses</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                    <button 
                      type="button" 
                      className="btn btn-outline-secondary me-md-2"
                      onClick={() => navigate('/')}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Listing...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-check-lg me-2"></i>
                          List Item for Sale
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellItem;
