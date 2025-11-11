import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Appliance Service in Mississippi Mills – Dependable Local Technicians",
  description:
    "Serving Mississippi Mills with professional appliance repairs. Transparent pricing, rural service available, and 90-day coverage on all work.",
};

const services = [
  {
    name: "Washer repair Mississippi Mills",
    description: "No leaks, no hassles.",
    href: "/washer-repair/mississippi-mills",
  },
  {
    name: "Dryer repair Mississippi Mills",
    description: "Efficient and quiet operation.",
    href: "/dryer-repair/mississippi-mills",
  },
  {
    name: "Dishwasher repair Mississippi Mills",
    description: "Thorough cleaning every cycle.",
    href: "/dishwasher-repair/mississippi-mills",
  },
  {
    name: "Fridge repair Mississippi Mills",
    description: "Freshness that lasts.",
    href: "/fridge-repair/mississippi-mills",
  },
  {
    name: "Freezer repair Mississippi Mills",
    description: "Reliable preservation of food.",
    href: "/freezer-repair/mississippi-mills",
  },
  {
    name: "Oven repair Mississippi Mills",
    description: "Even heat for baking and roasting.",
    href: "/oven-repair/mississippi-mills",
  },
  {
    name: "Cooktop repair Mississippi Mills",
    description: "Smooth heating, precise control.",
    href: "/cooktop-repair/mississippi-mills",
  },
  {
    name: "Microwave repair Mississippi Mills",
    description: "Quick reheating done right.",
    href: "/microwave-repair/mississippi-mills",
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
  "Almonte Riverwalk – picturesque riverside strolls.",
  "Mill of Kintail Conservation Area – trails and a charming museum.",
  "Downtown Almonte – local cafés, shops, and heritage sites.",
];

const faqs = [
  {
    question:
      "Do you service Almonte, Pakenham and surrounding rural roads?",
    answer:
      "Yes — we regularly visit homes across Mississippi Mills, including rural properties.",
  },
  {
    question: "Can you come the same or next day?",
    answer: "Frequently, yes. Call early for the best availability.",
  },
  {
    question: "What appliances are most common here?",
    answer:
      "Fridges losing temperature, washers leaking, and ovens with uneven heat — plus the full list of major units.",
  },
  {
    question: "Which brands can you fix?",
    answer:
      "Most major brands and many premium lines such as Bosch, LG, Samsung, Whirlpool, GE, and Maytag.",
  },
  {
    question: "What about guarantees?",
    answer: "Repairs include a 90 day labour warranty.",
  },
];

const neighbourhoods = [
  {
    name: "Almonte Appliance Repair",
    href: "/service-areas/mississippi-mills/almonte",
  },
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

export default function MississippiMillsServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
            Appliance Service in Mississippi Mills, ON
          </p>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Appliance Service in Mississippi Mills, ON
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Appliance trouble in Mississippi Mills? Fixer Appliance Repair has been
            keeping local kitchens and laundry rooms in shape for years. From{" "}
            <Link
              href="/fridge-repair/mississippi-mills"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              fridge repair in Mississippi Mills
            </Link>{" "}
            to{" "}
            <Link
              href="/oven-repair/mississippi-mills"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              oven repair in Mississippi Mills
            </Link>
            , we’ve got you covered with clear pricing, a 90-day warranty, and
            same-day appointments in many areas.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Our Services in the Mississippi Mills Area
          </h2>
          <p className="text-gray-700">We’re experienced with:</p>
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
            Brands We Work With
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
            Not sure about your brand or model? Give us a call — chances are,
            we’ve repaired it before.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Explore the Area While We Work
          </h2>
          <p className="text-gray-700">
            While we get your appliance back in shape, enjoy:
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
            We proudly serve Almonte, Pakenham, and nearby rural roads — plus
            surrounding areas like{" "}
            <Link
              href="/service-areas/carleton-place"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Carleton Place appliance repair
            </Link>
            .
          </p>
          <div className="rounded-xl border border-accent-500 bg-accent-50 p-6 text-gray-800">
            <p className="text-lg font-semibold">🎉 See more events nearby</p>
            <p className="mt-2 text-sm">
              Visit the{" "}
              <a
                href="https://www.mississippimills.ca/en/explore-and-play/events.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 underline hover:text-accent-700"
              >
                Mississippi Mills community page
              </a>
              .
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Neighbourhoods We Serve in Mississippi Mills
          </h2>
          <p className="text-gray-700">
            Explore detailed service pages for these Mississippi Mills communities:
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
            FAQ – Local Appliance Help
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
          <h2 className="text-3xl font-semibold">
            Book Your Local Service Today
          </h2>
          <p className="mt-4 text-sm text-gray-200">
            Friendly. Local. Guaranteed.
          </p>
          <div className="mt-6 flex flex-col gap-4 text-sm font-medium md:flex-row">
            <a
              href="tel:613-413-6969"
              className="rounded-lg bg-accent-500 px-6 py-3 text-center text-white transition hover:bg-accent-600"
            >
              📞 Call/Text: 613-413-6969
            </a>
            <a
              href="mailto:service@fixerappliancerepair.ca"
              className="rounded-lg border border-white/20 px-6 py-3 text-center transition hover:border-white hover:text-white"
            >
              📧 Email: service@fixerappliancerepair.ca
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}


