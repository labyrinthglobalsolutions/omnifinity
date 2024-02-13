import React, { useState } from "react";
import "./forgetPassword.css";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:4000/api/v1/admin-forget-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      alert("Password token link sent to your email.");
      navigate("/reset-password");
    } else {
      alert("Failed to reset your password.Try again.");
      console.log(response);
    }
  };
  return (
    <div className="forgot-password-main-container">
      <form className="forgot-password-form">
        <h1 className="forgot-password-heading">Forget Password</h1>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            value={email}
            className="form-control"
            name="email"
            id="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default ForgetPassword;
