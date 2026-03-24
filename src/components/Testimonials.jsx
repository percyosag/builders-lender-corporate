import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

var testimonials = [
  {
    id: 1,
    image: "../src/assets/images/author1.jpg",
    designation: "Card Subtitle",
    name: "Card Title",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 2,
    image: "../src/assets/images/author2.jpg",
    designation: "Card Subtitle",
    name: "Card Title",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

export default function Testimonials() {
  return (
    <div className="block testimonials" id="testimonials">
      <Container>
        <Row>
          <Col className="text-center">
            <h2>Testimonials</h2>
            <p>See what our customers have to say about our services.</p>
          </Col>
        </Row>
        <Row>
          {testimonials.map((testimonial) => (
            <Col md={6} key={testimonial.id} className="testimonial">
              <Card>
                <Card.Img variant="top" src={testimonial.image} />
                <Card.Body className="text-center">
                  <Card.Title>{testimonial.name}</Card.Title>
                  <Card.Subtitle className="text-muted">
                    {testimonial.designation}
                  </Card.Subtitle>

                  <Card.Text>{testimonial.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
