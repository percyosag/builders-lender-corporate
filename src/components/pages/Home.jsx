import About from "../About";
import Hero from "../Hero";
import Services from "../Services";
import WhyChooseUs from "../WhyChooseUs";
import Testimonials from "../Testimonials";
import Contact from "../Contact";
import Clients from "../Clients";
import Footer from "../Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Clients />
      <Footer />
    </main>
  );
}
