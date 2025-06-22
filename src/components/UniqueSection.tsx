
import React from 'react';
import { Zap, Users, TrendingUp, Shield } from 'lucide-react';

const UniqueSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-black">
            <span className="text-off-white">🔥 Why ZeroBox is</span>
            <span className="block gradient-text">Different?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Ye sirf ek aur "get rich quick" scheme nahi hai. Ye tested, proven business model hai!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* No Coding */}
          <div className="bg-gray-800/50 rounded-xl p-6 text-center space-y-4 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-neon-green/50">
            <div className="w-16 h-16 bg-gradient-to-r from-neon-green to-green-400 rounded-full flex items-center justify-center mx-auto">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-montserrat font-bold text-off-white">
              No Coding Required
            </h3>
            <p className="text-gray-300">
              Technical knowledge ki zarurat nahi. Sirf basic phone chalana aana chahiye!
            </p>
          </div>

          {/* Phone Only */}
          <div className="bg-gray-800/50 rounded-xl p-6 text-center space-y-4 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-neon-green/50">
            <div className="w-16 h-16 bg-gradient-to-r from-zerobox-yellow to-yellow-400 rounded-full flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-montserrat font-bold text-off-white">
              Phone Se Shuru Karo
            </h3>
            <p className="text-gray-300">
              Laptop, office, ya expensive tools ki zarurat nahi. Smartphone enough hai!
            </p>
          </div>

          {/* Quick Results */}
          <div className="bg-gray-800/50 rounded-xl p-6 text-center space-y-4 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-neon-green/50">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-montserrat font-bold text-off-white">
              Earn from Day 1
            </h3>
            <p className="text-gray-300">
              No waiting! Implementation ke saath hi results start ho jaate hain.
            </p>
          </div>

          {/* Proven Method */}
          <div className="bg-gray-800/50 rounded-xl p-6 text-center space-y-4 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-neon-green/50">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-montserrat font-bold text-off-white">
              Tested & Proven
            </h3>
            <p className="text-gray-300">
              Thousands ne already implement kiya hai. Real testimonials aur proof available hai!
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <a
            href="https://spf.bio/DUdNU"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            💰 Get Access Before Price Jumps
          </a>
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
