import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import footerLogo from '../assets/logo 1.jpeg';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={footerLogo} alt="GISA" className="h-14 object-contain rounded-sm bg-white p-1" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Infrastructure. Connectivity. Solutions. <br /><br />
              PT Global Infrastructure Solutions delivers reliable infrastructure and technology solutions for businesses and industrial environments.
            </p>
          </div>

          {/* Company & Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/products" className="hover:text-white transition-colors">Fiber Optic</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Network Hardware</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Home & Office Server</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Data Center</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Structured Cabling</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">CCTV</Link></li>
            </ul>
          </div>

          {/* Services & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-accent shrink-0 mt-0.5" />
                <span>sales@gisa.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-accent shrink-0 mt-0.5" />
                <span>WhatsApp: 085150956644</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 PT Global Infrastructure Solutions. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
