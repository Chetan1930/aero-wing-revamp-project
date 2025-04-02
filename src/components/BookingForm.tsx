
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from 'lucide-react';

const BookingForm = () => {
  return (
    <section className="bg-white py-12 px-4 rounded-lg shadow-lg max-w-3xl mx-auto -mt-24 relative z-10">
      <h3 className="text-2xl font-bold text-aero-dark mb-6 text-center">Book Your Flight</h3>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Enter your full name" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="Enter your phone number" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="service-type">Service Type</Label>
            <Select>
              <SelectTrigger id="service-type">
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="charter">Charter Flight</SelectItem>
                <SelectItem value="training">Flight Training</SelectItem>
                <SelectItem value="corporate">Corporate Travel</SelectItem>
                <SelectItem value="maintenance">Aircraft Maintenance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="date">Preferred Date</Label>
            <div className="relative">
              <Input id="date" type="date" className="pl-10" />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="passengers">Number of Passengers</Label>
            <Select>
              <SelectTrigger id="passengers">
                <SelectValue placeholder="Select number" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? 'Passenger' : 'Passengers'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">Additional Information</Label>
          <Textarea 
            id="message" 
            placeholder="Please provide any additional details about your booking request" 
            rows={4}
          />
        </div>
        
        <Button className="w-full bg-aero-blue hover:bg-aero-light text-white py-6">
          Submit Booking Request
        </Button>
      </form>
    </section>
  );
};

export default BookingForm;
