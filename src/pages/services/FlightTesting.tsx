
import React from 'react';
import PageLayout from '@/components/PageLayout';

const FlightTesting = () => {
  return (
    <PageLayout 
      title="Aerospace Vehicle Flight Testing" 
      description="Comprehensive flight testing services for all types of aerospace vehicles"
    >
      <div className="mb-16">
        <img 
          src="/public/lovable-uploads/c7506845-d174-486a-b11f-335af3e9936d.png" 
          alt="Flight testing" 
          className="w-full h-[500px] object-cover rounded-lg shadow-lg mb-8"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-2xl font-bold text-aero-dark mb-4">Flight Test Services</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our flight testing program provides comprehensive evaluation of aerospace vehicle performance, safety, and compliance with design requirements and regulatory standards.
            </p>
            
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <strong>Performance Testing</strong> - Verify the vehicle's aerodynamic performance, propulsion efficiency, and overall flight characteristics.
              </li>
              <li>
                <strong>Systems Testing</strong> - Evaluate the functionality and reliability of all onboard systems under actual flight conditions.
              </li>
              <li>
                <strong>Structural Testing</strong> - Assess the structural integrity of the vehicle under various flight loads and conditions.
              </li>
              <li>
                <strong>Environmental Testing</strong> - Test the vehicle's performance in different environmental conditions, including extreme temperatures, humidity, and altitude.
              </li>
              <li>
                <strong>Certification Testing</strong> - Conduct tests required for regulatory certification and compliance.
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-aero-dark mb-4">Testing Facilities</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our state-of-the-art testing facilities provide a comprehensive environment for conducting various types of flight tests.
            </p>
            
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <strong>Flight Test Center</strong> - Dedicated facility with advanced instrumentation and data acquisition systems.
              </li>
              <li>
                <strong>Wind Tunnels</strong> - Low-speed and high-speed wind tunnels for aerodynamic testing.
              </li>
              <li>
                <strong>Structural Test Rigs</strong> - Facilities for static and dynamic structural testing.
              </li>
              <li>
                <strong>Environmental Chambers</strong> - Controlled environments for testing in extreme conditions.
              </li>
              <li>
                <strong>Simulation Facilities</strong> - Advanced simulators for preliminary testing and training.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FlightTesting;
