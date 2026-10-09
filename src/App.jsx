import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import GlobalReach from './sections/GlobalReach';
import Testimonials from './sections/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-primary min-h-screen text-slate-300 selection:bg-secondary selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <GlobalReach />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
