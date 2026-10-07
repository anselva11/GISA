import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, AlertCircle } from 'lucide-react';
import { products } from '../data/products';
import { fadeUp } from '../animations/variants';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const found = products.find(p => p.id === id);
    setProduct(found);
    if (found) {
      const related = products
        .filter(p => p.category === found.category && p.id !== found.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-surface">
        <h2 className="text-2xl font-bold text-primary mb-4">Product Not Found</h2>
        <Link to="/products" className="text-accent hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 min-h-screen bg-surface">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8 flex items-center gap-2">
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-primary font-medium">{product.name}</span>
        </div>

        {/* Main Product Info */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Gallery */}
            <div className="bg-gray-50 p-8 flex items-center justify-center border-r border-gray-100">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={product.image} 
                alt={product.name} 
                className="w-full max-w-md object-contain mix-blend-multiply"
              />
            </div>
            
            {/* Details */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="text-sm font-bold text-accent mb-2 uppercase tracking-wide">{product.brand}</div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium">
                  SKU: {product.sku}
                </div>
                <div className="flex items-center gap-1.5 text-green-600 text-sm font-medium">
                  <Check size={16} /> In Stock
                </div>
              </div>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {product.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <Link 
                  to="/request-quote"
                  state={{ product: product.name, sku: product.sku }}
                  className="flex-1 bg-accent hover:bg-accent-hover text-white text-center py-4 rounded-md font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Request a Quote
                </Link>
                <Link 
                  to="/contact"
                  className="flex-1 bg-gray-50 border border-gray-200 text-primary text-center py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-16"
        >
          <div className="p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <AlertCircle className="text-accent" /> Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">{key}</span>
                  <span className="text-primary font-semibold text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Related Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
