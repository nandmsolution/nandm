import { Image, Container, Row, Col } from "react-bootstrap";
import ScrollReveal from "scrollreveal";
import { useRef, useEffect } from "react";

function Avtar({ src }) {
  return (
    <div style={{ padding: "10px" }}>
      <Image src={src.img} width="200px" height="220px" roundedCircle />
    </div>
  );
}

function Member({ memberData }) {
  const member = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(member.current, {
      duration: 2000,
      origin: "bottom",
      distance: "300px",
    });
  }, []);
  return (
    <div style={{ paddingBottom: "20px" }}>
      <Container ref={member}>
        <Row>
          <Col md="4" sm="12">
            <Avtar src={memberData} />
          </Col>
          <Col md="8" sm="12">
            <h2>{memberData.name}</h2>
            <p>{memberData.description}</p>
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
}

export default Member;
