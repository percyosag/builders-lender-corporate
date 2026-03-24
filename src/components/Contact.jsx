import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";

export default function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="block contact" id="contact-us">
      <Container>
        <Row>
          <Col className="text-center">
            <h2>Contact Us</h2>
            <p className="subtitle">
              If you have any questions or would like to get in touch, please
              feel free to contact us.
            </p>
          </Col>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-4">
              <Col>
                <Form.Control type="text" placeholder="First Name" required />
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Last Name" required />
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <Form.Control type="email" placeholder="Email" required />
              </Col>
              <Col>
                <Form.Control type="tel" placeholder="Phone Number" required />
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Message"
                  required
                />
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Row>
      </Container>
    </div>
  );
}
