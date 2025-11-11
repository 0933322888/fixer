import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Cooktop Repair in Barrhaven – Fast, Trusted Service | Fixer",
  description:
    "Expert cooktop repair in Barrhaven, serving Chapman Mills, Stonebridge, and Half Moon Bay. Same or next-day service, upfront pricing, and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Cooktop won't heat up",
    description:
      "In Barrhaven townhomes, this usually points to a bad element or switch. We'll identify and replace it.",
  },
  {
    title: "Burners too hot or too weak",
    description:
      "Faulty sensors or regulators can make cooking unpredictable. We'll restore the right temperature.",
  },
  {
    title: "Cooktop keeps sparking",
    description: "Loose connections or failed relays often cause sparks. We'll fix the wiring.",
  },
  {
    title: "Hot surface light never turns off",
    description:
      "A sensor stuck in the \"on\" position needs recalibration. We'll handle it.",
  },
  {
    title: "Cooktop glass broken",
    description: "Dropped pots often crack the glass. We'll safely replace the surface.",
  },
  {
    title: "Cooktop gives off burning smell",
    description:
      "Usually from wiring insulation or food trapped underneath. We'll check and repair it.",
  },
];

const whyChooseUs = [
  "Local Barrhaven cooktop repair and installation experts",
  "Same-day and next-day scheduling available",
  "All work comes with a 90-day labour warranty",
  "Dependable service and clear communication",
];

const serviceAreas = ["Chapman Mills", "Stonebridge", "Longfields", "Half Moon Bay", "Knollsbrook"];

