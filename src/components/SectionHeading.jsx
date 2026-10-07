import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';

const SectionHeading = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div 
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{title}</h2>
      {subtitle && <p className="text-text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
};

export default SectionHeading;
