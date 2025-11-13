import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vanier Appliance Service – Skilled Repairs & Local Expertise | Fixer",
  description:
    "Serving Vanier homes with expert appliance service for over 15 years. Quick response, fair pricing, and quality repairs backed by a 90-day workmanship promise.",
};

const services = [
  {
    name: "Washer repair Vanier",
    description: "End mid-cycle breakdowns.",
    href: "/washer-repair/vanier",
  },
  {
    name: "Dryer repair Vanier",
    description: "Restore fast, quiet operation.",
    href: "/dryer-repair/vanier",
  },
  {
    name: "Dishwasher repair Vanier",
    description: "Get every load sparkling clean.",
    href: "/dishwasher-repair/vanier",
  },
  {
    name: "Fridge repair Vanier",
    description: "Keep your perishables fresh.",
    href: "/fridge-repair/vanier",
  },
  {
    name: "Freezer repair Vanier",
    description: "Reliable freezing for long storage.",
    href: "/freezer-repair/vanier",
  },
  {
    name: "Oven repair Vanier",
    description: "Even, dependable cooking.",
    href: "/oven-repair/vanier",
  },
  {
    name: "Cooktop repair Vanier",
    description: "Balanced heat on every burner.",
    href: "/cooktop-repair/vanier",
  },
  {
    name: "Microwave repair Vanier",
    description: "Fast and safe warming.",
    href: "/microwave-repair/vanier",
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
  "Beechwood Avenue – Great cafés, bakeries, and local shops.",
  "Richelieu Park – Year-round walking trails and green space.",
  "Vanier Museopark – A unique museum celebrating Franco-Ontarian culture.",
];

const faqs = [
  {
    question: "Do you offer same day service in Vanier?",
    answer:
      "Often yes. Many Vanier addresses qualify for same day or next day visits—call to check today's schedule.",
  },
  {
    question: "Which appliances do you handle most in Vanier?",
    answer:
      "Washers, dryers, dishwashers, fridges/freezers, ovens, cooktops, and microwaves — condo units included.",
  },
  {
    question: "Do you cover nearby neighbourhoods?",
    answer:
      "Yes, we also serve Overbrook, Beechwood, New Edinburgh and surrounding Ottawa East areas.",
  },
  {
    question: "What brands can you repair?",
    answer:
      "Most major and premium brands (LG, Samsung, Whirlpool, GE, Bosch, Maytag, Kenmore, Panasonic and more).",
  },
  {
    question: "Is there a warranty?",
    answer:
      "Yes—90 day labour warranty on the work we perform.",
  },
];

export default function VanierServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Appliance Service in Vanier
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Need a trusted appliance repair service in Vanier? From <Link href="/washer-repair/vanier" className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200">washer repair in Vanier</Link> to <Link href="/fridge-repair/vanier" className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200">fridge repair in Vanier</Link>, our Ottawa-based, family-run team keeps local kitchens and laundry rooms working smoothly. We provide clear pricing, a 90-day workmanship guarantee, and same-day service in many parts of Vanier.
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
            What We Work On
          </h2>
          <p className="text-gray-700">We service a wide range of household appliances:</p>
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
            Not sure about your brand or model? Give us a call — chances are, we've repaired it before.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Explore Vanier While We Work
          </h2>
          <ul className="space-y-3 text-sm text-gray-700">
            {attractions.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-accent-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700">
            We also serve neighbouring communities like <Link
              href="/service-areas/overbrook"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Overbrook appliance repair
            </Link> and New Edinburgh.
          </p>
          <div className="rounded-xl border border-accent-500 bg-accent-50 p-6 text-gray-800">
            <p className="text-lg font-semibold">👉 Check <Link
              href="/service-areas/vanier/events"
              className="text-accent-600 underline hover:text-accent-700"
            >
              Vanier events
            </Link> here.</p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            FAQ – Appliance Service in Vanier
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
          <h2 className="heading-lg mb-4 text-white">Call Us Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Fast, friendly help from your local team.
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


