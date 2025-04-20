
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartBar, ChartLine, Gauge } from 'lucide-react';

// Using dynamic import for ApexCharts to avoid SSR issues
let ApexChart: any = () => null;

// Demo data for consumption chart
const consumptionData = [
  { x: '00:00', y: 31 },
  { x: '02:00', y: 28 },
  { x: '04:00', y: 25 },
  { x: '06:00', y: 29 },
  { x: '08:00', y: 38 },
  { x: '10:00', y: 42 },
  { x: '12:00', y: 47 },
  { x: '14:00', y: 51 },
  { x: '16:00', y: 49 },
  { x: '18:00', y: 53 },
  { x: '20:00', y: 42 },
  { x: '22:00', y: 35 }
];

// Demo data for anomaly chart
const normalData = [
  { x: '00:00', y: 31 },
  { x: '02:00', y: 28 },
  { x: '04:00', y: 25 },
  { x: '06:00', y: 29 },
  { x: '08:00', y: 38 },
  { x: '10:00', y: 42 },
  { x: '12:00', y: 47 },
  { x: '14:00', y: 51 },
  { x: '16:00', y: 49 },
  { x: '18:00', y: 53 },
  { x: '20:00', y: 42 },
  { x: '22:00', y: 35 }
];

const anomalyData = [
  { x: '00:00', y: 32 },
  { x: '02:00', y: 29 },
  { x: '04:00', y: 26 },
  { x: '06:00', y: 35 },
  { x: '08:00', y: 68 }, // Anomaly
  { x: '10:00', y: 71 }, // Anomaly
  { x: '12:00', y: 73 }, // Anomaly
  { x: '14:00', y: 52 },
  { x: '16:00', y: 50 },
  { x: '18:00', y: 54 },
  { x: '20:00', y: 43 },
  { x: '22:00', y: 36 }
];

// Stats data
const statCards = [
  {
    title: 'Detected Anomalies',
    value: '24',
    change: '+8%',
    positive: false,
    color: 'text-alert-500',
    bgColor: 'bg-alert-50'
  },
  {
    title: 'Current Efficiency',
    value: '94%',
    change: '+2.3%',
    positive: true,
    color: 'text-energy-500',
    bgColor: 'bg-energy-50'
  },
  {
    title: 'Smart Meters',
    value: '1,439',
    change: '+12',
    positive: true,
    color: 'text-electric-500',
    bgColor: 'bg-electric-50'
  }
];

