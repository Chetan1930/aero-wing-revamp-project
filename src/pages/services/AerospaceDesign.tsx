
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AerospaceDesign = () => {
  return (
    <PageLayout 
      title="Aerospace Vehicle Design" 
      description="Comprehensive design services for aircraft, rockets, drones, and other aerospace vehicles"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Aircraft Design</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Specialized design services for various types of aircraft including fixed-wing, rotary-wing, and hybrid configurations.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Rocket Design</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Expert design services for orbital, sub-orbital, and deep-space rockets with various propulsion systems.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Drone Design</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Cutting-edge design services for unmanned aerial vehicles (UAVs) for various applications.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Conceptual Design</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Early-stage design services to define the mission requirements and vehicle configuration.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold text-aero-dark mb-4">Design Process</h2>
        <p className="text-lg text-gray-600 mb-6">
          Our comprehensive design process involves several key stages:
        </p>
        
        <ol className="list-decimal pl-6 space-y-4 text-gray-700">
          <li>
            <strong>Mission Analysis</strong> - Define mission objectives and requirements for the vehicle.
          </li>
          <li>
            <strong>Conceptual Design</strong> - Develop the initial vehicle configuration and layout.
          </li>
          <li>
            <strong>Preliminary Design</strong> - Refine the design with detailed engineering analysis.
          </li>
          <li>
            <strong>Detailed Design</strong> - Complete engineering drawings and specifications.
          </li>
          <li>
            <strong>Prototype Development</strong> - Build and test physical or digital prototypes.
          </li>
        </ol>
      </div>
    </PageLayout>
  );
};

export default AerospaceDesign;
