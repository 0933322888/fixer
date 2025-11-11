import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Almonte Appliance Repair – Professional Technicians | Fixer",
  description:
    "Appliance repair in Almonte. Washers, dryers, fridges, ovens & more. Friendly insured team, local service, 90-day warranty included.",
};

const services = [
  {
    name: "Washer Repair Ottawa",
    description: "Keep laundry day running smoothly.",
    href: "/washer-repair",
  },
  {
    name: "Dryer Repair Ottawa",
    description: "Restore quick, efficient drying.",
    href: "/dryer-repair",
  },
  {
    name: "Dishwasher Repair Ottawa",
    description: "Sparkling dishes without rewashing.",
    href: "/dishwasher-repair",
  },
  {
    name: "Oven Repair Ottawa",
    description: "Even heat for consistent results.",
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
    description: "Keep groceries fresh and cool.",
    href: "/fridge-repair",
  },
  {
    name: "Freezer Repair Ottawa",
    description: "Dependable deep-freeze performance.",
    href: "/freezer-repair",
  },
];

const reasons = [
  "90-day warranty on every service.",
  "Friendly, insured team members.",
  "Local technicians serving Mississippi Mills.",
  "Same-day appointments available.",
];

const attractions = [
  "Mississippi Valley Textile Museum — history and culture.",
  "Almonte Riverwalk — scenic views along the falls.",
  "Downtown Almonte shops and cafés.",
];

const faqs = [
  {
    question: "Do you repair appliances in older Almonte homes?",
    answer: (
      <span>
        Yes, we handle both older and newer units throughout the community.
      </span>
    ),
  },
  {
    question: "Do you offer installation service?",
    answer: (
      <span>
        Absolutely. Book{" "}
        <Link
          href="/appliance-installation/ottawa"
          className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
        >
          appliance installation in Ottawa
        </Link>{" "}
        for new appliances.
      </span>
    ),
  },
  {
    question: "Is there a warranty?",
    answer: <span>Yes, a 90-day guarantee covers all work.</span>,
  },
  {
    question: "Do you also provide oven repair in Ottawa?",
    answer: (
      <span>
        Yes, our service covers Ottawa as well. Schedule{" "}
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
    name: "Appleton Appliance Repair",
    href: "/service-areas/mississippi-mills/appleton",
  },
  {
    name: "Blakeney Appliance Repair",
    href: "/service-areas/mississippi-mills/blakeney",
  },
];

const additionalAreas = [
  "Pakenham",
  "Ramsay",
  "Clayton",
  "Galbraith",
  "Rosetta",
  "Blakeney Rapids",
  "Cedar Hill",
  "Bennie’s Corners",
];

export default function AlmonteServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Almonte Appliance Repair You Can Rely On
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Need appliance repair in Almonte? Our local team delivers friendly, insured
            service with a 90-day guarantee. Check our{" "}
            <Link
              href="/service-areas/mississippi-mills"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Mississippi Mills appliance repair
            </Link>{" "}
            page, also serving Appleton and Blakeney.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Appliances We Repair in Almonte
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
            keeps new appliances ready to go. Discover our services across{" "}
            <Link
              href="/service-areas/mississippi-mills"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Mississippi Mills appliance repair
            </Link>
            .
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">Why Choose Us in Almonte</h2>
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
            Explore Almonte While We Fix
          </h2>
          <p className="text-gray-700">
            While your appliance is being repaired, explore Almonte:
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
            FAQs for Almonte Appliance Repair
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
            Other Mississippi Mills Neighbourhoods We Serve
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
            Call 613-413-6969 or email{" "}
            <a
              href="mailto:service@fixerappliancerepair.ca"
              className="font-semibold text-white underline decoration-2 underline-offset-4"
            >
              service@fixerappliancerepair.ca
            </a>{" "}
            for Almonte appliance repair you can trust.
          </h2>
        </section>
      </div>
    </div>
  );
}
