import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nepean Appliance Service – Experienced Care for Your Home",
  description:
    "From washers to ovens, Fixer repairs all major brands in Nepean. Trusted local team, fast scheduling, and quality work guaranteed. Call now for service.",
};

const services = [
  {
    name: "Washer repair Nepean",
    description: "Reliable spin and wash.",
    href: "/washer-repair/nepean",
  },
  {
    name: "Dryer repair Nepean",
    description: "Quicker drying times.",
    href: "/dryer-repair/nepean",
  },
  {
    name: "Dishwasher repair Nepean",
    description: "Dishes spotless after each cycle.",
    href: "/dishwasher-repair/nepean",
  },
  {
    name: "Fridge repair Nepean",
    description: "Consistent cooling performance.",
    href: "/fridge-repair/nepean",
  },
  {
    name: "Freezer repair Nepean",
    description: "Steady, dependable cold.",
    href: "/freezer-repair/nepean",
  },
  {
    name: "Oven repair Nepean",
    description: "Uniform cooking results.",
    href: "/oven-repair/nepean",
  },
  {
    name: "Cooktop repair Nepean",
    description: "Even heat every time.",
    href: "/cooktop-repair/nepean",
  },
  {
    name: "Microwave repair Nepean",
    description: "Fast, efficient heating.",
    href: "/microwave-repair/nepean",
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
  "Andrew Haydon Park – a great spot for a relaxing walk.",
  "Nepean Museum – learn about the area’s history.",
  "Merivale Mall – shopping and dining all in one place.",
];

const faqs = [
  {
    question: "Can I book a same day visit in Nepean?",
    answer:
      "Often possible, depending on time of day and parts availability.",
  },
  {
    question: "Do you repair apartment/condo appliances along Merivale?",
    answer:
      "Yes — condo size and compact units are no problem (with building access arranged).",
  },
  {
    question: "Which brands/models do you support?",
    answer:
      "Broad coverage: LG, Samsung, Whirlpool, GE, Maytag, Frigidaire, Bosch, Kenmore and others.",
  },
  {
    question: "Will you advise if repair isn’t worth it?",
    answer:
      "Absolutely. If replacement makes more sense, we’ll say so and explain why.",
  },
  {
    question: "Is there a warranty on your work?",
    answer: "Yes — 90 days on labour for the completed repair.",
  },
];

const neighbourhoods = [
  {
    name: "Barrhaven East Appliance Repair",
    href: "/service-areas/nepean/barrhaven-east",
  },
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

export default function NepeanServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
            Appliance Service in Nepean, ON
          </p>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Appliance Service in Nepean, ON
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Looking for dependable appliance service in Nepean? Our friendly,
            Ottawa-based team has been repairing appliances for over 15 years.
            From{" "}
            <Link
              href="/washer-repair/nepean"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              washer repair in Nepean
            </Link>{" "}
            to{" "}
            <Link
              href="/fridge-repair/nepean"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              fridge repair in Nepean
            </Link>
            , we provide honest guidance, same-day bookings in many neighbourhoods,
            and a 90-day service guarantee.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            What We Fix in Nepean
          </h2>
          <p className="text-gray-700">
            We handle all your appliance needs, including:
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
              href="/appliance-installation/nepean"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              appliance installation in Nepean
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
          <blockquote className="rounded-xl border-l-4 border-accent-500 bg-white p-6 text-gray-800 shadow-sm">
            <p className="text-lg italic">
              “Our fridge stopped working right before a long weekend. Fixer
              arrived the same day and had it running within an hour. Excellent
              local service!”{" "}
              <span className="not-italic font-semibold text-gray-900">
                – Sarah M.
              </span>
            </p>
          </blockquote>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Things to Do While We Work
          </h2>
          <p className="text-gray-700">
            While we work on your appliance, you can:
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
            Serving local neighbourhoods from Centrepointe to Barrhaven, and we
            also provide{" "}
            <Link
              href="/service-areas/stittsville"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              appliance repair in Stittsville
            </Link>
            .
          </p>
          <div className="rounded-xl border border-accent-500 bg-accent-50 p-6 text-gray-800">
            <p className="text-lg font-semibold">
              👉 See more events on{" "}
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
            Neighbourhoods We Serve in Nepean
          </h2>
          <p className="text-gray-700">
            Looking for appliance repair in a specific Nepean neighbourhood? Explore
            these dedicated service pages:
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
            FAQ – Nepean Appliance Help
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
          <h2 className="text-3xl font-semibold">Ready to book service?</h2>
          <p className="mt-4 text-sm text-gray-200">
            Fast, friendly help from your local team.
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


