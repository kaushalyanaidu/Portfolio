import React from 'react';

const ContactInfo = ({ icon, label, value, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 text-light-300 hover:text-accent-500 transition-colors"
  >
    <div className="w-10 h-10 bg-dark-600 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="text-sm text-light-300 font-poppins">{label}</p>
      <p className="text-light-100 font-poppins">{value}</p>
    </div>
  </a>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins text-light-100">
          Contact
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-dark-700 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 font-poppins text-light-100">Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-light-300 mb-2 font-poppins">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-dark-600 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-500 text-light-100 font-poppins"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-light-300 mb-2 font-poppins">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-dark-600 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-500 text-light-100 font-poppins"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-light-300 mb-2 font-poppins">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 bg-dark-600 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-500 text-light-100 font-poppins"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-accent-500 text-dark-900 rounded-lg hover:bg-accent-600 transition-colors font-poppins font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-dark-700 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 font-poppins text-light-100">Contact Information</h3>
              <div className="space-y-6">
                <ContactInfo
                  icon={
                    <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  }
                  label="Email"
                  value="knaidu@purdue.edu"
                  link="mailto:knaidu@purdue.edu"
                />
                <ContactInfo
                  icon={
                    <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  }
                  label="Phone"
                  value="+1 (317) 376-6645"
                  link="tel:+13173766645"
                />
                <ContactInfo
                  icon={
                    <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  }
                  label="LinkedIn"
                  value="Kaushalya Naidu"
                  link="https://www.linkedin.com/in/kaushalyanaidu"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 