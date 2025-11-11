import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carleton Place East Appliance Repair – Trusted Service | Fixer",
  description:
    "Dependable appliance repair in Carleton Place East. Washers, dryers, ovens, fridges & more. Professional team, insured repairs, 90-day warranty.",
};

const services = [
  {
    name: "Washer Repair Ottawa",
    description: "Keep laundry cycles running smoothly.",
    href: "/washer-repair",
  },
  {
    name: "Dryer Repair Ottawa",
    description: "Faster drying, less hassle.",
    href: "/dryer-repair",
  },
  {
    name: "Dishwasher Repair Ottawa",
    description: "Sparkling dishes without rewashing.",
    href: "/dishwasher-repair",
  },
  {
    name: "Oven Repair Ottawa",
    description: "Even temperatures for perfect meals.",
    href: "/oven-repair",
  },
  {
    name: "Cooktop Repair Ottawa",
    description: "Responsive burners every time.",
    href: "/cooktop-repair",
  },
  {
    name: "Microwave Repair Ottawa",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair",
  },
  {
    name: "Fridge Repair Ottawa",
    description: "Keep groceries fresh and safe.",
    href: "/fridge-repair",
  },
  {
    name: "Freezer Repair Ottawa",
    description: "Dependable cold storage.",
    href: "/freezer-repair",
  },
];

const reasons = [
  "Every repair comes with a 90-day warranty.",
  "Friendly, insured specialists.",
  "Local experts close to your home.",
  "Same-day service available.",
];

const attractions = [
  "Carleton Place and Beckwith Heritage Museum.",
  "Mississippi Riverwalk Trail.",
  "Downtown shopping and dining spots.",
];

const faqs = [
  {
    question: "Can I book same-day repair in Carleton Place East?",
    answer: (
      <span>
        Yes, in many cases we can accommodate same-day service — call early to
        check availability.
      </span>
    ),
  },
  {
    question: "Do you service ovens and cooktops?",
    answer: <span>Yes, we repair all major cooking appliances.</span>,
  },
  {
    question: "Do you guarantee the service?",
    answer: <span>Yes, every repair is backed by a 90-day warranty.</span>,
  },
  {
    question: "Can I schedule fridge repair in Ottawa?",
    answer: (
      <span>
        Definitely — we cover Ottawa and beyond. Book{" "}
        <Link
          href="/fridge-repair"
          className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
        >
          fridge repair in Ottawa
        </Link>{" "}
        whenever you need it.
      </span>
    ),
  },
];

const otherNeighbourhoods = [
  {
    name: "Carleton Place West Appliance Repair",
    href: "/service-areas/carleton-place/west",
  },
  {
    name: "Riverside Park Appliance Repair",
    href: "/service-areas/carleton-place/riverside-park",
  },
];

const additionalAreas = [
  "Caldwell Street",
  "High Street",
  "Lake Avenue",
  "Mississippi Quays",
  "Morphy Street",
  "Findlay Park",
  "Stonewater Bay",
  "McNeely Landing",
];

export default function CarletonPlaceEastServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Carleton Place East Appliance Repair – Reliable Experts
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Looking for appliance repair in Carleton Place East? Our local team provides
            friendly, insured service. Visit our{" "}
            <Link
              href="/service-areas/carleton-place"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Carleton Place appliance repair
            </Link>{" "}
            hub, covering West and Riverside Park.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Appliances We Repair in Carleton Place East
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
            keeps new appliances working perfectly. Explore all our services through{" "}
            <Link
              href="/service-areas/carleton-place"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Carleton Place appliance repair
            </Link>
            .
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Why Residents in Carleton Place East Trust Us
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
            Explore Carleton Place East While We Fix
          </h2>
          <p className="text-gray-700">
            While your appliance is being fixed, enjoy Carleton Place East:
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
            FAQs for Carleton Place East Appliance Repair
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
            Other Carleton Place Neighbourhoods We Serve
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
            Email{" "}
            <a
              href="mailto:service@fixerappliancerepair.ca"
              className="font-semibold text-white underline decoration-2 underline-offset-4"
            >
              service@fixerappliancerepair.ca
            </a>{" "}
            or phone 613-413-6969 to schedule your Carleton Place East appliance repair.
          </h2>
        </section>
      </div>
    </div>
  );
}
