import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
export const metadata: Metadata = {
  title: "Cooktop Repair Orleans - Fast & Reliable Cooktop Service | Fixer",
  description:
    "Fixer Appliance Repair provides expert cooktop repair in Orleans. From cracked glass and faulty burners to wiring issues and touch panel failures, we service Whirlpool, Samsung, LG, GE & more. Same-day service, upfront pricing, 90-day warranty.",
};

const commonIssues = [
  {
    title: "Cooktop not heating at all",
    description:
      "In Orleans homes, this usually points to a dead element or faulty switch. We'll test and replace the bad part.",
  },
  {
    title: "Uneven cooking",
    description:
      "If one burner runs hotter than another, a failing sensor or coil may be the cause. We'll restore balanced heating.",
  },
  {
    title: "Cooktop trips the breaker",
    description: "Shorted wiring or overloaded circuits often cause this. We'll trace the fault and fix it safely.",
  },
  {
    title: "Touch panel won't respond",
    description:
      "Moisture or failed control boards are common. We'll repair or replace the interface so you can adjust settings again.",
  },
  {
    title: "Glass surface cracked",
    description: "We'll safely remove and install a new top so your cooktop looks and works like new.",
  },
  {
    title: "Burning smell while cooking",
    description: "Damaged wiring or element insulation may be to blame. We'll make sure it's safe to use.",
  },
];

const whyChooseUs = [
  "Local Orleans cooktop repair and installation pros",
  "Same-day and next-day appointments available",
  "Clear, upfront pricing — no hidden charges",
  "Every job backed by a 90-day labour warranty",
];

const serviceAreas = ["Fallingbrook", "Avalon", "Queenswood Heights", "Chapel Hill", "Convent Glen"];

