
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MailLogin = () => {
  return (
    <PageLayout 
      title="Employee Mail Login" 
      description="Access your company email account"
    >
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Employee Mail Login</CardTitle>
            <CardDescription>Enter your credentials to access your email</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  placeholder="username@aerowing.com" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-aero-blue focus:border-aero-blue"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-aero-blue focus:border-aero-blue"
                  required
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="remember" 
                    className="h-4 w-4 text-aero-blue border-gray-300 rounded focus:ring-aero-blue"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                
                <a href="#" className="text-sm text-aero-blue hover:text-aero-light">
                  Forgot password?
                </a>
              </div>
              
              <Button type="submit" className="w-full bg-aero-blue hover:bg-aero-light">
                Sign in
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Need help? Contact <a href="#" className="text-aero-blue hover:text-aero-light">IT Support</a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default MailLogin;
