import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'Meijer',
      role: 'Data Analyst Intern',
      location: 'Remote, USA',
      period: 'January 2025 – May 2025',
      achievements: [
        'Developed a two-phase machine learning pipeline to detect and predict phantom inventory in retail stores.',
        'Random Forest used for detection and LSTM-TimeGAN for time-series prediction.',
        'Helped reduce stockouts, improve shelf availability, and enhance customer shopping experience.'
      ]
    },
    {
      company: 'Fincrux Technologies',
      role: 'Associate Data Scientist',
      location: 'Mumbai, IN',
      period: 'August 2023 – July 2024',
      achievements: [
        'Performed research and development initiatives within the data science program, innovating data analysis techniques that increased conversion rates by 40% through enhanced data structuring and analysis capabilities.',
        'Collaborated with organizational leaders to redefine data strategies using dashboards, focusing on KPI, which directly contributed to a 20% increase in sales.',
        'Streamlined the acquisition and processing of data to improve data accuracy and comprehensiveness, which fueled a targeted strategy boosting sales growth by 15%.',
        'Led the design, development, implementation, and management of core program processes.'
      ]
    },
    {
      company: 'Cheers Interactive',
      role: 'Data Research Analyst Intern',
      location: 'Mumbai, IN',
      period: 'July 2022 – August 2022',
      achievements: [
        'Managed thorough research on emerging technology trends, providing in-depth insights resulting in the company being positioned as a thought leader in forecasting future industry developments.',
        'Developed strategic market insights that expanded industry networks by 25%, improving market penetration and competitive advantage through enhanced understanding of emerging trends.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-gray-400 text-lg">My professional journey in data science and analytics.</p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-all"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-emerald-400">{exp.role}</h3>
                  <p className="text-xl text-white mt-1">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-gray-400">{exp.location}</p>
                  <p className="text-gray-400">{exp.period}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="pl-2">
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 