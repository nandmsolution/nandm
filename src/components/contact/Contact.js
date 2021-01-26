import { useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { Container, Col, Form, Button } from "react-bootstrap";
init("user_wg7nqqz9f9OrYpD88m51p");

export default function Contact() {
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    message: null,
  });

  const handleOnChange = (e) => {
    const id = e.target.id;

    const val = e.target.value.trim();
    setFormData({ ...formData, [id]: val });
  };

  const handleOnSubmit = (e) => {
    //handle form
    const serviceID = "service_hvjk4ag";
    const templateID = "template_7htsekb";

    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, e.target).then(
      (result) => {
        if (result.ok) {
          alert("Message has been sent.");
        }
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <Container fluid>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group as={Col} md="6" sm="12">
          <Form.Label> Name </Form.Label>
          <Form.Control
            onChange={handleOnChange}
            placeholder="Please enter your name"
            name="name"
            controlId="name"
          />
        </Form.Group>

        <Form.Group as={Col} md="6" sm="12">
          <Form.Label> Email address</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            type="email"
            placeholder="Enter email"
            name="email"
            controlId="email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group as={Col} md="6" sm="12">
          <Form.Label>Messages </Form.Label>
          <Form.Control
            onChange={handleOnChange}
            as="textarea"
            controlId="message"
            name="message"
            rows={3}
          />
        </Form.Group>

        <Form.Group as={Col} style={{ paddingLeft: "10px" }}>
          <Button variant="primary" size="lg" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
