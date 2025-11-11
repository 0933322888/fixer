import { Metadata } from "next";
import Link from "next/link";
import {
  FaBolt,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Microwave Repair in Ottawa – Fast Fixes for All Brands | Fixer",
  description:
    "Expert microwave repair in Ottawa — built-in, countertop, and over-the-range models. We service Samsung, LG, Whirlpool, GE, and more. Same-day service, 90-day warranty.",
  keywords:
    "microwave repair Ottawa, microwave service Ottawa, built-in microwave repair, over the range microwave repair, Fixer Appliance Repair",
};

const commonIssues = [
  {
    title: "Microwave not heating",
    description:
      "Likely a failed magnetron, capacitor, or diode — we test and replace them.",
  },
  {
    title: "Turntable not spinning",
    description:
      "Could be a worn motor or a broken coupler — we replace it.",
  },
  {
    title: "Microwave sparks inside",
    description: "Often caused by a damaged waveguide cover or metal debris.",
  },
  {
    title: "Stops mid-cycle",
    description: "Thermal fuse, control board, or door switch failure is common.",
  },
  {
    title: "Display not working",
    description:
      "We replace control panels, touchpads, or faulty wiring.",
  },
  {
    title: "Microwave door won’t close",
    description: "Broken latch or alignment issue — we adjust or replace it.",
  },
  {
    title: "Strange humming sound",
    description:
      "Indicates high-voltage component stress — we diagnose safely.",
  },
  {
    title: "Burning smell",
    description:
      "Could be wiring, food debris, or overheated parts — we clean and repair.",
  },
  {
    title: "Buttons not responding",
    description: "Control board or keypad membrane needs service.",
  },
  {
    title: "Microwave light not working",
    description: "We replace internal bulbs or switches.",
  },
  {
    title: "Microwave trips breaker",
    description: "Shorted components or grounding faults — we fix them.",
  },
  {
    title: "Microwave door stuck closed",
    description: "Latch or lock assembly failure — we unlock and replace.",
  },
  {
    title: "Arcing or popping noise",
    description:
      "Faulty stirrer fan or metal contamination inside.",
  },
  {
    title: "Microwave runs with door open",
    description: "Major safety risk — we replace faulty switches immediately.",
  },
  {
    title: "Interior paint peeling",
    description:
      "We clean, treat rust, and recoat where needed.",
  },
];

const whyChooseUs = [
  "We repair countertop, built-in, and OTR microwaves",
  "Fast turnaround on common issues",
  "Clear communication and dependable work",
  "We respect your space and schedule",
  "No pressure — just straightforward service",
];

const brands = [
  "Panasonic",
  "LG",
  "Samsung",
  "Whirlpool",
  "GE",
  "Frigidaire",
  "Sharp",
  "Maytag",
  "Kenmore",
  "And more — let us know your model",
];

const areas = [
  { name: "Kanata", href: "/microwave-repair/kanata" },
  { name: "Carp", href: "/microwave-repair/carp" },
  { name: "Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Nepean", href: "/microwave-repair/nepean" },
  { name: "Orleans", href: "/microwave-repair/orleans" },
  { name: "Barrhaven", href: "/microwave-repair/barrhaven" },
  { name: "Vanier", href: "/microwave-repair/vanier" },
  { name: "Arnprior", href: "/microwave-repair/arnprior" },
  { name: "Carleton Place", href: "/microwave-repair/carleton-place" },
  { name: "Mississippi Mills", href: "/microwave-repair/mississippi-mills" },
];

const faqs = [
  {
    question: "Do you repair over-the-range microwaves?",
    answer: "Yes — we service built-in and over-the-range models.",
  },
  {
    question: "My microwave isn’t heating — can it be fixed?",
    answer: "Yes — usually it’s a magnetron or door switch issue.",
  },
  {
    question: "Do you repair drawer microwaves?",
    answer: "We handle select models — contact us with the brand.",
  },
  {
    question: "Can you replace a microwave turntable motor?",
    answer: "Absolutely — it’s a common repair we perform.",
  },
  {
    question: "How much does microwave repair cost?",
    answer: "Usually $100–$200 depending on parts and labor.",
  },
  {
    question: "Do you install new microwaves?",
    answer: "Yes — we uninstall and install most electric models.",
  },
  {
    question: "How long does a microwave repair take?",
    answer: "Usually under an hour if parts are on hand.",
  },
  {
    question: "What if the buttons or display don’t work?",
    answer: "We diagnose and fix control panel issues too.",
  },
  {
    question: "Is repair worth it or should I buy new?",
    answer: "We’ll help you decide based on age, cost, and usage.",
  },
  {
    question: "Do you warranty microwave repairs?",
    answer: "Yes — our standard 90-day coverage applies.",
  },
];

