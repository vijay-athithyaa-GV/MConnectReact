import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const LoginModal = ({ show, onHide, onSwitchToSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle login here
    console.log('Login submitted:', formData);
    // For demo purposes, just close the modal
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login to MConnect</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
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
              placeholder="Enter your password"
              required
            />
            <div className="text-end">
              <a href="#forgot-password" className="small">Forgot password?</a>
            </div>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <Button variant="primary" type="submit" className="w-100 mb-3">
            Login
          </Button>
          <div className="text-center">
            <p className="mb-0">
              Don't have an account?{' '}
              <button 
                type="button" 
                className="btn btn-link p-0" 
                onClick={() => {
                  onHide();
                  onSwitchToSignup();
                }}
              >
                Sign up
              </button>
            </p>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
