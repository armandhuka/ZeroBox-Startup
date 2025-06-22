import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsAndConditions: React.FC = () => {
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

      <h1 className="text-4xl font-bold mb-6 text-neon-green">Terms & Conditions</h1>

      <p className="mb-4 text-gray-400">
        Please read these Terms & Conditions carefully before using the ZeroBox platform. 
        By accessing or using our services, you agree to be bound by these terms. If you disagree with any part, 
        please do not use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">1. Acceptance of Terms</h2>
      <p className="text-gray-400 mb-4">
        By accessing the ZeroBox website, you confirm that you have read, understood, and agreed to these Terms & Conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">2. Use of Services</h2>
      <p className="text-gray-400 mb-4">
        You agree to use our services only for lawful purposes and in a manner that does not violate the rights of others.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">3. Intellectual Property</h2>
      <p className="text-gray-400 mb-4">
        All content on ZeroBox, including logos, text, graphics, and software, is owned by ZeroBox or its licensors and is protected by copyright laws.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">4. Termination</h2>
      <p className="text-gray-400 mb-4">
        We reserve the right to suspend or terminate your account if you violate any of these terms or engage in any activity that harms our service.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">5. Changes to Terms</h2>
      <p className="text-gray-400 mb-4">
        ZeroBox reserves the right to update these Terms & Conditions at any time. Continued use of the platform after changes means you accept the updated terms.
      </p>

      <p className="text-sm text-gray-500 mt-12">Last Updated: June 22, 2025</p>
    </div>
  );
};

export default TermsAndConditions;
