import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-200">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-neon-green text-black font-semibold rounded hover:bg-green-400 transition"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-bold mb-6 text-neon-green text-center">Privacy Policy</h1>

      <div className="space-y-10 text-gray-300">
        {/* Info We Collect */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-white">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Name and email during purchase</li>
            <li>We do <strong>not</strong> store any payment or card details</li>
            <li>Only minimal information needed for digital delivery</li>
          </ul>
        </section>

        {/* Use of Data */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-white">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>To deliver your eBook and bonuses</li>
            <li>To provide customer support</li>
            <li>Occasionally send helpful updates (opt-out anytime)</li>
          </ul>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-white">3. Cookies</h2>
          <p>We may use basic cookies to improve user experience.</p>
        </section>

        {/* Security */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-white">4. Data Security</h2>
          <p>We use encrypted platforms and third-party providers with strict policies to protect your data.</p>
        </section>

        {/* Refunds */}
        <section className="bg-red-950/30 p-6 rounded-lg border-l-4 border-red-500">
          <h2 className="text-2xl font-semibold mb-3 text-red-400">5. Refund Policy</h2>
          <ul className="list-disc list-inside space-y-1 text-red-200">
            <li>Refund only possible <strong>after 1 month</strong> of purchase</li>
            <li><strong>50% refund</strong> only if content is unused</li>
            <li>Refund may take <strong>2 to 4 months</strong> to process</li>
            <li>Must provide valid purchase email & proof</li>
            <li>No refunds if content is downloaded/used</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="text-center border-t border-gray-600 pt-6">
          <p className="text-gray-400">
            📧 For queries, email: <a href="mailto:support@zeroboxstartup.com" className="text-neon-green underline">support@zeroboxstartup.com</a>
          </p>
        </section>
      </div>

      <p className="text-sm text-gray-500 mt-12 text-center">Last Updated: June 22, 2025</p>
    </div>
  );
};

export default PrivacyPolicy;
