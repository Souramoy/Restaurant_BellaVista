import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { menuItems } from '../data/menuData';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('starters');

  const categories = [
    { id: 'starters', name: 'Starters' },
    { id: 'mains', name: 'Main Course' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brown-800 mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-brown-600 font-open-sans max-w-2xl mx-auto">
            Discover our carefully crafted dishes, made with the finest ingredients and 
            traditional techniques passed down through generations.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-open-sans font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gold-400 text-white shadow-lg'
                  : 'bg-cream-100 text-brown-700 hover:bg-cream-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="bg-cream-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                {item.isSpecial && (
                  <div className="absolute top-4 left-4 bg-gold-400 text-white px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span className="text-sm font-semibold">Chef's Special</span>
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-brown-800 text-white px-3 py-2 rounded-lg">
                  <span className="font-playfair font-bold text-lg">{item.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-brown-800 mb-3">
                  {item.name}
                </h3>
                <p className="text-brown-600 font-open-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;