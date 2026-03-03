import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";
import { Portfolio } from "../components/Portfolio";
import { QuoteForm } from "../components/QuoteForm";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Portfolio />
      <QuoteForm />
      <Contact />
    </>
  );
}
