import React from "react";
import Home from "./Home";
import Mission from "./Mission";
import { Nav, NavItem, NavLink, Container } from "reactstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import RoadMap from "./RoadMap";

const App = () => {
  return (
    <Router>
       <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Nav
        >
          <NavItem>
            <NavLink
            >
              <Link to="/">Home</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink >
              <Link to="/mission">Our Mission</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink >
              <Link to="/roadmap">Our RoadMap</Link>
            </NavLink>
          </NavItem>
        </Nav>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/roadmap" element={<RoadMap />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
