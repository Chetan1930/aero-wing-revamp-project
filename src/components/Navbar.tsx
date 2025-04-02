
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-aero-blue">AeroWing</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="text-aero-blue hover:text-aero-light font-medium">Home</Link>
          <Link to="/about" className="text-aero-blue hover:text-aero-light font-medium">About Us</Link>
          
          <div className="relative group">
            <button 
              className="flex items-center text-aero-blue hover:text-aero-light font-medium"
              onClick={toggleServices}
            >
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-1">
                <Link to="/services/corporate" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Corporate Aviation</Link>
                <Link to="/services/training" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Flight Training</Link>
                <Link to="/services/maintenance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Aircraft Maintenance</Link>
                <Link to="/services/charter" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Charter Services</Link>
              </div>
            </div>
          </div>
          
          <Link to="/fleet" className="text-aero-blue hover:text-aero-light font-medium">Our Fleet</Link>
          <Link to="/gallery" className="text-aero-blue hover:text-aero-light font-medium">Gallery</Link>
          <Link to="/contact" className="text-aero-blue hover:text-aero-light font-medium">Contact</Link>
        </div>

        <Button className="hidden lg:block bg-aero-blue hover:bg-aero-light text-white">Book Now</Button>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-aero-blue"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="px-4 py-3 space-y-3">
            <Link to="/" className="block text-aero-blue hover:text-aero-light font-medium">Home</Link>
            <Link to="/about" className="block text-aero-blue hover:text-aero-light font-medium">About Us</Link>
            
            <div>
              <button 
                className="flex items-center w-full text-aero-blue hover:text-aero-light font-medium"
                onClick={toggleServices}
              >
                Services <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link to="/services/corporate" className="block text-sm text-gray-700 hover:text-aero-light">Corporate Aviation</Link>
                  <Link to="/services/training" className="block text-sm text-gray-700 hover:text-aero-light">Flight Training</Link>
                  <Link to="/services/maintenance" className="block text-sm text-gray-700 hover:text-aero-light">Aircraft Maintenance</Link>
                  <Link to="/services/charter" className="block text-sm text-gray-700 hover:text-aero-light">Charter Services</Link>
                </div>
              )}
            </div>
            
            <Link to="/fleet" className="block text-aero-blue hover:text-aero-light font-medium">Our Fleet</Link>
            <Link to="/gallery" className="block text-aero-blue hover:text-aero-light font-medium">Gallery</Link>
            <Link to="/contact" className="block text-aero-blue hover:text-aero-light font-medium">Contact</Link>
            
            <Button className="w-full bg-aero-blue hover:bg-aero-light text-white">Book Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
