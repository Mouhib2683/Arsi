
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Zap } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <Zap className="h-8 w-8 text-electric-500 mr-2" />
          <span className="text-xl font-bold text-foreground">FarachaTeam<span className="text-electric-500">AI</span></span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground/90 hover:text-electric-600 transition-colors">Features</a>
          <a href="#dashboard" className="text-foreground/90 hover:text-electric-600 transition-colors">Dashboard</a>
          <a href="#benefits" className="text-foreground/90 hover:text-electric-600 transition-colors">Benefits</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          
        </div>
      </div>
    </header>
  );
};

export default Navbar;
