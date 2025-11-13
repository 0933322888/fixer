import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orleans Appliance Service – Prompt, Friendly, Professional | Fixer",
  description:
    "Professional appliance service in Orleans. Local team, honest rates, and a 90-day guarantee. Same-day visits often available — book your repair today.",
};

const services = [
  {
    name: "Washer repair Orleans",
    description: "Keep laundry day stress-free.",
    href: "/washer-repair/orleans",
  },
  {
    name: "Dryer repair Orleans",
    description: "Quicker drying, fewer delays.",
    href: "/dryer-repair/orleans",
  },
  {
    name: "Dishwasher repair Orleans",
    description: "Dishes that come out spotless.",
    href: "/dishwasher-repair/orleans",
  },
  {
    name: "Fridge repair Orleans",
    description: "Maintain safe food temperatures.",
    href: "/fridge-repair/orleans",
  },
  {
    name: "Freezer repair Orleans",
    description: "Reliable cold storage.",
    href: "/freezer-repair/orleans",
  },
  {
    name: "Oven repair Orleans",
    description: "Even baking and roasting.",
    href: "/oven-repair/orleans",
  },
  {
    name: "Cooktop repair Orleans",
    description: "Smooth heating every time.",
    href: "/cooktop-repair/orleans",
  },
  {
    name: "Microwave repair Orleans",
    description: "Fast, safe meal prep.",
    href: "/microwave-repair/orleans",
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
  "Petrie Island – beaches and walking trails along the Ottawa River.",
  "Shenkman Arts Centre – live shows, galleries, and classes.",
  "Place d’Orleans – shopping and dining all in one stop.",
];

const faqs = [
  {
    question: "Do you offer rapid appointments in Orleans?",
    answer:
      "Yes — same day or next day visits are often available across Avalon, Fallingbrook, and Chapel Hill.",
  },
  {
    question: "What appliances are covered?",
    answer:
      "Washer, dryer, dishwasher, fridge/freezer, oven, cooktop, and microwave repairs.",
  },
  {
    question: "Do you service nearby rural areas like Cumberland?",
    answer:
      "We do — Cumberland and surrounding communities are within our route.",
  },
  {
    question: "Can you work on smart/modern appliances?",
    answer:
      "Yes, we handle modern control boards and smart models from major brands.",
  },
  {
    question: "What guarantee do I receive?",
    answer: "Every repair comes with a 90 day workmanship guarantee.",
  },
];

const neighbourhoods = [
  {
    name: "Fallingbrook Appliance Repair",
    href: "/service-areas/orleans/fallingbrook",
  },
  {
    name: "Avalon Appliance Repair",
    href: "/service-areas/orleans/avalon",
  },
  {
    name: "Queenswood Heights Appliance Repair",
    href: "/service-areas/orleans/queenswood-heights",
  },
];

const additionalAreas = [
  "Chapel Hill",
  "Convent Glen",
  "Orleans Wood",
  "Cardinal Creek",
  "Navan",
  "Cumberland",
  "Chateauneuf",
  "Hiawatha Park",
];

export default function OrleansServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Appliance Repair in Orleans
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              In Orleans, appliance breakdowns don't have to derail your day. Fixer
              Appliance Repair offers expert service for all major kitchen and laundry
              appliances — from{" "}
              <Link
                href="/fridge-repair/orleans"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                fridge repair in Orleans
              </Link>{" "}
              to{" "}
              <Link
                href="/cooktop-repair/orleans"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                cooktop repair in Orleans
              </Link>
              . With over 15 years of experience, we provide fair, upfront pricing, a
              90-day warranty, and same-day service in many local neighbourhoods.
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
                What We Fix in Orleans
              </h2>
          <p className="text-gray-700">Our skilled team works on:</p>
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
            Not sure about your brand or model? Give us a call — chances are, we’ve repaired it before.
          </p>
          <blockquote className="rounded-xl border-l-4 border-accent-500 bg-white p-6 text-gray-800 shadow-sm">
            <p className="text-lg italic">
              “Fixer Appliance Repair keeps our kitchen running smoothly. Prompt, professional, and friendly every time.”{" "}
              <span className="not-italic font-semibold text-gray-900">
                – Local Orleans homeowner
              </span>
            </p>
          </blockquote>
        </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">
                Enjoy Orleans While We Work
              </h2>
          <p className="text-gray-700">
            While our team gets your appliance back in shape, you could:
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
            We proudly serve Avalon, Fallingbrook, Chapel Hill, and even nearby
            Cumberland.
          </p>
          <div className="rounded-xl border border-accent-500 bg-accent-50 p-6 text-gray-800">
            <p className="text-lg font-semibold">
              👉 See what’s on in Orleans this month
            </p>
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
                Neighbourhoods We Serve in Orleans
              </h2>
          <p className="text-gray-700">
            Looking for appliance repair in a specific part of Orleans? Explore detailed
            service pages for these communities:
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
                FAQ – Appliance Service in Orleans
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
            Fast, friendly, and professional — that's the Fixer way.
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


