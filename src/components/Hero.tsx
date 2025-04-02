
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center text-white">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Experience Excellence in Aviation Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Professional flight operations, training, and aircraft management with a commitment to safety and quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-aero-blue hover:bg-aero-light text-white px-8 py-6 text-lg">
              Explore Our Services
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Book a Flight <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
