import React, { useState } from "react";
import "./forgetPassword.css";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
    const [email, setEmail] = useState("");
const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/v1/admin-forget-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });
        if (response.ok) {
            const data = await response.json();
            alert("Password token link sent to your email.");
           navigate("/reset-password");
        } else {
            alert("Failed to reset your password.Try again.");
            console.log(response);
        }

    }
    return (
        <div className="forgetPassword">
            <form>
                <h1>Forget Password</h1>
                <input

                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
            <button className="btn-forget" type="submit" onClick={handleSubmit}>Submit</button>
                </form>
                </div>

    )

}
export default ForgetPassword;