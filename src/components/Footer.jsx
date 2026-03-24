import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";

export default function Footer() {
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
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <div className="footer-content">
              <a href="#">
                <i class="fa-solid fa-dollar-sign"></i> Builder Lenders
              </a>
              <p>
                We are committed to providing the best service and support to
                our clients. Contact us for any inquiries or assistance you may
                need.We are committed to providing the best service and support
                to our clients. Contact us for any inquiries or assistance you
                may need.
              </p>
              <p>
                Any questions? Contact us at{" "}
                <a href="mailto:info@builderlenders.com">
                  info@builderlenders.com
                </a>
              </p>
            </div>
          </Col>
          <Col>
            <h4>Solutions</h4>
            <ListGroup>
              <ListGroup.Item>Personal Loan</ListGroup.Item>
              <ListGroup.Item>Car Loan</ListGroup.Item>
              <ListGroup.Item>Home Loan</ListGroup.Item>
              <ListGroup.Item>Education Loan</ListGroup.Item>
              <ListGroup.Item>Business Loan</ListGroup.Item>
              <ListGroup.Item>Payday Loan</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <h4>Newsletter</h4>
            <p>
              Subscribe to our newsletter to stay updated with the latest news
              and offers.
            </p>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Subscribe
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
        <Row className="footer-bottom align-items-center">
          <Col className="text-center mt-4">
            <p>&copy; 2026 Buildres Lenders. All rights reserved.</p>
          </Col>
          <Col>
            <ListGroup horizontal className="justify-content-end">
              <ListGroup.Item>
                <a href="#facebook">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="#twitter">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="#instagram">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="#linkedin">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
