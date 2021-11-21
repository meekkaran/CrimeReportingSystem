import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Support from "./components/Support";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
  <Router>
    <Navbar />
      <Routes>
          <Route path="/home" element={ <Home />} />
      </Routes>
      <Routes>
          <Route path="/about" element={<About/>} />
      </Routes>
      <Routes>
          <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Routes>
          <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Routes>
          <Route path="/support" element={<Support/>} />
      </Routes>
  </Router>
  );
}

export default App;
