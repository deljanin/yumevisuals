import Hero from './sections/Hero';
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
    </>
  );
}
