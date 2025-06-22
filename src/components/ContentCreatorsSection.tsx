import React from 'react';
import { Youtube } from 'lucide-react';

const ContentCreatorsSection = () => {
  const creators = [
    {
      name: "StudyKaaran",
      type: "small",
      category: "Education"
    },
    {
      name: "TechBuddy",
      type: "small",
      category: "Technology"
    },
    {
      name: "LearnWithMe",
      type: "small",
      category: "Learning"
    },
    {
      name: "Dhruv Rathee",
      type: "big",
      category: "Political Commentary"
    },
    {
      name: "Raj Shamani",
      type: "big",
      category: "Business"
    },
    {
      name: "Finance With Sharan",
      type: "big",
      category: "Finance"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black font-montserrat text-off-white mb-4">
          🎥 Trusted by Top Creators
        </h2>
        <p className="text-lg md:text-xl gradient-text mb-12 max-w-2xl mx-auto">
          From rising YouTubers to India’s biggest creators — everyone’s using this hidden model to grow and earn 🚀
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {creators.map((creator, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-xl p-5 flex flex-col items-center text-center hover:border-neon-green/50 transition-all duration-300 hover:scale-[1.03]"
            >
              {/* Icon Placeholder */}
              <div className="w-14 h-14 bg-gradient-to-tr from-red-500 to-pink-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-xl font-bold">
                  {creator.name.charAt(0)}
                </span>
              </div>

              {/* Name */}
              <h3 className="font-semibold text-off-white text-sm mb-1">{creator.name}</h3>

              {/* Category */}
              <p className="text-xs text-gray-400 mb-2">{creator.category}</p>

              {/* Platform Icons */}
              <div className="flex items-center gap-2">
                <Youtube className="w-4 h-4 text-red-500" />
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">i</span>
                </div>
              </div>

              {/* Verified Badge */}
              {creator.type === 'big' && (
                <span className="mt-2 text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full font-semibold">
                  ✨ Verified
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-neon-green font-semibold text-lg md:text-xl">
            💡 Ab creators kama rahe hai... aap kyun nahi?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentCreatorsSection;
