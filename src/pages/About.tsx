import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/templates/PageLayout';
import Card from '../components/Card';
import StatGrid from '../components/molecules/StatGrid';
import TeamTreeNode from '../components/TeamTreeNode';
import { teamHierarchy, companyValues } from '../data/team';
import { companyStats } from '../data/company';

const About = () => {
  return (
    <PageLayout
      title="About Us"
      subtitle="We're a team of passionate engineers, designers, and strategists dedicated to building exceptional digital products."
    >
      {/* Mission Section */}
      <section className="mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-aa-primary-dark mb-6"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            We exist to help ambitious companies build, ship, and scale world-class digital products.
            Our team combines deep technical expertise with a genuine passion for solving complex problems.
            We believe in the power of great software to transform businesses and improve lives.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-20">
        <StatGrid stats={companyStats} />
      </section>

      {/* Values Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-aa-primary-dark mb-4"
          >
            Our Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700"
          >
            These principles guide everything we do
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <h3 className="text-xl font-bold text-aa-primary-dark mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-aa-primary-dark mb-4"
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 mb-6"
          >
            Our organizational structure and leadership
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <TeamTreeNode member={teamHierarchy} isRoot={true} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-aa-blue-primary to-aa-cyan rounded-2xl p-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-white mb-4"
        >
          Want to work with us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
        >
          We're always looking for exciting projects and talented people to join our team.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/contact"
            className="inline-block bg-white text-aa-blue-primary px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>
    </PageLayout>
  );
};

export default About;
