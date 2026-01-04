import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExploreModal from './components/Explore';
import Doctors from './components/Doctors';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  return (
    <div className="app">
      <Navbar onOpenExplore={() => setIsExploreOpen(true)} />
      <main>
        <Hero />
        <About />
        <Doctors />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />

      {/* 3D Model Popup */}
      <ExploreModal
        isOpen={isExploreOpen}
        onClose={() => setIsExploreOpen(false)}
      />
    </div>
  );
}

export default App;
