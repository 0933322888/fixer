import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Kanata Appliance Repair – Expert Technicians You Can Trust",
  description:
    "Local Kanata experts repairing washers, fridges, ovens & more. Same-day appointments in many areas — reliable service with no hidden fees.",
};

const services = [
  {
    name: "Washer repair Kanata",
    description: "Smooth cycles, no stoppages.",
    href: "/washer-repair/kanata",
  },
  {
    name: "Dryer repair Kanata",
    description: "Faster drying, less waiting.",
    href: "/dryer-repair/kanata",
  },
  {
    name: "Dishwasher repair Kanata",
    description: "Impeccably clean plates and glasses.",
    href: "/dishwasher-repair/kanata",
  },
  {
    name: "Fridge repair Kanata",
    description: "Optimal cooling for your groceries.",
    href: "/fridge-repair/kanata",
  },
  {
    name: "Freezer repair Kanata",
    description: "Dependable deep-freeze storage.",
    href: "/freezer-repair/kanata",
  },
  {
    name: "Oven repair Kanata",
    description: "Consistent cooking temperatures.",
    href: "/oven-repair/kanata",
  },
  {
    name: "Cooktop repair Kanata",
    description: "Even and responsive heat.",
    href: "/cooktop-repair/kanata",
  },
  {
    name: "Microwave repair Kanata",
    description: "Rapid, safe reheating.",
    href: "/microwave-repair/kanata",
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
  "Kanata Centrum Shopping Centre – shopping, dining, and entertainment all in one place.",
  "Walter Baker Park – perfect for a walk or picnic.",
  "Kanata North Technology Park – home to Ottawa’s tech hub.",
];

const faqs = [
  {
    question: "Is same-day service available in Kanata North and South?",
    answer:
      "Often yes — especially in Kanata Lakes, Morgan’s Grant, and Bridlewood.",
  },
  {
    question: "Do you carry parts on the truck?",
    answer:
      "We stock common parts to finish many repairs on the first visit; special orders are arranged quickly.",
  },
  {
    question: "What appliances do you cover?",
    answer:
      "All core kitchen and laundry units: washers, dryers, dishwashers, fridges, freezers, ovens, cooktops, and microwaves.",
  },
  {
    question: "Brands you work with?",
    answer:
      "We service LG, Samsung, Whirlpool, GE, Frigidaire, Maytag, Bosch, Kenmore, and many more.",
  },
  {
    question: "Do you provide a warranty?",
    answer: "Yes — 90 days on labour for peace of mind.",
  },
];

const neighbourhoods = [
  {
    name: "Morgan's Grant Appliance Repair",
    href: "/service-areas/kanata/morgans-grant",
  },
  {
    name: "Beaverbrook Appliance Repair",
    href: "/service-areas/kanata/beaverbrook",
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
    name: "Kanata Lakes Appliance Repair",
    href: "/service-areas/kanata/kanata-lakes",
  },
  {
    name: "Bridlewood Appliance Repair",
    href: "/service-areas/kanata/bridlewood",
  },
];

export default function KanataServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Appliance Repair Services in Kanata
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Need appliance repair in Kanata that's fast, friendly, and reliable?
              With over 15 years of appliance repair experience, our skilled Fixer
              technicians provide trusted service to Kanata households. From washer
              repair in Kanata to fridge repair in Kanata, we handle it all — often
              with same-day availability.
            </p>
            <p className="text-lg text-gray-100">
              You'll always get upfront pricing and a 90-day guarantee on the work we do.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Our Appliance Services in Kanata</h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            We fix all major household appliances:
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
              href="/appliance-installation/kanata"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              appliance installation in Kanata
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Brands Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8"> <Link href="/brands" className="text-primary-600 hover:text-primary-700 font-semibold">Brands</Link> We Service in Kanata</h2>
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
          <p className="text-center text-gray-700 mb-8">
            Not sure about your brand or model? Give us a call — chances are,
            we've repaired it before.
          </p>
          <blockquote className="rounded-xl border-l-4 border-accent-500 bg-white p-6 text-gray-800 shadow-md max-w-3xl mx-auto">
            <p className="text-lg italic">
              "Great service! My fridge broke down, and Fixer came the same day.
              The technician explained everything and had it fixed within an
              hour."{" "}
              <span className="not-italic font-semibold text-gray-900">
                – Sarah, Kanata
              </span>
            </p>
          </blockquote>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">
            Explore Kanata While We Fix Your Appliance
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            While we work on your appliance, why not take a break and enjoy some
            of Kanata's best spots?
          </p>
          <div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto mb-8">
            {attractions.map((item) => (
              <div key={item} className="rounded-lg border border-gray-200 bg-white p-4 shadow-md">
                <p className="text-sm text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-700 mb-6">
            Serving Kanata households from Morgan's Grant to Bridlewood — and
            even nearby{" "}
            <Link
              href="/service-areas/stittsville"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Stittsville appliance repair
            </Link>
            .
          </p>
          <div className="rounded-xl border border-accent-500 bg-accent-50 p-6 text-gray-800 max-w-3xl mx-auto">
            <p className="text-lg font-semibold text-center">
              🎉 Looking for events?
            </p>
            <p className="mt-2 text-sm text-center">
              Check{" "}
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 underline hover:text-accent-700"
              >
                Ottawa Tourism's event calendar
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
            Neighbourhoods We Serve in Kanata
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Looking for appliance help in a specific Kanata community? Explore detailed
            service pages for these neighbourhoods:
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
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
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Kanata" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4 text-white">
            Book Your Appliance Service in Kanata Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're local. We're reliable. We're Fixer.
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


