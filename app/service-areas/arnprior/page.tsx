import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Appliance Repair in Arnprior – Reliable, Local Help | Fixer",
  description:
    "Trusted appliance repairs for Arnprior homes. Same-day service in many areas, clear quotes, and dependable local technicians.",
};

const services = [
  {
    name: "Washer repair Arnprior",
    description: "No more mid-cycle surprises.",
    href: "/washer-repair/arnprior",
  },
  {
    name: "Dryer repair Arnprior",
    description: "Get clothes dry the first time.",
    href: "/dryer-repair/arnprior",
  },
  {
    name: "Dishwasher repair Arnprior",
    description: "Sparkling results every load.",
    href: "/dishwasher-repair/arnprior",
  },
  {
    name: "Fridge repair Arnprior",
    description: "Keep food fresh and safe.",
    href: "/fridge-repair/arnprior",
  },
  {
    name: "Freezer repair Arnprior",
    description: "Steady temperatures for long-term storage.",
    href: "/freezer-repair/arnprior",
  },
  {
    name: "Oven repair Arnprior",
    description: "Even, reliable heat.",
    href: "/oven-repair/arnprior",
  },
  {
    name: "Cooktop repair Arnprior",
    description: "Smooth, consistent cooking.",
    href: "/cooktop-repair/arnprior",
  },
  {
    name: "Microwave repair Arnprior",
    description: "Fast, safe heating.",
    href: "/microwave-repair/arnprior",
  },
];

const brands = [
  { name: "Bosch", href: "/brands/bosch" },
  { name: "Frigidaire", href: "/brands/frigidaire" },
  { name: "GE", href: "/brands/ge" },
  { name: "Kenmore", href: "/brands/kenmore" },
  { name: "LG", href: "/brands/lg" },
  { name: "Maytag", href: "/brands/maytag" },
  { name: "Panasonic", href: "/brands/panasonic" },
  { name: "Samsung", href: "/brands/samsung" },
  { name: "Whirlpool", href: "/brands/whirlpool" },
  { name: "Electrolux", href: "?" },
];

const attractions = [
  "Gillies Grove and House National Historic Site – a peaceful nature retreat.",
  "Robert Simpson Park – scenic Ottawa River views.",
  "Downtown Arnprior – local shops, cafés, and bakeries.",
];

const faqs = [
  {
    question: "Can you come the same day in Arnprior?",
    answer:
      "Often yes, depending on time and parts — call for current availability.",
  },
  {
    question: "Do you service White Lake, Pakenham and Braeside?",
    answer:
      "Yes — those communities are within our service area.",
  },
  {
    question: "Which appliances do you repair?",
    answer:
      "Washers, dryers, dishwashers, fridges/freezers, ovens, cooktops, and microwaves.",
  },
  {
    question: "What brands can you fix?",
    answer:
      "Most major and premium brands found locally, including LG, Samsung, Whirlpool, GE, Maytag, Frigidaire, and more.",
  },
  {
    question: "Is the work guaranteed?",
    answer: "It is — 90 days of labour coverage on the completed repair.",
  },
];

const neighbourhoods = [
  {
    name: "Downtown Arnprior Appliance Repair",
    href: "/service-areas/arnprior/downtown",
  },
  {
    name: "Braeside Appliance Repair",
    href: "/service-areas/arnprior/braeside",
  },
  {
    name: "McNab Appliance Repair",
    href: "/service-areas/arnprior/mcnab",
  },
];

const additionalAreas = [
  "Sandy Beach",
  "Gillies Grove",
  "Madawaska Boulevard",
  "Arnprior Heights",
  "Ottawa River South Shore",
  "Division Street",
  "Marshall’s Bay",
  "John Street",
];

export default function ArnpriorServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Appliance Service in Arnprior
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Need appliance repair in Arnprior you can rely on? From{" "}
              <Link
                href="/washer-repair/arnprior"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                washer repair in Arnprior
              </Link>{" "}
              to{" "}
              <Link
                href="/fridge-repair/arnprior"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                fridge repair in Arnprior
              </Link>
              , Fixer Appliance Repair has been helping households across the Ottawa
              Valley keep their kitchens and laundry rooms running smoothly. We fix it
              fast — and back every job with a 90-day workmanship warranty. Local,
              friendly, and ready to help the same day in many neighbourhoods.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Our Services in Arnprior & Surrounding Areas
          </h2>
          <p className="text-gray-700">
            From kitchen essentials to laundry appliances, we service:
          </p>
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
                    aria-hidden="true"
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
            👉 We also provide{" "}
            <Link
              href="/appliance-installation/ottawa"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              appliance installation across Ottawa
            </Link>
            .
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            <Link href="/brands" className="text-accent-600 hover:text-accent-700 font-semibold">Brands</Link> We Handle
          </h2>
          <p className="text-gray-700">
            We repair all major household brands, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {brands.map((brand, index) => (
              <Link
                key={index}
                href={brand.href}
                className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:bg-accent-50 hover:border-accent-300 hover:text-accent-700 transition-colors"
              >
                <p className="text-sm font-medium text-gray-900 hover:text-accent-700">{brand.name}</p>
              </Link>
            ))}
          </div>
          <p className="text-gray-700">
            Not sure about your brand or model? Give us a call — chances are,
            we’ve repaired it before.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Things to Do While We Work
          </h2>
          <p className="text-gray-700">
            Why wait at home? Explore some of Arnprior’s highlights:
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            {attractions.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-accent-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700">
            We also serve nearby communities, including White Lake, Pakenham, and
            Braeside — and even neighbouring{" "}
            <Link
              href="/service-areas/carp"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Carp appliance repair
            </Link>
            .
          </p>
          <div className="rounded-xl border border-accent-500 bg-accent-50 p-6 text-gray-800">
            <p className="text-lg font-semibold">
              👉 See upcoming events
            </p>
            <p className="mt-2 text-sm">
              Visit the{" "}
              <a
                href="https://www.arnprior.ca/en/play/events-and-festivals.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 underline hover:text-accent-700"
              >
                Arnprior community calendar
              </a>
              .
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Neighbourhoods We Serve in Arnprior
          </h2>
          <p className="text-gray-700">
            Looking for appliance help in a specific Arnprior community? Explore these
            dedicated pages:
          </p>
          <ul className="grid gap-3 md:grid-cols-2">
            {neighbourhoods.map((area) => (
              <li key={area.name}>
                <Link
                  href={area.href}
                  className="block rounded-xl border border-gray-200 bg-white p-4 text-sm font-semibold text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-300 hover:text-accent-700"
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-700">{additionalAreas.join(" • ")}</p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            FAQ – Local Appliance Service
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

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4 text-white">
            Book Your Local Service Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Local. Reliable. Guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:613-413-6969"
              className="btn-primary bg-white text-accent-600 hover:bg-gray-100"
            >
              Call or Text (613) 413-6969
            </a>
            <Link
              href="/contact"
              className="btn-outline border-white text-white hover:bg-white hover:text-accent-600"
            >
              Book Online Now
            </Link>
          </div>
          <p className="text-lg text-white/90 mt-6">
            Email:{" "}
            <a href="mailto:service@fixerappliancerepair.ca" className="underline text-white">
              service@fixerappliancerepair.ca
            </a>
          </p>
        </div>
      </section>
    </>
  );
}


