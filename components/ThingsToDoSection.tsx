import { FaMapMarkerAlt } from "react-icons/fa";

interface Attraction {
  name?: string;
  title?: string;
  description: string;
}

interface ThingsToDoSectionProps {
  attractions: (Attraction | string)[];
  heading?: string;
  description?: string;
  applianceName?: string;
  link?: string;
  linkText?: string;
}

export default function ThingsToDoSection({
  attractions,
  heading,
  description,
  applianceName,
  link,
  linkText,
}: ThingsToDoSectionProps) {
  const defaultHeading = applianceName
    ? `Things to Do in Ottawa While We Repair Your ${applianceName.charAt(0).toUpperCase() + applianceName.slice(1)}`
    : "Things to Do in Ottawa";

  // Normalize attractions to object format
  const normalizedAttractions = attractions.map((attraction) => {
    if (typeof attraction === "string") {
      const parts = attraction.split(" – ");
      return {
        name: parts[0],
        description: parts[1] || "",
      };
    }
    return {
      name: attraction.name || attraction.title || "",
      description: attraction.description || "",
    };
  });

  // Determine grid columns: 2 columns for even number of attractions, 3 columns for odd
  const gridCols = normalizedAttractions.length % 2 === 0 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-md text-center mb-4">{heading || defaultHeading}</h2>
          {description && <p className="text-lg text-gray-700 text-center mb-6">{description}</p>}
          <div className={`grid ${gridCols} gap-4`}>
            {normalizedAttractions.map((attraction, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-accent-500 flex items-start gap-4"
              >
                {/* <FaMapMarkerAlt className="text-accent-500 text-xl flex-shrink-0 mt-1" /> */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{attraction.name}</h3>
                  <p className="text-gray-600 text-sm">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-gradient-to-r from-accent-50 to-primary-50 border border-accent-200 rounded-lg p-6 text-center">
            <p className="text-lg font-semibold text-gray-900 mb-2">Want to catch a live event or exhibit?</p>
            <p className="text-gray-700 mb-3">Check what's happening this week:</p>
            <a
              href={link || "https://ottawatourism.ca/en/see-and-do"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-600 font-semibold hover:text-accent-700 hover:underline transition-colors"
            >
              {linkText || "Ottawa Tourism Events"}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

