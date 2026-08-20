import Hero from '../sections/Hero';
import StandOut from '../sections/StandOut';
import About from '../sections/About';
import Services from '../sections/Services';
import KeyFeatures from '../sections/KeyFeatures';
import OurValue from '../sections/OurValue';
import Progress from '../sections/Progress';
import Testimonials from '../sections/Testimonials';
import ContactSection from '../sections/ContactSection';
import FAQ from '../sections/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <StandOut />
      <About />
      <Services />
      <KeyFeatures />
      <OurValue />
      <Progress />
      <Testimonials />
      <ContactSection />
      <FAQ />
    </>
  );
}
