import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

const Home = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={24} />,
      url: 'https://github.com/kaushalyanaidu'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={24} />,
      url: 'https://www.linkedin.com/in/kaushalyanaidu'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-7xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
            Hello World
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            I am <span className="text-emerald-400">Kaushalya Naidu</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-8 mb-12"
        >
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#about"
            className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors w-full sm:w-auto text-center"
          >
            Learn More
          </a>
          <a
            href="https://drive.google.com/drive/folders/1xpzGmRf5-uZr6Ex7W30kuWNRbOFMyKVR?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-emerald-400 hover:text-emerald-400 transition-colors w-full sm:w-auto text-center inline-flex items-center justify-center"
          >
            <FaFileAlt className="mr-2" />
            View Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home; 