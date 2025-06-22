<<<<<<< HEAD
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
=======

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
>>>>>>> 214b9b1e277fd97d6e9d5cd6c1bb70ff4f2eeb83
    </div>
  );
};

export default PrivacyPolicy;
