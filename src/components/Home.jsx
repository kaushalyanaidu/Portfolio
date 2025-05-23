import React from 'react';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden bg-dark-700 border-4 border-accent-500 shadow-lg">
            <div className="w-full h-full bg-dark-600 flex items-center justify-center">
              <span className="text-4xl text-accent-500">KN</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-light-100 mb-4 font-poppins">
            Kaushalya Naidu
          </h1>
          
          <p className="text-xl md:text-2xl text-light-300 mb-8 font-poppins">
            MS Business Analytics Student | Business Analyst
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-accent-500 text-dark-900 rounded-lg hover:bg-accent-600 transition-colors font-poppins font-medium"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-transparent text-accent-500 border-2 border-accent-500 rounded-lg hover:bg-accent-500 hover:text-dark-900 transition-colors font-poppins font-medium"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 