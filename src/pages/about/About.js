import { useRef, useEffect } from "react";
import { Jumbotron, Container, Col, Row } from "react-bootstrap";
import Member from "../../components/Member";
import { memberInfo } from "./about_info";
import ScrollReveal from "scrollreveal";

export default function About() {
  const abt = useRef(null);
  const team = useRef(null);
  const member = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(abt.current, {
      duration: 2000,
      origin: "bottom",
      distance: "300px",
    });
    ScrollReveal().reveal(team.current, {
      duration: 2000,
      origin: "bottom",
      distance: "300px",
    });
    ScrollReveal().reveal(member.current, {
      duration: 2000,
      origin: "bottom",
      distance: "300px",
    });
  }, []);

  return (
    <div>
      <Jumbotron fluid>
        <Container ref={abt}>
          <Row>
            <Col md="6" sm="12">
              <h1>About Us</h1>
              <blockquote>
                Noorani & Master Solutions Pvt Ltd. founded and built in the
                unpreceded time of Covid-19 era caters to support Vocal for
                Local and with an intent to bring Small Medium Buissnesses to
                expand in this digital era and increasing there market reach
                which in turn lead to higher revenue and faster growth rate in
                digital as well as local market area.
              </blockquote>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <br />
      <Jumbotron fluid background="steelblue">
        <Container ref={team} className="p-2">
          <h1>
            <center>Meet Our team</center>
          </h1>
          <blockquote>
            "Assembling a team is not about filling seats—it’s about finding
            people whose individual talents and demeanor complement each other.
            Every member of the Web Solutions team brings something unique to
            the table. From day-to-day brainstorming through execution, our
            collaborative process results in work we’re proud of."
          </blockquote>
        </Container>
      </Jumbotron>

      {memberInfo.map((item, index) => {
        return <Member key={index} memberData={item} />;
      })}
    </div>
  );
}
