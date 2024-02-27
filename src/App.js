import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"; // Import Button component
import Form from "react-bootstrap/Form"; // Import Form component
import FormControl from "react-bootstrap/FormControl"; // Import FormControl component
import "bootstrap/dist/css/bootstrap.css";
import "./App.css"; // Import custom CSS file for button styling
import logo from './assets/acr.png'; // Import your logo image

import HomePage from "./Home";
import About from "./About";
import EducationSection from "./Education";
import GroupExample from "./Contact";
import API from "./API";

function App() {
  return (
    <Router>
      <div>
        <Navbar style={{ backgroundColor: 'rgba(139, 0, 0, 0.8)', borderBottom: '4px solid white' }} data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="Logo" height="50" /> {/* Adjust the height of the logo */}
            </Navbar.Brand>
            <div className="d-flex"> {/* Wrap Nav links with a div to use flexbox */}
              <Button as={Link} to={"/home"} className="custom-button">HOME</Button>
              <Button as={Link} to={"/about"} className="custom-button">About</Button>
              <Button as={Link} to={"/education"} className="custom-button">Education</Button>
              <Button as={Link} to={"/contact"} className="custom-button">Contact</Button>
              <Button as={Link} to={"/api"} className="custom-button">API</Button>
            </div>
            <Form className="d-flex ms-auto"> {/* Add Form component for search bar */}
  <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
  <Button variant="outline-secondary" style={{ borderColor: 'black', color: 'darkred', fontWeight: 'bold', backgroundColor: 'grey' }}>Search</Button>
  </Form>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<EducationSection />} />
          <Route path="/contact" element={<GroupExample />} />
          <Route path="/api" element={<API />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;