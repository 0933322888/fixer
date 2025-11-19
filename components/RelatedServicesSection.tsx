import Link from "next/link";

interface Service {
  name?: string;
  label?: string;
  href: string | null;
}

interface RelatedServicesSectionProps {
  services: Service[];
  heading?: string;
  description?: string;
  applianceName?: string;
}

export default function RelatedServicesSection({
  services,
  heading,
  description,
  applianceName,
}: RelatedServicesSectionProps) {
  const defaultHeading = "Also Need Help With...";
  const defaultDescription = applianceName
    ? `We do more than just ${applianceName.toLowerCase()} repair — check out our other Ottawa services:`
    : "We do more than just appliance repair — check out our other Ottawa services:";

    const gridCols = services.length % 2 === 0 ? "md:grid-cols-4" : "md:grid-cols-3";

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-md text-center mb-8">{heading || defaultHeading}</h2>
          <p className="text-center text-gray-700 mb-8">{description || defaultDescription}</p>
          <div className={`grid ${gridCols} gap-4 text-center`}>
            {services.map((service, index) => (
              service.href ? (
              <Link
                key={index}
                href={service.href}
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors font-semibold"
              >
                {service.name || service.label}
              </Link>) : (
                <span className="text-center p-4 bg-gray-50 rounded-lg transition-colors font-semibold">{service.name || service.label}</span>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

