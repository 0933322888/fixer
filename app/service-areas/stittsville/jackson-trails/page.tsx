import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jackson Trails Appliance Repair – Reliable Service | Fixer",
  description:
    "Appliance repair in Jackson Trails. Washers, dryers, ovens, dishwashers & more. Same-day appointments, local team, 90-day warranty.",
};

const services = [
  {
    name: "Washer Repair Ottawa",
    description: "Smooth cycles without interruptions.",
    href: "/washer-repair",
  },
  {
    name: "Dryer Repair Ottawa",
    description: "Faster drying with less noise.",
    href: "/dryer-repair",
  },
  {
    name: "Dishwasher Repair Ottawa",
    description: "Spotless dishes every run.",
    href: "/dishwasher-repair",
  },
  {
    name: "Oven Repair Ottawa",
    description: "Even baking and roasting.",
    href: "/oven-repair",
  },
  {
    name: "Cooktop Repair Ottawa",
    description: "Responsive heat across every burner.",
    href: "/cooktop-repair",
  },
  {
    name: "Microwave Repair Ottawa",
    description: "Safe, quick reheating.",
    href: "/microwave-repair",
  },
  {
    name: "Fridge Repair Ottawa",
    description: "Keep groceries fresh and ready.",
    href: "/fridge-repair",
  },
  {
    name: "Freezer Repair Ottawa",
    description: "Dependable cold storage.",
    href: "/freezer-repair",
  },
];

const reasons = [
  "Guaranteed 90-day coverage for peace of mind.",
  "Courteous, insured repair professionals.",
  "Stittsville-based techs near your home.",
  "Same-day service when possible.",
];

const attractions = [
  "Parks and playgrounds woven into quiet residential streets.",
  "Quick access to Trans Canada Trail for biking and walks.",
  "Local family-friendly cafés and shops.",
];

const faqs = [
  {
    question: "How soon can you come to Jackson Trails?",
    answer: (
      <span>
        Often within a day — and same-day service is sometimes possible when you
        call early.
      </span>
    ),
  },
  {
    question: "Do you bring spare parts with you?",
    answer: (
      <span>
        Yes, we carry common parts on the truck and can order specialty items
        quickly if needed.
      </span>
    ),
  },
  {
    question: "Do you install appliances as well as repair them?",
    answer: (
      <span>
        Yes, installation is part of our services. Learn more through{" "}
        <Link
          href="/appliance-installation/stittsville"
          className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
        >
          Appliance Installation Stittsville
        </Link>
        .
      </span>
    ),
  },
  {
    question: "Can I also schedule dryer repair in Ottawa for my parents?",
    answer: (
      <span>
        Absolutely — our team serves the entire Ottawa region. Book{" "}
        <Link
          href="/dryer-repair"
          className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
        >
          dryer repair in Ottawa
        </Link>{" "}
        whenever they need help.
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
    name: "Bryanston Gate Appliance Repair",
    href: "/service-areas/stittsville/bryanston-gate",
  },
];

const additionalAreas = [
  "Timbermere",
  "Poole Creek",
  "Amberway",
  "Fernbank Crossing",
  "Fairwinds",
  "West Ridge",
  "Edenwylde",
  "Westwind Farms",
];

export default function JacksonTrailsServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Jackson Trails Appliance Repair – Reliable Local Service
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Appliance repair in Jackson Trails made simple. Our local team delivers
            dependable service, often same-day. See our{" "}
            <Link
              href="/service-areas/stittsville"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Stittsville appliance repair
            </Link>{" "}
            page, also serving Crossing Bridge and Bryanston Gate.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Appliances We Repair in Jackson Trails
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
            keeps new appliances ready for use. Learn more about our work in{" "}
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
            Why Jackson Trails Residents Trust Us
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
            Explore Jackson Trails While We Fix
          </h2>
          <p className="text-gray-700">
            While your appliance is being repaired, check out Jackson Trails:
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
            See current events here:{" "}
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
            FAQs for Jackson Trails Appliance Repair
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
            Need local help?
          </h2>
          <p className="mt-4 text-sm text-gray-200">
            613-413-6969 or{" "}
            <a
              href="mailto:service@fixerappliancerepair.ca"
              className="font-semibold text-white underline decoration-2 underline-offset-4"
            >
              service@fixerappliancerepair.ca
            </a>{" "}
            — book your Jackson Trails appliance repair now.
          </p>
        </section>
      </div>
    </div>
  );
}


