
import React from 'react';
import PageLayout from '@/components/PageLayout';

const AerospaceAnalysis = () => {
  return (
    <PageLayout 
      title="Aerospace Vehicle Analysis" 
      description="Comprehensive analysis services for all types of aerospace vehicles"
    >
      <div className="text-center py-12">
        <img 
          src="/lovable-uploads/3c41ff15-62fb-4b86-9f73-d198191b88fe.png" 
          alt="Aerospace analysis" 
          className="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg mb-8"
        />
        <p className="text-xl text-gray-600">Aerospace Analysis content coming soon.</p>
      </div>
    </PageLayout>
  );
};

export default AerospaceAnalysis;
