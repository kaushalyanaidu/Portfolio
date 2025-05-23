import React from 'react';

const ExperienceCard = ({ role, company, duration, location, achievements, technologies, index }) => (
  <div className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-[1.02] transition-all duration-500 border border-white/10 hover:border-gradient-middle group animate-fadeIn`} 
       style={{ animationDelay: `${index * 200}ms` }}>
    {/* Gradient overlay on hover */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gradient-start/5 via-gradient-middle/5 to-gradient-end/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Content */}
    <div className="relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h3 className="text-2xl font-semibold font-poppins bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
            {role}
          </h3>
          <p className="text-light-100 font-poppins text-lg mt-1 group-hover:text-gradient-middle transition-colors duration-300">
            {company}
          </p>
        </div>
        <div className="text-right mt-2 md:mt-0">
          <p className="text-light-300 font-poppins text-sm bg-white/5 px-3 py-1 rounded-full inline-block">
            {duration}
          </p>
          <p className="text-light-300 font-poppins text-sm mt-1">
            {location}
          </p>
        </div>
      </div>

      {/* Achievements */}
      <ul className="text-light-200 mb-6 font-poppins leading-relaxed space-y-3">
        {achievements.map((achievement, idx) => (
          <li key={idx} className="flex items-start group/item hover:transform hover:translate-x-2 transition-all duration-300">
            <span className="mr-2 text-gradient-middle font-bold">•</span>
            <span className="group-hover/item:text-light-100 transition-colors duration-300">{achievement}</span>
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-white/5 text-light-100 rounded-full text-sm font-medium hover:bg-gradient-middle/20 transition-all duration-300 hover:transform hover:scale-105 cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      role: "Data Science Intern",
      company: "Meijer",
      duration: "January 2025 – Present",
      location: "Remote, USA",
      achievements: [
        "Spearheaded the development of an innovative two-phase machine learning pipeline for phantom inventory detection and prediction in retail stores",
        "Implemented advanced ML models combining Random Forest for detection and LSTM-TimeGAN for time-series prediction",
        "Enhanced customer shopping experience through improved inventory accuracy and shelf availability optimization"
      ],
      technologies: [
        "Python",
        "Random Forest",
        "LSTM",
        "TimeGAN",
        "Machine Learning",
        "Time Series Analysis",
        "Data Pipeline",
        "Predictive Modeling"
      ]
    },
    {
      role: "Associate Data Scientist",
      company: "Fincrux Technologies",
      duration: "August 2023 – July 2024",
      location: "Mumbai, IN",
      achievements: [
        "Led R&D initiatives that increased conversion rates by 40% through innovative data analysis techniques and enhanced data structuring",
        "Designed and implemented KPI-focused dashboards for organizational leaders, driving a 20% increase in sales through data-driven decision making",
        "Optimized data acquisition and processing workflows, resulting in 15% sales growth through improved data accuracy",
        "Successfully managed end-to-end development and implementation of core program processes"
      ],
      technologies: [
        "Data Analysis",
        "Dashboard Development",
        "KPI Tracking",
        "Data Strategy",
        "Process Management",
        "SQL",
        "Python",
        "Business Intelligence",
        "Data Visualization"
      ]
    },
    {
      role: "Data Research Analyst Intern",
      company: "Cheers Interactive",
      duration: "July 2022 – August 2022",
      location: "Mumbai, IN",
      achievements: [
        "Conducted comprehensive research on emerging technology trends, establishing the company as an industry thought leader",
        "Generated strategic market insights that led to 25% expansion in industry networks and improved market penetration",
        "Developed competitive analysis frameworks to identify market opportunities and growth potential"
      ],
      technologies: [
        "Market Research",
        "Trend Analysis",
        "Strategic Planning",
        "Industry Analysis",
        "Data Visualization",
        "Competitive Analysis",
        "Research Methodology"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-indigo-950/40 via-slate-900/40 to-emerald-950/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-poppins bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <p className="text-light-300 text-center mb-12 font-poppins max-w-2xl mx-auto">
          Leveraging data science and analytics to drive business value through innovative solutions and strategic insights
        </p>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 