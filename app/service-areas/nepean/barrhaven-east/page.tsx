import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Barrhaven East Appliance Repair – Experienced Techs | Fixer",
  description:
    "Reliable appliance repair in Barrhaven East. Washers, dryers, ovens, fridges & more. Professional insured service with 90-day warranty.",
};

const services = [
  {
    name: "Washer Repair Ottawa",
    description: "Keep laundry day running smoothly.",
    href: "/washer-repair",
  },
  {
    name: "Dryer Repair Ottawa",
    description: "Restore fast, efficient drying.",
    href: "/dryer-repair",
  },
  {
    name: "Dishwasher Repair Ottawa",
    description: "Sparkling dishes without rewashing.",
    href: "/dishwasher-repair",
  },
  {
    name: "Oven Repair Ottawa",
    description: "Consistent heat for perfect meals.",
    href: "/oven-repair",
  },
  {
    name: "Cooktop Repair Ottawa",
    description: "Even heat on every burner.",
    href: "/cooktop-repair",
  },
  {
    name: "Microwave Repair Ottawa",
    description: "Safe reheating minus the sparks.",
    href: "/microwave-repair",
  },
  {
    name: "Fridge Repair Ottawa",
    description: "Keep groceries chilled and fresh.",
    href: "/fridge-repair",
  },
  {
    name: "Freezer Repair Ottawa",
    description: "Dependable long-term cold storage.",
    href: "/freezer-repair",
  },
];

const reasons = [
  "Every repair is covered by our 90-day warranty.",
  "Insured, approachable staff.",
  "Nepean-based technicians close to you.",
  "Same-day service slots available.",
];

const attractions = [
  "Chapman Mills Marketplace for shopping and dining.",
  "Water Dragon Park — family-friendly with play areas.",
  "Local community centres with seasonal activities.",
];

const faqs = [
  {
    question: "Do you provide same-day repair in Barrhaven East?",
    answer: (
      <span>
        Yes, when scheduling allows — call early in the day and we’ll confirm
        availability.
      </span>
    ),
  },
  {
    question: "Do you repair ovens and cooktops?",
    answer: (
      <span>
        Absolutely — we service all major cooking appliances, including wall
        ovens and ranges.
      </span>
    ),
  },
  {
    question: "Are your technicians insured?",
    answer: (
      <span>
        Yes, our staff is fully insured so you’re protected at every visit.
      </span>
    ),
  },
  {
    question: "Can you also provide washer repair in Ottawa outside Barrhaven East?",
    answer: (
      <span>
        Yes, we cover all of Nepean and Ottawa. Book{" "}
        <Link
          href="/washer-repair"
          className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
        >
          washer repair in Ottawa
        </Link>{" "}
        whenever you need it.
      </span>
    ),
  },
];

const otherNeighbourhoods = [
  {
    name: "Centrepointe Appliance Repair",
    href: "/service-areas/nepean/centrepointe",
  },
  {
    name: "Merivale Gardens Appliance Repair",
    href: "/service-areas/nepean/merivale-gardens",
  },
];

const additionalAreas = [
  "Craig Henry",
  "Tanglewood",
  "Skyline",
  "Manordale",
  "Knoxdale",
  "Leslie Park",
  "Borden Farm",
  "Fisher Glen",
];

export default function BarrhavenEastServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Barrhaven East Appliance Repair You Can Trust
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Appliance repair in Barrhaven East done by insured local techs. We fix all major
            appliances with a 90-day warranty. Visit our{" "}
            <Link
              href="/service-areas/nepean"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Nepean appliance repair
            </Link>{" "}
            page, also covering Centrepointe and Merivale Gardens.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Appliances We Repair in Barrhaven East
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
              href="/appliance-installation/nepean"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Appliance Installation Nepean
            </Link>{" "}
            keeps new appliances hooked up safely. Find more repair options at{" "}
            <Link
              href="/service-areas/nepean"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Nepean appliance repair
            </Link>
            .
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Why Choose Us in Barrhaven East
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
            Explore Barrhaven East While We Fix
          </h2>
          <p className="text-gray-700">
            While your appliance is being repaired, explore Barrhaven East:
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
            FAQs for Barrhaven East Appliance Repair
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
            Other Nepean Neighbourhoods We Serve
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
            Get Reliable Appliance Repair in Barrhaven East
          </h2>
          <p className="mt-4 text-sm text-gray-200">
            Call 613-413-6969 or contact{" "}
            <a
              href="mailto:service@fixerappliancerepair.ca"
              className="font-semibold text-white underline decoration-2 underline-offset-4"
            >
              service@fixerappliancerepair.ca
            </a>{" "}
            today.
          </p>
        </section>
      </div>
    </div>
  );
}


