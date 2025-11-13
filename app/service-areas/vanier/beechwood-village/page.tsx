import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beechwood Village Appliance Repair – Call 613-413-6969 | Fixer",
  description:
    "Local appliance repair in Beechwood Village. Washers, dryers, fridges, ovens & more. Reliable service, insured team, 90-day warranty.",
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
  "Every repair backed by a 90-day warranty.",
  "Professional, insured team.",
  "Vanier-based technicians.",
  "Same-day repairs when possible.",
];

const attractions = [
  "Beechwood Avenue shops and cafés.",
  "Local art galleries and community spots.",
  "Rideau River walking paths.",
];

const faqs = [
  {
    question: "Do you handle weekend appointments in Beechwood Village?",
    answer: "Sometimes — call to check availability.",
  },
  {
    question: "Do you repair fridges and freezers?",
    answer: "Yes, we fix cooling appliances daily.",
  },
  {
    question: "Are your techs insured?",
    answer: "Yes, all are fully insured.",
  },
  {
    question: "Can I also book fridge repair in Ottawa?",
    answer: (
      <span>
        Yes, we cover all Ottawa neighbourhoods. Book{" "}
        <Link
          href="/fridge-repair"
          className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
        >
          fridge repair in Ottawa
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
    name: "Cardinal Glen Appliance Repair",
    href: "/service-areas/vanier/cardinal-glen",
  },
];

const additionalAreas = [
  "Cummings",
  "North River Road",
  "McArthur",
  "Eastview",
  "St. Laurent Boulevard",
  "Donald Street",
  "Queen Mary Street",
  "Vanier Parkway",
];

export default function BeechwoodVillageServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Beechwood Village Appliance Repair – Trusted Local Service
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Need appliance repair in Beechwood Village? We fix all major appliances quickly, backed by a 90-day warranty. Learn more via our{" "}
            <Link
              href="/service-areas/vanier"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Vanier appliance repair
            </Link>{" "}
            page, covering Overbrook and Cardinal Glen.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Appliances We Repair in Beechwood Village
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
            See everything we provide via{" "}
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
            Why Beechwood Village Residents Rely on Us
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
            Explore Beechwood Village While We Fix
          </h2>
          <p className="text-gray-700">
            While we fix your appliance, explore Beechwood Village:
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
            See what's happening this week:{" "}
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
            FAQs for Beechwood Village Appliance Repair
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
            Call 613-413-6969 or write to service@fixerappliancerepair.ca
          </h2>
          <p className="mt-4 text-sm text-gray-200">
            to schedule Beechwood Village appliance repair.
          </p>
        </section>
      </div>
    </div>
  );
}

