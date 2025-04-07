
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
          src="/public/lovable-uploads/bd99f703-0282-438e-a765-84e3a8879f1b.png" 
          alt="Drone design" 
          className="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg mb-8"
        />
        <p className="text-xl text-gray-600">Drone design content coming soon.</p>
      </div>
    </PageLayout>
  );
};

export default DroneDesign;
