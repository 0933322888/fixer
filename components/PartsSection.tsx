import { FaCog } from "react-icons/fa";

interface PartsSectionProps {
  applianceName: string;
  parts: string[];
}

export default function PartsSection({ applianceName, parts }: PartsSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="heading-md text-center mb-4">
          Popular {applianceName} Parts We Replace
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We stock and replace genuine OEM parts for all major {applianceName.toLowerCase()} brands to ensure quality and longevity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {parts.map((part, index) => (
            <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border-2 border-gray-200 hover:border-primary-500 transition-colors">
              <FaCog className="text-accent-500 text-lg flex-shrink-0" />
              <span className="text-gray-700 font-medium text-sm">{part}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

