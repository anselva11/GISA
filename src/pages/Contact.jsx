import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, fadeRight } from '../animations/variants';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-surface">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Talk to Our Team</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or need engineering support for your next project? We're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Contact Info (Left) */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
            className="lg:col-span-1 bg-primary text-white p-10 flex flex-col h-full relative overflow-hidden"
          >
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
            
            <h2 className="text-2xl font-bold mb-2 relative z-10">Contact Information</h2>
            <p className="text-gray-400 mb-10 relative z-10">PT GLOBAL INFRASTRUCTURE SOLUTIONS</p>
            
            <div className="space-y-8 relative z-10 flex-grow">
              <div className="flex items-start gap-4">
                <MapPin className="text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Office Address</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">Jakarta, Indonesia</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-300 text-sm">sales@gisa.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Phone & WhatsApp</h4>
                  <p className="text-gray-300 text-sm">085150956644</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Business Hours</h4>
                  <p className="text-gray-300 text-sm">Mon - Fri: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right) */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeRight}
            className="lg:col-span-2 p-10 lg:p-12"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-colors" placeholder="Company Ltd" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-colors" placeholder="+62..." />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="submit" className="w-full md:w-auto px-8 py-3.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Google Maps Placeholder */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16 bg-gray-200 w-full h-[400px] rounded-2xl overflow-hidden relative shadow-inner border border-gray-300"
        >
          {/* Replace with actual iframe in production */}
          <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-500">
            <MapPin size={48} className="mb-4 text-gray-400" />
            <p className="font-medium text-lg">Google Maps Integration</p>
            <p className="text-sm">Jakarta, Indonesia</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
