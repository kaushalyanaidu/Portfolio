import React from 'react';
import { motion } from 'framer-motion';

const Leadership = () => {
  const activities = [
    {
      title: "Academic Achievement",
      description: "2nd Place in MWDSI 2025 Student Paper Competition for work on phantom inventory detection and prediction and 3rd Place INFORMS 2025 Analytics Poster Competition for machine learning solution."
    },
    {
      title: "NGO Internship",
      description: "Interned at an NGO where I was responsible for crowdfunding efforts to support the education of underprivileged children."
    },
    {
      title: "Educational Support Initiative",
      description: "Spearheaded a volunteer team to deliver vital educational support to underprivileged students, significantly increasing learning opportunities."
    }
  ];

  return (
    <section id="leadership" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Leadership Activities</h2>
          <p className="text-gray-400 text-lg">Making an impact through leadership and community engagement.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">{activity.title}</h3>
              <p className="text-gray-400">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership; 