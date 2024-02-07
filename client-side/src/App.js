

import { BrowserRouter, Route, Routes } from "react-router-dom";




import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import HomePage from "./Components/HomePage/Home..js";
import AdminLogin from "./AdminComponent/adminLogin.js";
import AdminEmailVerify from "./AdminComponent/adminVerify.js";
import AdminRegistration from "./AdminComponent/adminRegister.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />

 <Route exact path="/" element={<HomePage/>} />
 <Route path="/adminRegister" element={<AdminRegistration/>} />
 <Route path="/adminVerifyEmail" element={<AdminEmailVerify />} />
 <Route path="/adminLogin" element={<AdminLogin />} />

      </Routes>
    </>


  );
}

export default App;
