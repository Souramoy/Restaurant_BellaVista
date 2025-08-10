import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Events', href: '#events' },
    { name: 'Reviews', href: '#reviews' }
  ];

  const socialLinks = [
    { icon: Instagram, url: '#', name: 'Instagram' },
    { icon: Facebook, url: '#', name: 'Facebook' },
    { icon: Youtube, url: '#', name: 'YouTube' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brown-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Utensils className="h-8 w-8 text-gold-400" />
              <span className="text-2xl font-playfair font-bold">Bella Vista</span>
            </div>
            <p className="text-cream-200 font-open-sans leading-relaxed mb-6 max-w-md">
              Where exceptional cuisine meets warm hospitality. Join us for an unforgettable 
              dining experience that celebrates the art of fine food and genuine service.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center text-cream-200 font-open-sans">
                <MapPin className="h-4 w-4 mr-2 text-gold-400" />
                Pandua , Hooghly , 712149
              </div>
              <div className="flex items-center text-cream-200 font-open-sans">
                <Phone className="h-4 w-4 mr-2 text-gold-400" />
                +91 6294516326
              </div>
              <div className="flex items-center text-cream-200 font-open-sans">
                <Mail className="h-4 w-4 mr-2 text-gold-400" />
                hello@bellavista.com
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-playfair font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-cream-200 hover:text-gold-400 transition-colors duration-200 font-open-sans"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Hours & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-playfair font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="bg-brown-700 hover:bg-gold-400 p-3 rounded-lg transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            
            <div>
              <h4 className="font-playfair font-semibold mb-2">Hours</h4>
              <div className="text-cream-200 font-open-sans text-sm space-y-1">
                <p>Mon-Thu: 11AM-10PM</p>
                <p>Fri-Sat: 11AM-11PM</p>
                <p>Sunday: 10AM-9PM</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-brown-700 mt-8 pt-8 text-center"
        >
          <p className="text-cream-200 font-open-sans">
            © {currentYear} Bella Vista Restaurant. All rights reserved. | 
            <span className="text-gold-400"> Crafted with passion for exceptional dining</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;