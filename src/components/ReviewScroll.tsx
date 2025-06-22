
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ReviewScroll = () => {
  const reviews = [
    {
      text: "Didn't expect this much value for ₹199. Crazy stuff.",
      author: "Rahul M.",
      role: "Creator",
      avatar: "RM"
    },
    {
      text: "I started earning in 6 days. No fluff, pure gold.",
      author: "Sneha C.",
      role: "Student",
      avatar: "SC"
    },
    {
      text: "Exactly what I needed as a beginner.",
      author: "Zain R.",
      role: "Freelancer",
      avatar: "ZR"
    },
    {
      text: "Better than 90% of online courses.",
      author: "Ritu A.",
      role: "Working Professional",
      avatar: "RA"
    },
    {
      text: "This is what every content creator should read.",
      author: "Yash T.",
      role: "Content Creator",
      avatar: "YT"
    },
    {
      text: "I was tired of theory — this felt like a blueprint.",
      author: "Manav D.",
      role: "Entrepreneur",
      avatar: "MD"
    },
    {
      text: "Real deal for creators. Loved the IG bonus.",
      author: "Arjun P.",
      role: "Blogger",
      avatar: "AP"
    },
    {
      text: "Mind = Blown. Glad I took a chance.",
      author: "Meena R.",
      role: "Designer",
      avatar: "MR"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Real Buyers Are Saying
          </h2>
          <p className="text-xl text-gray-600">
            Honest feedback from people who took action
          </p>
        </div>

        <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
          {reviews.map((review, index) => (
            <Card key={index} className="flex-none w-80 p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              <p className="text-gray-800 mb-6 text-lg leading-relaxed font-medium">
                "{review.text}"
              </p>
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                    {review.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-gray-900">{review.author}</p>
                  <p className="text-gray-600 text-sm">{review.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            ← Scroll to see more reviews →
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewScroll;