const nearbyAreas = [
  { name: "Kanata", href: "/cooktop-repair/kanata" },
  { name: "Stittsville", href: "/cooktop-repair/stittsville" },
  { name: "Nepean", href: "/cooktop-repair/nepean" },
  { name: "Vanier", href: "/cooktop-repair/vanier" },
  { name: "Barrhaven", href: "/cooktop-repair/barrhaven" },
  { name: "Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
  { name: "Arnprior", href: "/cooktop-repair/arnprior" },
  { name: "Carleton Place", href: "/cooktop-repair/carleton-place" },
];

const highlights = [
  { title: "Petrie Island", description: "Sandy beaches and peaceful walks." },
  { title: "Shenkman Arts Centre", description: "Enjoy a performance or exhibit." },
  { title: "Place d'Orleans", description: "Plenty of stores and restaurants." },
];

const faqs = [
  {
    question: "Can I get same-day cooktop repair in Orleans?",
    answer: "Often yes — depending on parts and schedule.",
  },
  {
    question: "Why is my cooktop not heating properly?",
    answer: "Could be a faulty element or control switch.",
  },
  {
    question: "Do you install new cooktops?",
    answer: "Yes — with existing hookups.",
  },
  {
    question: "Do you service nearby areas?",
    answer: "Yes — Fallingbrook, Chapel Hill, Avalon.",
  },
  {
    question: "Do you provide warranty?",
    answer: "Yes — 90-day labour warranty on repairs.",
  },
];

const otherServices = [
  { name: "Washer Repair Orleans", href: "/washer-repair/orleans" },
  { name: "Dryer Repair Orleans", href: "/dryer-repair/orleans" },
  { name: "Dishwasher Repair Orleans", href: "/dishwasher-repair/orleans" },
  { name: "Fridge Repair Orleans", href: "/fridge-repair/orleans" },
  { name: "Freezer Repair Orleans", href: "/freezer-repair/orleans" },
  { name: "Oven Repair Orleans", href: "/oven-repair/orleans" },
  { name: "Microwave Repair Orleans", href: "/microwave-repair/orleans" },
  { name: "Cooktop Installation Orleans", href: "/cooktop-installation" },
];

export default function CooktopRepairOrleansPage() {
  return (
    <>
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-4 text-white"><FaFire className="text-[30px] mb-2 inline-block" /> Orleans Cooktop Repair You Can Count On</h1>
            <p className="text-xl leading-relaxed text-gray-100">
              From glass tops to coil burners, Fixer Appliance Repair provides expert cooktop repair in
              Orleans homes and apartments. Fast, local, and reliable service is just a call away. We service
              LG, Samsung, Whirlpool, GE, Maytag, and more.
            </p>
            <p className="mt-6 text-lg text-gray-100">
              👉 Find more about the neighbourhood on our{" "}
              <Link href="/orleans" className="font-semibold text-white underline-offset-4 hover:underline">
                Local Orleans page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-12 text-center">Common Cooktop Issues We Fix in Orleans</h2>
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
            <h2 className="heading-md mb-6 text-center">Cooktop Installation in Orleans</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-center">Looking for cooktop installation in Orleans?</p>
              <p className="text-center">
                Before replacing your old unit, review our repair vs. replace guide — it covers common repairs,
                costs, and lifespan.
              </p>
              <p className="text-center">
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700">
                  {"Repair or replace? ->"}
                </Link>
              </p>
              <p className="text-center">
                Already have a new one? We provide cooktop installation in Orleans. We'll set it up and test it
                using your existing hookups.
              </p>
              <p className="text-center text-sm text-gray-600">👉 We don't run new wiring or install gas connections.</p>
              <p className="text-center">
                <Link href="/cooktop-installation" className="btn-primary inline-block">
                  {"Learn more ->"}
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
                  <span className="mt-2 inline-block h-6 w-6 text-xl" aria-hidden="true">
                    ✅
                  </span>
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
              We provide appliance repair services across the entire Orleans area, including:
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
              Our Orleans cooktop service team also supports customers in{" "}
              {nearbyAreas.map((area, index) => (
                <span key={area.name}>
                  <Link href={area.href} className="text-primary-600 hover:text-primary-700 underline">
                    {area.name}
                  </Link>
                  {index < nearbyAreas.length - 1 ? ", " : ". "}
                </span>
              ))}
              👉 For full coverage of the region, check our{" "}
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
              Take a Break in Orleans While We Repair Your Cooktop
            </h2>
            <p className="text-lg text-gray-700 mb-6">Use the time to explore local highlights:</p>
            <ul className="space-y-4 text-gray-700">
              {highlights.map((item) => (
                <li key={item.title} className="flex items-start">
                  <span className="mr-3 text-primary-600">•</span>
                  <span>
                    <strong>{item.title}</strong> - {item.description}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-700">
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Explore Orleans events this month
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">FAQ - Cooktop Repair in Orleans</h2>
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
          <h2 className="heading-md mb-4 text-white">Schedule Your Cooktop Repair in Orleans</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-100">
            Cooktop not heating evenly? Call Fixer Appliance Repair today to schedule service:
          </p>
          <div className="mb-8 flex flex-col items-center justify-center gap-4 text-xl sm:flex-row">
            <a href="tel:6134136969" className="font-semibold text-white hover:underline">
              Call/Text: 613-413-6969
            </a>
            <span className="hidden text-white sm:inline">|</span>
            <a href="mailto:service@fixerappliancerepair.ca" className="font-semibold text-white hover:underline">
              Email: service@fixerappliancerepair.ca
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
            <h2 className="heading-md mb-8 text-center">Also Need Help With...</h2>
            <p className="text-center text-lg text-gray-700">
              Our expertise goes beyond cooktops — here's what else we do in Orleans:
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
            <p className="mt-8 text-center text-gray-700">
              Looking for another service? We've got Orleans covered.
            </p>
            <p className="mt-4 text-center text-gray-800 font-semibold">
              Fixer Appliance Repair — your friendly cooktop repair team in Orleans.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
