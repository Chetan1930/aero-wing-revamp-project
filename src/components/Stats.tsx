
import React from 'react';
import { Users, Calendar, Award, Map } from 'lucide-react';

const statsItems = [
  {
    icon: <Users className="h-10 w-10 text-aero-blue" />,
    value: '5,000+',
    label: 'Happy Clients'
  },
  {
    icon: <Calendar className="h-10 w-10 text-aero-blue" />,
    value: '15+',
    label: 'Years Experience'
  },
  {
    icon: <Award className="h-10 w-10 text-aero-blue" />,
    value: '500+',
    label: 'Pilots Trained'
  },
  {
    icon: <Map className="h-10 w-10 text-aero-blue" />,
    value: '25+',
    label: 'Destinations'
  }
];

const Stats = () => {
  return (
    <section className="py-16 bg-aero-blue text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsItems.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 rounded-full p-4 inline-flex mx-auto mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-lg text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
