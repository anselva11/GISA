import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '../animations/variants';
import SectionHeading from '../components/SectionHeading';
import { ShieldCheck, Target, TrendingUp, Zap, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-surface">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Engineering Reliable Infrastructure <br className="hidden md:block" /> for a Connected World
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            GISA provides technology infrastructure products and services covering Supply, Design, Installation, Integration, Testing, and Maintenance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            className="rounded-xl overflow-hidden shadow-lg h-[400px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" 
              alt="Engineering Team" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              PT Global Infrastructure Solutions (GISA) is a premier Indonesian technology infrastructure company. We specialize in supplying enterprise-grade IT hardware, robust network infrastructure, cutting-edge fiber optic products, and comprehensive server infrastructure.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Beyond supply, our core strength lies in our engineering capabilities. We deliver end-to-end solutions including structured cabling, professional installation, seamless system integration, rigorous testing, and reliable maintenance services to ensure your business operations never stop.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-primary text-white p-10 rounded-xl shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Target size={120} />
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10 flex items-center gap-3">
              <Target className="text-accent" /> Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed relative z-10">
              To provide reliable infrastructure and technology solutions that help organizations operate more efficiently, scale seamlessly, and stay securely connected in an increasingly digital world.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white border border-gray-200 p-10 rounded-xl shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <TrendingUp size={120} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4 relative z-10 flex items-center gap-3">
              <TrendingUp className="text-accent" /> Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed relative z-10">
              To become the most trusted and preferred technology infrastructure and system integration company in Indonesia, recognized for our technical excellence and unyielding commitment to quality.
            </p>
          </motion.div>
        </div>

        <SectionHeading title="Our Core Values" subtitle="The principles that drive our business forward every day." />
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12"
        >
          {[
            { icon: ShieldCheck, title: 'Integrity' },
            { icon: Zap, title: 'Reliability' },
            { icon: Users, title: 'Professionalism' },
            { icon: Target, title: 'Technical Excellence' },
            { icon: TrendingUp, title: 'Customer Focus' },
          ].map((val, i) => (
            <motion.div 
              key={i}
              variants={staggerItem}
              className="bg-white border border-gray-100 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-50 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <val.icon size={24} />
              </div>
              <h4 className="font-bold text-primary">{val.title}</h4>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

// Added variants for left/right fade
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default About;
