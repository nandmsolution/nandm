// or less ideally
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useState } from "react";
import "./style.css";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section>
      <header>
        <Navbar expanded={expanded} fixed="top" bg="light" expand="lg">
          <Navbar.Brand className="logo">
            <Nav.Link to="/"> N&M </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setExpanded(expanded ? false : "expanded")}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse style={{ fontSize: 20 }} id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                onClick={() => setExpanded(false)}
                className="d-flex justify-content-end"
              >
                <Link to="/" style={{ color: "gray" }}>
                  {" "}
                  Home{" "}
                </Link>
              </Nav.Link>
              <Nav.Link
                onClick={() => setExpanded(false)}
                className="d-flex justify-content-end"
                component={Link}
              >
                <Link to="/services" style={{ color: "gray" }}>
                  {" "}
                  Services{" "}
                </Link>
              </Nav.Link>
              <Nav.Link
                onClick={() => setExpanded(false)}
                className="d-flex justify-content-end"
              >
                <Link to="/about-us" style={{ color: "gray" }}>
                  {" "}
                  About Us{" "}
                </Link>
              </Nav.Link>
              <Nav.Link
                onClick={() => setExpanded(false)}
                className="d-flex justify-content-end"
              >
                <Link to="/contact-us" style={{ color: "gray" }}>
                  {" "}
                  Contact Us{" "}
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </section>
  );
};

export default Header;
