import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Cooktop Repair in Carleton Place - Fast, Local Service | Fixer",
  description:
    "Expert cooktop repair in Carleton Place, from Riverside Park to Mississippi Quays. Same or next-day service, honest pricing, and a 90-day warranty on all work.",
};

const commonIssues = [
  {
    title: "Cooktop won't start",
    description:
      "Power supply problems or faulty control boards often keep the unit off. We'll track it down.",
  },
  {
    title: "Burner cycling too often",
    description: "A worn infinite switch may cause burners to turn on and off randomly. We'll replace it.",
  },
  {
    title: "Glass top cracked from heavy pans",
    description: "We'll install a brand-new glass surface safely.",
  },
  {
    title: "Cooktop smells electrical",
    description: "Signs of wiring damage or failing insulation. We'll inspect and repair to prevent hazards.",
  },
  {
    title: "Cooktop won't turn off",
    description: "A stuck relay or switch can keep heat flowing. We'll fix it fast.",
  },
  {
    title: "No heat sounds when on",
    description: "If burners stay silent, it may be disconnected wiring. We'll reconnect and restore heating.",
  },
];

const whyChooseUs = [
  "Local Carleton Place team with experience across all major cooktop brands",
  "Same-day and next-day service options",
  "Honest pricing without upselling",
  "90-day warranty included on labour",
];

const serviceAreas = ["Carleton Place West", "Carleton Place East", "Riverside Park", "Mississippi Quays"];

const nearbyAreas = [
  { name: "Kanata", href: "/cooktop-repair/kanata" },
  { name: "Stittsville", href: "/cooktop-repair/stittsville" },
  { name: "Nepean", href: "/cooktop-repair/nepean" },
  { name: "Orleans", href: "/cooktop-repair/orleans" },
  { name: "Vanier", href: "/cooktop-repair/vanier" },
  { name: "Barrhaven", href: "/cooktop-repair/barrhaven" },
  { name: "Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
  { name: "Arnprior", href: "/cooktop-repair/arnprior" },
];

const highlights = [
  { title: "Riverside Park", description: "Scenic riverside paths." },
  { title: "Downtown Carleton Place", description: "Shopping and restaurants to enjoy." },
  { title: "Beckwith Heritage Museum", description: "History and culture in one stop." },
];

const faqs = [
  {
    question: "Do you offer same-day cooktop repair in Carleton Place?",
    answer: "When possible, yes.",
  },
  {
    question: "Why is my cooktop glass cracked?",
    answer: "Usually from dropped pans — we replace glass tops.",
  },
  {
    question: "Do you install new cooktops?",
    answer: "Yes — using existing hookups.",
  },
  {
    question: "Do you also cover nearby areas?",
    answer: "Yes — Beckwith, Franktown, and others.",
  },
  {
    question: "Is the repair under warranty?",
    answer: "Yes — all work has a 90-day warranty.",
  },
];

const otherServices = [
  { name: "Washer Repair Carleton Place", href: "/washer-repair/carleton-place" },
  { name: "Dryer Repair Carleton Place", href: "/dryer-repair/carleton-place" },
  { name: "Dishwasher Repair Carleton Place", href: "/dishwasher-repair/carleton-place" },
  { name: "Fridge Repair Carleton Place", href: "/fridge-repair/carleton-place" },
  { name: "Freezer Repair Carleton Place", href: "/freezer-repair/carleton-place" },
  { name: "Oven Repair Carleton Place", href: "/oven-repair/carleton-place" },
  { name: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
  { name: "Cooktop Installation Carleton Place", href: "/cooktop-installation" },
];

export default function CooktopRepairCarletonPlacePage() {
  return (
    <>
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <FaFire className="mx-auto mb-6 text-6xl" />
            <h1 className="heading-lg mb-4 text-white">Reliable Cooktop Repair in Carleton Place</h1>
            <p className="text-xl leading-relaxed text-gray-100">
              Cooktop not heating properly or sparking? Fixer Appliance Repair offers quick, professional
              service for families throughout Carleton Place. We service LG, Samsung, Whirlpool, GE, Maytag,
              and more.
            </p>
            <p className="mt-6 text-lg text-gray-100">
              Discover more about the community on our{" "}
              <Link
                href="/carleton-place"
                className="font-semibold text-white underline-offset-4 hover:underline"
              >
                Local Carleton Place page
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
              Common Cooktop Issues We Fix in Carleton Place
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
            <h2 className="heading-md mb-6 text-center">Cooktop Installation in Carleton Place</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-center">Upgrading your cooktop in Carleton Place?</p>
              <p className="text-center">
                Before replacing, check our repair vs. replace guide — it compares costs and typical lifespan.
              </p>
              <p className="text-center">
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700">
                  {"Repair or replace? ->"}
                </Link>
              </p>
              <p className="text-center">
                For new purchases, we provide cooktop installation in Carleton Place. We'll mount and test it
                using existing electrical hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                (!) We don't add new high-voltage wiring or gas lines.
              </p>
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
              We provide appliance repair services across the entire Carleton Place area, including:
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
              If you're in Carleton Place or in{" "}
              {nearbyAreas.map((area, index) => (
                <span key={area.name}>
                  <Link href={area.href} className="text-primary-600 hover:text-primary-700 underline">
                    {area.name}
                  </Link>
                  {index < nearbyAreas.length - 1 ? ", " : ", we've got your cooktop repair needs covered. "}
                </span>
              ))}
              For a full overview of our services, check the{" "}
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
              Take a Break in Carleton Place While We Fix Your Cooktop
            </h2>
            <p className="text-lg text-gray-700 mb-6">Make the most of your wait with these places:</p>
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
                href="https://www.carletonplace.ca/en/explore-and-play/events-calendar.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                See events in Carleton Place
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">FAQ - Cooktop Repair in Carleton Place</h2>
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
          <h2 className="heading-md mb-4 text-white">Schedule Your Cooktop Repair in Carleton Place</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-100">
            Burners acting up? Don't wait — text or call Fixer Appliance Repair to book service:
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
              Cooktop issues aren't the only thing we handle — here are more services in Carleton Place:
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
            <p className="mt-8 text-center text-gray-700">Need another appliance serviced? We're ready in Carleton Place.</p>
            <p className="mt-4 text-center text-gray-800 font-semibold">
              Fixer Appliance Repair — your cooktop repair pros in Carleton Place.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
