import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Katimavik-Hazeldean Appliance Repair – Call 613-413-6969 | Fixer – Washer, Dryer, Oven, Fridge",
  description:
    "Appliance repair in Katimavik-Hazeldean. Washers, dryers, fridges, ovens & more. Call 613-413-6969 now for insured local service, 90-day warranty.",
};

const services = [
  {
    name: "Washer Repair Ottawa",
    description: "Smooth washes without mid-cycle stops.",
    href: "/washer-repair",
  },
  {
    name: "Dryer Repair Ottawa",
    description: "Efficient drying without the noise.",
    href: "/dryer-repair",
  },
  {
    name: "Dishwasher Repair Ottawa",
    description: "Sparkling dishes every run.",
    href: "/dishwasher-repair",
  },
  {
    name: "Oven Repair Ottawa",
    description: "Even baking and roasting.",
    href: "/oven-repair",
  },
  {
    name: "Cooktop Repair Ottawa",
    description: "Responsive burners with precise heat.",
    href: "/cooktop-repair",
  },
  {
    name: "Microwave Repair Ottawa",
    description: "Safe, quick reheating.",
    href: "/microwave-repair",
  },
  {
    name: "Fridge Repair Ottawa",
    description: "Consistent cooling throughout.",
    href: "/fridge-repair",
  },
  {
    name: "Freezer Repair Ottawa",
    description: "Reliable deep-freeze capacity.",
    href: "/freezer-repair",
  },
];

const reasons = [
  "Reliable 90-day coverage on all repairs.",
  "Courteous, insured professionals.",
  "Local Kanata technicians who live nearby.",
  "Fast response — same-day visits possible.",
];

const attractions = [
  "Walter Baker Park — a local favourite for sports and picnics.",
  "Kanata Leisure Centre & Wave Pool.",
  "Shops and dining spots along Hazeldean Road.",
];

const faqs = [
  {
    question: "Is same-day repair possible in Katimavik-Hazeldean?",
    answer: (
      <span>
        Yes, depending on scheduling — call to check availability and we’ll do
        our best to fit you in.
      </span>
    ),
  },
  {
    question: "Do you repair dishwashers and cooktops too?",
    answer: (
      <span>
        Absolutely, we handle all major home appliances across kitchens and
        laundry rooms.
      </span>
    ),
  },
  {
    question: "Are your technicians insured?",
    answer: (
      <span>
        Yes, our whole team is fully insured for your peace of mind.
      </span>
    ),
  },
  {
    question:
      "Do you cover nearby areas like dryer repair in Ottawa?",
    answer: (
      <span>
        Yes, we serve all of Ottawa, not just Katimavik-Hazeldean. Book{" "}
        <Link
          href="/dryer-repair"
          className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
        >
          dryer repair in Ottawa
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
    name: "Glen Cairn Appliance Repair",
    href: "/service-areas/kanata/glen-cairn",
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
  "Emerald Meadows",
  "Kanata West",
  "Marchwood",
  "South March",
];

export default function KatimavikHazeldeanServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Katimavik-Hazeldean Appliance Repair That Lasts
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Appliance repair in Katimavik-Hazeldean made simple. Our friendly, insured
            team provides dependable service with a 90-day warranty. Explore our{" "}
            <Link
              href="/service-areas/kanata"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Kanata appliance repair
            </Link>{" "}
            hub, also serving Bridlewood and Morgan’s Grant.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Appliances We Repair in Katimavik-Hazeldean
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
            keeps new units running right. Explore everything we provide across{" "}
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
          <h2 className="text-3xl font-semibold text-gray-900">Why Trust Us</h2>
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
            Explore Katimavik-Hazeldean While We Fix
          </h2>
          <p className="text-gray-700">
            While your appliance is in good hands, explore:
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
            See current activities:{" "}
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
            FAQs for Katimavik-Hazeldean Appliance Repair
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
            Don’t wait with a broken appliance
          </h2>
          <p className="mt-4 text-sm text-gray-200">
            Call 613-413-6969 or email{" "}
            <a
              href="mailto:service@fixerappliancerepair.ca"
              className="font-semibold text-white underline decoration-2 underline-offset-4"
            >
              service@fixerappliancerepair.ca
            </a>{" "}
            to schedule your Katimavik-Hazeldean repair.
          </p>
        </section>
      </div>
    </div>
  );
}


