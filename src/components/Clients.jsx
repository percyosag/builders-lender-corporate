import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const clients = [
  {
    id: 1,
    logo: "../src/assets/images/logo1.png",
    link: "https://google.com",
  },
  {
    id: 2,
    logo: "../src/assets/images/logo2.png",
    link: "https://google.com",
  },
  {
    id: 3,
    logo: "../src/assets/images/logo3.png",
    link: "https://google.com",
  },
  {
    id: 4,
    logo: "../src/assets/images/logo4.png",
    link: "https://google.com",
  },
  {
    id: 5,
    logo: "../src/assets/images/logo5.png",
    link: "https://google.com",
  },
];

export default function Clients() {
  return (
    <div className="clients">
      <Container>
        <Row>
          {clients.map((client) => (
            <Col key={client.id}>
              <a href={client.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={client.logo}
                  alt={`Client ${client.id}`}
                  className="client-logo"
                />
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
