import React from 'react';

const SkillTag = ({ skill }) => (
  <span className="px-3 py-1 bg-dark-600 text-accent-500 rounded-full text-sm font-medium hover:bg-dark-700 transition-colors">
    {skill}
  </span>
);

const CertificationCard = ({ title, issuer, date }) => (
  <div className="bg-dark-700 p-6 rounded-xl border border-dark-600 hover:border-accent-500 transition-all duration-300">
    <h3 className="text-lg font-semibold text-light-100 mb-2 font-poppins">{title}</h3>
    <p className="text-light-300 text-sm mb-2 font-poppins">{issuer}</p>
    <p className="text-accent-500 text-sm font-poppins">{date}</p>
  </div>
);

const Certifications = () => {
  const certifications = [
    {
      title: "Azure Fundamentals",
      issuer: "Microsoft",
      date: "2024"
    },
    {
      title: "KPMG Data Analytics Virtual Internship",
      issuer: "KPMG",
      date: "2023"
    },
    {
      title: "JPMorgan Excel Skills Virtual Program",
      issuer: "JPMorgan Chase & Co.",
      date: "2023"
    }
  ];

  const technicalSkills = [
    "SQL", "Tableau", "Power BI", "Python", "JIRA", 
    "HTML", "SDLC", "Databricks", "Machine Learning",
    "Data Visualization", "Statistical Analysis"
  ];

  return (
    <section id="certifications" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins text-light-100">
          Certifications & Skills
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>

          {/* Technical Skills */}
          <div className="bg-dark-700 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-light-100 mb-6 font-poppins">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <SkillTag key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 