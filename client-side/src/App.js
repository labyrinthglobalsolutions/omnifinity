import HomePage from "./Components/HomePage/Home.";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={HomePage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
