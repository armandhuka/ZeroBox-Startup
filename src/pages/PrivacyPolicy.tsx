
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Button 
          onClick={() => navigate('/')}
          variant="outline"
          className="mb-6"
        >
          ← Back to Home
        </Button>
        
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
        
        <div className="space-y-8 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
            <ul className="space-y-2 ml-4">
              <li>• Name and email during purchase.</li>
              <li>• We do <strong>not</strong> store any payment or sensitive data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. How We Use Your Data</h2>
            <ul className="space-y-2 ml-4">
              <li>• To send the digital product (eBook).</li>
              <li>• To occasionally send promotional offers (opt-out anytime).</li>
              <li>• We never share or sell your information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Cookies</h2>
            <p className="ml-4">Basic cookies may be used to enhance user experience.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
            <p className="ml-4">We use encrypted systems to protect your data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Policy Changes</h2>
            <p className="ml-4">Updated policies will be shown on this page with the date.</p>
          </section>

          <section className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h2 className="text-xl font-semibold mb-3 text-red-700">Refund Policy</h2>
            <ul className="space-y-2 ml-4 text-red-800">
              <li>• Refund is available <strong>only after 1 month</strong> of purchase.</li>
              <li>• Only <strong>50% refund</strong> will be issued.</li>
              <li>• Refund will be processed within <strong>2 to 4 months</strong> of request.</li>
              <li>• Email with proof of purchase is required.</li>
              <li>• No refund for instant downloads or consumed content.</li>
            </ul>
          </section>

          <section className="text-center pt-6 border-t">
            <p className="text-gray-600">
              📧 For any query, email: <a href="mailto:support@zeroboxstartup.com" className="text-blue-600 underline">support@zeroboxstartup.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
