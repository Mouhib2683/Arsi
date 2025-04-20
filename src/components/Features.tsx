
import React from 'react';
import { Zap, Database, Wifi, ChartBar, Bell, Settings } from 'lucide-react';

const features = [
  {
    icon: <ChartBar className="h-8 w-8 text-electric-500" />,
    title: 'Anomaly Detection',
    description: 'Advanced pattern recognition algorithms to detect unusual consumption patterns and behaviors in real-time.',
  },
  {
    icon: <Wifi className="h-8 w-8 text-electric-500" />,
    title: 'Smart Meter Integration',
    description: 'Seamless integration with existing smart meter infrastructure for immediate deployment and results.',
  },
  {
    icon: <Database className="h-8 w-8 text-electric-500" />,
    title: 'Data Analytics',
    description: 'Comprehensive analytics dashboard to visualize consumption patterns, anomalies, and historical data.',
  },
  {
    icon: <Bell className="h-8 w-8 text-electric-500" />,
    title: 'Instant Alerts',
    description: 'Immediate notifications and alerts when potential theft or anomalies are detected in the system.',
  },
  {
    icon: <Settings className="h-8 w-8 text-electric-500" />,
    title: 'Smart Grid Compatible',
    description: 'Designed to work with modern smart grid technologies, enhancing your existing infrastructure.',
  },
  {
    icon: <Zap className="h-8 w-8 text-electric-500" />,
    title: 'AI-Powered',
    description: 'Machine learning algorithms that continuously improve detection accuracy with each use case.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Advanced Features for <span className="gradient-text">Complete Grid Protection</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our integrated solution combines hardware monitoring, AI analysis, and real-time alerts
            to provide comprehensive protection against electricity theft.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl p-8 border border-border/40 transition-all 
                hover:shadow-lg hover:shadow-electric-100 hover:border-electric-200 hover:-translate-y-1"
            >
              <div className="bg-electric-50 p-3 rounded-lg inline-flex mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
