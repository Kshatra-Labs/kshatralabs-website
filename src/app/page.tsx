import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { VisionSection } from '@/components/sections/VisionSection';
import { VideoSection } from '@/components/sections/VideoSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <VisionSection />
        <VideoSection autoplay={true} />
      </main>
      <Footer />
    </>
  );
}
