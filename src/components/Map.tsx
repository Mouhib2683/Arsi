import React from 'react';
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Tooltip,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

type Location = {
  id: number;
  lat: number;
  lng: number;
  status: 'normal' | 'warning' | 'alert';
  name: string;
};

const locations: Location[] = [
  { id: 1, lat: 40.7128, lng: -74.006, status: 'normal', name: 'New York Grid' },
  { id: 2, lat: 34.0522, lng: -118.2437, status: 'alert', name: 'Los Angeles Grid' },
  { id: 3, lat: 41.8781, lng: -87.6298, status: 'warning', name: 'Chicago Grid' },
  { id: 4, lat: 29.7604, lng: -95.3698, status: 'normal', name: 'Houston Grid' },
  { id: 5, lat: 33.4484, lng: -112.074, status: 'normal', name: 'Phoenix Grid' },
  { id: 6, lat: 37.7749, lng: -122.4194, status: 'warning', name: 'San Francisco Grid' },
  { id: 7, lat: 39.9526, lng: -75.1652, status: 'normal', name: 'Philadelphia Grid' },
  { id: 8, lat: 32.7157, lng: -117.1611, status: 'alert', name: 'San Diego Grid' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'alert':
      return '#f5222d'; // red
    case 'warning':
      return '#faad14'; // yellow
    default:
      return '#1890ff'; // blue
  }
};

// Leaflet marker icon fix (important for full compatibility)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Map: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Real-Time</span> Monitoring Across Your Grid
          </h2>
          <p className="text-lg text-muted-foreground">
            Monitor electricity consumption and detect potential theft across your entire infrastructure 
            with our advanced mapping and visualization tools.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-border">
          <div className="h-[500px] rounded-lg overflow-hidden">
            <MapContainer
              center={[39.8283, -98.5795]}
              zoom={4}
              style={{ height: '100%', width: '100%' }}
              zoomControl={true}
              scrollWheelZoom={false}
              whenReady={(map) => {
                setTimeout(() => {
                  map.target.invalidateSize();
                }, 100);
              }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {locations.map((location) => (
                <CircleMarker
                  key={location.id}
                  center={[location.lat, location.lng]}
                  radius={location.status === 'normal' ? 8 : 12}
                  fillColor={getStatusColor(location.status)}
                  weight={2}
                  opacity={0.8}
                  fillOpacity={0.6}
                  color={getStatusColor(location.status)}
                >
                  <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                    <div className="p-1">
                      <p className="font-medium">{location.name}</p>
                      <p className="text-xs capitalize">Status: {location.status}</p>
                    </div>
                  </Tooltip>
                </CircleMarker>
              ))}
            </MapContainer>
          </div>

          {/* Legend */}
          <div className="flex justify-center space-x-6 mt-6">
            <div className="flex items-center">
              <span className="h-3 w-3 rounded-full inline-block mr-2" style={{ backgroundColor: '#1890ff' }}></span>
              <span className="text-sm">Normal Operation</span>
            </div>
            <div className="flex items-center">
              <span className="h-3 w-3 rounded-full inline-block mr-2" style={{ backgroundColor: '#faad14' }}></span>
              <span className="text-sm">Potential Issue</span>
            </div>
            <div className="flex items-center">
              <span className="h-3 w-3 rounded-full inline-block mr-2" style={{ backgroundColor: '#f5222d' }}></span>
              <span className="text-sm">Detected Anomaly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
