import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

const App = () => {
  return (
    <main className="px-3 pt-3 font-Inter flex flex-col text-dark">
      <Navbar/>
      <Hero />
      <About/>
    </main>
  );
}

export default App;
