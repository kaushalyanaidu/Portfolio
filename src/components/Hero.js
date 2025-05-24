import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid grid-cols-12 gap-2 transform -skew-y-12 scale-150 opacity-20">
        {Array.from({ length: 12 * 12 }).map((_, i) => (
          <div
            key={i}
            className="h-8 bg-emerald-500/30 rounded-lg"
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-emerald-400">Hello World</span>
            <span className="block text-white">I'm Kaushalya Naidu</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Data Scientist & Analytics Professional
          </p>

          <div className="flex flex-col items-center space-y-4 mb-12">
            <a
              href="https://github.com/kaushalyanaidu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
            >
              <FaGithub size={28} />
              <span>github.com/kaushalyanaidu</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kaushalyanaidu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
            >
              <FaLinkedin size={28} />
              <span>www.linkedin.com/in/kaushalyanaidu</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-emerald-500 text-emerald-400 rounded-full font-semibold hover:bg-emerald-500 hover:text-white transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 