const nearbyAreas = [
  { name: "Cooktop Repair Kanata", href: "/cooktop-repair/kanata" },
  { name: "Cooktop Repair Stittsville", href: "/cooktop-repair/stittsville" },
  { name: "Cooktop Repair Nepean", href: "/cooktop-repair/nepean" },
  { name: "Cooktop Repair Orleans", href: "/cooktop-repair/orleans" },
  { name: "Cooktop Repair Vanier", href: "/cooktop-repair/vanier" },
  { name: "Cooktop Repair Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
  { name: "Cooktop Repair Arnprior", href: "/cooktop-repair/arnprior" },
  { name: "Cooktop Repair Carleton Place", href: "/cooktop-repair/carleton-place" },
];

const highlights = [
  { title: "Walter Baker Sports Centre", description: "Recreation and fitness." },
  { title: "Chapman Mills", description: "River trails with wildlife." },
  { title: "Marketplace Barrhaven", description: "Food and shopping options." },
];

const faqs = [
  {
    question: "Can I book a same-day cooktop repair in Barrhaven?",
    answer: "Yes — subject to scheduling.",
  },
  {
    question: "Why does my cooktop keep tripping the breaker?",
    answer: "Likely a shorted element or overloaded wiring.",
  },
  {
    question: "Do you provide cooktop installation?",
    answer: "Yes — using existing hookups.",
  },
  {
    question: "Do you service nearby communities?",
    answer: "Yes — Stonebridge, Half Moon Bay, Chapman Mills.",
  },
  {
    question: "Do you offer clear pricing?",
    answer: "Yes — upfront estimates, no surprises.",
  },
];

const otherServices = [
  { name: "Washer Repair Barrhaven", href: "/washer-repair/barrhaven" },
  { name: "Dryer Repair Barrhaven", href: "/dryer-repair/barrhaven" },
  { name: "Dishwasher Repair Barrhaven", href: "/dishwasher-repair/barrhaven" },
  { name: "Fridge Repair Barrhaven", href: "/fridge-repair/barrhaven" },
  { name: "Freezer Repair Barrhaven", href: "/freezer-repair/barrhaven" },
  { name: "Oven Repair Barrhaven", href: "/oven-repair/barrhaven" },
  { name: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { name: "Cooktop Installation Barrhaven", href: "/cooktop-installation" },
];

export default function CooktopRepairBarrhavenPage() {
  return (
    <>
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <FaFire className="mx-auto mb-6 text-6xl" />
            <h1 className="heading-lg mb-4 text-white">Cooktop Repair Specialists in Barrhaven</h1>
            <p className="text-xl leading-relaxed mb-6 text-gray-100">
              Fixer Appliance Repair brings fast and reliable cooktop repair to Barrhaven homes — from
              townhouses to single-family kitchens. We service LG, Samsung, Whirlpool, GE, Maytag, and more.
            </p>
            <p className="text-lg text-gray-100">
              👉 Discover more about the community on our{" "}
              <Link href="/barrhaven" className="font-semibold text-white underline-offset-4 hover:underline">
                Local Barrhaven page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-12 text-center">
              Common Cooktop Issues We Fix in Barrhaven
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {commonIssues.map((issue) => (
                <div
                  key={issue.title}
                  className="rounded-lg border border-gray-200 p-6 transition-colors hover:border-primary-500"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{issue.title}</h3>
                  <p className="text-sm text-gray-600">{issue.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Cooktop Installation in Barrhaven</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-center">Planning a kitchen upgrade in Barrhaven?</p>
              <p className="text-center">
                Before replacing your cooktop, review our{" "}
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700">
                  repair vs. replace guide
                </Link>{" "}
                — it explains costs and when to replace.
              </p>
              <p className="text-center">
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700">
                  Repair or replace? →
                </Link>
              </p>
              <p className="text-center">
                For new units, we provide cooktop installation in Barrhaven. We'll connect and test it with
                your existing electrical setup.
              </p>
              <p className="text-center text-sm text-gray-600">👉 We don't provide new wiring or gas hookups.</p>
              <p className="text-center">
                <Link href="/cooktop-installation" className="btn-primary inline-block">
                  Learn more →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Why Choose Us</h2>
            <ul className="mx-auto max-w-2xl space-y-4 text-lg text-gray-700">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-primary-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Service Area</h2>
            <p className="text-lg text-gray-700">
              We provide appliance repair services across the entire Barrhaven area, including:
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-gray-800 shadow-sm"
                >
                  {area}
                </div>
              ))}
              <div className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-gray-800 shadow-sm">
                and surrounding neighbourhoods
              </div>
            </div>
            <p className="mt-8 text-lg text-gray-700">
              Beyond Barrhaven, we regularly repair cooktops in{" "}
              {nearbyAreas.map((area, index) => (
                <span key={area.name}>
                  <Link href={area.href} className="text-primary-600 hover:text-primary-700 underline">
                    {area.name}
                  </Link>
                  {index < nearbyAreas.length - 1 ? ", " : ". "}
                </span>
              ))}
              👉 For complete coverage, see our{" "}
              <Link href="/cooktop-repair" className="text-primary-600 hover:text-primary-700 underline">
                Cooktop Repair Ottawa
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">
              Take a Break in Barrhaven While We Repair Your Cooktop
            </h2>
            <p className="text-lg text-gray-700 mb-6">Here are a few local highlights:</p>
            <ul className="space-y-4 text-gray-700">
              {highlights.map((item) => (
                <li key={item.title} className="flex items-start">
                  <span className="mr-3 text-primary-600">•</span>
                  <span>
                    <strong>{item.title}</strong> – {item.description}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-700">
              👉{" "}
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Check events in Barrhaven
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">FAQ – Cooktop Repair in Barrhaven</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-primary-700">{faq.question}</h3>
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Schedule Your Cooktop Repair in Barrhaven</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-100">
            We're here to help — schedule your cooktop repair with Fixer Appliance Repair today:
          </p>
          <div className="mb-8 flex flex-col items-center justify-center gap-4 text-xl sm:flex-row">
            <a href="tel:6134136969" className="font-semibold text-white hover:underline">
              📞 Call/Text: 613-413-6969
            </a>
            <span className="hidden text-white sm:inline">|</span>
            <a href="mailto:service@fixerappliancerepair.ca" className="font-semibold text-white hover:underline">
              📧 Email: service@fixerappliancerepair.ca
            </a>
          </div>
          <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Book Service Now
          </Link>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Also Need Help With…</h2>
            <p className="text-center text-lg text-gray-700">
              Beyond cooktop repair, we also provide these services in Barrhaven:
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="rounded-lg bg-gray-50 p-4 text-center font-semibold text-primary-600 transition-colors hover:bg-primary-50"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <p className="mt-8 text-center text-gray-700">Need quick appliance help? We're ready in Barrhaven.</p>
            <p className="mt-4 text-center text-gray-800 font-semibold">
              Fixer Appliance Repair — your local cooktop repair team in Barrhaven.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
