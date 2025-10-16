import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

const SignupModal = ({ show, onHide, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAgreed: false
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (!formData.termsAgreed) {
      setError('You must agree to the terms and conditions');
      return;
    }
    
    // In a real app, you would handle signup here
    console.log('Signup submitted:', formData);
    
    // For demo purposes, just close the modal
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Create an Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger" onClose={() => setError('')} dismissible>{error}</Alert>}
        
        <Form onSubmit={handleSubmit}>
          <div className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              minLength="6"
              required
            />
            <Form.Text className="text-muted">
              Must be at least 6 characters
            </Form.Text>
          </div>
          
          <div className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              minLength="6"
              required
            />
          </div>
          
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="termsAgreed"
              name="termsAgreed"
              checked={formData.termsAgreed}
              onChange={handleChange}
              required
            />
            <label className="form-check-label" htmlFor="termsAgreed">
              I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>
            </label>
          </div>
          
          <Button variant="primary" type="submit" className="w-100 mb-3">
            Create Account
          </Button>
          
          <div className="text-center">
            <p className="mb-0">
              Already have an account?{' '}
              <button 
                type="button" 
                className="btn btn-link p-0"
                onClick={() => {
                  onHide();
                  onSwitchToLogin();
                }}
              >
                Log in
              </button>
            </p>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SignupModal;
