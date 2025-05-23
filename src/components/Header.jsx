import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuItems = ['home', 'about', 'experience', 'skills', 'projects', 'achievements', 'contact'];

  return (
    <header className="fixed w-full bg-white/5 backdrop-blur-md shadow-lg z-50 border-b border-white/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-poppins font-semibold animate-gradient bg-gradient-to-r from-purple-500 via-pink-500 via-blue-500 via-teal-500 to-purple-500 bg-[length:200%_auto] bg-clip-text text-transparent transition-all duration-300 hover:bg-[length:300%_auto]">
            Kaushalya Naidu
          </h1>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-light-100 hover:text-gradient-middle transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-light-300 hover:text-gradient-middle transition-colors capitalize font-poppins"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-1 bg-white/5 rounded-lg backdrop-blur-md">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 text-light-300 hover:text-gradient-middle hover:bg-white/5 transition-all capitalize font-poppins rounded-lg"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 