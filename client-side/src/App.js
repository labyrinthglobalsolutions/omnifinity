import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
