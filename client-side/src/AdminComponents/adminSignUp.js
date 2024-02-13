import React, { useState } from "react";

import "./adminRegistration.css"; // Create a new CSS file for styling
import { Link, useNavigate } from "react-router-dom";

function AdminRegistration() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    setError("");

    const jsonData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    fetch("http://localhost:4000/api/v1/adminsignup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => {
        if (response.status === 201) {
          response.json().then((data) => {
            alert("Registration successful:", data);
            navigate("/adminVerifyEmail");
          });
        } else if (response.status === 500) {
          response.json().then((data) => {
            setError(data.message);
          });
        } else {
          setError("Registration failed");
        }
      })
      .catch(() => {
        setError("Error occurred during registration");
      });
  };

  return (
    <>
      <div className="admin-register-main-container">
        <div className="admin-login-form-container">
          <h2 className="admin-login-heading">Admin Registration</h2>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
              placeholder="Enter username"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              onChange={handleInputChange}
              placeholder="Enter Password"
            />
          </div>
          <div class="col-auto">
            <button
              type="submit"
              class="btn btn-primary"
              onClick={handleRegistration}
            >
              Login
            </button>
          </div>
          <Link to="/adminlogin" className="forgot-password">
            Already Have an account?
          </Link>
        </div>
      </div>
    </>
  );
}

export default AdminRegistration;
