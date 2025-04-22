
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
          src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1920&auto=format&fit=crop" 
          alt="Aerospace analysis" 
          className="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg mb-8"
        />
        <p className="text-xl text-gray-600">Our advanced analysis capabilities enable detailed evaluation of aerospace vehicle performance, structural integrity, and aerodynamic characteristics.</p>
      </div>
    </PageLayout>
  );
};

export default AerospaceAnalysis;
