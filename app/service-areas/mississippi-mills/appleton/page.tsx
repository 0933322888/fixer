import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Appleton Appliance Repair – Call 613-413-6969 | Fixer",
  description:
    "Local appliance repair in Appleton. Washers, dryers, fridges, ovens & more. Professional Ottawa techs, insured service, 90-day warranty.",
};

const services = [
  {
    name: "Washer Repair Ottawa",
    description: "Keep laundry cycles running smoothly.",
    href: "/washer-repair",
  },
  {
    name: "Dryer Repair Ottawa",
    description: "Restore fast, efficient drying.",
    href: "/dryer-repair",
  },
  {
    name: "Dishwasher Repair Ottawa",
    description: "Sparkling dishes without rewashing.",
    href: "/dishwasher-repair",
  },
  {
    name: "Oven Repair Ottawa",
    description: "Even heat for perfect meals.",
    href: "/oven-repair",
  },
  {
    name: "Cooktop Repair Ottawa",
    description: "Responsive burners across the board.",
    href: "/cooktop-repair",
  },
  {
    name: "Microwave Repair Ottawa",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair",
  },
  {
    name: "Fridge Repair Ottawa",
    description: "Keep groceries cold and fresh.",
    href: "/fridge-repair",
  },
  {
    name: "Freezer Repair Ottawa",
    description: "Dependable deep-freeze storage.",
    href: "/freezer-repair",
  },
];

const reasons = [
  "Repairs guaranteed with a 90-day warranty.",
  "Insured, customer-friendly staff.",
  "Local techs covering Appleton homes.",
  "Ask about same-day visits.",
];

const attractions = [
  "Appleton Park along the Mississippi River.",
  "Local historic buildings and quiet rural charm.",
  "Country roads perfect for a scenic drive.",
];

const faqs = [
  {
    question: "Do you serve rural Appleton homes?",
    answer: (
      <span>
        Yes, we cover both rural and town addresses throughout Appleton.
      </span>
    ),
  },
  {
    question: "Do you carry parts for fridges and washers?",
    answer: (
      <span>
        We stock many common parts on our trucks and can order specialty items
        quickly when needed.
      </span>
    ),
  },
  {
    question: "Do you repair microwaves too?",
    answer: <span>Yes, microwaves are included in our services.</span>,
  },
  {
    question: "If I need washer repair in Ottawa, do you do that too?",
    answer: (
      <span>
        Absolutely — Ottawa-wide service is available. Book{" "}
        <Link
          href="/washer-repair"
          className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
        >
          washer repair in Ottawa
        </Link>{" "}
        any time you need help.
      </span>
    ),
  },
];

const otherNeighbourhoods = [
  {
    name: "Almonte Appliance Repair",
    href: "/service-areas/mississippi-mills/almonte",
  },
  {
    name: "Blakeney Appliance Repair",
    href: "/service-areas/mississippi-mills/blakeney",
  },
];

const additionalAreas = [
  "Pakenham",
  "Ramsay",
  "Clayton",
  "Galbraith",
  "Rosetta",
  "Blakeney Rapids",
  "Cedar Hill",
  "Bennie’s Corners",
];

export default function AppletonServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Appleton Appliance Repair – Trusted Local Technicians
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Appliance repair in Appleton made easy. We fix all major appliances with
            insured service. Learn more on our{" "}
            <Link
              href="/service-areas/mississippi-mills"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Mississippi Mills appliance repair
            </Link>{" "}
            page, covering Almonte and Blakeney.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Appliances We Repair in Appleton
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
            keeps new appliances running properly. See everything we offer via{" "}
            <Link
              href="/service-areas/mississippi-mills"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Mississippi Mills appliance repair
            </Link>
            .
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Why Appleton Residents Rely on Us
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
            Explore Appleton While We Fix
          </h2>
          <p className="text-gray-700">
            While we handle your repair, enjoy Appleton:
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
            FAQs for Appleton Appliance Repair
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
            Other Mississippi Mills Neighbourhoods We Serve
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
            Book your Appleton repair service today — dial 613-413-6969 or contact{" "}
            <a
              href="mailto:service@fixerappliancerepair.ca"
              className="font-semibold text-white underline decoration-2 underline-offset-4"
            >
              service@fixerappliancerepair.ca
            </a>
            .
          </h2>
        </section>
      </div>
    </div>
  );
}
