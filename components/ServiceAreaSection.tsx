import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ReactNode } from "react";

interface NearbyArea {
  name: string;
  slug: string;
}

interface ServiceAreaSectionProps {
  title: string;
  description: string;
  neighborhoods: string[];
  nearbyAreas: NearbyArea[];
  applianceType: string; // e.g., "dryer", "washer", "dishwasher"
  footerText?: ReactNode; // Optional custom footer
  nearbyAreasLabel?: string; // Optional custom label for nearby areas section
  surroundingLabel?: string; // Optional custom label for "and surrounding neighbourhoods"
}

export default function ServiceAreaSection({
  title,
  description,
  neighborhoods,
  nearbyAreas,
  applianceType,
  footerText,
  nearbyAreasLabel = "We also provide:",
  surroundingLabel = "and surrounding neighbourhoods",
}: ServiceAreaSectionProps) {
  const defaultFooter = (
    <p className="text-lg text-gray-700">
      👉 Need {applianceType} help across Ottawa? Learn more about our{" "}
      <Link href={`/${applianceType}-repair`} className="text-primary-600 hover:text-primary-700 font-semibold">
        {applianceType.charAt(0).toUpperCase() + applianceType.slice(1)} Repair Ottawa
      </Link>
      {" "}page.
    </p>
  );

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-md text-center mb-8">{title}</h2>
          <p className="text-lg text-gray-700 mb-6 text-center">{description}</p>
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {neighborhoods.map((neighborhood, index) => (
                <span key={index} className="px-4 py-2 bg-primary-50 text-gray-900 rounded-lg">
                  {neighborhood}
                </span>
              ))}
              <span className="px-4 py-2 bg-primary-50 text-gray-900 rounded-lg">
                {surroundingLabel}
              </span>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-6 text-center">{nearbyAreasLabel}</p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {nearbyAreas.map((area, index) => (
              <Link 
                key={index} 
                href={`/${applianceType}-repair/${area.slug}`}
                className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-primary-50 transition-colors shadow-sm"
              >
                <FaMapMarkerAlt className="text-primary-600 text-lg flex-shrink-0" />
                <p className="text-gray-700 hover:text-primary-700 font-medium">{area.name}</p>
              </Link>
            ))}
          </div>

          <div className="text-center bg-white p-6 rounded-lg shadow-sm">
            {footerText || defaultFooter}
          </div>
        </div>
      </div>
    </section>
  );
}

