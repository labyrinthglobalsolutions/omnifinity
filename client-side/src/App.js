import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import ResetPassword from "./AdminComponents/resetPassword.js";
import HomePage from "./Components/HomePage/Home";
import Navbar from "./Components/Header/Navbar";
import ResellerMendixPage from "./Components/Services/ResellerMendixPage";
import ResellerPolarionPage from "./Components/Services/ResellerPolarianPage";
import Analytics from "./Components/Services/InnovationSolution/AnalyticsBI/Analytics.js";
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
import SapBusinessByDesign from "./Components/Services/EnterpriseEdition/SapBusiness/SapBusiness.js";
import SapBusinessOne from "./Components/Services/EnterpriseEdition/SapBusinessOne/SapBusinessOne.js";
import SapCustomer from "./Components/Services/EnterpriseEdition/SapCustomer/SapCustomer.js";
import SapAriba from "./Components/Services/EnterpriseEdition/SapAriba/SapAriba.js";
import ManagedCloud from "./Components/Services/ManagedServices/ManagedCloud/ManagedCloud.js";
import DevOps from "./Components/Services/ManagedServices/DevOps/DevOps.js";
import Staff from "./Components/Services/ManagedServices/StaffAgumentation/Staff.js";

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

        <Route path="/enterprise-systems/sap-hana" element={<SapHana />} />
        <Route
          path="/enterprise-systems/sap-business-by-design"
          element={<SapBusinessByDesign />}
        />
        <Route
          path="/enterprise-systems/sap-business-one"
          element={<SapBusinessOne />}
        />

        <Route
          path="/enterprise-systems/sap-customer-checkout"
          element={<SapCustomer />}
        />

        <Route
          path="/managed-services/manage-cloud"
          element={<ManagedCloud />}
        />

        <Route path="/managed-services/devops" element={<DevOps />} />
        <Route
          path="/managed-services/staff-augmentation"
          element={<Staff />}
        />

        <Route path="/enterprise-systems/sap-ariba" element={<SapAriba />} />
        <Route path="/AnalyticsBI" element={<Analytics />} />
        <Route path="/adminVerifyEmail" element={<AdminEmailVerify />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/adminDashboard/*" element={<AdminPannel />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/mendixPage" element={<ResellerMendixPage />} />
        <Route path="/AnalyticsBI" element={<Analytics />} />
        <Route path="/polarionPage" element={<ResellerPolarionPage />} />
      </Routes>
      {!isInsideAdminPanel && <Footer />}
    </>
  );
}

export default App;
