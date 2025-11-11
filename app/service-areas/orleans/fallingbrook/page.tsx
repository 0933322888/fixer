import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fallingbrook Appliance Repair – Call 613-413-6969 | Fixer",
  description:
    "Local appliance repair in Fallingbrook. Washers, dryers, fridges, ovens, dishwashers & more. Fast service with insured Ottawa techs.",
};

const services = [
  {
    name: "Washer Repair Ottawa",
    description: "Smooth cycles without unexpected stops.",
    href: "/washer-repair",
  },
  {
    name: "Dryer Repair Ottawa",
    description: "Faster drying, less waiting.",
    href: "/dryer-repair",
  },
  {
    name: "Dishwasher Repair Ottawa",
    description: "Spotless dishes every run.",
    href: "/dishwasher-repair",
  },
  {
    name: "Oven Repair Ottawa",
    description: "Even heat for consistent results.",
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
    description: "Keep groceries fresh and safe.",
    href: "/fridge-repair",
  },
  {
    name: "Freezer Repair Ottawa",
    description: "Dependable deep-freeze storage.",
    href: "/freezer-repair",
  },
];

const reasons = [
  "90-day warranty for every repair.",
  "Friendly, insured professionals.",
  "Orleans-based techs ready to assist.",
  "Same-day service available in many cases.",
];

const attractions = [
  "Fallingbrook Park — trails and playgrounds for families.",
  "École secondaire publique Louis-Riel sports dome nearby.",
  "Local cafés and shops along Innes Road.",
];

const faqs = [
  {
    question: "Do you handle same-day repairs in Fallingbrook?",
    answer: "Yes, often available when you call early in the day so we can secure a slot.",
    hasLink: false,
  },
  {
    question: "What brands do you repair most often?",
    answer: "LG, Samsung, Whirlpool, GE, Maytag, Frigidaire, and many more — we cover most major brands.",
    hasLink: false,
  },
  {
    question: "Do you offer a warranty?",
    answer: "Yes, every repair comes with a 90-day warranty on labour and installed parts.",
    hasLink: false,
  },
  {
    question: "Can I request washer repair in Ottawa even if I'm outside Fallingbrook?",
    answer: "Absolutely — our coverage extends across the Ottawa region. Book",
    linkText: "washer repair in Ottawa",
    linkHref: "/washer-repair",
    answerSuffix: "whenever you need it.",
    hasLink: true,
  },
];

const otherNeighbourhoods = [
  {
    name: "Avalon Appliance Repair",
    href: "/service-areas/orleans/avalon",
  },
  {
    name: "Queenswood Heights Appliance Repair",
    href: "/service-areas/orleans/queenswood-heights",
  },
];

const additionalAreas = [
  "Chapel Hill",
  "Convent Glen",
  "Orleans Wood",
  "Cardinal Creek",
  "Navan",
  "Cumberland",
  "Chateauneuf",
  "Hiawatha Park",
];

export default function FallingbrookServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Fallingbrook Appliance Repair – Done Right the First Time
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Trusted appliance repair in Fallingbrook, Orleans. We fix washers, dryers,
            ovens, fridges & more. Backed by a 90-day warranty. See our{" "}
            <Link
              href="/service-areas/orleans"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Orleans appliance repair
            </Link>{" "}
            page, also covering Avalon and Queenswood Heights.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Appliances We Repair in Fallingbrook
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
            keeps new units ready to go. Check our full services at{" "}
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
            Why Choose Us in Fallingbrook
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
            Explore Fallingbrook While We Fix
          </h2>
          <p className="text-gray-700">
            While we repair your appliance, explore Fallingbrook:
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
            FAQs for Fallingbrook Appliance Repair
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
            📞 Call 613-413-6969 or email{" "}
            <a
              href="mailto:service@fixerappliancerepair.ca"
              className="font-semibold text-white underline decoration-2 underline-offset-4"
            >
              service@fixerappliancerepair.ca
            </a>{" "}
            for trusted Fallingbrook appliance repair.
          </h2>
        </section>
      </div>
    </div>
  );
}

