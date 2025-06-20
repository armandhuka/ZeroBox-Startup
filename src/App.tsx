// src/pages/thank.tsx
import React from "react";
import { CheckCircle2, MessageSquareText } from "lucide-react";

const ThankYou: React.FC = () => {
  const whatsappNumber = "9484786841";
  const whatsappMessage = encodeURIComponent("ZeroBox Startup");

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white shadow-xl rounded-2xl p-8 md:p-12 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="h-12 w-12 text-green-500" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          🎉 Thank You for Your Purchase!
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          You've successfully ordered <strong>ZeroBox Startup</strong>. Your journey to launching a profitable, zero-inventory business starts now.
        </p>

        <div className="text-left bg-gray-100 p-4 rounded-lg mb-6">
          <h2 className="font-semibold text-gray-700 mb-2">📦 Access Your Product</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Check your registered email for the download link.</li>
            <li>Didn’t get the email? Check spam or junk folders.</li>
            <li>Still need help? Reach out via WhatsApp.</li>
          </ul>
        </div>

        <p className="text-gray-700 mb-4">
          📲 Just send "<strong>ZeroBox Startup</strong>" on WhatsApp to get your eBook instantly!
        </p>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 transition text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
        >
          <MessageSquareText className="w-5 h-5" />
          Message on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ThankYou;