import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Aakash Aviation</h3>
            <p className="text-gray-400 mb-6">
              Delivering excellence in aviation services with a commitment to safety, quality, and customer satisfaction across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">Our Services</Link>
              </li>
              <li>
                <Link to="/fleet" className="text-gray-400 hover:text-white">Our Fleet</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/corporate" className="text-gray-400 hover:text-white">Corporate Aviation</Link>
              </li>
              <li>
                <Link to="/services/training" className="text-gray-400 hover:text-white">Flight Training</Link>
              </li>
              <li>
                <Link to="/services/maintenance" className="text-gray-400 hover:text-white">Aircraft Maintenance</Link>
              </li>
              <li>
                <Link to="/services/charter" className="text-gray-400 hover:text-white">Charter Services</Link>
              </li>
              <li>
                <Link to="/services/management" className="text-gray-400 hover:text-white">Aircraft Management</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-aero-blue mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">42, Aviation Complex, HAL Airport Road, Bengaluru, Karnataka 560017</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-aero-blue mr-3 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white">+91 98765 43210</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-aero-blue mr-3 flex-shrink-0" />
                <a href="mailto:info@aakashaviation.in" className="text-gray-400 hover:text-white">info@aakashaviation.in</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Aakash Aviation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-500 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-500 hover:text-white text-sm">Terms of Service</Link>
              <Link to="/sitemap" className="text-gray-500 hover:text-white text-sm">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
