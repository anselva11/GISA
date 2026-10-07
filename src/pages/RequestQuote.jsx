import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp } from '../animations/variants';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const RequestQuote = () => {
  const location = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Pre-fill if coming from a product or service
  const prefilledProduct = location.state?.product || '';
  const prefilledSku = location.state?.sku || '';
  const prefilledService = location.state?.service || '';
  
  const initialInterest = prefilledProduct ? `${prefilledProduct} (SKU: ${prefilledSku})` : prefilledService;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    }, 800);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-surface">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-lg border border-gray-100"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-bold text-primary mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Your request has been successfully submitted. Our sales and engineering team will review your requirements and contact you shortly.
          </p>
          <Link 
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-lg transition-colors"
          >
            Return Home <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 min-h-screen bg-surface">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-primary mb-4">Request a Quote</h1>
          <p className="text-gray-600">
            Provide details about your project or required products, and our team will get back to you with a comprehensive proposal.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Personal Info */}
              <div>
                <h3 className="text-lg font-bold text-primary border-b border-gray-100 pb-3 mb-5">Contact Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input required type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Company *</label>
                    <input required type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                    <input required type="email" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone / WhatsApp *</label>
                    <input required type="tel" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-lg font-bold text-primary border-b border-gray-100 pb-3 mb-5">Project Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Industry</label>
                    <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white appearance-none">
                      <option value="">Select Industry</option>
                      <option value="Telecom">Telecommunications</option>
                      <option value="DataCenter">Data Centers</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Corporate">Corporate / Office</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Project Type</label>
                    <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white appearance-none">
                      <option value="">Select Type</option>
                      <option value="HardwareSupply">Hardware Supply Only</option>
                      <option value="Turnkey">Turnkey Project (Supply + Install)</option>
                      <option value="Maintenance">Maintenance & Support</option>
                    </select>
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Product / Service Required *</label>
                  <input 
                    required 
                    type="text" 
                    defaultValue={initialInterest}
                    placeholder="e.g. Fiber Optic Cable 12 Core / Network Installation"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white" 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Quantity / Scope</label>
                    <input type="text" placeholder="e.g. 50 Units, 1000 Meters" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Required Date</label>
                    <input type="date" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white text-gray-600" />
                  </div>
                </div>
                
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Project Location</label>
                  <input type="text" placeholder="City, Region" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Requirements</label>
                  <textarea 
                    rows="4" 
                    placeholder="Provide any specific technical requirements or context..."
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Upload Project Specification (Optional)</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600 justify-center">
                      <span className="relative cursor-pointer rounded-md font-medium text-accent hover:text-accent-hover focus-within:outline-none">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </span>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF, DOCX, or Excel up to 10MB</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 text-lg">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RequestQuote;
