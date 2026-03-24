import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";

export default function Header() {
  // Sticky header state and effect
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.getElementById("header").offsetHeight;
      setIsSticky(window.scrollY > headerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll to section on nav link click
  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const navbar = document.querySelector(".navbar");
      const navbarHeight = navbar?.offsetHeight || 0;
      const offsetPosition = target.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header>
      <div className="header" id="header">
        <Container>
          <div className="holder">
            <div className="logo">
              <a href="#">
                <i className="fa-solid fa-dollar-sign"></i> builder Lenders
              </a>
            </div>
            <div className="contactInfo">
              <ul>
                <li>
                  <a href="tel:18001234567">
                    <i className="fa-solid fa-phone"></i> 1-800-123-4567
                  </a>
                </li>
                <li>
                  <a href="mailto:info@builderlenders.com">
                    <i className="fa-solid fa-envelope"></i>{" "}
                    info@builderlenders.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <Navbar
        expand="lg"
        className={`bg-body-tertiary ${isSticky ? "fixed-top" : ""}`}
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={(e) => handleNavClick(e, "#header")}>
                Home
              </Nav.Link>
              <Nav.Link onClick={(e) => handleNavClick(e, "#services")}>
                Services
              </Nav.Link>
              <Nav.Link onClick={(e) => handleNavClick(e, "#about")}>
                About
              </Nav.Link>
              <Nav.Link onClick={(e) => handleNavClick(e, "#why-choose-us")}>
                Why choose us
              </Nav.Link>
              <Nav.Link onClick={(e) => handleNavClick(e, "#testimonials")}>
                Testimonials
              </Nav.Link>
              <Nav.Link onClick={(e) => handleNavClick(e, "#contact-us")}>
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
