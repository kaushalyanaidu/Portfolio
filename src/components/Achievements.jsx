import React from 'react';

const AchievementCard = ({ title, description }) => (
  <div className="bg-dark-700 p-6 rounded-xl hover:transform hover:scale-[1.02] transition-all duration-300">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-dark-900" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-light-100 mb-2 font-poppins">{title}</h3>
        <p className="text-light-300 font-poppins">{description}</p>
      </div>
    </div>
  </div>
);

const Achievements = () => {
  const achievements = [
    {
      title: "2nd Place – MWDSI 2025 Student Paper Competition",
      description: "Recognized for innovative phantom inventory solution research and implementation"
    },
    {
      title: "3rd Place – INFORMS 2025 Analytics Poster Competition",
      description: "Presented advanced analytics solutions for retail inventory management"
    },
    {
      title: "Volunteer Teaching Program Lead",
      description: "Led educational programs for underprivileged students, impacting over 100 learners"
    },
    {
      title: "NGO Educational Crowdfunding",
      description: "Successfully managed crowdfunding campaigns for educational initiatives"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins text-light-100">
          Achievements
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 