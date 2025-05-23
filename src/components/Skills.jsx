import React from 'react';

const SkillCategory = ({ title, skills, colorClass, barColorClass }) => (
  <div className="bg-dark-700 rounded-xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl border border-dark-600 hover:border-gradient-middle">
    <h3 className={`text-xl font-semibold mb-6 font-poppins ${colorClass}`}>
      {title}
    </h3>
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={index} className="group">
          <div className="flex items-center justify-between mb-2">
            <span className="text-light-100 font-poppins group-hover:text-gradient-middle transition-colors">
              {skill.name}
            </span>
            <span className={`text-sm ${colorClass} font-poppins min-w-[80px] text-right`}>
              {skill.proficiency}
            </span>
          </div>
          <div className="relative">
            <div className="w-full h-2 bg-dark-600 rounded-full overflow-hidden">
              <div 
                className={`h-full ${barColorClass} transition-all duration-1000 ease-out`}
                style={{ 
                  width: `${skill.level}%`,
                  animation: 'slideRight 1.5s ease-out'
                }}
              ></div>
            </div>
            <div 
              className="absolute -right-1 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div className={`px-2 py-1 ${barColorClass} rounded text-xs text-light-100 shadow-lg`}>
                {skill.level}%
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Data Science",
      colorClass: "text-skill-programming-dark",
      barColorClass: "bg-skill-programming-dark",
      skills: [
        { name: "Python", level: 95, proficiency: "Expert" },
        { name: "SQL", level: 90, proficiency: "Expert" },
        { name: "R", level: 80, proficiency: "Advanced" },
        { name: "Machine Learning", level: 85, proficiency: "Advanced" }
      ]
    },
    {
      title: "Visualization & BI",
      colorClass: "text-skill-visualization-dark",
      barColorClass: "bg-skill-visualization-dark",
      skills: [
        { name: "Tableau", level: 95, proficiency: "Expert" },
        { name: "Power BI", level: 90, proficiency: "Expert" },
        { name: "Data Visualization", level: 85, proficiency: "Advanced" }
      ]
    },
    {
      title: "Data Engineering & Cloud",
      colorClass: "text-skill-cloud-dark",
      barColorClass: "bg-skill-cloud-dark",
      skills: [
        { name: "Azure", level: 75, proficiency: "Advanced" },
        { name: "Databricks", level: 80, proficiency: "Advanced" },
        { name: "SDLC", level: 70, proficiency: "Intermediate" }
      ]
    },
    {
      title: "Analytics & Business",
      colorClass: "text-skill-analytics-dark",
      barColorClass: "bg-skill-analytics-dark",
      skills: [
        { name: "Statistical Analysis", level: 90, proficiency: "Expert" },
        { name: "Predictive Modeling", level: 85, proficiency: "Advanced" },
        { name: "Dashboard Creation", level: 95, proficiency: "Expert" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-poppins bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-light-300 text-center mb-12 font-poppins">
          Professional competencies and technical proficiencies
        </p>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              colorClass={category.colorClass}
              barColorClass={category.barColorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 