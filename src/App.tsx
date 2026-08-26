import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Services from './components/Services';
import PriceList from './components/PriceList';
import Gallery from './components/Gallery';
import About from './components/About';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Contact from './components/Contact';
import MobileBottomNav from './components/MobileBottomNav';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />

      <main id="main-content">
        <Hero />
        <TrustSection />
        <Services />
        <PriceList />
        <Gallery />
        <About />
        <Reviews />
        <Location />
        <Contact />
      </main>

      <Footer />

      {/* Fixed mobile bottom navigation — only shown on mobile */}
      <MobileBottomNav />
    </>
  );
}
