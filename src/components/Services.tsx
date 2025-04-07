
import React from 'react';
import { Ruler, Clipboard, Cog, Settings, FlaskConical, ScrollText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const serviceItems = [
  {
    icon: <Ruler className="h-10 w-10 text-aero-blue" aria-hidden="true" />,
    title: 'Aerospace Design',
    description: 'Comprehensive design services for aircraft, rockets, drones, and other aerospace vehicles.'
  },
  {
    icon: <Clipboard className="h-10 w-10 text-aero-blue" aria-hidden="true" />,
    title: 'Engineering Analysis',
    description: 'Advanced computational analysis including CFD, FEA, and aerodynamic performance evaluation.'
  },
  {
    icon: <Cog className="h-10 w-10 text-aero-blue" aria-hidden="true" />,
    title: 'Systems Engineering',
    description: 'Integration of complex aerospace systems with reliability and performance optimization.'
  },
  {
    icon: <Settings className="h-10 w-10 text-aero-blue" aria-hidden="true" />,
    title: 'Prototype Manufacturing',
    description: 'State-of-the-art manufacturing including composite fabrication and 3D printed prototypes.'
  },
  {
    icon: <FlaskConical className="h-10 w-10 text-aero-blue" aria-hidden="true" />,
    title: 'Testing & Validation',
    description: 'Comprehensive testing services including wind tunnel testing, flight testing, and certification.'
  },
  {
    icon: <ScrollText className="h-10 w-10 text-aero-blue" aria-hidden="true" />,
    title: 'Educational Outreach',
    description: 'Programs designed to inspire and educate students about aerospace engineering and innovation.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-aero-dark mb-4">
            Our Engineering Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Innovative aerospace solutions from conceptualization to implementation with cutting-edge technology and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg hover:shadow-aero-blue/40 transition-shadow duration-300"
            >
              <CardHeader className="pb-0">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-aero-dark">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <CardDescription className="text-base text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
