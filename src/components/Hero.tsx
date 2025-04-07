
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center text-white">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Advanced Aerospace Engineering Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Innovative design, precise analysis, expert manufacturing, and comprehensive testing for aerospace vehicles and systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-aero-blue hover:bg-aero-light text-white px-8 py-6 text-lg">
              Explore Our Capabilities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
