import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, LayoutGrid, List } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';
import { staggerContainer } from '../animations/variants';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', ...new Set(products.map(p => p.category))];
  
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="pt-28 pb-20 min-h-screen bg-surface">
      {/* Header */}
      <div className="bg-primary text-white py-16 mb-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHeading 
            title="Technology Products for Modern Infrastructure" 
            subtitle="Explore our comprehensive range of infrastructure, networking, server, fiber optic, and technology products."
            centered={false}
          />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar / Filters */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-28">
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <Filter size={18} /> Filters
              </h3>
              
              {/* Search */}
              <div className="relative mb-6">
                <input 
                  type="text" 
                  placeholder="Search products, SKU..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold text-primary mb-3">Categories</h4>
                <div className="flex flex-col gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`text-left text-sm py-1.5 px-3 rounded-md transition-colors ${
                        activeCategory === category 
                          ? 'bg-blue-50 text-accent font-medium' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <div className="text-gray-500 font-medium">
                Showing <span className="text-primary font-bold">{filteredProducts.length}</span> products
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-accent bg-blue-50 rounded-md">
                  <LayoutGrid size={20} />
                </button>
                <button className="p-2 text-gray-400 hover:text-primary rounded-md">
                  <List size={20} />
                </button>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            ) : (
              <div className="bg-white rounded-lg border border-gray-100 p-12 text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your search or filters.</p>
                <button 
                  onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                  className="mt-4 text-accent font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Products;
