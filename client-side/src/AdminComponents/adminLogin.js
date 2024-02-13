import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./adminRegistration.css";
const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/adminlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 200) {
        alert("Login successful:", data);

        navigate("/adminDashboard");
        sessionStorage.setItem("token", data.token);
      } else {
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="admin-login-main-container">
      <div className="admin-login-form-container">
        <h2 className="admin-login-heading">Admin Login</h2>
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
          <button type="submit" class="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
        <Link to="/forget-password" className="forgot-password">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default AdminLogin;
