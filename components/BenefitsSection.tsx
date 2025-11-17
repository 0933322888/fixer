import { FaCheckCircle } from "react-icons/fa";

interface BenefitsSectionProps {
  applianceName?: string;
  heading?: string;
  message?: string;
  benefits: string[];
}

export default function BenefitsSection({ applianceName = "", heading, message = "", benefits }: BenefitsSectionProps) {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <h2 className="heading-md text-center mb-12">{heading || `Why Choose Our ${applianceName} Repair Service?`}</h2>
        {message && <p className="text-center text-gray-700 mb-12">{message}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
              <FaCheckCircle className="text-accent-500 text-2xl flex-shrink-0 mt-1" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

