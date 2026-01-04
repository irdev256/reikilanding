import { Helmet } from 'react-helmet-async';
import Content from '../components/sections/Content';
import FinalCTA from '../components/sections/FinalCta';
import Hero from '../components/sections/Hero';
import Links from '../components/sections/Links';
import SobreMi from '../components/sections/SobreMi';
import Testimonials from '../components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Mentoría espiritual consciente | Alejandrina González</title>
      </Helmet>

      <Hero />
      <Links />
      <Content />
      <FinalCTA />
      <SobreMi />
      <Testimonials />
    </>
  );
}
