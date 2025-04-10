import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-aero-blue">AeroWing</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={`px-4 py-2 text-aero-blue hover:text-aero-light font-medium`}>
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-aero-blue hover:text-aero-light">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[350px] p-0 bg-black/90 text-white">
                    <li className="border-t border-gray-700 first:border-t-0">
                      <div className="flex justify-between items-center w-full">
                        <Link to="/services/design" className="w-full block px-4 py-3 hover:bg-gray-800">
                          Aerospace Vehicle Design
                        </Link>
                        <ChevronRight className="h-4 w-4 mr-2" />
                      </div>
                    </li>
                    <li className="border-t border-gray-700">
                      <Link to="/services/analysis" className="block px-4 py-3 hover:bg-gray-800">
                        Aerospace Vehicle Analysis
                      </Link>
                    </li>
                    <li className="border-t border-gray-700">
                      <div className="flex justify-between items-center w-full">
                        <Link to="/services/manufacturing" className="w-full block px-4 py-3 hover:bg-gray-800">
                          Aerospace Vehicle Manufacturing
                        </Link>
                        <ChevronRight className="h-4 w-4 mr-2" />
                      </div>
                    </li>
                    <li className="border-t border-gray-700">
                      <Link to="/services/flight-testing" className="block px-4 py-3 hover:bg-gray-800">
                        Aerospace Vehicle Flight Testing
                      </Link>
                    </li>
                    <li className="border-t border-gray-700">
                      <Link to="/services/outreach" className="block px-4 py-3 hover:bg-gray-800">
                        Outreach Program
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-aero-blue hover:text-aero-light">
                  Consult an Expert
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[250px] p-0">
                    <li className="border-t border-blue-100 first:border-t-0 py-2">
                      <Link to="/expert/my-account" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                        My account
                      </Link>
                    </li>
                    <li className="border-t border-blue-100 py-2">
                      <Link to="/expert/cart" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                        Cart
                      </Link>
                    </li>
                    <li className="border-t border-blue-100 py-2">
                      <Link to="/expert/checkout" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                        Checkout
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/jobs" className="px-4 py-2 text-aero-blue hover:text-aero-light font-medium">
                  Jobs
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-aero-blue hover:text-aero-light">
                  Contact Us
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[250px] p-0">
                    <li className="border-t border-blue-100 first:border-t-0 py-2">
                      <Link to="/contact/privacy-policy" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-aero-blue hover:text-aero-light">
                  Employee Corner
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[320px] p-0">
                    <li className="border-t border-blue-100 first:border-t-0 py-2">
                      <Link to="/employee/mail-login" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                        Employee Mail Login
                      </Link>
                    </li>
                    <li className="border-t border-blue-100 py-2">
                      <Link to="/employee/tracker" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                        Employee Time Tracker/Attendance
                      </Link>
                    </li>
                    <li className="border-t border-blue-100 py-2">
                      <Link to="/employee/leave" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                        Employee Time Off/Leave Application
                      </Link>
                    </li>
                    <li className="border-t border-blue-100 py-2">
                      <Link to="/employee/expense" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                        Employee Travel Expense Request
                      </Link>
                    </li>
                    <li className="border-t border-blue-100 py-2">
                      <Link to="/employee/submission" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                        Task, Report/Presentation/Video Submission
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Button className="hidden lg:block bg-aero-blue hover:bg-aero-light text-white">Get in Touch</Button>

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
            
            <div className="collapsible">
              <button className="flex items-center justify-between w-full text-aero-blue hover:text-aero-light font-medium">
                Services <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4 mt-2 space-y-2">
                <div className="collapsible">
                  <button className="flex items-center justify-between w-full text-aero-dark hover:text-aero-light">
                    Aerospace Vehicle Design <ChevronRight className="h-4 w-4" />
                  </button>
                  <div className="pl-4 mt-1 space-y-1">
                    <Link to="/services/design/aircraft" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                      Aircrafts
                    </Link>
                    <Link to="/services/design/rocket" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                      Rocket Design
                    </Link>
                    <Link to="/services/design/drone" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                      Drone Design
                    </Link>
                  </div>
                </div>
                <Link to="/services/analysis" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                  Aerospace Vehicle Analysis
                </Link>
                <div className="collapsible">
                  <button className="flex items-center justify-between w-full text-aero-dark hover:text-aero-light">
                    Aerospace Vehicle Manufacturing <ChevronRight className="h-4 w-4" />
                  </button>
                  <div className="pl-4 mt-1 space-y-1">
                    <Link to="/services/manufacturing/composite" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                      Composite Materials
                    </Link>
                    <Link to="/services/manufacturing/3d" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                      3D Printed Prototypes
                    </Link>
                  </div>
                </div>
                <Link to="/services/flight-testing" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                  Aerospace Vehicle Flight Testing
                </Link>
                <Link to="/services/outreach" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                  Outreach Program
                </Link>
              </div>
            </div>


            <div className="collapsible">
              <button className="flex items-center justify-between w-full text-aero-blue hover:text-aero-light font-medium">
                Consult an Expert <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4 mt-2 space-y-2">
                <Link to="/expert/my-account" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                  My account
                </Link>
                <Link to="/expert/cart" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                  Cart
                </Link>
                <Link to="/expert/checkout" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                  Checkout
                </Link>
              </div>
            </div>
            
            <Link to="/jobs" className="block text-aero-blue hover:text-aero-light font-medium">Jobs</Link>
            
            <div className="collapsible">
              <button className="flex items-center justify-between w-full text-aero-blue hover:text-aero-light font-medium">
                Contact Us <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4 mt-2 space-y-2">
                <Link to="/contact/privacy-policy" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div className="collapsible">
              <button className="flex items-center justify-between w-full text-aero-blue hover:text-aero-light font-medium">
                Employee Corner <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4 mt-2 space-y-2">
                <Link to="/employee/mail-login" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                  Employee Mail Login
                </Link>
                <Link to="/employee/tracker" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                  Employee Time Tracker/Attendance
                </Link>
                <Link to="/employee/leave" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                  Employee Time Off/Leave Application
                </Link>
                <Link to="/employee/expense" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                  Employee Travel Expense Request
                </Link>
                <Link to="/employee/submission" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                  Task, Report/Presentation/Video Submission
                </Link>
              </div>
            </div>
            
            <Button className="w-full bg-aero-blue hover:bg-aero-light text-white">Get in Touch</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
