import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AboutUs from './Components/AboutUs/AboutUs';
import HomePage from './Components/HomePage/Home';
import Navbar from './Components/Header/Navbar';
import AdminRegistration from './AdminComponents/adminSignUp';
import AdminEmailVerify from './AdminComponents/adminEmailVerify';
import AdminLogin from './AdminComponents/adminLogin';
import AdminPannel from './AdminComponents/adminPanel';
import Contact from './Components/ContactUs/Contact';
import Footer from './Components/Footer/Footer';
import InnovationSolutions from "./Components/Services/InnovationSolution/InnovationSolutions";

import EnterpriseSystems from "./Components/Services/EnterpriseEdition/EnterpriseSystems";
import ManagedServices from "./Components/Services/ManagedServices/ManagedServices";


function App() {
  const location = useLocation();

  // Check if the current route is inside the admin panel
  const isInsideAdminPanel = location.pathname.startsWith('/adminDashboard');

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
        <Route path="/adminVerifyEmail" element={<AdminEmailVerify />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/adminDashboard/*" element={<AdminPannel />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
