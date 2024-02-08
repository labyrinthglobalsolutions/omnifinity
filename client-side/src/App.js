// import { Route, Routes } from "react-router-dom";

// import "./App.css";
// import AboutUs from "./Components/AboutUs/AboutUs";
// import HomePage from "./Components/HomePage/Home";
// import Navbar from "./Components/Header/Navbar";
// import AdminRegistration from "./AdminComponents/adminSignUp";
// import AdminEmailVerify from "./AdminComponents/adminEmailVerify";
// import AdminLogin from "./AdminComponents/adminLogin";
// import AllBanners from "./AdminComponents/allBanners";
// import AdminPannel from "./AdminComponents/adminPanel";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route exact path="/" Component={HomePage} />
//         <Route path="/adminRegister" element={<AdminRegistration />} />
//         <Route path="/adminVerifyEmail" element={<AdminEmailVerify />} />
//         <Route path="/adminLogin" element={<AdminLogin />} />
//     <Route path="/adminDashboard" element={<AdminPannel />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
import { Route, Routes, useLocation } from 'react-router-dom';

import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import HomePage from './Components/HomePage/Home';
import Navbar from './Components/Header/Navbar';
import AdminRegistration from './AdminComponents/adminSignUp';
import AdminEmailVerify from './AdminComponents/adminEmailVerify';
import AdminLogin from './AdminComponents/adminLogin';
import AllBanners from './AdminComponents/allBanners';
import AdminPannel from './AdminComponents/adminPanel';

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
        <Route path="/adminRegister" element={<AdminRegistration />} />
        <Route path="/adminVerifyEmail" element={<AdminEmailVerify />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminDashboard/*" element={<AdminPannel />} />
      </Routes>
    </>
  );
}

export default App;
