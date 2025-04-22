
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const aboutItems = [
  'Over 15 years of aviation excellence',
  'Certified and experienced instructors',
  'Modern fleet of well-maintained aircraft',
  'Comprehensive safety management system',
  'Industry-leading training programs',
  'Premium facilities and amenities'
];

const About = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=800&auto=format&fit=crop" 
                  alt="About AeroWing" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-aero-blue rounded-lg p-6 shadow-lg hidden md:block">
                <div className="text-white">
                  <p className="text-4xl font-bold">15+</p>
                  <p className="font-medium">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-aero-dark mb-6">Excellence in Aviation Since 2008</h2>
            <p className="text-lg text-gray-600 mb-6">
              At AeroWing, we're committed to providing exceptional aviation services with a focus on safety, quality, and customer satisfaction. Our team of aviation experts delivers professional solutions tailored to your specific needs.
            </p>
            
            <div className="space-y-3 mb-8">
              {aboutItems.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-aero-blue mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            
            <Button className="bg-aero-blue hover:bg-aero-light text-white">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
