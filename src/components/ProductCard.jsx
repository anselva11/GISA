import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { staggerItem } from '../animations/variants';
import { ArrowRight, Box } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      variants={staggerItem}
      className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
    >
      <div className="relative h-48 overflow-hidden bg-gray-50 flex items-center justify-center p-4">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover rounded mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <Box className="w-16 h-16 text-gray-300" />
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-medium text-primary shadow-sm">
          {product.brand}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-xs font-semibold text-accent mb-2 tracking-wide uppercase">{product.category}</div>
        <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">{product.name}</h3>
        
        <div className="text-xs text-gray-500 mb-4 bg-gray-50 p-2 rounded">
          <span className="font-semibold text-gray-700">SKU:</span> {product.sku}
        </div>
        
        <p className="text-sm text-text-muted mb-6 line-clamp-2 flex-grow">
          {product.description}
        </p>
        
        <div className="mt-auto flex flex-col gap-2">
          <Link 
            to={`/products/${product.id}`}
            className="w-full text-center py-2.5 border border-gray-200 text-primary font-medium text-sm rounded-md hover:border-primary hover:bg-primary hover:text-white transition-colors"
          >
            View Details
          </Link>
          <Link 
            to="/request-quote"
            className="w-full text-center py-2.5 bg-gray-50 text-primary font-medium text-sm rounded-md hover:bg-accent hover:text-white transition-colors flex items-center justify-center gap-2 group-hover:bg-accent group-hover:text-white"
          >
            Request Quote <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
