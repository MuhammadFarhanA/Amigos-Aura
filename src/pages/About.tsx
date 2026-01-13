import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import TeamCard from '../components/TeamCard';
import { teamHierarchy, companyValues } from '../data/team';
import { companyStats } from '../data/company';

const About = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative w-full h-96 rounded-3xl overflow-hidden mb-12">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="About Amigos Aura"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 backdrop-blur-sm" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                About Amigos Aura
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
                Building exceptional digital products with passion and expertise
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-aa-blue-primary to-aa-cyan rounded-2xl p-6 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.stat}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-aa-primary-dark mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We exist to help ambitious companies build, ship, and scale world-class digital products.
                Our team combines deep technical expertise with a genuine passion for solving complex problems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in the power of great software to transform businesses and improve lives.
                Every line of code we write, every design we create, and every solution we deliver
                is aimed at driving real business impact.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-100 to-blue-50 rounded-3xl p-8">
                <div className="space-y-4">
                  {[
                    'World-class technical expertise',
                    'Client-focused approach',
                    'Proven track record of success',
                    'Innovation-driven solutions',
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-aa-blue-primary flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-aa-primary-dark mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 max-w-2xl mx-auto"
            >
              The principles that guide everything we do and every decision we make
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => {
              const icons = [Target, Users, Lightbulb, Shield];
              const Icon = icons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-aa-blue-primary to-aa-cyan rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-aa-primary-dark mb-3">{value.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-aa-primary-dark mb-4"
            >
              Meet Our Leadership
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 mb-6"
            >
              The visionaries and experts driving our success
            </motion.p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <TeamCard member={teamHierarchy} isCEO={true} index={0} />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {teamHierarchy.reports?.map((member, index) => (
                <TeamCard key={index} member={member} index={index + 1} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl">
          <div className="bg-gradient-to-br from-aa-primary-dark via-aa-blue-primary to-aa-cyan p-12 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                Let's collaborate on your next project. We're ready to bring your vision to life
                with cutting-edge technology and expert craftsmanship.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-aa-blue-primary px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200"
                >
                  Explore Services
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
