
import React from 'react';
import { Gift, FileText, Layout, Sparkles } from 'lucide-react';

const BonusSection = () => {
  const bonuses = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Instagram Growth PDF",
      value: "Worth ₹500",
      description: "10K followers paane ka complete blueprint"
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Canva Keyword Guide",
      value: "Worth ₹300",
      description: "Ready-to-use Canva Keyword Full Guide"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Ig Highlight Cover",
      value: "Worth ₹400",
      description: "Instagram Story Hightlight Cover "
    }
  ];

  return (
    <section className="py-16 px-4 bg-zerobox-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-zerobox-yellow/20 to-orange-500/20 px-4 py-2 rounded-full border border-zerobox-yellow/50">
            <Gift className="w-5 h-5 text-zerobox-yellow animate-bounce" />
            <span className="text-zerobox-yellow font-semibold">EXCLUSIVE BONUSES</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-montserrat font-black">
            <span className="text-off-white">🎁 But Wait,</span>
            <span className="block gradient-text">There's More!</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            ZeroBox eBook ke saath ye <span className="text-zerobox-yellow font-semibold">FREE bonuses</span> bhi mil rahe hain!
            <br />
            <span className="text-neon-green font-semibold">Total value: ₹1,200 - Bilkul FREE!</span>
          </p>
        </div>

        {/* Bonuses Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 hover:border-zerobox-yellow/50 transition-all duration-300 group relative overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-zerobox-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 space-y-4 text-center">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-zerobox-yellow to-orange-500 rounded-full flex items-center justify-center text-zerobox-black group-hover:scale-110 transition-transform duration-300">
                  {bonus.icon}
                </div>
                
                {/* Value Badge */}
                <div className="inline-block bg-gradient-to-r from-zerobox-yellow/20 to-orange-500/20 px-3 py-1 rounded-full border border-zerobox-yellow/50">
                  <span className="text-zerobox-yellow font-bold text-sm">{bonus.value}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-montserrat font-bold text-off-white group-hover:text-zerobox-yellow transition-colors">
                  {bonus.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value Highlight */}
        <div className="bg-gradient-to-r from-neon-green/10 via-zerobox-yellow/10 to-orange-500/10 rounded-2xl p-8 border border-zerobox-yellow/30 text-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-montserrat font-black text-off-white">
              Total Package Value
            </h3>
            
            <div className="flex items-center justify-center space-x-4 text-center">
              <div className="space-y-1">
                <div className="text-sm text-gray-400">eBook Value</div>
                <div className="text-2xl font-bold text-gray-300">₹799</div>
              </div>
              <div className="text-3xl text-zerobox-yellow">+</div>
              <div className="space-y-1">
                <div className="text-sm text-gray-400">Bonuses Value</div>
                <div className="text-2xl font-bold text-zerobox-yellow">₹1,200</div>
              </div>
              <div className="text-3xl text-neon-green">=</div>
              <div className="space-y-1">
                <div className="text-sm text-gray-400">Total Worth</div>
                <div className="text-3xl font-black text-neon-green">₹1,999</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="text-4xl md:text-5xl font-montserrat font-black">
                <span className="text-gray-400 line-through">₹1,999</span>
                <span className="text-neon-green ml-4">₹199</span>
              </div>
              <p className="text-xl text-zerobox-yellow font-bold">
                90% OFF - Limited Time Only! ⚡
              </p>
            </div>

            <button className="cta-button text-xl">
              🎯 Get Complete Package for ₹199
            </button>
            
            <p className="text-sm text-gray-400">
              ⏰ Offer expires soon - Don't miss out on these exclusive bonuses!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
