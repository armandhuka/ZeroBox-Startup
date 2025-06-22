
import React from 'react';
import { TrendingUp, IndianRupee, Smartphone } from 'lucide-react';

const ProofSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-zerobox-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-black">
            <span className="text-off-white">📈 Real Proof,</span>
            <span className="block gradient-text">Real Money</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Screenshots dekho - ye log sach mein paise kama rahe hain! 
            <span className="block text-zerobox-yellow font-semibold">Fake nahi, bilkul real earnings!</span>
          </p>
        </div>

        {/* Proof Screenshots Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* UPI Payment Proof */}
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-neon-green/50 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded-lg flex items-center justify-center">
                  <IndianRupee className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-off-white">UPI Payment</h3>
                  <p className="text-sm text-gray-400">Daily earnings via PhonePe</p>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 space-y-2">
                <div className="text-green-800 font-semibold">Payment Received</div>
                <div className="text-2xl font-bold text-green-700">₹2,847</div>
                <div className="text-sm text-green-600">From: Raj***al@paytm • 2:34 PM</div>
                <div className="text-xs text-gray-600">ZeroBox Business Model Payment</div>
              </div>
              <p className="text-sm text-gray-400">✅ Daily ka ₹2500+ easily aa jata hai</p>
            </div>
          </div>

          {/* Razorpay Dashboard */}
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-neon-green/50 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-off-white">Razorpay Dashboard</h3>
                  <p className="text-sm text-gray-400">Weekly earnings summary</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                <div className="text-blue-800 font-semibold">This Week's Total</div>
                <div className="text-2xl font-bold text-blue-700">₹18,430</div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-600">Transactions: 47</span>
                  <span className="text-green-600">↗ +23%</span>
                </div>
                <div className="text-xs text-gray-600">ZeroBox Strategy Implementation</div>
              </div>
              <p className="text-sm text-gray-400">✅ Week mein ₹18K+ ka proof</p>
            </div>
          </div>

          {/* Bank Statement */}
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-neon-green/50 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-off-white">Bank Transfer</h3>
                  <p className="text-sm text-gray-400">Monthly withdrawal proof</p>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 space-y-2">
                <div className="text-yellow-800 font-semibold">Amount Credited</div>
                <div className="text-2xl font-bold text-yellow-700">₹45,692</div>
                <div className="text-sm text-yellow-600">SBI A/C ***4729 • Dec 15, 2024</div>
                <div className="text-xs text-gray-600">Monthly ZeroBox Business Income</div>
              </div>
              <p className="text-sm text-gray-400">✅ Month mein ₹45K+ bank mein</p>
            </div>
          </div>
        </div>

        {/* Success Messages */}
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-center text-off-white">
            Success Messages from Real Users
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* WhatsApp Style Messages */}
            <div className="bg-green-100 rounded-xl p-6 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  A
                </div>
                <span className="font-semibold text-green-800">Ankit Sharma</span>
                <span className="text-xs text-green-600">2:45 PM</span>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <p className="text-gray-800">Bhai tu genius hai! 🔥<br/>
                Kal hi start kiya tha, aaj ₹1200 aa gaye!<br/>
                ZeroBox wala method kamaal ka hai 💰</p>
              </div>
              <div className="text-xs text-green-600">✓✓ Read</div>
            </div>

            <div className="bg-blue-100 rounded-xl p-6 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  P
                </div>
                <span className="font-semibold text-blue-800">Priya Agarwal</span>
                <span className="text-xs text-blue-600">4:12 PM</span>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <p className="text-gray-800">Thank you so much! 🙏<br/>
                Mummy ko bola tha main paisa kamaungi...<br/>
                Aaj ₹5000 dikha ke unka muh band kar diya 😎<br/>
                ZeroBox = Life changer!</p>
              </div>
              <div className="text-xs text-blue-600">✓✓ Read</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-neon-green/10 to-zerobox-yellow/10 rounded-2xl p-8 border border-neon-green/30">
          <h3 className="text-2xl md:text-3xl font-montserrat font-black text-off-white mb-4">
            Aap bhi ban sakte hain next success story! 🚀
          </h3>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Sirf ₹199 mein ye sab knowledge mil rahi hai. 
            <span className="text-zerobox-yellow font-semibold"> Don't wait, start today!</span>
          </p>
          <button className="cta-button">
          <a
          href="https://spf.bio/DUdNU"
          target="_blank"
          rel="noopener noreferrer"
        >
          💰 Unlock My ₹199 Business Plan
        </a>
            
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
