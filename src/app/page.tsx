import Image from 'next/image';

import AppleCardsCarouselDemo from '@/components/example/apple-cards-carousel-demo-2';
import HeroParallaxDemo from '@/components/example/hero-parallax-demo';

export default function Home() {
  return (
    <main className="flex overflow-hidden min-h-screen flex-col items-center justify-between p-24">
      <HeroParallaxDemo />
      <AppleCardsCarouselDemo />
    </main>
  );
}
