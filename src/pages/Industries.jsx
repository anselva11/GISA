import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '../animations/variants';
import SectionHeading from '../components/SectionHeading';
import { 
  Building2, 
  Factory, 
  Briefcase, 
  GraduationCap, 
  Stethoscope, 
  Hotel, 
  Landmark, 
  Home,
  Server,
  Wifi
} from 'lucide-react';

const industriesData = [
  {
    title: "Telecommunications",
    icon: Wifi,
    description: "High-density fiber optic networks, core routing, and edge access infrastructure for ISPs and telcos."
  },
  {
    title: "Data Centers",
    icon: Server,
    description: "Rack containment, precision cabling, redundant power distributions, and massive fiber trunking."
  },
  {
    title: "Manufacturing & Industrial",
    icon: Factory,
    description: "Ruggedized networking, armored cabling, and EMI-resistant infrastructure for harsh factory floors."
  },
  {
    title: "Corporate & Enterprise",
    icon: Briefcase,
    description: "High-speed LAN, Wi-Fi 6 deployment, corporate servers, and secure access control systems."
  },
  {
    title: "Education",
    icon: GraduationCap,
    description: "Campus-wide connectivity, student server infrastructure, and surveillance for schools and universities."
  },
  {
    title: "Healthcare",
    icon: Stethoscope,
    description: "Highly reliable networks for critical medical data, and strict access control for restricted hospital wings."
  },
  {
    title: "Hospitality",
    icon: Hotel,
    description: "Seamless guest Wi-Fi, property management servers, and IP CCTV for hotels and resorts."
  },
  {
    title: "Government",
    icon: Landmark,
    description: "Secure, compliant infrastructure and massive data storage solutions for public sector operations."
  },
  {
    title: "Property & Real Estate",
    icon: Home,
    description: "Smart building infrastructure, FTTH (Fiber to the Home), and centralized security management."
  }
];

const Industries = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Industries We Serve" 
          subtitle="Tailored technology infrastructure solutions designed to meet the unique challenges and regulatory requirements of diverse sectors."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {industriesData.map((industry, index) => (
            <motion.div 
              key={index}
              variants={staggerItem}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gray-50 border border-gray-100 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <industry.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{industry.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Industries;
