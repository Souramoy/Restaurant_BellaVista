import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock } from 'lucide-react';
import { teamMembers } from '../data/restaurantData';

const About: React.FC = () => {
  const awards = [
    { icon: Award, title: "Best Fine Dining", year: "2023" },
    { icon: Users, title: "Customer Choice", year: "2023" },
    { icon: Clock, title: "40 Years Excellence", year: "Since 1985" }
  ];

  return (
    <section id="about" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brown-800 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-brown-600 mb-6 font-open-sans leading-relaxed">
              Founded in 1985 by the Rossi family, Bella Vista began as a small neighborhood 
              trattoria with a simple mission: to serve exceptional food made with love and 
              the finest ingredients.
            </p>
            <p className="text-lg text-brown-600 mb-8 font-open-sans leading-relaxed">
              Today, we continue this tradition, blending authentic Italian techniques with 
              contemporary culinary artistry. Every dish tells a story of passion, heritage, 
              and our commitment to creating memorable dining experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gold-100 px-4 py-2 rounded-full">
                <span className="text-brown-800 font-semibold">Farm to Table</span>
              </div>
              <div className="bg-gold-100 px-4 py-2 rounded-full">
                <span className="text-brown-800 font-semibold">Local Sourcing</span>
              </div>
              <div className="bg-gold-100 px-4 py-2 rounded-full">
                <span className="text-brown-800 font-semibold">Sustainable</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Restaurant Interior"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-gold-400 text-white p-6 rounded-lg shadow-lg">
              <p className="text-2xl font-playfair font-bold">40+</p>
              <p className="font-open-sans">Years of Excellence</p>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-playfair font-bold text-brown-800 text-center mb-12">
            Meet Our Culinary Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-playfair font-semibold text-brown-800 mb-2">
                  {member.name}
                </h4>
                <p className="text-brown-600 font-open-sans">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-playfair font-bold text-brown-800 text-center mb-12">
            Recognition & Awards
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="bg-gold-50 rounded-lg p-8 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <award.icon className="h-12 w-12 text-gold-500 mx-auto mb-4" />
                <h4 className="text-xl font-playfair font-semibold text-brown-800 mb-2">
                  {award.title}
                </h4>
                <p className="text-gold-600 font-open-sans font-semibold">{award.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;