import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { LatestDrop } from '@/components/LatestDrop';
import { Campaign } from '@/components/Campaign';
import { FeaturedCollection } from '@/components/FeaturedCollection';
import { BrandStatement } from '@/components/BrandStatement';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink text-bone">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <LatestDrop />
        <Campaign />
        <FeaturedCollection />
        <BrandStatement />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
