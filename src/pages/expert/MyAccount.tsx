
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MyAccount = () => {
  return (
    <PageLayout 
      title="My Account" 
      description="Manage your account settings and view your consultation history"
    >
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="profile">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="consultations">Consultations</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-md" defaultValue="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-md" defaultValue="Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" className="w-full p-2 border border-gray-300 rounded-md" defaultValue="john.doe@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input type="tel" className="w-full p-2 border border-gray-300 rounded-md" defaultValue="+1 (555) 123-4567" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded-md" defaultValue="Aerospace Innovations LLC" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <textarea className="w-full p-2 border border-gray-300 rounded-md" rows={3} defaultValue="123 Aviation Way, Suite 400&#10;Houston, TX 77001&#10;United States" />
                  </div>
                  
                  <button type="submit" className="px-4 py-2 bg-aero-blue text-white rounded-md hover:bg-aero-light">
                    Save Changes
                  </button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="consultations">
            <Card>
              <CardHeader>
                <CardTitle>Consultation History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expert</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-04-15</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Drone Design Consultation</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dr. Sarah Johnson</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <a href="#" className="text-aero-blue hover:text-aero-light">View Report</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-03-22</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Propulsion System Analysis</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dr. Michael Chen</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <a href="#" className="text-aero-blue hover:text-aero-light">View Report</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-02-10</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Structural Analysis Review</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dr. Emily Rodriguez</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <a href="#" className="text-aero-blue hover:text-aero-light">View Report</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-white p-2 rounded shadow">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="40" height="40" rx="4" fill="#1A1F71"/>
                          <path d="M14.5 27H25.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                          <rect x="13" y="12" width="14" height="10" rx="2" stroke="white" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-sm text-gray-500">Expires 09/2025</p>
                      </div>
                    </div>
                    <div>
                      <span className="px-3 py-1 bg-aero-blue text-white text-sm rounded-full">Default</span>
                    </div>
                  </div>
                  
                  <button className="flex items-center space-x-2 text-aero-blue">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Add Payment Method</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default MyAccount;
