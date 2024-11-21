import Contact from './sections/Contact';
import Drone from './sections/Drone';
import FAQ from './sections/FAQ';
import Hero from './sections/Hero';
import Photography from './sections/Photography';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import VideoEditing from './sections/VideoEditing';
import Videography from './sections/Videography';
import ZoomParallax from './sections/ZoomParallax';

export default function Home() {
  return (
    <>
      <Hero />
      <ZoomParallax />
      <Videography />
      <VideoEditing />
      <Photography />
      <Drone />
      <Testimonials />
      <Services />
      <FAQ />
      <Contact />
    </>
  );
}
