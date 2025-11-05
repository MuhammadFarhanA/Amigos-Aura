import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Button from '../components/atoms/Button';
import StatGrid from '../components/molecules/StatGrid';
import ProcessTimeline from '../components/molecules/ProcessTimeline';
import ServiceGrid from '../components/organisms/ServiceGrid';
import { companyStats, processSteps } from '../data/company';
import { servicesData } from '../data/services';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/2278095-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-aa-blue-primary/95 via-aa-blue-bright/90 to-aa-cyan/85"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Build. Ship. Scale.
              </h1>
              <p className="text-2xl lg:text-3xl text-white mb-4 font-semibold drop-shadow-xl">
                Design. Develop. Deploy. Your Digital Success
              </p>
              <p className="text-lg lg:text-xl text-white mb-4 font-medium drop-shadow-lg">
                ⚡ Fast • 🤝 Friendly • ☕ Occasionally Caffeinated
              </p>
              <p className="text-xl lg:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
                Custom Software, Cloud, and AI Solutions That Drive Digital Transformation.
              </p>
            </motion.div>
            {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex justify-center"
              >
                <Button variant="outline" size="lg">
                  Book a Discovery Call
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex justify-center"
              >
                <Button variant="outline" size="lg">
                  <Play className="w-5 h-5" />
                  Get a Proposal
                </Button>
              </motion.div>
            </div> */}
          </div>
        </div>
      </section>


      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold aa-primary-dark mb-6"
            >
              Our Complete Service Suite
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg aa-primary max-w-3xl mx-auto"
            >
              Delivering Future-Ready Software, Cloud, and AI Solutions That Drive Digital Growth
            </motion.p>
          </div>

          <ServiceGrid services={servicesData} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <a href="/services">
              <Button size="lg">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold aa-primary-dark mb-6"
            >
              How we work with you
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg aa-primary max-w-3xl mx-auto"
            >
              Our proven process ensures successful delivery from concept to scale.
            </motion.p>
          </div>

          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

    </div>
  );
};

export default Home;