const DashboardPreview = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Dynamic import for client-side only
    import('react-apexcharts').then((mod) => {
      ApexChart = mod.default;
      // Force re-render
      setIsClient(false);
      setTimeout(() => setIsClient(true), 0);
    });
  }, []);

  return (
    <section id="dashboard" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Powerful <span className="gradient-text">Analytics Dashboard</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Monitor electricity usage patterns, detect anomalies, and receive real-time alerts 
            all from a single, intuitive dashboard.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-border max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {statCards.map((stat, index) => (
              <Card key={index} className={`${stat.bgColor} border-none`}>
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <div className="flex items-baseline justify-between mt-2">
                    <h3 className={`text-3xl font-bold ${stat.color}`}>{stat.value}</h3>
                    <p className={`text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-alert-500'}`}>
                      {stat.change}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="lineChart">
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="lineChart" className="flex items-center">
                  <ChartLine className="h-4 w-4 mr-2" />
                  Consumption
                </TabsTrigger>
                <TabsTrigger value="anomalies" className="flex items-center">
                  <ChartBar className="h-4 w-4 mr-2" />
                  Anomalies
                </TabsTrigger>
                <TabsTrigger value="realtime" className="flex items-center">
                  <Gauge className="h-4 w-4 mr-2" />
                  Real-time
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="lineChart" className="bg-white rounded-lg overflow-hidden">
              {isClient && ApexChart && (
                <ApexChart
                  type="area"
                  height={350}
                  options={{
                    chart: {
                      toolbar: { show: true },
                      zoom: { enabled: false }
                    },
                    dataLabels: { enabled: false },
                    stroke: { curve: 'smooth', width: 3 },
                    colors: ['#1890ff'],
                    fill: {
                      type: 'gradient',
                      gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.2,
                        stops: [0, 90, 100]
                      }
                    },
                    xaxis: {
                      categories: consumptionData.map(data => data.x)
                    },
                    tooltip: { enabled: true }
                  }}
                  series={[{ name: 'Consumption (kWh)', data: consumptionData.map(data => data.y) }]}
                />
              )}
              {!isClient && (
                <div className="h-64 w-full bg-muted animate-pulse rounded-md"></div>
              )}
            </TabsContent>

            <TabsContent value="anomalies" className="bg-white rounded-lg overflow-hidden">
              {isClient && ApexChart && (
                <ApexChart
                  type="line"
                  height={350}
                  options={{
                    chart: {
                      toolbar: { show: true },
                      zoom: { enabled: false }
                    },
                    dataLabels: { enabled: false },
                    stroke: { curve: 'smooth', width: [3, 3] },
                    colors: ['#1890ff', '#ff4d4f'],
                    markers: {
                      size: [0, 5],
                      strokeWidth: 0,
                      hover: { size: 7 }
                    },
                    xaxis: {
                      categories: normalData.map(data => data.x)
                    },
                    tooltip: { enabled: true },
                    legend: { position: 'top' }
                  }}
                  series={[
                    { name: 'Expected (kWh)', data: normalData.map(data => data.y) },
                    { name: 'Actual (kWh)', data: anomalyData.map(data => data.y) }
                  ]}
                />
              )}
              {!isClient && (
                <div className="h-64 w-full bg-muted animate-pulse rounded-md"></div>
              )}
            </TabsContent>

            <TabsContent value="realtime" className="bg-white rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {isClient && ApexChart && (
                  <ApexChart
                    type="radialBar"
                    height={350}
                    options={{
                      chart: { toolbar: { show: false } },
                      plotOptions: {
                        radialBar: {
                          startAngle: -135,
                          endAngle: 135,
                          hollow: {
                            margin: 0,
                            size: '70%'
                          },
                          track: {
                            background: "#f2f2f2",
                            strokeWidth: '100%',
                            margin: 0
                          },
                          dataLabels: {
                            name: {
                              show: true,
                              fontSize: '16px',
                              fontWeight: 600,
                              color: '#888'
                            },
                            value: {
                              fontSize: '24px',
                              fontWeight: 700,
                              color: '#111',
                              formatter: function(val: any) {
                                return val + ' kW';
                              }
                            }
                          }
                        }
                      },
                      fill: {
                        type: 'gradient',
                        gradient: {
                          shade: 'dark',
                          type: 'horizontal',
                          shadeIntensity: 0.5,
                          gradientToColors: ['#13c2c2'],
                          stops: [0, 100]
                        }
                      },
                      stroke: {
                        dashArray: 4
                      },
                      colors: ['#1890ff'],
                      labels: ['Current Usage'],
                    }}
                    series={[76]}
                  />
                )}
                {!isClient && (
                  <div className="h-64 w-full bg-muted animate-pulse rounded-md"></div>
                )}
                
                <div className="space-y-4">
                  <Card className="border-electric-100">
                    <CardContent className="p-4 flex items-center">
                      <div className="bg-electric-50 p-2 rounded-md mr-4">
                        <div className="h-3 w-3 bg-electric-500 rounded-full animate-pulse-electric"></div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Normal operation detected</p>
                        <p className="text-xs text-muted-foreground">Sector B, Grid 12</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-alert-100">
                    <CardContent className="p-4 flex items-center">
                      <div className="bg-alert-50 p-2 rounded-md mr-4">
                        <div className="h-3 w-3 bg-alert-500 rounded-full animate-pulse-electric"></div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Anomaly detected</p>
                        <p className="text-xs text-muted-foreground">Sector A, Grid 8</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-energy-100">
                    <CardContent className="p-4 flex items-center">
                      <div className="bg-energy-50 p-2 rounded-md mr-4">
                        <div className="h-3 w-3 bg-energy-500 rounded-full animate-pulse-electric"></div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">System update completed</p>
                        <p className="text-xs text-muted-foreground">Firmware v3.2.1</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
