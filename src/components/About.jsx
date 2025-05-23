import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-rose-950/40 via-orange-900/30 to-amber-900/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-poppins bg-gradient-to-r from-rose-300 via-orange-200 to-amber-300 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {/* Introduction */}
            <div className="animate-fadeIn">
              <p className="text-lg text-rose-100 font-poppins leading-relaxed text-center">
                I'm a graduate student at Purdue University pursuing an MS in Business Analytics and Information Management. 
                With experience in data science, predictive modeling, and dashboard creation, I'm passionate about solving 
                real-world business problems using data-driven solutions.
              </p>
            </div>

            {/* Education Section */}
            <div className="space-y-6 animate-fadeIn" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-semibold mb-4 font-poppins bg-gradient-to-r from-rose-300 via-orange-200 to-amber-300 bg-clip-text text-transparent text-center">
                Education
              </h3>
              
              <div className="space-y-6">
                {/* Purdue University */}
                <div className="bg-rose-950/20 backdrop-blur-sm p-6 rounded-xl border border-orange-400/10 hover:transform hover:scale-[1.02] transition-all duration-500 hover:shadow-lg hover:shadow-orange-900/20">
                  <h4 className="text-xl font-semibold text-orange-200 mb-2 font-poppins">
                    Purdue University
                  </h4>
                  <p className="text-rose-100 font-medium mb-1 font-poppins">
                    MS in Business Analytics and Information Management
                  </p>
                  <p className="text-orange-200/70 font-poppins">
                    Expected Graduation: August 2025
                  </p>
                </div>

                {/* SIES Graduate School */}
                <div className="bg-rose-950/20 backdrop-blur-sm p-6 rounded-xl border border-orange-400/10 hover:transform hover:scale-[1.02] transition-all duration-500 hover:shadow-lg hover:shadow-orange-900/20">
                  <h4 className="text-xl font-semibold text-orange-200 mb-2 font-poppins">
                    SIES Graduate School of Technology
                  </h4>
                  <p className="text-rose-100 font-medium mb-1 font-poppins">
                    BE in Electronics and Telecommunication
                  </p>
                  <p className="text-orange-200/70 font-poppins">
                    Graduated: August 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 