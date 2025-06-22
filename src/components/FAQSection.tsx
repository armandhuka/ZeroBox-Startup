
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Kya mujhe coding aani chahiye?",
      answer: "Bilkul nahi! ZeroBox method mein coding ki bilkul zarurat nahi hai. Sirf aapka phone aur basic internet knowledge enough hai."
    },
    {
      question: "Kya main phone se kar sakta hoon?",
      answer: "Haan bilkul! Ye method specially phone users ke liye designed hai. Laptop ki zarurat nahi, sirf smartphone se complete business run kar sakte hain."
    },
    {
      question: "Kitne din mein result dikhega?",
      answer: "Implementation ke saath hi results start ho jaate hain. 1st month  se earning start kar sakte hain agar properly follow karein."
    },
    {
      question: "Refund kaise milega?",
      answer: "Agar 1 month baad bhi satisfied nahi hain (within 4 months), toh 50% refund guaranteed hai. No questions asked policy."
    },
    {
      question: "Kya ye legal hai?",
      answer: "100% legal aur safe method hai. Government approved business model hai jo thousands of people successfully use kar rahe hain."
    },
    {
      question: "Kitna time lagega daily?",
      answer: "Sirf 2-3 hours daily enough hai. College ya job ke saath easily kar sakte hain. Flexible timing, aap decide karo."
    },
    {
      question: "Investment kitni chahiye starting mein?",
      answer: "Zero investment! ₹0 inventory, ₹0 office rent. Sirf ₹199 ka ye eBook aur aapka time - bas itna enough hai."
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-zerobox-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-montserrat font-black">
            <span className="text-off-white">❓ Common Questions</span>
            <span className="block gradient-text">Answered</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Sabke dimag mein ye sawal aate hain - here are the answers!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-800/30 rounded-xl border border-gray-700 hover:border-neon-green/50 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
              >
                <h3 className="text-lg font-montserrat font-semibold text-off-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-neon-green" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
