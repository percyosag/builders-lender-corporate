import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export default function About() {
  return (
    <div className="block" id="about">
      <Container>
        <Row>
          <Col md={6}>
            <h2>About Builder Lenders Solution</h2>
            <p>
              Welcome to our company! We are a team of dedicated professionals
              who are passionate about what we do. Welcome to our company! We
              are a team of dedicated professionals who are passionate about
              what we do. Welcome to our company! We are a team of dedicated
              professionals who are passionate about what we do.
            </p>
            <Button variant="primary">Contact Us</Button>
          </Col>
          <Col md={{ span: 5, offset: 1 }}>
            <Image src="src/assets/images/img1.jpg" rounded />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
