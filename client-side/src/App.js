import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import ResetPassword from "./AdminComponents/resetPassword.js";
import HomePage from "./Components/HomePage/Home";
import Navbar from "./Components/Header/Navbar";
import AdminRegistration from "./AdminComponents/adminSignUp";
import AdminEmailVerify from "./AdminComponents/adminEmailVerify";
import AdminLogin from "./AdminComponents/adminLogin";
import AdminPannel from "./AdminComponents/adminPanel";
import Contact from "./Components/ContactUs/Contact";
import Footer from "./Components/Footer/Footer";
import InnovationSolutions from "./Components/Services/InnovationSolution/InnovationSolutions";
import ForgetPassword from "./AdminComponents/forgetPassword.js";
import EnterpriseSystems from "./Components/Services/EnterpriseEdition/EnterpriseSystems";

import ManagedServices from "./Components/Services/ManagedServices/ManagedServices";
import SapHana from "./Components/Services/EnterpriseEdition/SapHana/SapHana";

function App() {
  const location = useLocation();
  const [services, setServices] = useState([]);

  // Check if the current route is inside the admin panel
  const isInsideAdminPanel = location.pathname.startsWith("/adminDashboard");

  const fetchServices = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/getservice", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch banners");
      }

      const data = await response.json();
      console.log(data, "services");
      setServices(data);
    } catch (error) {
      console.error("Error fetching banners:", error.message);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <>
      {!isInsideAdminPanel && <Navbar />}
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route exact path="/" element={<HomePage />} />
        <Route path="/adminregister" element={<AdminRegistration />} />
        <Route path="/innovation-solutions" element={<InnovationSolutions />} />
        <Route path="/enterprise-systems" element={<EnterpriseSystems />} />
        <Route path="/managed-services" element={<ManagedServices />} />
        <Route path="/sap-hana" element={<SapHana />} />
        <Route path="/adminVerifyEmail" element={<AdminEmailVerify />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/adminDashboard/*" element={<AdminPannel />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      {!isInsideAdminPanel && <Footer />}
    </>
  );
}

export default App;
