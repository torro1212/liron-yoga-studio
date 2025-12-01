import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';

function App() {
  return (
    <div className="bg-white min-h-screen relative font-sans text-gray-900 overflow-x-hidden selection:bg-primary/30">
      <Header />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingElements />
    </div>
  );
}

export default App;