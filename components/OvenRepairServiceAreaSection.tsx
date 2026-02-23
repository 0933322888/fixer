import Link from "next/link";

interface RelatedLocation {
  name: string;
  slug: string;
}

interface OvenRepairServiceAreaSectionProps {
  serviceAreas: string[];
  locationName: string;
  heading?: string; // Optional custom heading, defaults to "Service Area"
  description?: string; // Optional custom description
  relatedLocations?: RelatedLocation[]; // Optional list of related locations to link to
  footerText?: React.ReactNode; // Optional custom footer text with links
  surroundingLabel?: string; // Optional custom label, defaults to "and surrounding neighbourhoods"
}

// Default list of all related locations for oven-repair
const defaultOvenRepairLocations: RelatedLocation[] = [
  { name: "Kanata", slug: "kanata" },
  { name: "Stittsville", slug: "stittsville" },
  { name: "Nepean", slug: "nepean" },
  { name: "Orleans", slug: "orleans" },
  { name: "Vanier", slug: "vanier" },
  { name: "Barrhaven", slug: "barrhaven" },
  { name: "Mississippi Mills", slug: "mississippi-mills" },
  { name: "Arnprior", slug: "arnprior" },
  { name: "Carleton Place", slug: "carleton-place" },
];

export default function OvenRepairServiceAreaSection({
  serviceAreas,
  locationName,
  heading,
  description,
  relatedLocations,
  footerText,
  surroundingLabel = "and surrounding neighbourhoods",
}: OvenRepairServiceAreaSectionProps) {
  // Use provided related locations or default to oven-repair locations
  const locations = relatedLocations || defaultOvenRepairLocations;
  
  // Filter out current location from the list
  const currentLocationSlug = locationName.toLowerCase().replace(/\s+/g, '-');
  const filteredLocations = locations.filter(
    (loc) => loc.slug !== currentLocationSlug
  );

  // Default heading
  const defaultHeading = heading || "Service Area";
  
  // Default description
  const defaultDescription = description || 
    `We provide appliance repair services across the entire ${locationName} area, including:`;

  // Default footer text
  const defaultFooter = (
    <p className="text-center text-gray-700 mb-6">
      For full coverage, see our{" "}
      <Link href="/oven-repair" className="text-primary-600 hover:text-primary-700 underline">
        Oven Repair Ottawa
      </Link>
      {" "}
      page. We also service customers in{" "}
      {filteredLocations.map((loc, index) => (
        <span key={loc.slug}>
          <Link 
            href={`/oven-repair/${loc.slug}`} 
            className="text-primary-600 hover:text-primary-700 underline"
          >
            Oven Repair {loc.name}
          </Link>
          {index < filteredLocations.length - 1 ? ", " : ""}
          {index === filteredLocations.length - 2 ? " and " : ""}
        </span>
      ))}
      .
    </p>
  );

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-md mb-8 text-center">{defaultHeading}</h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            {defaultDescription}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {serviceAreas.map((area, index) => (
              <div key={index} className="px-6 py-3 bg-gray-50 rounded-lg font-semibold text-gray-800">
                {area}
              </div>
            ))}
            <div className="px-6 py-3 bg-gray-50 rounded-lg font-semibold text-gray-800">
              {surroundingLabel}
            </div>
          </div>
          {footerText || defaultFooter}
        </div>
      </div>
    </section>
  );
}

