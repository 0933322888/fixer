import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Barrhaven Appliance Repair – Quality Service, Honest Prices",
  description:
    "Fixer Appliance Repair serves Barrhaven with quick, dependable appliance fixes. No hidden costs, friendly technicians, and a 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Barrhaven",
    description: "End laundry day delays.",
    href: "/washer-repair/barrhaven",
  },
  {
    name: "Dryer repair Barrhaven",
    description: "Quiet, efficient performance.",
    href: "/dryer-repair/barrhaven",
  },
  {
    name: "Dishwasher repair Barrhaven",
    description: "Say goodbye to cloudy glassware.",
    href: "/dishwasher-repair/barrhaven",
  },
  {
    name: "Fridge repair Barrhaven",
    description: "Preserve freshness and flavour.",
    href: "/fridge-repair/barrhaven",
  },
  {
    name: "Freezer repair Barrhaven",
    description: "Reliable cold for all your goods.",
    href: "/freezer-repair/barrhaven",
  },
  {
    name: "Oven repair Barrhaven",
    description: "Perfect baking every time.",
    href: "/oven-repair/barrhaven",
  },
  {
    name: "Cooktop repair Barrhaven",
    description: "Precise, even cooking.",
    href: "/cooktop-repair/barrhaven",
  },
  {
    name: "Microwave repair Barrhaven",
    description: "Quick heating without sparks.",
    href: "/microwave-repair/barrhaven",
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
  "Chapman Mills Conservation Area – scenic walking trails along the river.",
  "Marketplace Shopping Centre – shops, restaurants, and coffee spots.",
  "Walter Baker Sports Centre – pools, gyms, and programs for the whole family.",
];

const faqs = [
  {
    question: "Is same day service realistic in Barrhaven?",
    answer:
      "In many neighbourhoods (Marketplace, Chapman Mills, Half Moon Bay), yes — call to check.",
  },
  {
    question: "Do you repair both gas and electric ranges?",
    answer:
      "We service electric ranges/cooktops. For gas lines, a licensed gas fitter is required for disconnection.",
  },
  {
    question: "Which appliances do you handle?",
    answer:
      "Washers, dryers, dishwashers, fridges/freezers, ovens, cooktops, and microwaves.",
  },
  {
    question: "Which brands are covered?",
    answer:
      "LG, Samsung, Whirlpool, GE, Frigidaire, Maytag, Bosch, Kenmore and others.",
  },
  {
    question: "Do you offer a warranty?",
    answer: "Yes — a 90 day labour warranty accompanies our work.",
  },
];

const neighbourhoods = [
  {
    name: "Chapman Mills Appliance Repair",
    href: "/service-areas/barrhaven/chapman-mills",
  },
  {
    name: "Stonebridge Appliance Repair",
    href: "/service-areas/barrhaven/stonebridge",
  },
  {
    name: "Longfields Appliance Repair",
    href: "/service-areas/barrhaven/longfields",
  },
];

const additionalAreas = [
  "Half Moon Bay",
  "Strandherd Meadows",
  "Old Barrhaven",
  "Davidson Heights",
  "Cedarhill Estates",
  "Hearts Desire",
  "Jockvale",
  "Havenlea",
];

export default function BarrhavenServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Appliance Repair in Barrhaven
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Looking for appliance service in Barrhaven that's prompt and professional?
              Our Ottawa-based, family-run team has been helping homes here for years.
              From{" "}
              <Link
                href="/dishwasher-repair/barrhaven"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                dishwasher repair in Barrhaven
              </Link>{" "}
              to{" "}
              <Link
                href="/dryer-repair/barrhaven"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                dryer repair in Barrhaven
              </Link>
              , we'll get your appliances back in shape.
            </p>
            <p className="text-lg text-gray-100">
              Expect clear pricing, same-day availability in many areas, and repairs done right the first time.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Our Appliance Services in Barrhaven</h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            We work on all major home appliances, including:
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mb-8">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-5 shadow-md transition hover:-translate-y-0.5 hover:border-accent-500 hover:shadow-lg"
              >
                <span className="text-base font-semibold text-gray-900 group-hover:text-accent-600">
                  {service.name}
                </span>
                <span className="text-sm text-gray-700">{service.description}</span>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-accent-600 group-hover:text-accent-700">
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
          <p className="text-center text-gray-700">
            👉 We also provide{" "}
            <Link
              href="/appliance-installation/ottawa"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              appliance installation across Ottawa
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Brands Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8"> <Link href="/brands" className="text-primary-600 hover:text-primary-700 font-semibold">Brands</Link> We Service in Barrhaven</h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            We repair all major household brands, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-6">
            {brands.map((brand, index) => (
              <Link
                key={index}
                href={brand.href}
                className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-md hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 transition-colors"
              >
                <p className="text-sm font-medium text-gray-900 hover:text-primary-700">{brand.name}</p>
              </Link>
            ))}
          </div>
          <p className="text-center text-gray-700">
            Not sure about your brand or model? Give us a call — chances are,
            we've repaired it before.
          </p>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">
            Explore Barrhaven While We Work
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            While we repair your appliance, you can enjoy some local attractions:
          </p>
          <div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto mb-8">
            {attractions.map((item) => (
              <div key={item} className="rounded-lg border border-gray-200 bg-white p-4 shadow-md">
                <p className="text-sm text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-700 mb-6">
            We proudly serve Half Moon Bay, Chapman Mills, and Marketplace — and we
            also cover nearby{" "}
            <Link
              href="/service-areas/nepean"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Nepean appliance repair
            </Link>
            .
          </p>
          <div className="rounded-xl border border-accent-500 bg-accent-50 p-6 text-gray-800 max-w-3xl mx-auto">
            <p className="text-lg font-semibold text-center">
              👉 See what's on in Barrhaven
            </p>
            <p className="mt-2 text-sm text-center">
              Check the{" "}
              <a
                href="https://barrhavenbia.ca/events/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 underline hover:text-accent-700"
              >
                Barrhaven events calendar
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Neighbourhoods Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">
            Neighbourhoods We Serve in Barrhaven
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Looking for appliance service in a specific Barrhaven neighbourhood? Explore
            these dedicated pages:
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mb-6">
            {neighbourhoods.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="block rounded-lg border border-gray-200 bg-white p-4 text-sm font-semibold text-gray-900 shadow-md transition hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-600 hover:shadow-lg text-center"
              >
                {area.name}
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-gray-700">{additionalAreas.join(" • ")}</p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Barrhaven" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4 text-white">
            Book Your Barrhaven Appliance Repair Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Local. Reliable. Guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:613-413-6969" className="btn-primary bg-white text-accent-600 hover:bg-gray-100">
              Call or Text (613) 413-6969
            </a>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-accent-600">
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


