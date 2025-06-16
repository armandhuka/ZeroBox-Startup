
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TermsConditions = () => {
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
        
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">Terms & Conditions</h1>
        
        <div className="space-y-8 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p className="ml-4">By purchasing this ebook, you agree to all the terms and policies listed on this website.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Product Description</h2>
            <p className="ml-4">This is a digital eBook. No physical product will be delivered.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Intellectual Property</h2>
            <ul className="space-y-2 ml-4">
              <li>• All content in the ebook is copyrighted.</li>
              <li>• Redistribution, resale, or sharing without permission is strictly prohibited.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Refund Eligibility</h2>
            <p className="ml-4">As per our Privacy Policy, partial refunds are applicable only under specific conditions.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. User Responsibilities</h2>
            <ul className="space-y-2 ml-4">
              <li>• Users must ensure their email is correct at checkout.</li>
              <li>• Download links will be sent via email. It's your responsibility to download and save the ebook.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Changes to Terms</h2>
            <p className="ml-4">We reserve the right to change these terms at any time. Updates will be published on this page.</p>
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

export default TermsConditions;
