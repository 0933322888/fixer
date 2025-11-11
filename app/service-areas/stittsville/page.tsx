import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Appliance Repair Stittsville – Fast Solutions for Every Appliance | Fixer",
  description:
    "Fixer Appliance Repair keeps Stittsville kitchens and laundry rooms running. Same-day help in many areas, expert technicians, and clear upfront quotes.",
};

const services = [
  {
    name: "Washer repair Stittsville",
    description: "Smooth, trouble-free washing.",
    href: "/washer-repair/stittsville",
  },
  {
    name: "Dryer repair Stittsville",
    description: "Faster cycles, less noise.",
    href: "/dryer-repair/stittsville",
  },
  {
    name: "Dishwasher repair Stittsville",
    description: "Spotless results without rewashing.",
    href: "/dishwasher-repair/stittsville",
  },
  {
    name: "Fridge repair Stittsville",
    description: "Keep your groceries fresh.",
    href: "/fridge-repair/stittsville",
  },
  {
    name: "Freezer repair Stittsville",
    description: "Steady freezing performance.",
    href: "/freezer-repair/stittsville",
  },
  {
    name: "Oven repair Stittsville",
    description: "Even cooking from edge to edge.",
    href: "/oven-repair/stittsville",
  },
  {
    name: "Cooktop repair Stittsville",
    description: "Consistent, even heat.",
    href: "/cooktop-repair/stittsville",
  },
  {
    name: "Microwave repair Stittsville",
    description: "Safe, quick reheating.",
    href: "/microwave-repair/stittsville",
  },
];

const brands = [
  "LG",
  "Samsung",
  "Whirlpool",
  "GE",
  "Maytag",
  "Frigidaire",
  "Bosch",
  "Kenmore",
  "Panasonic",
  "Electrolux",
  "Amana",
];

const attractions = [
  "Village Square Park – a lovely green space in the heart of Stittsville.",
  "Trans Canada Trail – great for a walk or bike ride.",
  "Amberwood Village Golf & Country Club – perfect for a relaxing afternoon.",
];

const faqs = [
  {
    question: "Can you come out the same day in Stittsville?",
    answer:
      "In many cases, yes. If parts are in stock we can complete the repair on the first visit.",
  },
  {
    question: "Do you service townhomes and newer builds?",
    answer:
      "Absolutely. We regularly work in Fairwinds, West Ridge, Crossing Bridge, and new developments.",
  },
  {
    question: "What appliances do you repair here most often?",
    answer:
      "Dryers that take too long, washers with noise issues, and fridges with temperature problems — plus the full kitchen and laundry list.",
  },
  {
    question: "Which brands are supported?",
    answer:
      "All common makes including LG, Samsung, Whirlpool, GE, Frigidaire, Bosch, Maytag, Kenmore, and more.",
  },
  {
    question: "How do quotes work?",
    answer:
      "We provide clear, upfront pricing after diagnosis on site — no phone quotes, since issues vary widely.",
  },
];

const neighbourhoods = [
  {
    name: "Crossing Bridge Appliance Repair",
    href: "/service-areas/stittsville/crossing-bridge",
  },
  {
    name: "Jackson Trails Appliance Repair",
    href: "/service-areas/stittsville/jackson-trails",
  },
  {
    name: "Bryanston Gate Appliance Repair",
    href: "/service-areas/stittsville/bryanston-gate",
  },
];

const additionalAreas = [
  "Amberway",
  "Poole Creek",
  "Timbermere",
  "West Ridge",
  "Fairwinds",
  "Edenwylde",
  "Westwind Farms",
  "Fernbank Crossing",
];

export default function StittsvilleServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
            Expert Appliance Repair in Stittsville, ON
          </p>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Expert Appliance Repair in Stittsville, ON
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            When you need appliance repair in Stittsville, Fixer is here to help. From washer repair in Stittsville to fridge repair in Stittsville, our technicians cover the full range of home appliances. With over 15 years of hands-on experience, we deliver same-day service in many areas, transparent pricing, and a 90-day guarantee.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Appliance Repair Services in Stittsville
          </h2>
          <p className="text-gray-700">We repair and maintain:</p>
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
              href="/appliance-installation/stittsville"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              appliance installation in Stittsville
            </Link>
            .
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Brands We Service in Stittsville
          </h2>
          <p className="text-gray-700">
            We repair all major household brands, including:
          </p>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-900">
              {brands.join(" | ")}
            </p>
          </div>
          <p className="text-gray-700">
            Not sure about your brand or model? Give us a call — chances are, we’ve repaired it before.
          </p>
          <blockquote className="rounded-xl border-l-4 border-accent-500 bg-white p-6 text-gray-800 shadow-sm">
            <p className="text-lg italic">
              “Fixer Appliance Repair got my fridge working again the same day I called. Professional, polite, and affordable. Highly recommend for Stittsville residents!”{" "}
              <span className="not-italic font-semibold text-gray-900">
                – Maria T., Stittsville
              </span>
            </p>
          </blockquote>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Explore Stittsville While We Work
          </h2>
          <p className="text-gray-700">
            While we repair your appliance, you can enjoy:
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
            Serving local homes in Fairwinds, West Ridge, and Crossing Bridge — and we also cover nearby{" "}
            <Link
              href="/service-areas/kanata"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Kanata appliance repair
            </Link>
            .
          </p>
          <div className="rounded-xl border border-accent-500 bg-accent-50 p-6 text-gray-800">
            <p className="text-lg font-semibold">🎉 Find more local events?</p>
            <p className="mt-2 text-sm">
              Visit{" "}
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 underline hover:text-accent-700"
              >
                Ottawa Tourism
              </a>
              .
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Neighbourhoods We Serve in Stittsville
          </h2>
          <p className="text-gray-700">
            Looking for appliance repair in a specific Stittsville community? Explore
            detailed pages for these neighbourhoods:
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
            FAQ – Stittsville Appliance Repair
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

        <section className="rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="text-3xl font-semibold">Call Us Today</h2>
          <p className="mt-4 text-sm text-gray-200">
            Fast. Friendly. Local. Fixer Appliance Repair – Stittsville’s trusted choice.
          </p>
          <div className="mt-6 flex flex-col gap-4 text-sm font-medium md:flex-row">
            <a
              href="tel:613-413-6969"
              className="rounded-lg bg-accent-500 px-6 py-3 text-center text-white transition hover:bg-accent-600"
            >
              📞 613-413-6969
            </a>
            <a
              href="mailto:service@fixerappliancerepair.ca"
              className="rounded-lg border border-white/20 px-6 py-3 text-center transition hover:border-white hover:text-white"
            >
              📧 service@fixerappliancerepair.ca
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}


