import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Kanata Lakes Appliance Repair – Professional Technicians | Fixer – Washer, Dryer, Fridge, Dishwasher",
  description:
    "Appliance repair in Kanata Lakes. Washers, dryers, fridges & ovens fixed quickly. Book now at 613-413-6969 – friendly local team, 90-day guarantee.",
};

const services = [
  {
    name: "Washer Repair Ottawa",
    description: "Smooth cycles without setbacks.",
    href: "/washer-repair",
  },
  {
    name: "Dryer Repair Ottawa",
    description: "Quiet, efficient drying sessions.",
    href: "/dryer-repair",
  },
  {
    name: "Dishwasher Repair Ottawa",
    description: "Crystal-clear dishes every time.",
    href: "/dishwasher-repair",
  },
  {
    name: "Oven Repair Ottawa",
    description: "Even heat for reliable meals.",
    href: "/oven-repair",
  },
  {
    name: "Cooktop Repair Ottawa",
    description: "Consistent heat on every burner.",
    href: "/cooktop-repair",
  },
  {
    name: "Microwave Repair Ottawa",
    description: "Safe, speedy reheating.",
    href: "/microwave-repair",
  },
  {
    name: "Fridge Repair Ottawa",
    description: "Protect your fresh ingredients.",
    href: "/fridge-repair",
  },
  {
    name: "Freezer Repair Ottawa",
    description: "Dependable cold storage.",
    href: "/freezer-repair",
  },
];

const reasons = [
  "90-day protection on all completed repairs.",
  "Helpful, fully insured service team.",
  "Local Kanata pros ready to assist quickly.",
  "Many repairs handled with same-day service.",
];

const attractions = [
  "Kanata Centrum Shopping Centre.",
  "Beaver Pond walking trails.",
  "Kanata Golf & Country Club.",
];

const faqs = [
  {
    question: "Can I get an evening appointment in Kanata Lakes?",
    answer: (
      <span>
        Yes, evening slots are sometimes available — call to check and we’ll do
        our best to accommodate.
      </span>
    ),
  },
  {
    question: "Do you service built-in appliances?",
    answer: (
      <span>
        Yes, we work on both freestanding and built-in units, including wall
        ovens and built-in fridges.
      </span>
    ),
  },
  {
    question: "Do you provide a written warranty?",
    answer: (
      <span>
        Absolutely — all repairs include a 90-day warranty for peace of mind.
      </span>
    ),
  },
  {
    question:
      "If I need fridge repair in Ottawa, do you travel outside Kanata Lakes?",
    answer: (
      <span>
        Absolutely — we cover all of Kanata and Ottawa. Book{" "}
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
    name: "Morgan's Grant Appliance Repair",
    href: "/service-areas/kanata/morgans-grant",
  },
  {
    name: "Beaverbrook Appliance Repair",
    href: "/service-areas/kanata/beaverbrook",
  },
  {
    name: "Katimavik-Hazeldean Appliance Repair",
    href: "/service-areas/kanata/katimavik-hazeldean",
  },
  {
    name: "Glen Cairn Appliance Repair",
    href: "/service-areas/kanata/glen-cairn",
  },
  {
    name: "Bridlewood Appliance Repair",
    href: "/service-areas/kanata/bridlewood",
  },
];

const additionalAreas = [
  "Shirley’s Brook Appliance Repair",
  "Kanata West",
  "Emerald Meadows",
  "Marchwood",
  "South March",
];

export default function KanataLakesServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Kanata Lakes Appliance Repair – Fast & Friendly
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Need quick appliance repair in Kanata Lakes? Our insured team delivers fast,
            professional service with a 90-day warranty. Part of our{" "}
            <Link
              href="/service-areas/kanata"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Kanata appliance repair
            </Link>{" "}
            service, covering Bridlewood and Morgan’s Grant too.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Appliances We Repair in Kanata Lakes
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
                <span className="text-sm text-gray-700">
                  {service.description}
                </span>
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
              href="/appliance-installation/kanata"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Appliance Installation Kanata
            </Link>{" "}
            keeps new appliances operating perfectly. See the complete range of services at{" "}
            <Link
              href="/service-areas/kanata"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Kanata appliance repair
            </Link>
            .
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Why Homeowners in Kanata Lakes Recommend Us
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
            Explore Kanata Lakes While We Fix
          </h2>
          <p className="text-gray-700">
            While your appliance is being repaired, discover Kanata Lakes:
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
            See what’s happening now:{" "}
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
            FAQs for Kanata Lakes Appliance Repair
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
            Other Kanata Neighbourhoods We Serve
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
            For fast, local help in Kanata Lakes
          </h2>
          <p className="mt-4 text-sm text-gray-200">
            Reach us at 613-413-6969 or{" "}
            <a
              href="mailto:service@fixerappliancerepair.ca"
              className="font-semibold text-white underline decoration-2 underline-offset-4"
            >
              service@fixerappliancerepair.ca
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}


