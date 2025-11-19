import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { ReactNode } from "react";

interface WhenNeededSectionProps {
  items: string[];
  applianceName?: string;
  heading?: string;
  repairVsReplaceLink?: string;
  repairLink?: string;
  repairLinkText?: string;
  footerText?: ReactNode;
}

export default function WhenNeededSection({
  items,
  applianceName,
  heading,
  repairVsReplaceLink = "/blog/repair-vs-replace-appliance",
  repairLink = "/appliance-repair/locations/ottawa",
  repairLinkText = "Appliance Repair Ottawa",
  footerText,
}: WhenNeededSectionProps) {
  const defaultHeading = applianceName
    ? `When Do You Need ${applianceName} Installation?`
    : "When Do You Need Installation?";

  const defaultFooterText = applianceName
    ? `Not sure if you should repair or replace? Our Repair vs New Appliance Installation page can help. You can also explore ${repairLinkText} for service options.`
    : `Not sure if you should repair or replace? Our Repair vs New Appliance Installation page can help. You can also explore ${repairLinkText} for service options.`;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-md mb-8 text-center">{heading || defaultHeading}</h2>
          <div className="grid md:grid-cols-1 gap-4 mb-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border-l-4 border-primary-500 p-5 rounded-lg hover:shadow-md transition-all flex items-start gap-4"
              >
                <FaCheckCircle className="text-primary-500 text-xl flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700 flex-1">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 text-center">
            <p className="text-lg text-gray-700">
              {footerText || (
                <>
                  Not sure if you should repair or replace? Our{" "}
                  <Link href={repairVsReplaceLink} className="text-primary-600 font-semibold hover:underline">
                    Repair vs New Appliance Installation
                  </Link>{" "}
                  page can help. You can also explore{" "}
                  <Link href={repairLink} className="text-primary-600 font-semibold hover:underline">
                    {repairLinkText}
                  </Link>{" "}
                  for service options.
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

