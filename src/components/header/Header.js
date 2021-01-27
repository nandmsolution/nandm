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
            <Nav.Link href="/"> N&M </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setExpanded(expanded ? false : "expanded")}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse style={{ fontSize: 20 }} id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                onClick={() => setExpanded(false)}
                href="/"
                className="d-flex justify-content-end"
                component={Link}
              >
                {" "}
                Home{" "}
              </Nav.Link>
              <Nav.Link
                onClick={() => setExpanded(false)}
                href="/services"
                className="d-flex justify-content-end"
                component={Link}
              >
                {" "}
                Services{" "}
              </Nav.Link>
              <Nav.Link
                onClick={() => setExpanded(false)}
                href="/about-us"
                className="d-flex justify-content-end"
                component={Link}
              >
                {" "}
                About Us{" "}
              </Nav.Link>
              <Nav.Link
                onClick={() => setExpanded(false)}
                href="/contact-us"
                className="d-flex justify-content-end"
                component={Link}
              >
                {" "}
                Contact Us{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </section>
  );
};

export default Header;
