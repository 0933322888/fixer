import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Beaverbrook Appliance Repair – Trusted Local Technicians | Fixer – Washer, Dryer, Dishwasher, Fridge",
  description:
    "Reliable appliance repair in Beaverbrook. Washers, dryers, fridges & ovens. Same-day service available. Call 613-413-6969 for trusted local repair.",
};

const services = [
  {
    name: "Washer Repair Ottawa",
    description: "Keep laundry day moving.",
    href: "/washer-repair",
  },
  {
    name: "Dryer Repair Ottawa",
    description: "Faster drying, less noise.",
    href: "/dryer-repair",
  },
  {
    name: "Dishwasher Repair Ottawa",
    description: "Spotless dishes without the hassle.",
    href: "/dishwasher-repair",
  },
  {
    name: "Oven Repair Ottawa",
    description: "Even cooking from edge to edge.",
    href: "/oven-repair",
  },
  {
    name: "Cooktop Repair Ottawa",
    description: "Responsive, even heat every time.",
    href: "/cooktop-repair",
  },
  {
    name: "Microwave Repair Ottawa",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair",
  },
  {
    name: "Fridge Repair Ottawa",
    description: "Keep groceries chilled and safe.",
    href: "/fridge-repair",
  },
  {
    name: "Freezer Repair Ottawa",
    description: "Consistent freezing power.",
    href: "/freezer-repair",
  },
];

const reasons = [
  "Peace of mind with our 90-day repair guarantee.",
  "Friendly, fully insured experts at your door.",
  "Kanata-based techs familiar with local homes.",
  "Call early for same-day service slots.",
];

const attractions = [
  "Kanata Beaverbrook Community Centre.",
  "Beautiful green spaces and walking paths.",
  "Local schools and playgrounds nearby.",
];

const faqs = [
  {
    question: "How quickly can you reach Beaverbrook homes?",
    answer: (
      <span>
        We’re based in Kanata, so response times are fast — especially with
        morning calls.
      </span>
    ),
  },
  {
    question:
      "Do you also install appliances or only repair them?",
    answer: (
      <span>
        We do both — installation and repair services are available across
        Kanata.
      </span>
    ),
  },
  {
    question: "What happens if the same issue comes back?",
    answer: (
      <span>
        It’s covered under our 90-day repair warranty — we’ll make it right.
      </span>
    ),
  },
  {
    question: "Do you provide fridge repair in Ottawa outside Beaverbrook?",
    answer: (
      <span>
        Yes, our coverage extends across all Ottawa neighbourhoods. Book{" "}
        <Link
          href="/fridge-repair"
          className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
        >
          fridge repair in Ottawa
        </Link>{" "}
        whenever you need us.
      </span>
    ),
  },
];

const otherNeighbourhoods = [
  {
    name: "Morgan's Grant Appliance Repair",
    href: "/service-areas/kanata/morgans-grant",
  },
  {
    name: "Katimavik-Hazeldean Appliance Repair",
    href: "/service-areas/kanata/katimavik-hazeldean",
  },
  {
    name: "Glen Cairn Appliance Repair",
    href: "/service-areas/kanata/glen-cairn",
  },
  {
    name: "Bridlewood Appliance Repair",
    href: "/service-areas/kanata/bridlewood",
  },
  {
    name: "Kanata Lakes Appliance Repair",
    href: "/service-areas/kanata/kanata-lakes",
  },
];

const additionalAreas = [
  "Shirley’s Brook Appliance Repair",
  "South March",
  "Kanata West",
  "Emerald Meadows",
  "Marchwood",
];

export default function BeaverbrookServiceAreaPage() {
  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 text-gray-800 space-y-16">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Beaverbrook Appliance Repair – Reliable Local Service
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Need appliance repair in Beaverbrook, Kanata? We fix all major electric
            appliances with professional care and a 90-day guarantee. See more options
            on our{" "}
            <Link
              href="/service-areas/kanata"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Kanata appliance repair
            </Link>{" "}
            page, covering Morgan’s Grant and Glen Cairn.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Appliances We Repair in Beaverbrook
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
              href="/appliance-installation/kanata"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Appliance Installation Kanata
            </Link>{" "}
            – ready for new appliances. Explore complete service options on our{" "}
            <Link
              href="/service-areas/kanata"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Kanata appliance repair
            </Link>{" "}
            page.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Why Choose Us in Beaverbrook
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
            Explore Beaverbrook While We Fix
          </h2>
          <p className="text-gray-700">
            While we fix your appliance, check out Beaverbrook:
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
            See more events here:{" "}
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
            FAQs for Beaverbrook Appliance Repair
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
            Other Kanata Neighbourhoods We Serve
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
          <p className="text-sm text-gray-700">
            {additionalAreas.join(" • ")}
          </p>
        </section>

        <section className="rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="text-3xl font-semibold">
            Ready to fix it fast?
          </h2>
          <p className="mt-4 text-sm text-gray-200">
            Contact us at 613-413-6969 or{" "}
            <a
              href="mailto:service@fixerappliancerepair.ca"
              className="font-semibold text-white underline decoration-2 underline-offset-4"
            >
              service@fixerappliancerepair.ca
            </a>{" "}
            for appliance repair in Beaverbrook.
          </p>
        </section>
      </div>
    </div>
  );
}


