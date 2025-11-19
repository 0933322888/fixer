import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Cooktop Repair in Arnprior - Reliable Local Service | Fixer",
  description:
    "Trusted cooktop repair in Arnprior, including Braeside, McNab, and White Lake. Fast service, upfront pricing, and a 90-day warranty for peace of mind.",
};

const commonIssues = [
  {
    title: "Cooktop not heating evenly",
    description:
      "In Arnprior homes, sensors or coils often fail over time. We'll recalibrate or replace them.",
  },
  {
    title: "No power reaching cooktop",
    description: "Blown fuses, bad outlets, or broken wiring are frequent issues. We'll restore power safely.",
  },
  {
    title: "Cooktop shuts off suddenly",
    description: "Overheating sensors or faulty relays can interrupt cooking. We'll diagnose and repair.",
  },
  {
    title: "Touch controls frozen",
    description: "Moisture inside the panel can disable controls. We'll repair or replace the interface.",
  },
  {
    title: "Cracked glass surface",
    description: "We'll swap in a new glass top so your kitchen looks great again.",
  },
  {
    title: "Breaker keeps tripping",
    description: "Short circuits or burnt elements often cause this. We'll fix it and test for safety.",
  },
];

const whyChooseUs = [
  "Skilled Arnprior cooktop specialists with 15+ years of experience",
  "Professional, friendly service every visit",
  "Transparent pricing explained upfront",
  "Covered by a 90-day service guarantee",
];

const serviceAreas = ["Downtown Arnprior", "Braeside", "McNab", "White Lake", "Sand Point"];

const nearbyAreas = [
  { name: "Kanata", href: "/cooktop-repair/kanata" },
  { name: "Stittsville", href: "/cooktop-repair/stittsville" },
  { name: "Nepean", href: "/cooktop-repair/nepean" },
  { name: "Orleans", href: "/cooktop-repair/orleans" },
  { name: "Vanier", href: "/cooktop-repair/vanier" },
  { name: "Barrhaven", href: "/cooktop-repair/barrhaven" },
  { name: "Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
  { name: "Carleton Place", href: "/cooktop-repair/carleton-place" },
];

const highlights = [
  { title: "Robert Simpson Park", description: "Scenic and relaxing." },
  { title: "Gillies Grove", description: "Historic conservation area." },
  { title: "Downtown Arnprior", description: "Shops, cafes, and more." },
];

const faqs = [
  {
    question: "Do you service cooktops in Arnprior?",
    answer: "Yes — also in White Lake and Braeside.",
  },
  {
    question: "Why is my cooktop sparking?",
    answer: "Often caused by loose wiring or faulty switches.",
  },
  {
    question: "Do you install cooktops?",
    answer: "Yes — with current electrical setup.",
  },
  {
    question: "Do you repair both coil and smooth-top cooktops?",
    answer: "Yes — all major types.",
  },
  {
    question: "Do you provide warranty coverage?",
    answer: "Yes — 90-day labour warranty.",
  },
];

const otherServices = [
  { name: "Washer Repair Arnprior", href: "/washer-repair/arnprior" },
  { name: "Dryer Repair Arnprior", href: "/dryer-repair/arnprior" },
  { name: "Dishwasher Repair Arnprior", href: "/dishwasher-repair/arnprior" },
  { name: "Fridge Repair Arnprior", href: "/fridge-repair/arnprior" },
  { name: "Freezer Repair Arnprior", href: "/freezer-repair/arnprior" },
  { name: "Oven Repair Arnprior", href: "/oven-repair/arnprior" },
  { name: "Microwave Repair Arnprior", href: "/microwave-repair/arnprior" },
  { name: "Cooktop Installation Arnprior", href: "/cooktop-installation" },
];

export default function CooktopRepairArnpriorPage() {
  return (
    <>
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-4 text-white"><FaFire className="text-[30px] mb-2 inline-block" /> Arnprior's Local Cooktop Repair Team</h1>
            <p className="text-xl leading-relaxed text-gray-100">
              From downtown Arnprior to Braeside and White Lake, our team repairs electric cooktops of all
              types — restoring safe, dependable cooking. We service LG, Samsung, Whirlpool, GE, Maytag, and
              more.
            </p>
            <p className="mt-6 text-lg text-gray-100">
              Read more about the community on our{" "}
              <Link href="/arnprior" className="font-semibold text-white underline-offset-4 hover:underline">
                Local Arnprior page
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
              Common Cooktop Issues We Fix in Arnprior
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
            <h2 className="heading-md mb-6 text-center">Cooktop Installation in Arnprior</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-center">Need a new cooktop in Arnprior?</p>
              <p className="text-center">
                Check out our repair vs. replace guide before buying — it breaks down common failures and
                replacement value.
              </p>
              <p className="text-center">
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700">
                  Repair or replace? →
                </Link>
              </p>
              <p className="text-center">
                Once you've purchased, we handle cooktop installation in Arnprior. We'll install and test it
                using the current hookups.
              </p>
              <p className="text-center text-sm text-gray-600">(!) No new wiring or gas installations included.</p>
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
              We provide appliance repair services across the entire Arnprior area, including:
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
                and surrounding rural neighbourhoods
              </div>
            </div>
            <p className="mt-8 text-lg text-gray-700">
              Our Arnprior cooktop repair team also works across{" "}
              {nearbyAreas.map((area, index) => (
                <span key={area.name}>
                  <Link href={area.href} className="text-primary-600 hover:text-primary-700 underline">
                    {area.name}
                  </Link>
                  {index < nearbyAreas.length - 1 ? ", " : ". "}
                </span>
              ))}
              For details on all areas we serve, visit the{" "}
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
              Take a Break in Arnprior While We Fix Your Cooktop
            </h2>
            <p className="text-lg text-gray-700 mb-6">Spend your wait discovering:</p>
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
              <a
                href="https://arnprior.ca/en/explore-and-play/events-calendar.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                See what's happening in Arnprior
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">FAQ – Cooktop Repair in Arnprior</h2>
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
          <h2 className="heading-md mb-4 text-white">Schedule Your Cooktop Repair in Arnprior</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-100">
            Cooktop problems? Contact Fixer Appliance Repair today for fast local help:
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
            <h2 className="heading-md mb-8 text-center">Also Need Help With…</h2>
            <p className="text-center text-lg text-gray-700">
              We fix more than just cooktops — here are our other services in Arnprior:
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
            <p className="mt-8 text-center text-gray-700">Looking for another appliance repaired? We're here for Arnprior homes.</p>
            <p className="mt-4 text-center text-gray-800 font-semibold">
              Fixer Appliance Repair — your cooktop repair experts in Arnprior.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
