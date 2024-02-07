import React, { useState } from 'react';

import './adminRegistration.css'; // Create a new CSS file for styling

function AdminRegistration() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegistration = (e) => {
        e.preventDefault();
        setError('');

        const jsonData = {
            username: formData.username,
            email: formData.email,
            password: formData.password,
        };

        fetch('http://localhost:4000/api/v1/adminsignup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        })
            .then((response) => {
                if (response.status === 201) {
                    response.json().then((data) => {
                        alert('Registration successful:', data);
                    });
                } else if (response.status === 500) {
                    response.json().then((data) => {
                        setError(data.message);
                    });
                } else {
                    setError('Registration failed');
                }
            })
            .catch(() => {
                setError('Error occurred during registration');
            });
    };

    return (
        <div className="registration-container">
            <h1>Admin Registration</h1>
            <div className="form-container">
                <div className="form">
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            placeholder="Enter Username"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter Email"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter Password"
                            onChange={handleInputChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn-primary"
                        onClick={handleRegistration}
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AdminRegistration;
