import Container from "react-bootstrap/Container";
import { Col, Row, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Jumbotron variant="dark">
        <Container>
          <Row>
            <Col md="6" sm="12">
              <ul>
                <h2>N&M Solutions</h2>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="./contact-us">Contact Us</Link>
                </li>
              </ul>
            </Col>
            <Col md="6" sm="12">
              <ul>
                <h2>Our Services</h2>
                <li>
                  <Link to="/services">Web Design & Dev</Link>
                </li>
                <li>
                  <Link to="/services">Mobile Application Development</Link>
                </li>
                <li>
                  <Link to="/services">Digital Marketing</Link>
                </li>
                <li>
                  <Link to="/services">Content Writing</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <p style={{ textAlign: "center" }}>
        &copy; 2021 N&M Solutions All Rights Reserved
      </p>
    </footer>
  );
}
