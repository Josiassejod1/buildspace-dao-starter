import React from "react";
import Home from "./Home";
import WhitePaper from "./RoadMap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mission">Our Mission</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<WhitePaper />} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
