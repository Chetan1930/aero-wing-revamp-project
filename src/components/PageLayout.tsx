
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  className?: string;
}

const PageLayout = ({ children, title, description, className = "" }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-aero-dark mb-4">{title}</h1>
            {description && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>}
          </header>
          
          <div className={className}>
            {children}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout;
