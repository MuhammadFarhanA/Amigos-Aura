import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github, Coffee, Heart, Code, Rocket } from 'lucide-react';
import { contactInfo } from '../data/company';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-aa-primary-dark via-aa-primary to-aa-blue-primary text-white relative overflow-hidden">
      {/* Funky Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-aa-cyan rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-aa-blue-bright rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-aa-cyan-light rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-aa-blue-light rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Funky Header Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-aa-cyan via-aa-blue-light to-aa-cyan-light bg-clip-text text-transparent ">
              Let's Build Something Epic! 🚀
            </h2>
            <div className="flex items-center justify-center gap-2 text-lg text-blue-200">
              <span>⚡ Fast</span>
              <span>•</span>
              <span>🤝 Friendly</span>
              <span>•</span>
              <span>☕ Occasionally Caffeinated</span>
            </div>
          </div>
        </div>

        {/* Zigzag Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Company Info - Diagonal Card */}
          <div className="lg:col-span-5 bg-white/10 backdrop-blur-sm rounded-3xl p-8 transform transition-transform duration-300">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-gradient-to-br from-aa-cyan to-aa-blue-bright rounded-2xl flex items-center justify-center"
              >
                <Zap className="w-7 h-7 text-white" />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Amigos Aura</span>
            </Link>
            <p className="text-blue-100 leading-relaxed mb-6 text-lg">
              Building the future of software development, one project at a time. 
              <span className="block mt-2 text-aa-cyan-light font-medium">
                <Code className="w-4 h-4 inline mr-2" />
                Product engineering, cloud, and AI solutions that move your business forward.
              </span>
            </p>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center group"
              >
                <div className="w-10 h-10 bg-aa-cyan/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-aa-cyan/30 transition-colors">
                  <Mail className="w-5 h-5 text-aa-cyan" />
                </div>
                <span className="text-blue-100 group-hover:text-white transition-colors">{contactInfo.email}</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center group"
              >
                <div className="w-10 h-10 bg-aa-blue-light/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-aa-blue-light/30 transition-colors">
                  <Phone className="w-5 h-5 text-aa-blue-light" />
                </div>
                <span className="text-blue-100 group-hover:text-white transition-colors">{contactInfo.phone}</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center group"
              >
                <div className="w-10 h-10 bg-aa-cyan-light/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-aa-cyan-light/30 transition-colors">
                  <MapPin className="w-5 h-5 text-aa-cyan-light" />
                </div>
                <span className="text-blue-100 whitespace-pre-line group-hover:text-white transition-colors">{contactInfo.address}</span>
              </motion.div>
            </div>
          </div>

          {/* Services Section Only */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="font-bold text-2xl mb-6 text-aa-cyan-light flex items-center">
                <Rocket className="w-6 h-6 mr-3" />
                Services
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
              {[
                'Product Engineering',
                'Cloud & DevOps',
                'UI/UX Design',
                'Staff Augmentation',
                'AI/ML Solutions',
                'Cybersecurity',
                'Data Analytics',
                'Digital Transformation'
              ].map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <Link to="/services" className="text-blue-200 hover:text-aa-cyan-light transition-colors duration-200 flex items-center">
                      <div className="w-2 h-2 bg-aa-cyan rounded-full mr-3"></div>
                      {service}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Funky Bottom Section */}
        <div className="mt-20 pt-8 border-t border-white/20">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-blue-200 text-sm mb-6 lg:mb-0 flex items-center">
              <span>© 2025 Amigos Aura. Made with</span>
              <Heart className="w-4 h-4 mx-2 text-pink-400 animate-pulse" />
              <span>and lots of</span>
              <Coffee className="w-4 h-4 ml-2 text-aa-cyan animate-bounce" />
            </div>
            
            {/* Social Links with Funky Hover Effects */}
            <div className="flex space-x-4">
              {[
                { icon: Twitter, color: 'hover:text-blue-400', bg: 'hover:bg-blue-400/20' },
                { icon: Linkedin, color: 'hover:text-blue-500', bg: 'hover:bg-blue-500/20' },
                { icon: Github, color: 'hover:text-gray-300', bg: 'hover:bg-gray-300/20' }
              ].map(({ icon: Icon, color, bg }, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-blue-200 ${color} ${bg} transition-all duration-300 border border-white/20`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;