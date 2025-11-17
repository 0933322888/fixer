import Link from "next/link";

interface Service {
  name?: string;
  label?: string;
  href: string;
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

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-md text-center mb-8">{heading || defaultHeading}</h2>
          <p className="text-center text-gray-700 mb-8">{description || defaultDescription}</p>
          <div className="grid md:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors font-semibold"
              >
                {service.name || service.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

