import { FaArrowDown, FaArrowRight } from "react-icons/fa";

interface InstallationProcessSectionProps {
  steps: string[];
  heading?: string;
}

export default function InstallationProcessSection({
  steps,
  heading = "Our Installation Process",
}: InstallationProcessSectionProps) {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-md mb-8 text-center">{heading}</h2>
          <div className="space-y-4">
            {steps.map((step, index) => {
              const stepParts = step.split(" – ");
              const stepTitle = stepParts[0] || step;
              const stepDescription = stepParts[1] || "";

              return (
                <div
                  key={index}
                  className="bg-white border-l-4 border-accent-500 p-6 rounded-lg shadow-sm hover:shadow-md transition-all flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{stepTitle}</h3>
                    {stepDescription && <p className="text-gray-600">{stepDescription}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

