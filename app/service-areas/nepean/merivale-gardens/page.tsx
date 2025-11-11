import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merivale Gardens Appliance Repair – Trusted Service | Fixer",
  description:
    "Appliance repair in Merivale Gardens. Washers, dryers, ovens, fridges & more. Friendly local team, insured repairs, 90-day warranty.",
};

const services = [
  {
    name: "Washer Repair Ottawa",
    description: "Smooth cycles without leaks.",
    href: "/washer-repair",
  },
  {
    name: "Dryer Repair Ottawa",
    description: "Efficient drying with minimal noise.",
    href: "/dryer-repair",
  },
  {
    name: "Dishwasher Repair Ottawa",
    description: "Sparkling dishes without rewashing.",
    href: "/dishwasher-repair",
  },
  {
    name: "Oven Repair Ottawa",
    description: "Even heat for perfect baking and roasting.",
    href: "/oven-repair",
  },
  {
    name: "Cooktop Repair Ottawa",
    description: "Responsive burners with steady temperatures.",
    href: "/cooktop-repair",
  },
  {
    name: "Microwave Repair Ottawa",
    description: "Safe, quick reheating.",
    href: "/microwave-repair",
  },
  {
    name: "Fridge Repair Ottawa",
    description: "Keep groceries fresh and safe.",
    href: "/fridge-repair",
  },
  {
    name: "Freezer Repair Ottawa",
    description: "Dependable long-term cold storage.",
    href: "/freezer-repair",
  },
];

const reasons = [
  "Solid 90-day warranty on all services.",
  "Insured, customer-friendly team.",
  "Local Nepean technicians nearby.",
  "Same-day help when scheduling allows.",
];

const attractions = [
  "Neighbourhood parks and playgrounds.",
  "Merivale Road shops and family dining.",
  "Nearby sports fields and community events.",
];

const faqs = [
  {
    question: "What types of appliances do you service in Merivale Gardens?",
    answer: (
      <span>
        Washers, dryers, fridges, freezers, dishwashers, ovens, cooktops, and
        microwaves — we cover the full list.
      </span>
    ),
  },
  {
    question: "Do you repair high-end brands?",
    answer: (
      <span>
        Yes, we handle Bosch, LG, Samsung, GE, and many more premium and
        mainstream brands.
      </span>
    ),
  },
  {
    question: "Is installation also offered?",
    answer: (
      <span>
        Absolutely — request{" "}
        <Link
          href="/appliance-installation/nepean"
          className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
        >
          Appliance Installation Nepean
        </Link>{" "}
        for new units.
      </span>
    ),
  },
  {
    question: "Can I schedule fridge repair in Ottawa if I move?",
    answer: (
      <span>
        Yes, we serve all Ottawa neighbourhoods. Book{" "}
        <Link
          href="/fridge-repair"
          className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
        >
          fridge repair in Ottawa
        </Link>{" "}
        any time.
      </span>
    ),
  },
];

const otherNeighbourhoods = [
  {
    name: "Barrhaven East Appliance Repair",
    href: "/service-areas/nepean/barrhaven-east",
  },
  {
    name: "Centrepointe Appliance Repair",
    href: "/service-areas/nepean/centrepointe",
  },
];

const additionalAreas = [
  "Craig Henry",
  "Tanglewood",
  "Skyline",
  "Fisher Glen",
  "Manordale",
  "Knoxdale",
  "Leslie Park",
  "Borden Farm",
];

export default function MerivaleGardensServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Merivale Gardens Appliance Repair – Fast & Reliable
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Appliance repair in Merivale Gardens made easy. Our insured team fixes all
            major appliances with a 90-day guarantee. See our{" "}
            <Link
              href="/service-areas/nepean"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Nepean appliance repair
            </Link>{" "}
            hub, covering Barrhaven East and Centrepointe.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Appliances We Repair in Merivale Gardens
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
            keeps new appliances running correctly. Discover everything we provide across{" "}
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
            Why Call Us in Merivale Gardens
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
            Explore Merivale Gardens While We Fix
          </h2>
          <p className="text-gray-700">
            While we handle your repair, discover Merivale Gardens:
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
            Check current events:{" "}
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
            FAQs for Merivale Gardens Appliance Repair
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
            Email or call to book your Merivale Gardens appliance repair
          </h2>
          <p className="mt-4 text-sm text-gray-200">
            Email{" "}
            <a
              href="mailto:service@fixerappliancerepair.ca"
              className="font-semibold text-white underline decoration-2 underline-offset-4"
            >
              service@fixerappliancerepair.ca
            </a>{" "}
            or call 613-413-6969 now.
          </p>
        </section>
      </div>
    </div>
  );
}