const services = [
  { label: "Washer Repair Ottawa", href: "/washer-repair" },
  { label: "Dryer Repair Ottawa", href: "/dryer-repair" },
  { label: "Dishwasher Repair Ottawa", href: "/dishwasher-repair" },
  { label: "Fridge Repair Ottawa", href: "/fridge-repair" },
  { label: "Freezer Repair Ottawa", href: "/freezer-repair" },
  { label: "Oven Repair Ottawa", href: "/oven-repair" },
  { label: "Electric Cooktop Repair Ottawa", href: "/cooktop-repair" },
  { label: "Microwave Installation Ottawa", href: "/oven-installation" },
];

export default function MicrowaveRepairPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaBolt className="text-5xl text-white" />
            </div>
            <h1 className="heading-xl text-white mb-6">
              Microwave Repair in Ottawa – Fast Fixes, No Sparks
            </h1>
            <p className="text-xl text-gray-100 mb-6">
              Microwave won’t start, heat, or spin? Fixer Appliance Repair offers expert microwave repair in Ottawa — built-ins and over-the-range models included.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              We work on LG, Samsung, Whirlpool, GE, Maytag, Frigidaire, and more. Same-day service available with a 90-day warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-accent-500 hover:bg-accent-600">
                Book Online
              </Link>
              <a
                href="tel:+16135550199"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-800"
              >
                Call or Text (613) 555-0199
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-6">Common Problems We Fix</h2>
            <p className="text-lg text-gray-700 mb-8">
              No matter the brand or model, we find the fault quickly and repair it safely.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonIssues.map((issue) => (
                <div key={issue.title} className="bg-gray-50 border border-gray-100 rounded-lg p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <FaCheckCircle className="text-accent-500 text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-primary-800">{issue.title}</h3>
                      <p className="text-gray-600 mt-2">{issue.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Why Choose Fixer for Microwave Repair</h2>
            <p className="text-lg text-gray-700 mb-10">
              From diagnostics to clean-up, we make microwave repair simple, safe, and fast.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {whyChooseUs.map((item) => (
              <div
                key={item}
                className="bg-white border border-gray-200 rounded-lg p-5 text-center shadow-sm"
              >
                <p className="font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair vs Replace */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-4">Repair or Replace?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Microwaves often fail due to a single component like the magnetron or door switch. We’ll help you
              decide when it’s smarter to repair than replace — and give you an honest estimate either way.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Services */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-4">Installation Services</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Need an over-the-range microwave installed? We handle venting, brackets, and electrical connections.
              Microwave installation is available as a standalone service or alongside your repair.
            </p>
          </div>
        </div>
      </section>

      {/* Brands We Repair */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Brands We Repair</h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              We service countertop and built-in microwaves from leading and specialty brands.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {brands.map((brand) => (
                <div
                  key={brand}
                  className="bg-gray-50 border border-gray-100 p-4 rounded-lg text-center text-gray-700 font-medium shadow-sm"
                >
                  {brand}
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6">
              Even less common brands? We’ve seen them. Reach out with your model number.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <FaMapMarkerAlt className="text-accent-500 text-3xl" />
              <h2 className="heading-md mb-0">We Serve These Areas</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8">
              Our Ottawa-based microwave repair service includes all major suburbs and nearby towns.
              Need support outside these areas? Let us know — we may still be able to help.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {areas.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-700 font-medium hover:border-accent-500 hover:text-accent-600 transition"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <FaQuestionCircle className="text-accent-500 text-3xl" />
              <h2 className="heading-md mb-0">FAQ – Microwave Repair in Ottawa</h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border border-gray-200 rounded-lg p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-primary-800">{faq.question}</h3>
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Things to Do */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-4">Things to Do in Ottawa While We Repair Your Microwave</h2>
            <p className="text-lg text-gray-700 mb-6">
              Microwave repairs don’t take long — but you still deserve a little break.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>Westboro Village – browse local shops, bakeries, and wellness spots</li>
              <li>Remic Rapids Park – riverside art installations and bike paths</li>
              <li>Stella Luna Gelato Café – award-winning and worth it</li>
              <li>Ottawa Tool Library – rent tools or explore creative workshops</li>
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              Want to catch a live event or exhibit? Check what’s happening this week:
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 font-medium ml-2 hover:underline"
              >
                Ottawa Tourism Events
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4 text-white">Book Your Microwave Repair in Ottawa</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            No more cold leftovers! Book your microwave repair with Fixer today — fast, affordable, and done right across Ottawa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16135550199"
              className="btn-primary bg-white text-accent-600 hover:bg-gray-100"
            >
              Call or Text (613) 555-0199
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

      {/* Additional Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">We Also Offer</h2>
            <p className="text-lg text-gray-700 mb-6">
              Fixer provides expert repair services across Ottawa for:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-gray-700 hover:border-accent-500 hover:text-accent-600 transition"
                >
                  <FaTools className="text-accent-500" />
                  <span>{service.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

