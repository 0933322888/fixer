import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carp Appliance Repair – Professional Service | Fixer",
  description:
    "Professional appliance repair in Carp. We fix washers, dryers, fridges, ovens & dishwashers. Local team, insured service, 90-day warranty.",
};

const services = [
  {
    name: "Washer Repair Ottawa",
    description: "Reliable cycles without leaks.",
    href: "/washer-repair",
  },
  {
    name: "Dryer Repair Ottawa",
    description: "Fast drying with less noise.",
    href: "/dryer-repair",
  },
  {
    name: "Dishwasher Repair Ottawa",
    description: "Sparkling results every load.",
    href: "/dishwasher-repair",
  },
  {
    name: "Oven Repair Ottawa",
    description: "Even heat for perfect meals.",
    href: "/oven-repair",
  },
  {
    name: "Cooktop Repair Ottawa",
    description: "Consistent temperatures on every element.",
    href: "/cooktop-repair",
  },
  {
    name: "Microwave Repair Ottawa",
    description: "Safe reheating without surprises.",
    href: "/microwave-repair",
  },
  {
    name: "Fridge Repair Ottawa",
    description: "Keep groceries fresh and safe.",
    href: "/fridge-repair",
  },
  {
    name: "Freezer Repair Ottawa",
    description: "Dependable cold storage year-round.",
    href: "/freezer-repair",
  },
];

const reasons = [
  "All work backed by a 90-day warranty.",
  "Experienced, insured team members.",
  "Local technicians serving Carp and Kanata areas.",
  "Same-day availability in many cases.",
];

const attractions = [
  "Carp Farmers’ Market — one of Ontario’s best.",
  "Diefenbunker: Canada’s Cold War Museum.",
  "Carp Ridge EcoWellness Centre — nature trails and spa.",
];

const faqs = [
  {
    question: "Do you provide same-day repair in Carp?",
    answer: (
      <span>
        Yes, in many cases — especially if you call early in the day so we can
        secure a time slot.
      </span>
    ),
  },
  {
    question: "Can you install a new dishwasher or fridge for me?",
    answer: (
      <span>
        Absolutely. We handle repairs and installations (connected to existing
        water lines) via our{" "}
        <Link
          href="/appliance-installation/ottawa"
          className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
        >
          appliance installation service
        </Link>
        .
      </span>
    ),
  },
  {
    question: "Are your technicians insured?",
    answer: (
      <span>
        Yes, every Fixer technician who visits your home is fully insured for
        your peace of mind.
      </span>
    ),
  },
  {
    question: "If I need oven repair in Ottawa, do you travel outside Carp?",
    answer: (
      <span>
        Absolutely — we serve the whole Ottawa region. Book{" "}
        <Link
          href="/oven-repair"
          className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
        >
          oven repair in Ottawa
        </Link>{" "}
        whenever you need us.
      </span>
    ),
  },
];

const otherNeighbourhoods = [
  {
    name: "Huntley Appliance Repair",
    href: "/service-areas/carp/huntley",
  },
  {
    name: "Corkery Appliance Repair",
    href: "/service-areas/carp/corkery",
  },
];

const additionalAreas = [
  "Pakenham",
  "Fitzroy Harbour",
  "Galetta",
  "Dunrobin",
  "Kinburn",
  "Constance Bay",
  "Marathon Village",
  "Crown Point",
];

export default function VillageOfCarpServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Village of Carp Appliance Repair You Can Rely On
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Appliance repair in Carp homes and farms, done by local experts. We provide
            reliable service with a 90-day guarantee. See our{" "}
            <Link
              href="/service-areas/carp"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Carp appliance repair
            </Link>{" "}
            page, also serving Huntley and Corkery.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Appliances We Repair in the Village of Carp
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
              href="/appliance-installation/ottawa"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Appliance Installation Ottawa
            </Link>{" "}
            keeps new units running correctly. Check our full coverage at{" "}
            <Link
              href="/service-areas/carp"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Carp appliance repair
            </Link>
            .
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Why Choose Us in the Village of Carp
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
            Explore Carp While We Fix
          </h2>
          <p className="text-gray-700">
            While we repair your appliance, enjoy the Village of Carp:
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
            FAQs for Village of Carp Appliance Repair
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
            Other Carp Neighbourhoods We Serve
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
            Trusted repair is just a call away
          </h2>
          <p className="mt-4 text-sm text-gray-200">
            Dial 613-413-6969 or write to{" "}
            <a
              href="mailto:service@fixerappliancerepair.ca"
              className="font-semibold text-white underline decoration-2 underline-offset-4"
            >
              service@fixerappliancerepair.ca
            </a>{" "}
            for your Village of Carp repair.
          </p>
        </section>
      </div>
    </div>
  );
}


