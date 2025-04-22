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

type ActiveSubmenu = 'services' | 'expert' | 'contact' | 'employee' | 'design' | 'manufacturing' | null;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<ActiveSubmenu>(null);

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

  const toggleSubmenu = (menu: ActiveSubmenu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-aero-blue">AeroWing</span>
        </Link>

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
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <Link
                        to="/services/design"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-aero-blue to-aero-dark p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium text-white">
                          Aerospace Engineering Services
                        </div>
                        <p className="text-sm leading-tight text-white/90">
                          Comprehensive aerospace engineering solutions for your needs
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/design"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Aerospace Vehicle Design
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Aircraft, rocket, and drone design services
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/analysis"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Aerospace Vehicle Analysis
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          CFD, FEA, and performance evaluation
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/manufacturing"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Aerospace Vehicle Manufacturing
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Composite materials and 3D printing
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/flight-testing"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Flight Testing
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Comprehensive testing and certification
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/outreach"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Outreach Program
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Educational initiatives and collaborations
                        </p>
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
                  <ul className="p-4 w-[250px] bg-white">
                    <li className="border-b border-blue-100 py-2">
                      <Link to="/expert/my-account" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                        My account
                      </Link>
                    </li>
                    <li className="border-b border-blue-100 py-2">
                      <Link to="/expert/cart" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                        Cart
                      </Link>
                    </li>
                    <li className="py-2">
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
                  <ul className="p-4 w-[250px] bg-white">
                    <li className="py-2">
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
                  <ul className="p-4 w-[320px] bg-white">
                    <li className="border-b border-blue-100 py-2">
                      <Link to="/employee/mail-login" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                        Employee Mail Login
                      </Link>
                    </li>
                    <li className="border-b border-blue-100 py-2">
                      <Link to="/employee/tracker" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                        Employee Time Tracker/Attendance
                      </Link>
                    </li>
                    <li className="border-b border-blue-100 py-2">
                      <Link to="/employee/leave" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                        Employee Time Off/Leave Application
                      </Link>
                    </li>
                    <li className="border-b border-blue-100 py-2">
                      <Link to="/employee/expense" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                        Employee Travel Expense Request
                      </Link>
                    </li>
                    <li className="py-2">
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

        <button 
          className="lg:hidden text-aero-blue"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="px-4 py-3 space-y-3">
            <Link to="/" className="block text-aero-blue hover:text-aero-light font-medium">Home</Link>
            
            <div className="border-b pb-2">
              <button 
                onClick={() => toggleSubmenu('services')} 
                className="flex items-center justify-between w-full text-aero-blue hover:text-aero-light font-medium"
              >
                Services 
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeSubmenu === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {activeSubmenu === 'services' && (
                <div className="pl-4 mt-2 space-y-2">
                  <div>
                    <button 
                      onClick={() => toggleSubmenu('design')}
                      className="flex items-center justify-between w-full text-aero-dark hover:text-aero-light"
                    >
                      Aerospace Vehicle Design 
                      <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${activeSubmenu === 'design' ? 'rotate-90' : ''}`} />
                    </button>
                    {activeSubmenu === 'design' && (
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
                    )}
                  </div>
                  <Link to="/services/analysis" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                    Aerospace Vehicle Analysis
                  </Link>
                  <div>
                    <button 
                      onClick={() => toggleSubmenu('manufacturing')}
                      className="flex items-center justify-between w-full text-aero-dark hover:text-aero-light"
                    >
                      Aerospace Vehicle Manufacturing 
                      <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${activeSubmenu === 'manufacturing' ? 'rotate-90' : ''}`} />
                    </button>
                    {activeSubmenu === 'manufacturing' && (
                      <div className="pl-4 mt-1 space-y-1">
                        <Link to="/services/manufacturing/composite" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                          Composite Materials
                        </Link>
                        <Link to="/services/manufacturing/3d" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                          3D Printed Prototypes
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link to="/services/flight-testing" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                    Aerospace Vehicle Flight Testing
                  </Link>
                  <Link to="/services/outreach" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                    Outreach Program
                  </Link>
                </div>
              )}
            </div>

            <div className="border-b pb-2">
              <button 
                onClick={() => toggleSubmenu('expert')}
                className="flex items-center justify-between w-full text-aero-blue hover:text-aero-light font-medium"
              >
                Consult an Expert 
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeSubmenu === 'expert' ? 'rotate-180' : ''}`} />
              </button>
              {activeSubmenu === 'expert' && (
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
              )}
            </div>
            
            <Link to="/jobs" className="block text-aero-blue hover:text-aero-light font-medium border-b pb-2">Jobs</Link>
            
            <div className="border-b pb-2">
              <button 
                onClick={() => toggleSubmenu('contact')}
                className="flex items-center justify-between w-full text-aero-blue hover:text-aero-light font-medium"
              >
                Contact Us 
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeSubmenu === 'contact' ? 'rotate-180' : ''}`} />
              </button>
              {activeSubmenu === 'contact' && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link to="/contact/privacy-policy" className="block px-4 py-2 hover:bg-gray-50 text-aero-dark">
                    Privacy Policy
                  </Link>
                </div>
              )}
            </div>

            <div className="border-b pb-2">
              <button 
                onClick={() => toggleSubmenu('employee')}
                className="flex items-center justify-between w-full text-aero-blue hover:text-aero-light font-medium"
              >
                Employee Corner 
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeSubmenu === 'employee' ? 'rotate-180' : ''}`} />
              </button>
              {activeSubmenu === 'employee' && (
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
              )}
            </div>
            
            <Button className="w-full bg-aero-blue hover:bg-aero-light text-white">Get in Touch</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
