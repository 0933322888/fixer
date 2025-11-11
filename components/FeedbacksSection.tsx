import { FaStar } from "react-icons/fa";

interface Feedback {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

interface FeedbacksSectionProps {
  applianceName: string;
}

export default function FeedbacksSection({ applianceName }: FeedbacksSectionProps) {
  const feedbacks: Feedback[] = [
    {
      name: "Jennifer Smith",
      location: "Ottawa, ON",
      rating: 5,
      text: `Great experience! My ${applianceName.toLowerCase()} was making strange noises and they diagnosed and fixed it quickly. Very professional service.`,
      service: applianceName,
    },
    {
      name: "David Wilson",
      location: "Kanata, ON",
      rating: 5,
      text: `Excellent service from start to finish. The technician was knowledgeable and explained everything clearly. My ${applianceName.toLowerCase()} works perfectly now!`,
      service: applianceName,
    },
    {
      name: "Lisa Anderson",
      location: "Nepean, ON",
      rating: 5,
      text: `Very impressed with the quick response time. They came the same day and fixed my ${applianceName.toLowerCase()} for a reasonable price. Highly recommend!`,
      service: applianceName,
    },
    {
      name: "Robert Martinez",
      location: "Barrhaven, ON",
      rating: 5,
      text: `Outstanding work! Professional, on-time, and got my ${applianceName.toLowerCase()} working again. Will definitely use them again if needed.`,
      service: applianceName,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="heading-md text-center mb-4">Customer Reviews</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          See what our customers are saying about our {applianceName.toLowerCase()} repair services in Ottawa.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {feedbacks.map((feedback, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(feedback.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{feedback.text}"</p>
              <div>
                <p className="font-bold text-gray-900">{feedback.name}</p>
                <p className="text-sm text-gray-600">{feedback.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

