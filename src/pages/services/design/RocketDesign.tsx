
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
          src="/public/lovable-uploads/5d756b03-b3fc-4f09-8867-2e468b646dca.png" 
          alt="Rocket design" 
          className="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg mb-8"
        />
        <p className="text-xl text-gray-600">Rocket design content coming soon.</p>
      </div>
    </PageLayout>
  );
};

export default RocketDesign;
