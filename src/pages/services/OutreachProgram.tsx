
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
          src="https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=1920&auto=format&fit=crop" 
          alt="Outreach program" 
          className="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg mb-8"
        />
        <p className="text-xl text-gray-600">Our outreach programs are designed to inspire the next generation of aerospace engineers and innovators through hands-on workshops, educational initiatives, and community engagement.</p>
      </div>
    </PageLayout>
  );
};

export default OutreachProgram;
