import React, { useState } from "react";
import "./forgetPassword.css";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
    
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/v1/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, newPassword }),
    });
    if (response.ok) {
      const data = await response.json();
      alert("Password reset successful. You can now log in with your new password.");
     navigate("/adminLogin");
    } else {
      alert("Failed to reset your password. Please try again.");
      console.log(response);
    }
  }
  return (
    <div className="forgetPassword">
<form>
    <h1>Reset Password</h1>
    <input
    type="text"
    name="token"
    id="token"
    value={token}
    onChange={(e) => setToken(e.target.value)}
    placeholder="Token"
  />
  <input
    type="password"
    name="newPassword"
    id="newPassword"
    value={newPassword}
    onChange={(e) => setNewPassword(e.target.value)}
    placeholder="New Password"
  />
  <button className="btn-forget" type="submit" onClick={handleSubmit}>Submit</button>

</form>

    </div>
      


  )
}
export default ResetPassword;