import { Route, Routes } from "react-router-dom";

import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import HomePage from "./Components/HomePage/Home";
import Navbar from "./Components/Header/Navbar";
import AdminRegistration from "./AdminComponents/adminSignUp";
import AdminEmailVerify from "./AdminComponents/adminEmailVerify";
import AdminLogin from "./AdminComponents/adminLogin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />

        <Route exact path="/" Component={HomePage} />
        <Route path="/adminregister" element={<AdminRegistration />} />
        <Route path="/adminVerifyEmail" element={<AdminEmailVerify />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
      </Routes>
    </>
  );
}

export default App;
