
import React from 'react';
import { Button } from '@/components/ui/button';
import { PhoneCall, Mail } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-aero-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Premium Aviation Services?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Contact us today to discuss how we can meet your aviation needs with tailored solutions and exceptional service
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-white text-aero-blue hover:bg-gray-100 flex items-center justify-center gap-2 px-8 py-6 text-lg">
              <PhoneCall className="h-5 w-5" />
              Call Us Now
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 flex items-center justify-center gap-2 px-8 py-6 text-lg">
              <Mail className="h-5 w-5" />
              Send an Inquiry
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
