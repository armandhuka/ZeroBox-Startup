import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, TrendingUp, Book } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import ReviewScroll from "@/components/ReviewScroll";
import StickyFooter from "@/components/StickyFooter";
import LegalFooter from "@/components/LegalFooter";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 32
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToOrder = () => {
    document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Enhanced Top Alert Bar */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 text-center font-medium sticky top-0 z-50 shadow-lg animate-pulse">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-lg">⚡</span>
          <span className="text-base md:text-lg">OFFER ENDS SOON - Only</span>
          <CountdownTimer timeLeft={timeLeft} />
          <span className="text-base md:text-lg">Left!</span>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <section className="px-4 py-16 max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-800 mb-6 px-6 py-3 text-base font-semibold rounded-full">
            🔥 TRENDING NOW
          </Badge>
          <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Unlock the Business Strategy
            <span className="text-blue-600"> Top Creators</span> Are
            <span className="text-orange-500"> Quietly Using!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            This ₹199 eBook reveals a proven blueprint for creating your own money-making system —
            <strong> without tech, capital, or confusion.</strong>
          </p>
        </div>

        {/* Enhanced Hero CTA */}
        <div className="flex flex-col items-center mb-16">
          <Button
            onClick={scrollToOrder}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-8 text-2xl font-bold rounded-2xl shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 mb-4 pulse-animation"
          >
            🔓 Get Instant Access Now
          </Button>
          <p className="text-base text-gray-500">Instant delivery • No questions asked</p>
        </div>

        {/* Enhanced eBook Mockup */}
        <div className="flex justify-center mb-20">
          <div className="relative">
            <div className="w-80 h-96 bg-gradient-to-br rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden">
              <img
                src="/zs-book.jpg"
                alt="ZS Book"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badge */}
            <div className="absolute -top-3 -right-3 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg">
              LIMITED TIME
            </div>
          </div>
        </div>



      </section>

      {/* Enhanced Trust Badges */}
      <section className="bg-white py-12 px-4 shadow-sm">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-6 text-lg">Trusted by</p>
          <div className="flex flex-wrap justify-center gap-12 text-gray-500">
            <span className="font-bold text-lg">1000+ Creators</span>
            <span className="font-bold text-lg">500+ Freelancers</span>
            <span className="font-bold text-lg">300+ Students</span>
            <span className="font-bold text-lg">200+ Entrepreneurs</span>
          </div>
        </div>
      </section>

      {/* Enhanced About the Book */}
      <section className="px-4 py-20 max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What You'll Discover Inside
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to start your creator-led business in 2 hours
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">✅ Start a proven business model in 2 hours</h3>
                <p className="text-gray-600 text-lg">Step-by-step blueprint that works for anyone</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Book className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">✅ No coding, no experience required</h3>
                <p className="text-gray-600 text-lg">Perfect for complete beginners</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Gift className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">✅ Learn how creators monetize silently</h3>
                <p className="text-gray-600 text-lg">Secret strategies they don't want you to know</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Gift className="h-8 w-8 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">✅ Includes Instagram growth blueprint</h3>
                <p className="text-gray-600 text-lg">Bonus strategies worth ₹500 alone</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Card className="p-10 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl shadow-lg">
              <div className="text-8xl mb-6">📚</div>
              <h3 className="text-3xl font-bold mb-4">Zero Box Startup</h3>
              <p className="text-gray-600 mb-6 text-lg">Complete Business Blueprint</p>
              <div className="flex justify-center items-center space-x-3">
                <span className="text-4xl font-bold text-red-500 line-through">₹799</span>
                <span className="text-5xl font-bold text-green-600">₹199</span>
              </div>
              <p className="text-base text-gray-500 mt-3">75% OFF - Limited Time</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Reviews Section */}
      <ReviewScroll />

      {/* Second CTA after reviews */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't Wait - Start Today!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Only <CountdownTimer timeLeft={timeLeft} /> left at this price
          </p>
          <Button
            onClick={scrollToOrder}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-6 text-xl font-bold rounded-xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
          >
            ⚡ Claim Your Copy Now
          </Button>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-50 px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            You're Not Just Getting an E-Book...
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            You also unlock these exclusive bonuses worth ₹900!
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="font-bold text-lg mb-2">Instagram Growth Secrets</h3>
              <p className="text-gray-600">Viral content strategy used by top creators</p>
              <p className="text-green-600 font-bold mt-2">Worth ₹499</p>
            </Card>

            <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-bold text-lg mb-2">Canva Keyword Guide</h3>
              <p className="text-gray-600">Canva full keyword guide to help meking design</p>
              <p className="text-green-600 font-bold mt-2">Worth ₹199</p>
            </Card>

            <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="font-bold text-lg mb-2">Highlight covers</h3>
              <p className="text-gray-600">Additional resources and templates</p>
              <p className="text-green-600 font-bold mt-2">Worth ₹199</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Why This Works
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-blue-50 border-blue-200">
              <h3 className="font-bold text-xl mb-4">📊 Proven Results</h3>
              <p className="text-gray-700">
                Used by 1000+ creators, freelancers, students & working professionals who've built successful side businesses.
              </p>
            </Card>
            <Card className="p-8 bg-green-50 border-green-200">
              <h3 className="font-bold text-xl mb-4">🎯 Real Experience</h3>
              <p className="text-gray-700">
                Built by someone who failed 9 times, and then cracked the code. Learn from real mistakes and wins.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="order-section" className="bg-gradient-to-br from-blue-900 to-purple-900 text-white px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Creator-Led Startup Today
          </h2>
          <div className="mb-8">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <span className="text-2xl line-through text-red-300">₹799</span>
              <span className="text-5xl font-bold text-yellow-400">₹199</span>
            </div>
            <p className="text-xl opacity-90">Limited-time price • Ends in <CountdownTimer timeLeft={timeLeft} /></p>
          </div>

          <a
            href="https://spf.bio/DUdNU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 text-2xl font-bold rounded-xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 mb-6"
            >
              ✅ Claim Your Copy Now
            </Button>
          </a>


          <div className="space-y-2 text-sm opacity-75">
            <p>✓ Instant delivery to your email</p>
            <p>✓ 30-day money-back guarantee</p>
            <p>✓ Secure payment • No hidden fees</p>
          </div>
        </div>
      </section>

      {/* Sticky Footer */}
      <StickyFooter timeLeft={timeLeft} />

      {/* Legal Footer */}
      <LegalFooter />
    </div>
  );
};

export default Index;
