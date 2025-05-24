import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-poppins">
      {/* Background pattern */}
      <div className="fixed inset-0 bg-[url('/public/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      {/* Content */}
      <div className="relative">
        <Header />
        <main>
          <Home />
          <About />
          <Experience />
          <Projects />
          <Leadership />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="text-center py-8 text-gray-400 text-sm">
          <p>© Copyright Kaushalya {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}

export default App; 