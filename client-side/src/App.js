
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
 <Route exact path="/" Component={HomePage} />
      </Routes>
    </>

  );
}

export default App;
