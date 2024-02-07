import { Route, Routes } from "react-router-dom";

import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import HomePage from "./Components/HomePage/Home";
import Navbar from "./Components/Header/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />

        <Route exact path="/" Component={HomePage} />
      </Routes>
    </>
  );
}

export default App;
