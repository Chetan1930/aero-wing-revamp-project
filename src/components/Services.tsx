
import React from 'react';
import { Ruler, FileText, Cog, Plane, FlaskConical, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const serviceItems = [
  {
    icon: <Ruler className="h-10 w-10 text-white bg-aero-blue rounded-full p-2" aria-hidden="true" />,
    title: 'Aerospace Vehicle Design',
    description: 'Comprehensive design services for aircraft, rockets, drones, and other aerospace vehicles.'
  },
  {
    icon: <FileText className="h-10 w-10 text-white bg-aero-blue rounded-full p-2" aria-hidden="true" />,
    title: 'Aerospace Vehicle Analysis',
    description: 'Advanced computational analysis including CFD, FEA, and aerodynamic performance evaluation.'
  },
  {
    icon: <Cog className="h-10 w-10 text-white bg-aero-blue rounded-full p-2" aria-hidden="true" />,
    title: 'Aerospace Vehicle Manufacturing',
    description: 'State-of-the-art manufacturing including composite fabrication and 3D printed components.'
  },
  {
    icon: <Plane className="h-10 w-10 text-white bg-aero-blue rounded-full p-2" aria-hidden="true" />,
    title: 'Aerospace Vehicle Flight Testing',
    description: 'Comprehensive testing services including wind tunnel testing, flight testing, and certification.'
  },
  {
    icon: <FlaskConical className="h-10 w-10 text-white bg-aero-blue rounded-full p-2" aria-hidden="true" />,
    title: 'Testing & Validation',
    description: 'Rigorous validation protocols to ensure aerospace vehicles meet all performance and safety requirements.'
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-white bg-aero-blue rounded-full p-2" aria-hidden="true" />,
    title: 'Outreach Program',
    description: 'Educational initiatives designed to inspire and educate students about aerospace engineering and innovation.'
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
