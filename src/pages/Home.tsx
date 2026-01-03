import Content from '../components/sections/Content';
import FinalCTA from '../components/sections/FinalCta';
import Hero from '../components/sections/Hero';
import Links from '../components/sections/Links';
import SobreMi from '../components/sections/SobreMi';
import Testimonials from '../components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Links />
      <Content />
      <FinalCTA />
      <SobreMi />
      <Testimonials />
    </>
  );
}
