import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Queenswood Heights Appliance Repair – Call 613-413-6969 | Fixer",
  description:
    "Appliance repair in Queenswood Heights. Washers, dryers, fridges, ovens & more. Fast service, insured techs, backed by a 90-day warranty.",
};

const services = [
  {
    name: "Washer Repair Ottawa",
    description: "Smooth cycles without leaks or noise.",
    href: "/washer-repair",
  },
  {
    name: "Dryer Repair Ottawa",
    description: "Efficient drying every load.",
    href: "/dryer-repair",
  },
  {
    name: "Dishwasher Repair Ottawa",
    description: "Spotless dishes without rewashes.",
    href: "/dishwasher-repair",
  },
  {
    name: "Oven Repair Ottawa",
    description: "Consistent heat for perfect meals.",
    href: "/oven-repair",
  },
  {
    name: "Cooktop Repair Ottawa",
    description: "Responsive burners with steady heat.",
    href: "/cooktop-repair",
  },
  {
    name: "Microwave Repair Ottawa",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair",
  },
  {
    name: "Fridge Repair Ottawa",
    description: "Keep food fresh and ready.",
    href: "/fridge-repair",
  },
  {
    name: "Freezer Repair Ottawa",
    description: "Dependable deep-freeze storage.",
    href: "/freezer-repair",
  },
];

const reasons = [
  "All repairs backed by 90-day coverage.",
  "Experienced, insured team.",
  "Orleans technicians who know your area.",
  "Same-day repairs offered whenever we can.",
];

const attractions = [
  "Queenswood Heights Park and trails.",
  "Bob MacQuarrie Recreation Complex.",
  "Local shops and dining along St. Joseph Boulevard.",
];

const faqs = [
  {
    question: "Do you come out to Queenswood Heights quickly?",
    answer: "Yes, same-day visits are often possible — call early to check current availability.",
    hasLink: false,
  },
  {
    question: "Do you fix leaking washers and dishwashers?",
    answer: "Absolutely — water leaks are one of the most common issues we repair in Orleans.",
    hasLink: false,
  },
  {
    question: "Do you guarantee the work?",
    answer: "Yes, every job is backed by a 90-day warranty covering labour and parts we install.",
    hasLink: false,
  },
  {
    question: "Can I book fridge repair in Ottawa outside Queenswood Heights?",
    answer: "Definitely — we serve the entire Ottawa region. Book",
    linkText: "fridge repair in Ottawa",
    linkHref: "/fridge-repair",
    answerSuffix: "whenever you need it.",
    hasLink: true,
  },
];

const otherNeighbourhoods = [
  {
    name: "Fallingbrook Appliance Repair",
    href: "/service-areas/orleans/fallingbrook",
  },
  {
    name: "Avalon Appliance Repair",
    href: "/service-areas/orleans/avalon",
  },
];

const additionalAreas = [
  "Chapel Hill",
  "Orleans Wood",
  "Chateauneuf",
  "Cumberland",
  "Cardinal Creek",
  "Navan",
  "Convent Glen",
  "Hiawatha Park",
];

export default function QueenswoodHeightsServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Queenswood Heights Appliance Repair – Fast & Trusted
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Appliance repair in Queenswood Heights with insured local service. Same-day
            appointments often available. Explore our{" "}
            <Link
              href="/service-areas/orleans"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Orleans appliance repair
            </Link>{" "}
            hub, covering Avalon and Fallingbrook.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Appliances We Repair in Queenswood Heights
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
            keeps new appliances running smoothly. See all our repair options through{" "}
            <Link
              href="/service-areas/orleans"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Orleans appliance repair
            </Link>
            .
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Why Trust Us in Queenswood Heights
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
            Explore Queenswood Heights While We Fix
          </h2>
          <p className="text-gray-700">
            While we handle your repair, discover Queenswood Heights:
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
            FAQs for Queenswood Heights Appliance Repair
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
                <p className="mt-2 text-sm text-gray-700">
                  {faq.answer}
                  {faq.hasLink && (
                    <>
                      {" "}
                      <Link
                        href={faq.linkHref!}
                        className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
                      >
                        {faq.linkText}
                      </Link>{" "}
                      {faq.answerSuffix}
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Other Orleans Neighbourhoods We Serve
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
            Need appliance help fast?
          </h2>
          <p className="mt-4 text-sm text-gray-200">
            Contact us at 613-413-6969 or{" "}
            <a
              href="mailto:service@fixerappliancerepair.ca"
              className="font-semibold text-white underline decoration-2 underline-offset-4"
            >
              service@fixerappliancerepair.ca
            </a>{" "}
            for Queenswood Heights repairs.
          </p>
        </section>
      </div>
    </div>
  );
}


