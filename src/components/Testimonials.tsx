
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "AeroWing's training program exceeded my expectations. The instructors are knowledgeable and patient, making my flight training journey smooth and enjoyable.",
    name: "Michael Thompson",
    title: "PPL Student",
    stars: 5
  },
  {
    quote: "We've been using AeroWing for our corporate travel needs for over 3 years. Their professionalism and attention to detail are unmatched in the industry.",
    name: "Sarah Chetanson",
    title: "CEO, TechGrowth Inc.",
    stars: 5
  },
  {
    quote: "The maintenance team at AeroWing ensures our aircraft is always in perfect condition. Their expertise and thoroughness give us complete peace of mind.",
    name: "David Roberts",
    title: "Aircraft Owner",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-aero-dark mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our valued clients about their experiences with AeroWing's services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-md hover:shadow-blue transition-shadow duration-300">
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-aero-blue opacity-20 mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-aero-dark">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
