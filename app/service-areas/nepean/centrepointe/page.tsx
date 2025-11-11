import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Centrepointe Appliance Repair – Call 613-413-6969 | Fixer",
  description:
    "Fast appliance repair in Centrepointe. Washers, dryers, ovens, fridges & more. Insured local techs, same-day service, 90-day warranty.",
};

const services = [
  {
    name: "Washer Repair Ottawa",
    description: "Keep laundry moving without delays.",
    href: "/washer-repair",
  },
  {
    name: "Dryer Repair Ottawa",
    description: "Faster drying, less waiting.",
    href: "/dryer-repair",
  },
  {
    name: "Dishwasher Repair Ottawa",
    description: "Sparkling dishes every cycle.",
    href: "/dishwasher-repair",
  },
  {
    name: "Oven Repair Ottawa",
    description: "Even heat for baking and roasting.",
    href: "/oven-repair",
  },
  {
    name: "Cooktop Repair Ottawa",
    description: "Responsive heat on every burner.",
    href: "/cooktop-repair",
  },
  {
    name: "Microwave Repair Ottawa",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair",
  },
  {
    name: "Fridge Repair Ottawa",
    description: "Keep food fresh and ready.",
    href: "/fridge-repair",
  },
  {
    name: "Freezer Repair Ottawa",
    description: "Dependable deep-freeze storage.",
    href: "/freezer-repair",
  },
];

const reasons = [
  "90-day protection on repairs.",
  "Professional, insured experts.",
  "Local Nepean techs who know your community.",
  "Same-day repairs often possible.",
];

const attractions = [
  "Centrepointe Theatre and Ben Franklin Place.",
  "Algonquin College campus and green spaces.",
  "Local restaurants and cafés along Baseline Road.",
];

const faqs = [
  {
    question: "Do you offer evening appointments in Centrepointe?",
    answer: (
      <span>
        Yes, we sometimes have evening availability — call to find a time that
        works best.
      </span>
    ),
  },
  {
    question: "Do you fix dishwashers that leak?",
    answer: (
      <span>
        Definitely — leaks are one of the most common dishwasher issues we
        repair.
      </span>
    ),
  },
  {
    question: "Do you guarantee your work?",
    answer: (
      <span>
        Yes, all repairs include a 90-day warranty on labour and installed
        parts.
      </span>
    ),
  },
  {
    question: "If I need oven repair in Ottawa, do you travel beyond Nepean?",
    answer: (
      <span>
        Absolutely — we service the entire Ottawa region. Book{" "}
        <Link
          href="/oven-repair"
          className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
        >
          oven repair in Ottawa
        </Link>{" "}
        whenever you need it.
      </span>
    ),
  },
];

const otherNeighbourhoods = [
  {
    name: "Barrhaven East Appliance Repair",
    href: "/service-areas/nepean/barrhaven-east",
  },
  {
    name: "Merivale Gardens Appliance Repair",
    href: "/service-areas/nepean/merivale-gardens",
  },
];

const additionalAreas = [
  "Craig Henry",
  "Tanglewood",
  "Skyline",
  "Fisher Glen",
  "Leslie Park",
  "Borden Farm",
  "Knoxdale",
  "Manordale",
];

export default function CentrepointeServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-grey-800 space-y-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Centrepointe Appliance Repair – Professional Local Team
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Reliable appliance repair in Centrepointe, Nepean. Same-day appointments often
            available. Learn more at our{" "}
            <Link
              href="/service-areas/nepean"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Nepean appliance repair
            </Link>{" "}
            page, also serving Barrhaven East and Merivale Gardens.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Appliances We Repair in Centrepointe
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-300"
              >
                <span className="text-base font-semibold text-gray-900 group-hover:text-accent-700">
                  {service.name}
                </span>
                <span className="text-sm text-gray-700">{service.description}</span>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent-600 group-hover:text-accent-700">
                  Explore service
                  <svg
                    className="h-4 w-4 transition group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
              </Link>
            ))}
          </div>
          <p className="text-gray-700">
            <Link
              href="/appliance-installation/nepean"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Appliance Installation Nepean
            </Link>{" "}
            keeps new appliances ready to use. See the full service list through{" "}
            <Link
              href="/service-areas/nepean"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Nepean appliance repair
            </Link>
            .
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Why Centrepointe Residents Trust Us
          </h2>
          <ul className="space-y-3 text-sm text-gray-700">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-accent-500" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Explore Centrepointe While We Fix
          </h2>
          <p className="text-gray-700">
            While we fix your appliance, enjoy Centrepointe:
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            {attractions.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-accent-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-700">
            See what’s happening this week:{" "}
            <a
              href="https://ottawatourism.ca/en/see-and-do/events"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-600 underline hover:text-accent-700"
            >
              Ottawa Tourism Events
            </a>
            .
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            FAQs for Centrepointe Appliance Repair
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Other Nepean Neighbourhoods We Serve
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {otherNeighbourhoods.map((neighbourhood) => (
              <Link
                key={neighbourhood.name}
                href={neighbourhood.href}
                className="rounded-xl border border-gray-200 bg-white p-4 text-sm font-semibold text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-300 hover:text-accent-700"
              >
                {neighbourhood.name}
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-700">{additionalAreas.join(" • ")}</p>
        </section>

        <section className="rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="text-3xl font-semibold">
            Fast, friendly help is one call away
          </h2>
          <p className="mt-4 text-sm text-gray-200">
            Dial 613-413-6969 or write to{" "}
            <a
              href="mailto:service@fixerappliancerepair.ca"
              className="font-semibold text-white underline decoration-2 underline-offset-4"
            >
              service@fixerappliancerepair.ca
            </a>{" "}
            for Centrepointe appliance repair.
          </p>
        </section>
      </div>
    </div>
  );
}


