import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Huntley Appliance Repair – Call 613-413-6969 | Fixer",
  description:
    "Reliable appliance repair in Huntley. Washers, dryers, ovens, fridges & more. Local insured team with same-day service available.",
};

const services = [
  {
    name: "Washer Repair Ottawa",
    description: "Keep wash cycles running smoothly.",
    href: "/washer-repair",
  },
  {
    name: "Dryer Repair Ottawa",
    description: "Restore fast drying without noise.",
    href: "/dryer-repair",
  },
  {
    name: "Dishwasher Repair Ottawa",
    description: "Dishes that sparkle after every load.",
    href: "/dishwasher-repair",
  },
  {
    name: "Oven Repair Ottawa",
    description: "Even temperatures for baking and roasting.",
    href: "/oven-repair",
  },
  {
    name: "Cooktop Repair Ottawa",
    description: "Consistent heat from every element.",
    href: "/cooktop-repair",
  },
  {
    name: "Microwave Repair Ottawa",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair",
  },
  {
    name: "Fridge Repair Ottawa",
    description: "Keep food fresh and ready to serve.",
    href: "/fridge-repair",
  },
  {
    name: "Freezer Repair Ottawa",
    description: "Dependable deep-freeze performance.",
    href: "/freezer-repair",
  },
];

const reasons = [
  "90-day guarantee on every repair.",
  "Insured, friendly staff who care.",
  "Based in Kanata, serving Huntley quickly.",
  "Ask about same-day time slots.",
];

const attractions = [
  "Peaceful farmland drives and scenic rural views.",
  "Local community halls with seasonal events.",
  "Small cafés and roadside markets.",
];

const faqs = [
  {
    question: "How far in advance should I book a repair in Huntley?",
    answer: (
      <span>
        Same-week appointments are usually available — and sometimes even
        same-day when you call early.
      </span>
    ),
  },
  {
    question: "Do you carry parts for older appliances?",
    answer: (
      <span>
        Yes, our vans stock many common parts. We can source specialty items
        quickly when needed.
      </span>
    ),
  },
  {
    question: "Is there a service warranty?",
    answer: (
      <span>
        Absolutely — every repair is protected with our 90-day guarantee for
        peace of mind.
      </span>
    ),
  },
  {
    question: "Can I request washer repair in Ottawa for relatives outside Huntley?",
    answer: (
      <span>
        Yes, we serve Kanata, Ottawa, and surrounding towns. Book{" "}
        <Link
          href="/washer-repair"
          className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
        >
          washer repair in Ottawa
        </Link>{" "}
        any time they need help.
      </span>
    ),
  },
];

const otherNeighbourhoods = [
  {
    name: "Village of Carp Appliance Repair",
    href: "/service-areas/carp/village-of-carp",
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
  "Crown Point",
  "Constance Bay",
  "Marathon Village",
];

export default function HuntleyServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Huntley Appliance Repair – Trusted Local Experts
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Looking for appliance repair in Huntley? Our insured team offers same-day
            service in many cases, backed by a 90-day warranty. Discover more on our{" "}
            <Link
              href="/service-areas/carp"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Carp appliance repair
            </Link>{" "}
            page, covering Village of Carp and Corkery.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Appliances We Repair in Huntley
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
            keeps new appliances connected safely. Explore our full service list through{" "}
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
            Why Huntley Residents Call Us
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
            Explore Huntley While We Fix
          </h2>
          <p className="text-gray-700">
            While your appliance is being fixed, discover Huntley:
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
            Check what’s on nearby:{" "}
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
            FAQs for Huntley Appliance Repair
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
            Book Your Huntley Appliance Repair
          </h2>
          <p className="mt-4 text-sm text-gray-200">
            Phone 613-413-6969 or send a message to{" "}
            <a
              href="mailto:service@fixerappliancerepair.ca"
              className="font-semibold text-white underline decoration-2 underline-offset-4"
            >
              service@fixerappliancerepair.ca
            </a>{" "}
            to schedule your service.
          </p>
        </section>
      </div>
    </div>
  );
}


