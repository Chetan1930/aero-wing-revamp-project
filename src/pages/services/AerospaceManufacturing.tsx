
import React from 'react';
import PageLayout from '@/components/PageLayout';

const AerospaceManufacturing = () => {
  return (
    <PageLayout 
      title="Aerospace Vehicle Manufacturing" 
      description="Advanced manufacturing services for aerospace components and systems"
    >
      <div className="text-center py-12">
        <img 
          src="/lovable-uploads/5d756b03-b3fc-4f09-8867-2e468b646dca.png" 
          alt="Aerospace manufacturing" 
          className="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg mb-8"
        />
        <p className="text-xl text-gray-600">Our advanced manufacturing facilities provide cutting-edge solutions for aerospace components and systems.</p>
      </div>
    </PageLayout>
  );
};

export default AerospaceManufacturing;
