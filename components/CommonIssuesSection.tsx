import { FaTools } from "react-icons/fa";

interface CommonIssuesSectionProps {
  applianceName: string;
  issues: string[];
}

export default function CommonIssuesSection({ applianceName, issues }: CommonIssuesSectionProps) {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <h2 className="heading-md text-center mb-4">
          Common {applianceName} Issues We Fix
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our experienced technicians can diagnose and repair any {applianceName.toLowerCase()} problem quickly and efficiently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {issues.map((issue, index) => (
            <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
              <FaTools className="text-primary-600 text-xl flex-shrink-0 mt-1" />
              <p className="text-gray-700 font-medium">{issue}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

