
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 z-0"></div>
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-electric-400/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute left-10 bottom-1/3 w-72 h-72 bg-energy-400/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center relative z-10">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Real-Time <span className="gradient-text">Electricity Theft</span> Detection Powered by AI
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Advanced smart meter analytics and machine learning to detect anomalies, prevent losses, and secure your grid infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-gradient-to-r from-electric-600 to-energy-500 hover:from-electric-700 hover:to-energy-600 text-white">
                see results
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Main image */}
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden glow-element animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-500/10 to-energy-500/10"></div>
              <div className="p-6 bg-white">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-electric-50 rounded-lg p-4">
                    <div className="h-2 w-20 bg-electric-200 rounded mb-2"></div>
                    <div className="h-10 w-full bg-electric-100 rounded"></div>
                  </div>
                  <div className="bg-energy-50 rounded-lg p-4">
                    <div className="h-2 w-16 bg-energy-200 rounded mb-2"></div>
                    <div className="h-10 w-full bg-energy-100 rounded"></div>
                  </div>
                </div>
                <div className="mt-4 h-32 bg-gray-50 rounded-lg"></div>
                <div className="mt-4 space-y-2">
                  <div className="h-2 w-full bg-gray-100 rounded"></div>
                  <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                  <div className="h-2 w-4/6 bg-gray-100 rounded"></div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="h-6 w-20 bg-electric-100 rounded"></div>
                  <div className="h-6 w-6 rounded-full bg-alert-500 animate-pulse-electric"></div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 bg-white rounded-lg shadow-lg p-3 animate-data-flow">
              <div className="h-2 w-12 bg-electric-200 rounded mb-2"></div>
              <div className="h-6 w-16 bg-alert-100 rounded"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-3 animate-data-flow" style={{ animationDelay: "0.5s" }}>
              <div className="h-2 w-10 bg-energy-200 rounded mb-2"></div>
              <div className="h-6 w-14 bg-energy-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
