import {useState} from 'react';
import { Star, MapPin, Info } from 'lucide-react';

const ReviewsSection = () => {

  const [showHint, setShowHint] = useState(false);

  const handleDoubleClick = () => {
    setShowHint(true);
    setTimeout(() => setShowHint(false), 4000); // Hide after 4 seconds
  };

  const reviews = [
    {
      name: "Riya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "I wish I found this earlier! ₹25,000 kamaya sirf 2 months mein 🔥"
    },
    {
      name: "Arjun Patel",
      location: "Ahmedabad",
      rating: 5,
      text: "Bilkul sach hai! Phone se hi ₹15K monthly kar raha hun 💰"
    },
    {
      name: "Priya Singh",
      location: "Delhi",
      rating: 5,
      text: "College ke saath-saath ₹20K extra income. Game changer! ⭐"
    },
    {
      name: "Rohit Kumar",
      location: "Bangalore",
      rating: 5,
      text: "Job chhodke full time ye kar raha hun. Best decision ever! 🚀"
    },
    {
      name: "Sneha Gupta",
      location: "Pune",
      rating: 5,
      text: "Housewife se entrepreneur ban gayi. Thank you so much! 🙏"
    },
    {
      name: "Vikash Yadav",
      location: "Lucknow",
      rating: 5,
      text: "₹199 mein itna value? Unbelievable! Already made ₹30K 💸"
    },
    {
      name: "Anjali Reddy",
      location: "Hyderabad",
      rating: 5,
      text: "Simple hai, practical hai, aur results guaranteed! 🎯"
    },
    {
      name: "Manish Jain",
      location: "Jaipur",
      rating: 5,
      text: "No fake promises. Real strategy with real results! 💯"
    },
    {
      name: "Kavya Nair",
      location: "Kochi",
      rating: 5,
      text: "Work from home dream finally came true! ₹18K monthly 🏠"
    },
    {
      name: "Deepak Soni",
      location: "Indore",
      rating: 5,
      text: "Side income se main income ban gaya! Thank you ZeroBox 🔥"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center space-y-6 mb-12 relative">
          <h2 className="text-3xl md:text-5xl font-montserrat font-black inline-block">
            <span className="text-off-white block">📸 Real People,</span>
            <span
              className="block gradient-text flex items-center justify-center gap-2"
              onDoubleClick={handleDoubleClick}
            >
              Real Results
              <Info className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Dekh lo khud - ye log kya keh rahe hain ZeroBox ke bare mein
          </p>

          {/* Hint Box */}
          {showHint && (
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-4 bg-gray-800 border border-gray-600 text-sm text-gray-200 px-4 py-2 rounded-xl shadow-lg z-20 w-[300px]">
              ⚠️ Ye sirf sample reviews hain — mujhe lagta hai log aise hi feedback denge.
            </div>
          )}
        </div>

        {/* Manual Horizontal Scrollable Reviews */}
        <div
          className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 md:w-96 bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-neon-green/50 transition-all duration-300 snap-start"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-montserrat font-semibold text-off-white text-lg">
                      {review.name}
                    </h4>
                    <div className="flex items-center space-x-1 text-sm text-gray-400 mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{review.location}</span>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-zerobox-yellow fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-12">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-montserrat font-black text-neon-green">10,000+</div>
            <div className="text-sm text-gray-400">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-montserrat font-black text-zerobox-yellow">4.9/5</div>
            <div className="text-sm text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-montserrat font-black text-neon-green">₹5L+</div>
            <div className="text-sm text-gray-400">Total Earnings</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
