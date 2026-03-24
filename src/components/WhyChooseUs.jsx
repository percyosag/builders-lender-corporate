import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

var whyChooseUsData = [
  {
    id: 1,
    title: "Quick and Easy",
    description: "Loan approvals",
  },
  {
    id: 2,
    title: "5,000+",
    description: "Customers satisfied",
  },
  {
    id: 3,
    title: "Free",
    description: "Customer consultation",
  },
  {
    id: 4,
    title: "200",
    description: "Branches all over the world",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="block why-choose-us" id="why-choose-us">
      {/*  */}
      <Container>
        <Row>
          <Col className="text-center">
            <h2>Why Choose Us?</h2>
          </Col>
        </Row>
        <Row>
          {whyChooseUsData.map((item) => {
            return (
              <Col md={3} key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
