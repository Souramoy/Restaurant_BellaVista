import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { services } from '../data/restaurantData';

const Services: React.FC = () => {
  const openingHours = [
    { day: 'Monday - Thursday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Friday - Saturday', hours: '11:00 AM - 11:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 9:00 PM' },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brown-800 mb-4">
            Our Services & Features
          </h2>
          <p className="text-lg text-brown-600 font-open-sans max-w-2xl mx-auto">
            We offer a complete dining experience with amenities and services 
            designed to make your visit memorable and comfortable.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.id * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-cream-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-playfair font-semibold text-brown-800 mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-brown-600 font-open-sans">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Opening Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gold-50 rounded-lg p-8 max-w-md mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <Clock className="h-8 w-8 text-gold-500 mr-3" />
            <h3 className="text-2xl font-playfair font-semibold text-brown-800">
              Opening Hours
            </h3>
          </div>
          <div className="space-y-4">
            {openingHours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="font-open-sans text-brown-700 font-medium">
                  {schedule.day}
                </span>
                <span className="font-open-sans text-brown-600">
                  {schedule.hours}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;