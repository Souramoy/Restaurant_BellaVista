import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Star } from 'lucide-react';
import { events } from '../data/restaurantData';

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brown-800 mb-4">
            Events & Specials
          </h2>
          <p className="text-lg text-brown-600 font-open-sans max-w-2xl mx-auto">
            Join us for special events, seasonal celebrations, and unique dining experiences 
            that make every visit extraordinary.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-gold-400 text-white p-2 rounded-full">
                  <Calendar className="h-5 w-5" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {event.date}
                  </span>
                  <Star className="h-5 w-5 text-gold-400" />
                </div>
                
                <h3 className="text-xl font-playfair font-semibold text-brown-800 mb-3 group-hover:text-gold-600 transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-brown-600 font-open-sans leading-relaxed mb-4">
                  {event.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-brown-500">
                    <Users className="h-4 w-4 mr-1" />
                    <span className="text-sm font-open-sans">Limited Seats</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

  {/* ...removed Special Promotions Banner... */}
      </div>
    </section>
  );
};

export default Events;