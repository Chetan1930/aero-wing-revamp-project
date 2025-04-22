
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const aircraftItems = [
  {
    name: 'Cessna 172 Skyhawk',
    image: 'https://images.unsplash.com/photo-1559046218-e59c71a6efc1?q=80&w=600&h=400&auto=format&fit=crop',
    category: 'Training',
    description: 'Perfect for flight training and short-distance travel'
  },
  {
    name: 'Piper PA-28 Cherokee',
    image: 'https://images.unsplash.com/photo-1541807120430-f3f78c281225?q=80&w=600&h=400&auto=format&fit=crop',
    category: 'Training & Charter',
    description: 'Versatile aircraft suitable for training and private charters'
  },
  {
    name: 'Beechcraft King Air 250',
    image: 'https://images.unsplash.com/photo-1601501177880-ffacae87f638?q=80&w=600&h=400&auto=format&fit=crop',
    category: 'Corporate & Charter',
    description: 'Premium twin-turboprop for executive travel and charters'
  },
  {
    name: 'Diamond DA40',
    image: 'https://images.unsplash.com/photo-1588860939994-ce4f7a537f03?q=80&w=600&h=400&auto=format&fit=crop',
    category: 'Training',
    description: 'Modern glass cockpit trainer with advanced safety features'
  }
];

const Fleet = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-aero-dark mb-4">Our Modern Fleet</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore our diverse fleet of meticulously maintained aircraft available for training, charter, and corporate use
            </p>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0 border-aero-blue text-aero-blue hover:bg-aero-blue hover:text-white transition-colors">
            View All Aircraft <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aircraftItems.map((aircraft, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-blue transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={aircraft.image} 
                  alt={aircraft.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-aero-blue text-white text-sm px-3 py-1 rounded-full">
                  {aircraft.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-aero-dark mb-2">{aircraft.name}</h3>
                <p className="text-gray-600 mb-4">{aircraft.description}</p>
                <button className="text-aero-blue font-medium hover:text-aero-light flex items-center">
                  View Details <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
