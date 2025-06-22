import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-200">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)} // Go back to previous page
        className="mb-6 px-4 py-2 bg-neon-green text-black font-semibold rounded hover:bg-green-400 transition"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-bold mb-6 text-neon-green">Privacy Policy</h1>

      <p className="mb-4 text-gray-400">
        At ZeroBox, we are committed to protecting your personal information and your right to privacy. 
        If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, 
        please contact us.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">1. Information We Collect</h2>
      <p className="text-gray-400 mb-4">
        We collect personal information that you voluntarily provide to us when you register on the website, 
        express interest in obtaining information about us or our products and services, or otherwise contacting us.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">2. How We Use Your Information</h2>
      <p className="text-gray-400 mb-4">
        We use personal information collected via our website for a variety of business purposes such as:
        <ul className="list-disc list-inside mt-2">
          <li>To provide and manage our services</li>
          <li>To respond to inquiries and offer support</li>
          <li>For analytics and product improvements</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">3. Sharing Your Information</h2>
      <p className="text-gray-400 mb-4">
        We do not sell or rent your personal information to third parties. We may share your data with service providers
        who help us operate our business (such as hosting or analytics), but only under strict confidentiality agreements.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">4. Your Privacy Rights</h2>
      <p className="text-gray-400 mb-4">
        You may review, change, or terminate your account at any time. You can also request access to your personal
        information or ask us to delete it by contacting our support team.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">5. Changes to This Policy</h2>
      <p className="text-gray-400 mb-4">
        We may update this privacy notice from time to time. The updated version will be indicated by an updated “Last Updated” date
        and the updated version will be effective as soon as it is accessible.
      </p>

      <p className="text-sm text-gray-500 mt-12">Last Updated: June 22, 2025</p>
    </div>
  );
};

export default PrivacyPolicy;
