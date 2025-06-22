
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";

interface StickyFooterProps {
  timeLeft: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const StickyFooter = ({ timeLeft }: StickyFooterProps) => {
  const scrollToOrder = () => {
    document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-900 to-purple-900 text-white p-3 shadow-2xl z-40 border-t-4 border-orange-500">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
        <div className="text-center md:text-left">
          <p className="font-bold text-lg">Zero Box Startup - Only ₹199</p>
          <p className="text-sm opacity-75">
            Offer ends in <CountdownTimer timeLeft={timeLeft} />
          </p>
        </div>
        <Button 
          onClick={scrollToOrder}
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg font-bold rounded-lg shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
        >
          🔓 Get It Now
        </Button>
      </div>
    </div>
  );
};

export default StickyFooter;
