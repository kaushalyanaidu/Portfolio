import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const About = () => {
  const expertiseAreas = [
    {
      title: 'Analytics',
      skills: [
        'Business Intelligence',
        'Statistical Analysis',
        'Data Visualization'
      ]
    },
    {
      title: 'Machine Learning',
      skills: [
        'Predictive Modeling',
        'NLP & Text Analytics',
        'Model Deployment'
      ]
    },
    {
      title: 'Cloud Technologies',
      skills: [
        'AWS & Azure Services',
        'Cloud Data Solutions',
        'Infrastructure as Code'
      ]
    }
  ];

  const technicalSkills = [
    { name: 'SQL', category: 'Database' },
    { name: 'Python', category: 'Programming' },
    { name: 'Tableau', category: 'Visualization' },
    { name: 'Power BI', category: 'Visualization' },
    { name: 'Databricks', category: 'Big Data' },
    { name: 'Basic HTML', category: 'Web' },
    { name: 'Microsoft Office', category: 'Productivity' }
  ];

  const softSkills = [
    { name: 'Problem Solving', category: 'Analysis' },
    { name: 'Project Management', category: 'Management' },
    { name: 'Agile Methodologies', category: 'Process' },
    { name: 'SDLC', category: 'Process' },
    { name: 'JIRA', category: 'Tools' },
    { name: 'Interpersonal Skills', category: 'Communication' }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8">About</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I turn raw data into real-world impact. With a deep passion for analytics and technology,
            I specialize in designing scalable data solutions and extracting actionable insights
            that drive smarter business decisions. From building data warehouses to deploying ML models,
            my work sits at the intersection of engineering precision and business strategy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-12 text-center">Areas of Expertise</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
              >
                <h4 className="text-xl font-semibold text-emerald-400 mb-4">{area.title}</h4>
                <ul className="space-y-2">
                  {area.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-400 flex items-center">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-12 text-center">Technical & Professional Skills</h3>
          
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-semibold text-emerald-400 mb-6 text-center">Technical Skills</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-gray-400">{skill.name}</span>
                    <span className="text-xs text-emerald-400 ml-2">• {skill.category}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-emerald-400 mb-6 text-center">Professional Skills</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-gray-400">{skill.name}</span>
                    <span className="text-xs text-emerald-400 ml-2">• {skill.category}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://drive.google.com/drive/folders/1T2zInRmmp8FdAkK0MbMHGyx9pTjt-47y?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-gray-700 text-emerald-400 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
          >
            <FaCertificate className="w-5 h-5 mr-2" />
            View Certifications
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 