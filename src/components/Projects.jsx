import React from 'react';

const ProjectCard = ({ title, description, technologies, link, index }) => (
  <div 
    className={`relative bg-brown-900/10 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-[1.02] transition-all duration-500 border border-brown-400/10 group animate-fadeIn`}
    style={{ animationDelay: `${index * 200}ms` }}
  >
    {/* Gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-amber-700/5 via-brown-600/5 to-brown-800/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Content */}
    <div className="relative z-10">
      <h3 className="text-xl font-semibold font-poppins bg-gradient-to-r from-amber-400 via-amber-600 to-brown-700 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
        {title}
      </h3>
      
      <p className="text-light-200 mt-3 font-poppins text-sm leading-relaxed group-hover:text-light-100 transition-colors duration-300">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mt-4">
        {technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-2 py-1 bg-brown-800/30 text-amber-100/90 rounded-full text-xs font-medium hover:bg-brown-700/40 transition-all duration-300 hover:transform hover:scale-105 cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    {/* Link overlay */}
    {link && (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="absolute inset-0 z-20 cursor-pointer"
        aria-label={`View ${title} project`}
      />
    )}
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Bankruptcy Prediction Model",
      description: "Analyzed financial indicators from Kaggle datasets using SAS Enterprise Miner to predict bankruptcy outcomes. Achieved 97% accuracy through extensive data preprocessing, feature selection, and hyperparameter tuning.",
      technologies: ["SAS Enterprise Miner", "Data Mining", "Feature Selection", "Statistical Analysis", "Predictive Modeling"],
      link: "#"
    },
    {
      title: "Pawpularity - Pet Image Popularity Predictor",
      description: "Developed CNN models to extract visual features from pet images and predict popularity scores. Implemented deep neural networks integrating image-derived features with structured metadata for enhanced prediction accuracy.",
      technologies: ["Python", "CNN", "Deep Learning", "Computer Vision", "Neural Networks"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-amber-950/40 via-brown-900/40 to-brown-950/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-poppins bg-gradient-to-r from-amber-400 via-amber-600 to-brown-700 bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-light-300 text-center mb-12 font-poppins max-w-2xl mx-auto">
          A showcase of my technical projects demonstrating expertise in machine learning, data analysis, and predictive modeling
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 