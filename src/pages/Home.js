import { home_info } from "./home_data";
import Showcase from "../components/showcase/Showcase";

import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Testimony = () => {
  const testimony = useRef(null);
  useEffect(() => {
    ScrollReveal().reveal(testimony.current, {
      duration: 2000,
      origin: "bottom",
      distance: "300px",
    });
  }, []);

  return (
    <div className="p-2">
      <Jumbotron ref={testimony}>
        <Container>
          <h3 style={{ textAlign: "center" }}>
            <i>
              Our chief want in life, is someone who shall make us do what we
              can. This is the service of a friend. With him, we are easily
              great...
            </i>
          </h3>
          <br />
          <p style={{ fontSize: "21px", textAlign: "center" }}>
            - Ralph Waldo Emerson{" "}
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

const Home = () => {
  return (
    <div className="p-4">
      <Showcase
        image={home_info[0].image}
        heading={home_info[0].caption.heading}
        desc={home_info[0].caption.desc}
      />
      <Testimony />
      <Container fluid>
        <Row>
          <Col md="12" lg="6" sm="12">
            <Showcase
              image={home_info[1].image}
              heading={home_info[1].caption.heading}
              desc={home_info[1].caption.desc}
            />
          </Col>
          <Col md="12" lg="6" sm="12">
            <Showcase
              image={home_info[2].image}
              heading={home_info[2].caption.heading}
              desc={home_info[2].caption.desc}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
