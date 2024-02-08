import { Route, Routes } from "react-router-dom";

import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import HomePage from "./Components/HomePage/Home";
import Navbar from "./Components/Header/Navbar";
import AdminRegistration from "./AdminComponents/adminSignUp";
import AdminEmailVerify from "./AdminComponents/adminEmailVerify";
import AdminLogin from "./AdminComponents/adminLogin";
import InnovationSolutions from "./Components/Services/InnovationSolution/InnovationSolutions";
import Footer from "./Components/Footer/Footer";

import EnterpriseSystems from "./Components/Services/EnterpriseEdition/EnterpriseSystems";
import ManagedServices from "./Components/Services/ManagedServices/ManagedServices";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route exact path="/" Component={HomePage} />
        <Route path="/innovation-solutions" element={<InnovationSolutions />} />
        <Route path="/enterprise-systems" element={<EnterpriseSystems />} />
        <Route path="/managed-services" element={<ManagedServices />} />
        <Route path="/adminregister" element={<AdminRegistration />} />
        <Route path="/adminVerifyEmail" element={<AdminEmailVerify />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
