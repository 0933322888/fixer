import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Bridlewood Appliance Repair – Call 613-413-6969 | Fixer – Washer, Dryer, Oven, Fridge",
  description:
    "Trusted appliance repair in Bridlewood. Washers, dryers, fridges, ovens & more. Call 613-413-6969 today – insured technicians, 90-day service warranty.",
};

const services = [
  {
    name: "Washer Repair Ottawa",
    description: "Smooth cycles without surprise stops.",
    href: "/washer-repair",
  },
  {
    name: "Dryer Repair Ottawa",
    description: "Fast, even drying every load.",
    href: "/dryer-repair",
  },
  {
    name: "Dishwasher Repair Ottawa",
    description: "Dishes that shine after each cycle.",
    href: "/dishwasher-repair",
  },
  {
    name: "Oven Repair Ottawa",
    description: "Reliable temperatures for perfect meals.",
    href: "/oven-repair",
  },
  {
    name: "Cooktop Repair Ottawa",
    description: "Smooth, responsive heat control.",
    href: "/cooktop-repair",
  },
  {
    name: "Microwave Repair Ottawa",
    description: "Safe reheating minus the sparks.",
    href: "/microwave-repair",
  },
  {
    name: "Fridge Repair Ottawa",
    description: "Keep food fresh and safe.",
    href: "/fridge-repair",
  },
  {
    name: "Freezer Repair Ottawa",
    description: "Dependable long-term cold storage.",
    href: "/freezer-repair",
  },
];

const reasons = [
  "Guaranteed repairs with a 90-day warranty.",
  "Safe, insured, and customer-friendly team.",
  "Kanata-based techs just around the corner.",
  "Same-day scheduling available most days.",
];

const attractions = [
  "Eva James Memorial Community Centre.",
  "Bridlewood Trails and nearby parks.",
  "Shopping plazas around Eagleson Road.",
];

const faqs = [
  {
    question: "Do you handle weekend appointments in Bridlewood?",
    answer: (
      <span>
        Sometimes — availability depends on the schedule. Call us to check and
        we’ll do our best to accommodate.
      </span>
    ),
  },
  {
    question: "What kinds of appliances do you repair most often?",
    answer: (
      <span>
        Washers, dryers, dishwashers, fridges, and ovens are the most common —
        but we service the full list of major appliances.
      </span>
    ),
  },
  {
    question: "Are your technicians local to Kanata?",
    answer: (
      <span>
        Yes, our team is Kanata-based, serving Bridlewood every week.
      </span>
    ),
  },
  {
    question: "Do you also offer dishwasher repair in Ottawa if needed?",
    answer: (
      <span>
        Yes, we cover the entire city. Book{" "}
        <Link
          href="/dishwasher-repair"
          className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
        >
          dishwasher repair in Ottawa
        </Link>{" "}
        whenever you need us.
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
    name: "Kanata Lakes Appliance Repair",
    href: "/service-areas/kanata/kanata-lakes",
  },
];

const additionalAreas = [
  "Shirley’s Brook Appliance Repair",
  "South March",
  "Marchwood",
  "Emerald Meadows",
  "Kanata West",
];

export default function BridlewoodServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Bridlewood Appliance Repair for Local Homes
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Reliable appliance repair in Bridlewood, Kanata. Our local techs bring tools
            and common parts to fix it right the first time. Learn more through our{" "}
            <Link
              href="/service-areas/kanata"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Kanata appliance repair
            </Link>{" "}
            page, also serving Kanata Lakes and Glen Cairn.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Appliances We Repair in Bridlewood
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
            keeps new appliances running smoothly. Learn more about our work in{" "}
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
            Why Bridlewood Chooses Us
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
            Explore Bridlewood While We Fix
          </h2>
          <p className="text-gray-700">
            While we handle your repair, explore Bridlewood:
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
            See what’s on this week:{" "}
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
            FAQs for Bridlewood Appliance Repair
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
            Same-day slots may be available
          </h2>
          <p className="mt-4 text-sm text-gray-200">
            Book your Bridlewood appliance repair at 613-413-6969 or{" "}
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


