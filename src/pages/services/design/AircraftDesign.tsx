
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AircraftDesign = () => {
  return (
    <PageLayout 
      title="Aircraft Design Services" 
      description="Specialized design services for commercial, military, and experimental aircraft"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="md:col-span-2">
          <img 
            src="https://images.unsplash.com/photo-1565606298909-5aa3618853ba?q=80&w=1920&auto=format&fit=crop" 
            alt="Aircraft design" 
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Commercial Aircraft</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Design services for passenger and cargo aircraft of various sizes, from regional to long-haul jets.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Military Aircraft</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Specialized design for fighter jets, transport aircraft, surveillance aircraft, and other military applications.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Experimental Aircraft</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Innovative designs for research and development purposes, pushing the boundaries of aeronautical engineering.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Urban Air Mobility</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Next-generation designs for vertical takeoff and landing (VTOL) aircraft for urban transportation.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold text-aero-dark mb-4">Mission Analysis</h2>
        <p className="text-lg text-gray-600 mb-6">
          The first step in the design process is to define the mission objectives and requirements for the vehicle. This includes determining the payload capacity, range, speed, altitude, and other performance parameters.
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 mt-10">
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=800&auto=format&fit=crop" 
              alt="Aircraft analysis" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-aero-dark mb-3">Key Aspects of Mission Analysis</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Payload requirements and specifications</li>
              <li>Flight profile and environmental conditions</li>
              <li>Range and endurance requirements</li>
              <li>Takeoff and landing constraints</li>
              <li>Regulatory compliance and certification requirements</li>
              <li>Cost and manufacturing constraints</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AircraftDesign;
