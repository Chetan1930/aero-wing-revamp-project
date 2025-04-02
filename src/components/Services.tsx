
import React from 'react';
import { Plane, Award, Tools, Users, Shield, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const serviceItems = [
  {
    icon: <Plane className="h-10 w-10 text-aero-blue" />,
    title: 'Charter Services',
    description: 'Premium air charter services for business and leisure travelers with customized flight solutions.'
  },
  {
    icon: <Award className="h-10 w-10 text-aero-blue" />,
    title: 'Flight Training',
    description: 'Comprehensive pilot training programs from beginner to advanced levels with experienced instructors.'
  },
  {
    icon: <Tools className="h-10 w-10 text-aero-blue" />,
    title: 'Aircraft Maintenance',
    description: 'State-of-the-art maintenance services by certified technicians for all types of aircraft.'
  },
  {
    icon: <Users className="h-10 w-10 text-aero-blue" />,
    title: 'Corporate Aviation',
    description: 'Tailored corporate flight solutions including aircraft management and executive travel.'
  },
  {
    icon: <Shield className="h-10 w-10 text-aero-blue" />,
    title: 'Safety Compliance',
    description: 'Rigorous safety standards and compliance with international aviation regulations.'
  },
  {
    icon: <Calendar className="h-10 w-10 text-aero-blue" />,
    title: 'Aircraft Booking',
    description: 'Easy-to-use scheduling and booking system for efficient flight planning and management.'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-aero-dark mb-4">Our Aviation Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive aviation solutions delivered with expertise and precision to meet your unique requirements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="hover:shadow-blue transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-aero-dark">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
