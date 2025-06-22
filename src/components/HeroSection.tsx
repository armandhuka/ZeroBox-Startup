
import React from 'react';
import { Clock, Shield, Smartphone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-zerobox-black to-gray-900">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-montserrat font-black leading-tight">
            <span className="text-off-white">Secret Business Model for 2025</span>
            <span className="block gradient-text">₹0 Inventory • No Office</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 font-medium">
            Laakhon log silently use kar rahe hain... 
            <span className="text-zerobox-yellow font-bold"> ab aap ki baari hai!</span>
          </p>
        </div>

        {/* eBook Cover & Price */}
<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-8">
  <div className="relative">
    {/* Gradient Border with Black Center */}
    <div className="bg-gradient-to-br from-neon-green to-zerobox-yellow p-1 rounded-xl shadow-2xl">
      <div className="bg-gradient-to-b from-zerobox-black to-gray-900 rounded-xl w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        <div className="text-center space-y-2">
          <div className="text-2xl md:text-4xl font-montserrat font-black text-zerobox-yellow">
            ZeroBox
          </div>
          <div className="text-lg md:text-xl font-bold text-zerobox-yellow">
            STARTUP
          </div>
          <div className="text-xs md:text-sm text-gray-400">
            Business Model 2025
          </div>
        </div>
      </div>
    </div>

    {/* Bouncing Badge */}
    <div className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce">
      LIMITED TIME!
    </div>
  </div>

  {/* Offer & Features */}
  <div className="space-y-6">
    <div className="space-y-2">
      <div className="flex items-center justify-center space-x-4">
        <span className="text-3xl text-gray-500 line-through">₹799</span>
        <span className="text-5xl font-montserrat font-black text-neon-green">₹199</span>
      </div>
      <p className="text-red-400 font-semibold animate-pulse">
        75% OFF - Only Today!
      </p>
    </div>

    <div className="space-y-3 text-left">
      <div className="flex items-center space-x-2">
        <Shield className="w-5 h-5 text-neon-green" />
        <span className="text-gray-300">No coding required</span>
      </div>
      <div className="flex items-center space-x-2">
        <Smartphone className="w-5 h-5 text-neon-green" />
        <span className="text-gray-300">Phone se start karo</span>
      </div>
      <div className="flex items-center space-x-2">
        <Clock className="w-5 h-5 text-neon-green" />
        <span className="text-gray-300">Earn from Day 1</span>
      </div>
    </div>

    <a
      href="https://spf.bio/DUdNU"
      target="_blank"
      rel="noopener noreferrer"
      className="cta-button inline-block"
    >
      🚀 Start My ZeroBox Journey Now
    </a>
  </div>
</div>

        

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-8">
          <div className="text-center">
            <div className="text-2xl font-montserrat font-black text-neon-green">10,000+</div>
            <div className="text-sm text-gray-400">Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-montserrat font-black text-zerobox-yellow">4.9/5</div>
            <div className="text-sm text-gray-400">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-montserrat font-black text-neon-green">₹5L+</div>
            <div className="text-sm text-gray-400">Earning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
