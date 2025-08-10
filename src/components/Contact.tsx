import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Pandua , Hooghly , 712149",
      action: () => window.open("https://maps.app.goo.gl/ewsWxJ2KYkUfkeTe9", "_blank")
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 6294516326",
      action: () => window.open("tel:+916294516326")
    },
    {
      icon: Mail,
      title: "Email",
      content: "hello@bellavista.com",
      action: () => window.open("mailto:hello@bellavista.com")
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Thu: 11AM-10PM, Fri-Sat: 11AM-11PM",
      action: undefined
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "#",
      color: "hover:text-pink-500"
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "#",
      color: "hover:text-blue-500"
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "#",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brown-800 mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-brown-600 font-open-sans max-w-2xl mx-auto">
            We're located in the heart of the city, ready to welcome you for an 
            unforgettable dining experience. Find us, call us, or follow us on social media.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-playfair font-semibold text-brown-800 mb-6">
              Get In Touch
            </h3>
            
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className={`flex items-start space-x-4 p-4 rounded-lg hover:bg-cream-50 transition-colors ${
                  info.action ? 'cursor-pointer' : ''
                }`}
                onClick={info.action}
                whileHover={info.action ? { scale: 1.02 } : {}}
              >
                <div className="bg-gold-100 p-3 rounded-lg">
                  <info.icon className="h-6 w-6 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-playfair font-semibold text-brown-800 mb-1">
                    {info.title}
                  </h4>
                  <p className="text-brown-600 font-open-sans">
                    {info.content}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Social Media */}
            <div className="pt-6">
              <h4 className="font-playfair font-semibold text-brown-800 mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-cream-100 p-3 rounded-lg text-brown-600 transition-colors ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-cream-100 rounded-lg overflow-hidden shadow-lg h-96 lg:h-full min-h-80">
              {/* Placeholder for Google Maps - In a real application, you'd embed Google Maps here */}
              <div 
                className="w-full h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800')"
                }}
              >
                <div className="absolute inset-0 bg-brown-800/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg text-center">
                    <MapPin className="h-12 w-12 text-gold-500 mx-auto mb-3" />
                    <h4 className="font-playfair font-semibold text-brown-800 mb-2">
                      Find Us Here
                    </h4>
                    <p className="font-open-sans text-brown-600 text-sm">
                      123 Culinary Street<br />
                      Food District, NYC 10001
                    </p>
                    <button 
                      onClick={() => window.open("https://maps.google.com", "_blank")}
                      className="mt-4 bg-gold-400 hover:bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
                    >
                      Open in Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;