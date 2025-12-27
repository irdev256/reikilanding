import Content from '../components/sections/Content';
import Hero from '../components/sections/Hero';
import Links from '../components/sections/Links';
import MisInicios from '../components/sections/MisInicios';
import Testimonials from '../components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Links />
      <Content />
      <MisInicios />
      <Testimonials />
    </>
  );
}
