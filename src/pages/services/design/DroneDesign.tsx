
import React from 'react';
import PageLayout from '@/components/PageLayout';

const DroneDesign = () => {
  return (
    <PageLayout 
      title="Drone Design Services" 
      description="Cutting-edge design services for unmanned aerial vehicles"
    >
      <div className="text-center py-12">
        <img 
          src="https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=1920&auto=format&fit=crop" 
          alt="Drone design" 
          className="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg mb-8"
        />
        <p className="text-xl text-gray-600">Our drone design services leverage cutting-edge technology to create efficient, reliable, and innovative unmanned aerial vehicles for various applications.</p>
      </div>
    </PageLayout>
  );
};

export default DroneDesign;
