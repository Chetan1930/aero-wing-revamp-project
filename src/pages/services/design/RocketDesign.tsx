
import React from 'react';
import PageLayout from '@/components/PageLayout';

const RocketDesign = () => {
  return (
    <PageLayout 
      title="Rocket Design Services" 
      description="Specialized design services for orbital and suborbital rockets"
    >
      <div className="text-center py-12">
        <img 
          src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=1920&auto=format&fit=crop" 
          alt="Rocket design" 
          className="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg mb-8"
        />
        <p className="text-xl text-gray-600">Our rocket design services provide comprehensive solutions for orbital, suborbital, and deep-space launch vehicles with a focus on efficiency, reliability, and performance.</p>
      </div>
    </PageLayout>
  );
};

export default RocketDesign;
