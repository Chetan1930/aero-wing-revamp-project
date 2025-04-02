
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Fleet from '@/components/Fleet';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import BookingForm from '@/components/BookingForm';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="relative">
        <BookingForm />
        <Services />
        <About />
        <Fleet />
        <Stats />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
