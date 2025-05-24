import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Google Play Store App Success Prediction',
      description: 'ML solution analyzing 2.3M+ apps to predict app success (96.6% accuracy) and user churn (97% accuracy) using Logistic Regression and Random Forest. Implemented K-Means clustering for app segmentation.',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'ML'],
      link: 'https://github.com/kaushalyanaidu/Google-Play-Store-App-Success-Prediction-Analysis',
      highlights: '96.6% prediction accuracy • 2.3M+ apps analyzed • K-Means clustering'
    },
    {
      title: 'West Lafayette Housing Research',
      description: 'Market research study analyzing student housing preferences using K-means clustering to segment students into distinct groups. Developed data-driven recommendations for housing providers.',
      tags: ['Market Research', 'Python', 'Data Analysis', 'Clustering'],
      link: 'https://github.com/kaushalyanaidu/West-lafayette-housing-research',
      highlights: 'Survey analysis • 3 market segments • Data-driven insights'
    },
    {
      title: 'Pawpularity Score Prediction',
      description: 'Machine learning solution predicting pet photo appeal scores using computer vision and metadata analysis. Combined image processing with deep learning to improve adoption rates.',
      tags: ['Computer Vision', 'TensorFlow', 'OpenCV', 'Deep Learning'],
      link: 'https://github.com/kaushalyanaidu/Pawpularity-Prediction-Project',
      highlights: 'Image processing • Hybrid CNN model • RMSE optimization'
    },
    {
      title: 'Latea Ad Campaign A/B Testing',
      description: 'Instagram A/B testing strategy comparing central-focused (product) versus peripheral-focused (lifestyle) ad approaches for Latea Bubble Tea, providing data-driven marketing insights.',
      tags: ['Digital Marketing', 'A/B Testing', 'Analytics', 'Social Media'],
      link: 'https://github.com/kaushalyanaidu/Latea-Ad-Campaign-Instagram-A-B-Testing',
      highlights: 'A/B testing • Engagement analysis • Campaign optimization'
    }
  ];

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Recent Works</h2>
          <p className="text-gray-400 text-lg">
            Showcasing my latest data science and analytics projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all group"
            >
              <h3 className="text-xl font-semibold text-emerald-400 mb-3 group-hover:text-emerald-300">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-gray-400 text-sm mb-4">
                <span className="text-emerald-400">Highlights:</span> {project.highlights}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-400 hover:text-emerald-400 transition-colors text-sm"
              >
                <FaGithub className="mr-2" />
                View Project
                <svg
                  className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 