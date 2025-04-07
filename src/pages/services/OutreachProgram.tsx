
import React from 'react';
import PageLayout from '@/components/PageLayout';

const OutreachProgram = () => {
  return (
    <PageLayout 
      title="Outreach Program" 
      description="Educational initiatives to promote aerospace engineering"
    >
      <div className="text-center py-12">
        <img 
          src="/public/lovable-uploads/98b4d005-f458-4fd9-a4c6-e9572f4bfea9.png" 
          alt="Outreach program" 
          className="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg mb-8"
        />
        <p className="text-xl text-gray-600">Outreach Program content coming soon.</p>
      </div>
    </PageLayout>
  );
};

export default OutreachProgram;
