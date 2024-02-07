import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminRegistration.css';
const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
 const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/adminlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 200) {
        // Login successful
        alert('Login successful:', data);

navigate('/adminDashboard');
        // Store the token in session storage
        sessionStorage.setItem('token', data.token);

        // Redirect or perform any other actions after successful login
        // navigate('/adminDashboard');
      } else {
        // Login failed
        console.error('Login failed:', data.message);
        // Handle the error, show a message, or redirect as needed
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle the error, show a message, or redirect as needed
    }
  };

  return (
    <div className='registration-container'>
      <h1>Admin Login</h1>
      <div className='form-container'>
        <div className='form'>
          <div className='form-group'>
            <label>Email</label>
            <input
              type='email'
              name='email'
              className='form-control'
              placeholder='Enter Email'
              onChange={handleInputChange}
            />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              className='form-control'
              placeholder='Enter Password'
              onChange={handleInputChange}
            />
          </div>
          <button type='submit' className='btn-primary' onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
