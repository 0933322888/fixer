import Link from "next/link";

interface ServiceItem {
  name: string;
  description: string;
  href: string;
}

interface InstallationNote {
  prefix?: string;
  label: string;
  href: string;
  suffix?: string;
}

interface ServiceAreaServicesSectionProps {
  title: string;
  description: string;
  services: ServiceItem[];
  installationNote?: InstallationNote;
}

export default function ServiceAreaServicesSection({
  title,
  description,
  services,
  installationNote,
}: ServiceAreaServicesSectionProps) {
  const gridCols = services.length % 2 === 0 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <section className="space-y-10">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900">{title}</h2>
        <p className="text-gray-700 text-lg">{description}</p>
        <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-accent-500 to-primary-500" />
      </div>

      <div className={`grid gap-5 ${gridCols}`}>
        {services.map((service) => (
          <Link
            key={service.name}
            href={service.href}
            className="group flex flex-col gap-3 rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-gray-50/50 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-lg font-semibold text-gray-900 group-hover:text-accent-700">
                {service.name}
              </span>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent-100 bg-accent-50 text-accent-600 transition group-hover:bg-accent-600 group-hover:text-white">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            
          </Link>
        ))}
      </div>

      {installationNote && (
        <div className="rounded-2xl border border-accent-100 bg-gradient-to-r from-accent-50/80 to-primary-50/80 p-6 text-center shadow-sm">
          <p className="text-gray-800">
            {installationNote.prefix ?? "👉 We also provide"}{" "}
            <Link
              href={installationNote.href}
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              {installationNote.label}
            </Link>
            {installationNote.suffix ?? "."}
          </p>
        </div>
      )}
    </section>
  );
}

