import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Appliance Repair in Carp – Local Service for Homes & Farms | Fixer",
  description:
    "From kitchen to laundry appliances, our Carp technicians deliver timely, reliable repairs. 90-day warranty and friendly local service.",
};

const services = [
  {
    name: "Washer repair Carp",
    description: "Reliable washes, no leaks.",
    href: "/washer-repair/carp",
  },
  {
    name: "Dryer repair Carp",
    description: "Efficient drying without the noise.",
    href: "/dryer-repair/carp",
  },
  {
    name: "Dishwasher repair Carp",
    description: "Sparkling clean dishes every time.",
    href: "/dishwasher-repair/carp",
  },
  {
    name: "Fridge repair Carp",
    description: "Cold, consistent storage.",
    href: "/fridge-repair/carp",
  },
  {
    name: "Freezer repair Carp",
    description: "Steady freezing for long-term use.",
    href: "/freezer-repair/carp",
  },
  {
    name: "Oven repair Carp",
    description: "Balanced heat for perfect cooking.",
    href: "/oven-repair/carp",
  },
  {
    name: "Cooktop repair Carp",
    description: "Even heating across burners.",
    href: "/cooktop-repair/carp",
  },
  {
    name: "Microwave repair Carp",
    description: "Safe, quick meal prep.",
    href: "/microwave-repair/carp",
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
  "Carp Farmers’ Market – fresh produce and local treats.",
  "Diefenbunker Museum – Canada’s famous Cold War museum.",
  "Carp Hills Trails – scenic hikes and wildlife viewing.",
];

const faqs = [
  {
    question: "Do you service farms and rural properties around Carp?",
    answer:
      "We do — farmhouses and rural homes are part of our regular route.",
  },
  {
    question: "How fast can you come?",
    answer:
      "Same day or next day is often possible; call to confirm for your road.",
  },
  {
    question: "Which appliances do you repair most in Carp?",
    answer:
      "Fridges that won’t cool, washers that won’t drain or spin, and ovens with heating issues — plus the full range of home appliances.",
  },
  {
    question: "What brands are supported?",
    answer:
      "Most major brands including LG, Samsung, Whirlpool, GE, Maytag, Frigidaire, Bosch, Kenmore, Panasonic, and more.",
  },
  {
    question: "Do repairs come with a guarantee?",
    answer: "Yes — 90-day labour coverage on the work we complete.",
  },
];

const neighbourhoods = [
  {
    name: "Corkery Appliance Repair",
    href: "/service-areas/carp/corkery",
  },
  {
    name: "Huntley Appliance Repair",
    href: "/service-areas/carp/huntley",
  },
  {
    name: "Village of Carp Appliance Repair",
    href: "/service-areas/carp/village-of-carp",
  },
];

const additionalAreas = [
  "Pakenham",
  "Fitzroy Harbour",
  "Galetta",
  "Dunrobin",
  "Kinburn",
  "Constance Bay",
  "Crown Point",
  "Marathon Village",
];

export default function CarpServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Trusted Appliance Repair in Carp, ON
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            When appliances break down in Carp, Fixer Appliance Repair is just a
            call away. Our experienced technicians handle both home and farm
            appliance repairs — from fridges in Carp that won’t cool to cooktops
            in Carp that won’t heat evenly. We arrive with the tools and parts
            needed for most fixes on the first visit, and we back our work with
            a 90-day warranty.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Our Services in Carp
          </h2>
          <p className="text-gray-700">
            We provide repair and maintenance for:
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
            Brands We Service
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
              “Our oven stopped working just before a family gathering. Fixer’s
              technician arrived the same day and had it baking perfectly again
              within hours. Professional and friendly!”{" "}
              <span className="not-italic font-semibold text-gray-900">
                – James P.
              </span>
            </p>
          </blockquote>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Explore Carp While We Fix
          </h2>
          <p className="text-gray-700">
            Make the most of your time while we work:
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
            Live nearby? We also offer{" "}
            <Link
              href="/service-areas/kanata"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              appliance repair in Kanata
            </Link>{" "}
            and{" "}
            <Link
              href="/service-areas/stittsville"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Stittsville
            </Link>
            .
          </p>
          <div className="rounded-xl border border-accent-500 bg-accent-50 p-6 text-gray-800">
            <p className="text-lg font-semibold">
              🎉 More events in Ottawa?
            </p>
            <p className="mt-2 text-sm">
              Head to{" "}
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 underline hover:text-accent-700"
              >
                Ottawa Tourism’s event calendar
              </a>
              .
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Neighbourhoods We Serve Near Carp
          </h2>
          <p className="text-gray-700">
            Looking for appliance help in a specific part of Carp? Explore these
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
          <p className="text-sm text-gray-700">
            {additionalAreas.join(" • ")}
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            FAQ – Appliance Repair in Carp
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
            Book Your Appliance Repair Today
          </h2>
          <p className="mt-4 text-sm text-gray-200">
            Your local repair experts — here to help when you need us most.
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


