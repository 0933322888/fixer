import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Glen Cairn Appliance Repair – Reliable Service | Fixer – Washer, Dryer, Fridge, Dishwasher",
  description:
    "Appliance repair in Glen Cairn, Kanata. We fix washers, dryers, fridges, ovens & dishwashers. Insured service, friendly local team, 90-day warranty.",
};

const services = [
  {
    name: "Washer Repair Ottawa",
    description: "Smooth operation from start to finish.",
    href: "/washer-repair",
  },
  {
    name: "Dryer Repair Ottawa",
    description: "Quiet, efficient drying cycles.",
    href: "/dryer-repair",
  },
  {
    name: "Dishwasher Repair Ottawa",
    description: "Sparkling dishes without streaks.",
    href: "/dishwasher-repair",
  },
  {
    name: "Oven Repair Ottawa",
    description: "Consistent heat for every bake.",
    href: "/oven-repair",
  },
  {
    name: "Cooktop Repair Ottawa",
    description: "Even heating and responsive controls.",
    href: "/cooktop-repair",
  },
  {
    name: "Microwave Repair Ottawa",
    description: "Safe reheating without surprises.",
    href: "/microwave-repair",
  },
  {
    name: "Fridge Repair Ottawa",
    description: "Keep produce crisp and dairy cool.",
    href: "/fridge-repair",
  },
  {
    name: "Freezer Repair Ottawa",
    description: "Steady freezing for long-term storage.",
    href: "/freezer-repair",
  },
];

const reasons = [
  "Solid 90-day warranty on every job.",
  "Insured and approachable specialists.",
  "Kanata locals who understand the community.",
  "Same-day service offered whenever we can.",
];

const attractions = [
  "Glen Cairn Community Centre.",
  "Local soccer fields and playgrounds.",
  "Shops and restaurants along Castlefrank Road.",
];

const faqs = [
  {
    question: "What’s the typical cost of a repair visit in Glen Cairn?",
    answer: (
      <span>
        Diagnostics are a flat fee, and repair costs depend on the required
        parts and labour. We’ll provide clear pricing before we start.
      </span>
    ),
  },
  {
    question: "Do you bring common replacement parts with you?",
    answer: (
      <span>
        Yes, our vans are stocked with the most requested appliance parts to
        finish repairs on the first visit.
      </span>
    ),
  },
  {
    question: "Do you offer a guarantee on service?",
    answer: (
      <span>
        Absolutely — every repair comes with a 90-day warranty for peace of
        mind.
      </span>
    ),
  },
  {
    question:
      "Can I also book oven repair in Ottawa for relatives outside Glen Cairn?",
    answer: (
      <span>
        Yes, we cover the entire Ottawa region. Book{" "}
        <Link
          href="/oven-repair"
          className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
        >
          oven repair in Ottawa
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
    name: "Bridlewood Appliance Repair",
    href: "/service-areas/kanata/bridlewood",
  },
  {
    name: "Kanata Lakes Appliance Repair",
    href: "/service-areas/kanata/kanata-lakes",
  },
];

const additionalAreas = [
  "Shirley’s Brook Appliance Repair",
  "South March",
  "Emerald Meadows",
  "Kanata West",
  "Marchwood",
];

export default function GlenCairnServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Glen Cairn Appliance Repair – Done Right the First Time
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Trusted appliance repair in Glen Cairn. We service washers, dryers, fridges,
            ovens and more, backed by a 90-day guarantee. Visit our{" "}
            <Link
              href="/service-areas/kanata"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Kanata appliance repair
            </Link>{" "}
            page, also covering Beaverbrook and Katimavik-Hazeldean.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Appliances We Repair in Glen Cairn
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
            keeps new appliances working perfectly. Find more repair options through{" "}
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
            What Sets Us Apart in Glen Cairn
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
            Explore Glen Cairn While We Fix
          </h2>
          <p className="text-gray-700">
            While we repair your appliance, take time to enjoy Glen Cairn:
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
            See nearby events:{" "}
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
            FAQs for Glen Cairn Appliance Repair
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
            Need appliance repair in Glen Cairn?
          </h2>
          <p className="mt-4 text-sm text-gray-200">
            📧 Email{" "}
            <a
              href="mailto:service@fixerappliancerepair.ca"
              className="font-semibold text-white underline decoration-2 underline-offset-4"
            >
              service@fixerappliancerepair.ca
            </a>{" "}
            or call 613-413-6969 now to arrange appliance repair in Glen Cairn.
          </p>
        </section>
      </div>
    </div>
  );
}


