import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Longfields Appliance Repair – Call 613-413-6969 | Fixer",
  description:
    "Fast appliance repair in Longfields. Washers, dryers, fridges, ovens & more. Insured local techs, professional service, 90-day warranty.",
};

const services = [
  {
    name: "Washer Repair Ottawa",
    description: "Keep laundry cycles running smoothly.",
    href: "/washer-repair",
  },
  {
    name: "Dryer Repair Ottawa",
    description: "Efficient drying without delays.",
    href: "/dryer-repair",
  },
  {
    name: "Dishwasher Repair Ottawa",
    description: "Spotless dishes every cycle.",
    href: "/dishwasher-repair",
  },
  {
    name: "Oven Repair Ottawa",
    description: "Even heat for perfect meals.",
    href: "/oven-repair",
  },
  {
    name: "Cooktop Repair Ottawa",
    description: "Responsive burners with steady control.",
    href: "/cooktop-repair",
  },
  {
    name: "Microwave Repair Ottawa",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair",
  },
  {
    name: "Fridge Repair Ottawa",
    description: "Keep groceries fresh and cool.",
    href: "/fridge-repair",
  },
  {
    name: "Freezer Repair Ottawa",
    description: "Dependable cold storage.",
    href: "/freezer-repair",
  },
];

const reasons = [
  "Reliable 90-day warranty.",
  "Insured, approachable service staff.",
  "Local Barrhaven pros.",
  "Fast response, same-day options.",
];

const attractions = [
  "Ken Ross Park.",
  "Local schools and sports facilities.",
  "Shops and cafés at Strandherd Drive.",
];

const faqs = [
  {
    question: "Do you work in Longfields regularly?",
    answer: <span>Yes, our techs are in Barrhaven every week.</span>,
  },
  {
    question: "Do you repair microwaves?",
    answer: <span>Yes, microwave repairs are available.</span>,
  },
  {
    question: "Are your technicians insured?",
    answer: <span>Yes, all staff is fully insured.</span>,
  },
  {
    question: "If I need oven repair in Ottawa, can I book that too?",
    answer: (
      <span>
        Absolutely — we cover all of Ottawa. Book{" "}
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
    name: "Chapman Mills Appliance Repair",
    href: "/service-areas/barrhaven/chapman-mills",
  },
  {
    name: "Stonebridge Appliance Repair",
    href: "/service-areas/barrhaven/stonebridge",
  },
];

const additionalAreas = [
  "Strandherd Meadows",
  "Half Moon Bay",
  "Old Barrhaven",
  "Jockvale",
  "Davidson Heights",
  "Cedarhill Estates",
  "Hearts Desire",
  "Havenlea",
];

export default function LongfieldsServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Longfields Appliance Repair – Fast, Friendly Service
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Looking for appliance repair in Longfields? Our insured team delivers
            same-day service when available. See our{" "}
            <Link
              href="/service-areas/barrhaven"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Barrhaven appliance repair
            </Link>{" "}
            hub, also serving Stonebridge and Chapman Mills.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Appliances We Repair in Longfields
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
              Installation Services
            </Link>{" "}
            — see all our repair options through{" "}
            <Link
              href="/service-areas/barrhaven"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Barrhaven appliance repair
            </Link>
            .
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Why Longfields Calls Fixer
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
            Explore Longfields While We Fix
          </h2>
          <p className="text-gray-700">
            While your appliance is being repaired, check out Longfields:
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
            See events in the area:{" "}
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
            FAQs for Longfields Appliance Repair
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
            Other Barrhaven Neighbourhoods We Serve
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
            Need appliance repair in Longfields? Call 613-413-6969 or email{" "}
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

