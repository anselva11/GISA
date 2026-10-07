import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '../animations/variants';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data/services';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Professional Infrastructure Services" 
          subtitle="End-to-end technical services from design and installation to maintenance and support, delivered by certified engineers."
        />

        <div className="mt-16 flex flex-col gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/3 bg-blue-50/50 p-8 lg:p-12 flex flex-col justify-center items-start border-r border-gray-100">
                <div className="w-16 h-16 bg-white shadow-sm text-accent rounded-xl flex items-center justify-center mb-6">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to="/request-quote"
                  state={{ service: service.title }}
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition-colors"
                >
                  Inquire Service <ArrowRight size={16} />
                </Link>
              </div>
              
              <div className="lg:w-2/3 p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-primary mb-4 uppercase text-sm tracking-wider">Our Process</h4>
                  <ul className="space-y-3">
                    {service.process.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <span className="w-6 h-6 rounded-full bg-blue-50 text-accent flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-primary mb-4 uppercase text-sm tracking-wider">Key Benefits</h4>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
