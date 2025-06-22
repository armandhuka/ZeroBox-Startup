
import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import HeroSection from '../components/HeroSection';
import UniqueSection from '../components/UniqueSection';
import ReviewsSection from '../components/ReviewsSection';
import ProofSection from '../components/ProofSection';
import BonusSection from '../components/BonusSection';
import ContentCreatorsSection from '../components/ContentCreatorsSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import StickyBottomBar from '../components/StickyBottomBar';


const Index = () => {
  return (
    <div className="min-h-screen bg-zerobox-black text-off-white">
      {/* Countdown Timer */}
      <CountdownTimer />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Why Unique Section */}
      <UniqueSection />
      
      {/* Reviews Section */}
      <ReviewsSection />
      
      {/* Proof Section */}
      <ProofSection />
      
      {/* Bonus Section */}
      <BonusSection />

      {/* Content Creators Section */}
      <ContentCreatorsSection />
      
      {/* FAQ Section */}
      <FAQSection />


<div className="mt-32 relative bg-[#0d0f1a] rounded-3xl overflow-hidden border border-neon-green/30 shadow-[0_0_60px_-10px_rgba(57,255,20,0.3)]">
  {/* Gradient Glow BG */}
  <div className="absolute inset-0 bg-gradient-to-tr from-neon-green/10 via-yellow-500/10 to-orange-400/10 blur-2xl opacity-20 z-0" />

  {/* Content */}
  <div className="relative z-10 px-6 md:px-16 py-20 text-center space-y-12">
    {/* Heading */}
    <div className="space-y-4">
      <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
        🔥 Unlock ₹1,999 Worth of Business Value
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
        Transform your mindset, learn the secrets, and build your own business starting today —
        <span className="text-zerobox-yellow font-semibold"> all for just ₹199.</span>
      </p>
    </div>

    {/* Value Summary Box */}
    <div className="bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md p-8 md:p-12 w-full max-w-4xl mx-auto space-y-6">
      <div className="flex flex-wrap justify-center items-center gap-8 text-center">
        <div>
          <p className="text-gray-400 text-sm">Ebook + Training</p>
          <p className="text-2xl font-semibold text-gray-100">₹799</p>
        </div>
        <span className="text-3xl text-yellow-400 font-bold">+</span>
        <div>
          <p className="text-gray-400 text-sm">Bonuses</p>
          <p className="text-2xl font-semibold text-yellow-300">₹1,200</p>
        </div>
        <span className="text-3xl text-neon-green font-bold">=</span>
        <div>
          <p className="text-gray-400 text-sm">Total Value</p>
          <p className="text-3xl font-extrabold text-neon-green">₹1,999</p>
        </div>
      </div>

      <div className="text-center space-y-2">
        <p className="text-gray-400 text-sm">Limited Time Offer</p>
        <p className="text-5xl font-black">
          <span className="text-gray-500 line-through mr-3">₹1,999</span>
          <span className="text-neon-green">₹199</span>
        </p>
        <p className="text-zerobox-yellow font-semibold text-base md:text-lg">
          90% Discount — Only For Action Takers 🚀
        </p>
      </div>
    </div>

    {/* CTA Button */}
    <div>
      <a
        href="https://spf.bio/DUdNU"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 bg-neon-green text-black text-lg md:text-xl font-bold rounded-full shadow-lg hover:bg-green-400 hover:scale-105 transition-all duration-300"
      >
        🎯 Get Access for Just ₹199
      </a>
      <p className="text-sm text-gray-400 mt-4">⏳ Limited time — no second chances!</p>
    </div>
  </div>
</div>


      
      {/* Footer */}
      <Footer />

      {/* Sticky Bottom Bar */}
      <StickyBottomBar />
      
    </div>
  );
};

export default Index;
