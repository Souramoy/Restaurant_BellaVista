import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { reviews } from '../data/restaurantData';

const Reviews: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-gold-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brown-800 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-lg text-brown-600 font-open-sans max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued guests have to say 
            about their dining experiences at Bella Vista.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6 relative"
              whileHover={{ scale: 1.02 }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 bg-gold-400 p-2 rounded-full">
                <Quote className="h-4 w-4 text-white" />
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-brown-600 font-open-sans leading-relaxed mb-6 italic">
                "{review.comment}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center">
                {review.image && (
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                )}
                <div>
                  <h4 className="font-playfair font-semibold text-brown-800">
                    {review.name}
                  </h4>
                  <p className="text-brown-500 font-open-sans text-sm">
                    Verified Customer
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gold-50 rounded-lg p-8 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="flex mr-4">
              {renderStars(5)}
            </div>
            <span className="text-3xl font-playfair font-bold text-brown-800">5.0</span>
          </div>
          
          <h3 className="text-xl font-playfair font-semibold text-brown-800 mb-2">
            Excellent Rating
          </h3>
          
          <p className="text-brown-600 font-open-sans mb-6">
            Based on 200+ verified reviews from our satisfied customers
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-playfair font-bold text-gold-600 mb-1">98%</div>
              <div className="text-brown-600 font-open-sans text-sm">Recommend Us</div>
            </div>
            <div>
              <div className="text-2xl font-playfair font-bold text-gold-600 mb-1">4.9</div>
              <div className="text-brown-600 font-open-sans text-sm">Food Quality</div>
            </div>
            <div>
              <div className="text-2xl font-playfair font-bold text-gold-600 mb-1">4.8</div>
              <div className="text-brown-600 font-open-sans text-sm">Service</div>
            </div>
            <div>
              <div className="text-2xl font-playfair font-bold text-gold-600 mb-1">4.9</div>
              <div className="text-brown-600 font-open-sans text-sm">Ambiance</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;