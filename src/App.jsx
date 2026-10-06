import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import AboutUs from "./components/AboutUs";

function Home() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Bring nature home with beautiful and healthy houseplants.
          Discover a wide variety of indoor plants and create a greener,
          fresher, and more peaceful living space.
        </p>

        <Link to="/plants" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
}

function PlantsPlaceholder() {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Plants</h1>
      <p>The plant collection will be available here.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/plants" element={<PlantsPlaceholder />} />

        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;