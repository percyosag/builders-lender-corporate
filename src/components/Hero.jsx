import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

var heroData = [
  {
    id: 1,
    image: "src/assets/images/img-hero1.jpg",
    title: "First slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    id: 2,
    image: "src/assets/images/img-hero2.jpg",
    title: "Second slide label",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    image: "src/assets/images/img-hero3.jpg",
    title: "Third slide label",
    description:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
];

export default function Hero() {
  return (
    <div id="hero">
      <Carousel>
        {heroData.map((item) => (
          <Carousel.Item key={item.id}>
            <Image src={item.image} fluid />;
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
