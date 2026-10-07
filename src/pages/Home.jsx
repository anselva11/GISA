import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeUp, staggerContainer, staggerItem } from '../animations/variants';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data/services';
import { ArrowRight, CheckCircle2, Users, Briefcase, Zap } from 'lucide-react';
import bgImage from '../assets/bg.jpg';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={bgImage} 
            alt="Data Center Infrastructure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full mt-20">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Building the <span className="text-accent">Infrastructure</span> Behind Connected Business.
            </motion.h1>
            
            <motion.p 
              variants={fadeUp}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
            >
              GISA delivers reliable infrastructure, connectivity, hardware, and technology solutions for businesses, organizations, and industrial environments.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link 
                to="/request-quote" 
                className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-md font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
              >
                Request a Quote <ArrowRight size={20} />
              </Link>
              <Link 
                to="/products" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-md font-semibold transition-all flex items-center gap-2"
              >
                Explore Products
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust / Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHeading 
            title="Trusted Infrastructure. Reliable Solutions." 
            subtitle="We provide end-to-end capabilities from hardware supply to implementation."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Box, label: '100+', text: 'Products' },
              { icon: Briefcase, label: '50+', text: 'Projects' },
              { icon: Users, label: '24/7', text: 'Support' },
              { icon: Zap, label: '100%', text: 'End-to-End Solutions' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.label}</div>
                <div className="text-gray-500 font-medium">{stat.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions / Services Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHeading 
            title="Core Infrastructure Solutions" 
            subtitle="Comprehensive technology solutions tailored for modern enterprise environments."
          />

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {services.slice(0, 6).map((service) => (
              <motion.div 
                key={service.id}
                variants={staggerItem}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-50 text-accent rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-text-muted mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition-colors"
                >
                  Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop" 
            alt="Fiber pattern" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to upgrade your infrastructure?</h2>
            <p className="text-gray-300 mb-10 text-lg">
              Contact our engineering team to discuss your project requirements, request a quote, or schedule a consultation.
            </p>
            <Link 
              to="/request-quote" 
              className="inline-flex bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-md font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 items-center gap-2"
            >
              Contact Sales <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Box icon for stats
const Box = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

export default Home;
