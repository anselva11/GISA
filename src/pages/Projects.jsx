import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '../animations/variants';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/projects';
import { MapPin, Target, CheckCircle } from 'lucide-react';

const Projects = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Discover how we've helped organizations build robust, scalable, and secure technology infrastructure."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wide shadow-md">
                  {project.industry}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1.5 rounded shadow-md">
                  {project.year}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{project.name}</h3>
                <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-6 font-medium">
                  <MapPin size={16} className="text-accent" /> {project.location}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <span className="font-bold text-primary block mb-1">Scope of Work:</span>
                  {project.scope}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1 flex items-center gap-2">
                      <Target size={16} className="text-red-500" /> Challenge
                    </h4>
                    <p className="text-gray-600 text-sm">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1 flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500" /> Solution & Result
                    </h4>
                    <p className="text-gray-600 text-sm">{project.solution} {project.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
