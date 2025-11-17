import Link from "next/link";
import { ReactNode } from "react";

interface ApplianceLink {
  href: string;
  label: string;
}

interface BrandAppliance {
  title: string;
  description: string;
  media: ReactNode;
  link?: ApplianceLink;
  links?: ApplianceLink[];
}

interface BrandAppliancesSectionProps {
  brandName: string;
  appliances: BrandAppliance[];
}

export default function BrandAppliancesSection({
  brandName,
  appliances,
}: BrandAppliancesSectionProps) {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-md mb-10 text-center">
            {brandName} Appliances We Repair
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {appliances.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-primary-800 flex items-center gap-2">
                    {item.title}
                  </h3>
                  {item.media}
                  <p className="text-gray-700">{item.description}</p>
                  <div className="flex flex-wrap gap-3 text-sm font-semibold text-accent-600">
                    {item.link && (
                      <Link href={item.link.href} className="hover:underline">
                        → {item.link.label}
                      </Link>
                    )}
                    {item.links &&
                      item.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="hover:underline"
                        >
                          → {link.label}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

