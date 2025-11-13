import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cardinal Glen Appliance Repair – Professional Technicians | Fixer",
  description:
    "Appliance repair in Cardinal Glen. Washers, dryers, ovens, fridges & more. Insured local team, same-day service, 90-day warranty.",
};

const services = [
  {
    name: "Washer Repair Ottawa",
    description: "Keep laundry day running smoothly.",
    href: "/washer-repair",
  },
  {
    name: "Dryer Repair Ottawa",
    description: "Restore fast, efficient drying.",
    href: "/dryer-repair",
  },
  {
    name: "Dishwasher Repair Ottawa",
    description: "Spotless dishes without the hassle.",
    href: "/dishwasher-repair",
  },
  {
    name: "Oven Repair Ottawa",
    description: "Even heat for every recipe.",
    href: "/oven-repair",
  },
  {
    name: "Cooktop Repair Ottawa",
    description: "Reliable temperature control on every burner.",
    href: "/cooktop-repair",
  },
  {
    name: "Microwave Repair Ottawa",
    description: "Safe, quick reheating.",
    href: "/microwave-repair",
  },
  {
    name: "Fridge Repair Ottawa",
    description: "Keep groceries fresh and safe.",
    href: "/fridge-repair",
  },
  {
    name: "Freezer Repair Ottawa",
    description: "Dependable deep-freeze storage.",
    href: "/freezer-repair",
  },
];

const reasons = [
  "Solid 90-day warranty on all repairs.",
  "Courteous, insured pros.",
  "Local Vanier experts ready to help.",
  "Same-day scheduling available.",
];

const attractions = [
  "Quiet residential parks and green areas.",
  "Local playgrounds and community spots.",
  "Walking distance to Beechwood Village shops.",
];

const faqs = [
  {
    question: "Do you cover Cardinal Glen with same-day service?",
    answer: "Yes, depending on schedule.",
  },
  {
    question: "Do you repair ovens and cooktops?",
    answer: "Yes, all kitchen appliances are included.",
  },
  {
    question: "Do you provide a service warranty?",
    answer: "Yes, 90-day coverage on all work.",
  },
  {
    question: "Can you also handle dryer repair in Ottawa?",
    answer: (
      <span>
        Yes, Ottawa service is available. Book{" "}
        <Link
          href="/dryer-repair"
          className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
        >
          dryer repair in Ottawa
        </Link>{" "}
        any time.
      </span>
    ),
  },
];

const otherNeighbourhoods = [
  {
    name: "Overbrook Appliance Repair",
    href: "/service-areas/vanier/overbrook",
  },
  {
    name: "Beechwood Village Appliance Repair",
    href: "/service-areas/vanier/beechwood-village",
  },
];

const additionalAreas = [
  "McArthur",
  "Cummings",
  "Queen Mary Street",
  "North River Road",
  "Eastview",
  "St. Laurent Boulevard",
  "Donald Street",
  "Vanier Parkway",
];

export default function CardinalGlenServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Cardinal Glen Appliance Repair – Fast & Reliable
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Appliance repair in Cardinal Glen with insured local service. Same-day appointments often available. Check our{" "}
            <Link
              href="/service-areas/vanier"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Vanier appliance repair
            </Link>{" "}
            hub, also serving Beechwood Village and Overbrook.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Appliances We Repair in Cardinal Glen
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
              href="/appliance-installation/ottawa"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Appliance Installation Ottawa
            </Link>{" "}
            Learn more about our full service list at{" "}
            <Link
              href="/service-areas/vanier"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Vanier appliance repair
            </Link>
            .
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Why Trust Us in Cardinal Glen
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
            Explore Cardinal Glen While We Fix
          </h2>
          <p className="text-gray-700">
            While your appliance is being repaired, enjoy Cardinal Glen:
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
            See current events:{" "}
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
            FAQs for Cardinal Glen Appliance Repair
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
            Other Vanier Neighbourhoods We Serve
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
            Local help is one call away
          </h2>
          <p className="mt-4 text-sm text-gray-200">
            Phone 613-413-6969 or email{" "}
            <a
              href="mailto:service@fixerappliancerepair.ca"
              className="font-semibold text-white underline decoration-2 underline-offset-4"
            >
              service@fixerappliancerepair.ca
            </a>{" "}
            for Cardinal Glen appliance repair.
          </p>
        </section>
      </div>
    </div>
  );
}

