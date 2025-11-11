import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bryanston Gate Appliance Repair – Call 613-413-6969 | Fixer",
  description:
    "Need appliance repair in Bryanston Gate? We fix washers, dryers, fridges, ovens & more. Insured techs, same-day availability, 90-day warranty.",
};

const services = [
  {
    name: "Washer Repair Ottawa",
    description: "Reliable cycles without mid-load surprises.",
    href: "/washer-repair",
  },
  {
    name: "Dryer Repair Ottawa",
    description: "Even, efficient drying every time.",
    href: "/dryer-repair",
  },
  {
    name: "Dishwasher Repair Ottawa",
    description: "Glasses and dishes that shine.",
    href: "/dishwasher-repair",
  },
  {
    name: "Oven Repair Ottawa",
    description: "Consistent heat for perfect meals.",
    href: "/oven-repair",
  },
  {
    name: "Cooktop Repair Ottawa",
    description: "Smooth temperature control on every burner.",
    href: "/cooktop-repair",
  },
  {
    name: "Microwave Repair Ottawa",
    description: "Safe reheating without sparks.",
    href: "/microwave-repair",
  },
  {
    name: "Fridge Repair Ottawa",
    description: "Keep food cold and fresh.",
    href: "/fridge-repair",
  },
  {
    name: "Freezer Repair Ottawa",
    description: "Dependable deep-freeze storage.",
    href: "/freezer-repair",
  },
];

const reasons = [
  "Reliable 90-day warranty included.",
  "Friendly, fully insured team.",
  "Local Stittsville technicians who know the area.",
  "Fast response with same-day availability.",
];

const attractions = [
  "Stittsville Main Street shops and dining.",
  "Local playgrounds and green spaces.",
  "Nearby access to community sports fields.",
];

const faqs = [
  {
    question: "Do you handle small appliance repairs?",
    answer: (
      <span>
        We focus on large home appliances like washers, dryers, fridges, ovens,
        cooktops, and dishwashers.
      </span>
    ),
  },
  {
    question: "What’s the cost of a diagnostic in Bryanston Gate?",
    answer: (
      <span>
        Diagnostics are a flat fee, and we apply it toward the repair if you
        choose to proceed.
      </span>
    ),
  },
  {
    question: "Do you offer a warranty on parts and labour?",
    answer: (
      <span>
        Yes, every repair comes with a 90-day warranty that covers labour and
        installed parts.
      </span>
    ),
  },
  {
    question: "If I need fridge repair in Ottawa, can I book that here?",
    answer: (
      <span>
        Absolutely — our Ottawa-wide service covers all major appliances. Book{" "}
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
    name: "Crossing Bridge Appliance Repair",
    href: "/service-areas/stittsville/crossing-bridge",
  },
  {
    name: "Jackson Trails Appliance Repair",
    href: "/service-areas/stittsville/jackson-trails",
  },
];

const additionalAreas = [
  "Poole Creek",
  "Timbermere",
  "Amberway",
  "West Ridge",
  "Fairwinds",
  "Edenwylde",
  "Westwind Farms",
  "Fernbank Crossing",
];

export default function BryanstonGateServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Bryanston Gate Appliance Repair – Fast & Friendly
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Need appliance repair in Bryanston Gate? Our insured team fixes it right the
            first time with a 90-day guarantee. Check our{" "}
            <Link
              href="/service-areas/stittsville"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Stittsville appliance repair
            </Link>{" "}
            hub, also serving Jackson Trails and Crossing Bridge.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Appliances We Repair in Bryanston Gate
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
              href="/appliance-installation/stittsville"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Appliance Installation Stittsville
            </Link>{" "}
            keeps new appliances ready to go. See all our services through{" "}
            <Link
              href="/service-areas/stittsville"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Stittsville appliance repair
            </Link>
            .
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Why Bryanston Gate Calls Fixer
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
            Explore Bryanston Gate While We Fix
          </h2>
          <p className="text-gray-700">
            While we fix your appliance, discover Bryanston Gate:
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
            See what’s on nearby:{" "}
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
            FAQs for Bryanston Gate Appliance Repair
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
            Other Stittsville Neighbourhoods We Serve
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
            Book your Bryanston Gate appliance repair today
          </h2>
          <p className="mt-4 text-sm text-gray-200">
            Phone 613-413-6969 or email{" "}
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


