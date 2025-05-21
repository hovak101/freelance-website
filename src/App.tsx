import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';

const App = () => {
  return (
    <main className="font-Inter flex flex-col text-dark">
      <Navbar/>
      <Hero />
      <About/>
      <Services/>
    </main>
  );
}

export default App;
