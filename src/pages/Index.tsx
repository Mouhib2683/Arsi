import React, { lazy, Suspense, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import DashboardPreview from "../components/DashboardPreview";
import Benefits from "../components/Benefits";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

// Lazy load the Map component
const Map = lazy(() => import("../components/Map"));

// ErrorBoundary component with typing
interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="py-20 text-center">
          <h3 className="text-xl font-medium mb-4">Something went wrong with the map.</h3>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="px-4 py-2 bg-electric-500 text-white rounded-md"
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const Index: React.FC = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />

      {/* Map only renders client-side */}
      {isBrowser && (
        <ErrorBoundary>
          <Suspense fallback={<div className="py-20 text-center">Loading map...</div>}>
            <Map />
          </Suspense>
        </ErrorBoundary>
      )}

      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
