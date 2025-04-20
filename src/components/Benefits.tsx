
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Real Business <span className="gradient-text">Benefits</span> and ROI
            </h2>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-electric-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-electric-600">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reduce Revenue Loss</h3>
                  <p className="text-muted-foreground">
                    Detect electricity theft early and prevent significant financial losses. 
                    Our clients typically see a 12-18% reduction in non-technical losses.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-electric-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-electric-600">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Enhanced Grid Stability</h3>
                  <p className="text-muted-foreground">
                    Improve grid planning and management with accurate consumption data. 
                    Reduce overloading and prevent outages caused by unauthorized usage.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-electric-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-electric-600">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Operational Efficiency</h3>
                  <p className="text-muted-foreground">
                    Reduce the need for manual inspections with AI-powered anomaly detection. 
                    Focus resources on verified issues rather than random checks.
                  </p>
                </div>
              </div>
              
              <Button className="mt-6 bg-gradient-to-r from-electric-600 to-energy-500 hover:from-electric-700 hover:to-energy-600 text-white">
                Calculate Your ROI
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-gradient-to-br from-electric-50 to-energy-50 rounded-xl p-8 shadow-lg">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-6 text-center">Utility Company ROI Calculator</h3>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Annual Revenue</span>
                      <span className="font-medium">$50M</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="bg-electric-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Estimated Theft (%)</span>
                      <span className="font-medium">5.8%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="bg-electric-500 h-2 rounded-full" style={{ width: '58%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Detection Rate</span>
                      <span className="font-medium">87%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="bg-electric-500 h-2 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Estimated Annual Savings</p>
                        <p className="text-3xl font-bold text-electric-600">$2.52M</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">ROI</p>
                        <p className="text-3xl font-bold text-energy-600">842%</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <p className="text-sm text-muted-foreground">
                      Results based on average industry data. Calculate your specific ROI with our full calculator.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
