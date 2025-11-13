import { Metadata } from "next";
import Link from "next/link";
import BenefitsSection from "@/components/BenefitsSection";
import { FaMapMarkerAlt, FaUtensils, FaTree, FaBook } from "react-icons/fa";

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

const serviceAreas = [
  "Kanata",
  "Stittsville",
  "Nepean",
  "Orleans",
  "Vanier",
  "Barrhaven",
  "Carp",
  "Arnprior",
  "Carleton Place",
  "Mississippi Mills",
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
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white">
              Microwave Repair in Ottawa 
              <br /> Fast Fixes, No Sparks
            </h1>
            <p className="text-xl text-gray-100 mb-6">
              Microwave won't start, heat, or spin? Fixer Appliance Repair offers expert microwave repair in Ottawa — built-ins and over-the-range models included.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              We work on LG, Samsung, Whirlpool, GE, Maytag, Frigidaire, and more. Same-day service available with a 90-day warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                Book Online
              </Link>
              <a
                href="tel:613-413-6969"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-500"
              >
                Call us
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

      <BenefitsSection applianceName="Microwave" benefits={whyChooseUs} />

      {/* Repair or Replace */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Repair or Replace?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Microwaves often fail due to a single component like the magnetron or door switch. We'll help you
              decide when it's smarter to repair than replace — and give you an honest estimate either way.
            </p>
            <Link href="/repair-vs-replace" className="btn-primary">
              Read Our Repair vs. Replace Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Microwave Installation CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">New Microwave? We Can Install It</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Got a new microwave? We also provide microwave installation in Ottawa with same-day service available in most areas.
          </p>
          <Link href="/microwave-installation" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Learn About Microwave Installation
          </Link>
        </div>
      </section>

      {/* Brands We Repair */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8"> <Link href="/brands" className="text-primary-600 hover:text-primary-700 font-semibold">Brands We Repair</Link></h2>
            <p className="text-center text-gray-700 mb-8">
              We service countertop and built-in microwaves from leading and specialty brands.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {brands.map((brand, index) => (
                <Link
                  key={index}
                  href={brand.href}
                  className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors"
                >
                  <p className="font-semibold text-gray-900 hover:text-primary-700">{brand.name}</p>
                </Link>
              ))}
            </div>
            <p className="text-center text-gray-700">
              Even less common brands? We've seen them. Reach out with your model number.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">We Repair Microwaves Across Ottawa</h2>
            <p className="text-center text-gray-700 mb-8">
              We proudly repair microwaves across all Ottawa neighborhoods, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {serviceAreas.map((area, index) => {
                const slug = area.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link 
                    key={index} 
                    href={`/microwave-repair/${slug}`}
                    className="text-center p-3 bg-white rounded-lg shadow-sm hover:bg-primary-50 hover:shadow-md transition-all"
                  >
                    <p className="text-gray-900 font-medium hover:text-primary-700">{area}</p>
                  </Link>
                );
              })}
            </div>
            <p className="text-center text-gray-700">
              If you don't see your area listed — feel free to ask. Chances are, we're already nearby.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">Frequently Asked Questions (FAQs)</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Q: {faq.question}</h3>
                  <p className="text-gray-700">A: {faq.answer}</p>
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
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-accent-500 flex items-start gap-4">
                <FaMapMarkerAlt className="text-accent-500 text-xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Westboro Village</h3>
                  <p className="text-gray-600 text-sm">Browse local shops, bakeries, and wellness spots</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-accent-500 flex items-start gap-4">
                <FaTree className="text-accent-500 text-xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Remic Rapids Park</h3>
                  <p className="text-gray-600 text-sm">Riverside art installations and bike paths</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-accent-500 flex items-start gap-4">
                <FaUtensils className="text-accent-500 text-xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Stella Luna Gelato Café</h3>
                  <p className="text-gray-600 text-sm">Award-winning and worth it</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-accent-500 flex items-start gap-4">
                <FaBook className="text-accent-500 text-xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Ottawa Tool Library</h3>
                  <p className="text-gray-600 text-sm">Rent tools or explore creative workshops</p>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-gradient-to-r from-accent-50 to-primary-50 border border-accent-200 rounded-lg p-6 text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Want to catch a live event or exhibit?
              </p>
              <p className="text-gray-700 mb-3">
                Check what's happening this week:
              </p>
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-600 font-semibold hover:text-accent-700 hover:underline transition-colors"
              >
                Ottawa Tourism Events
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
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

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Also Need Help With...</h2>
            <p className="text-center text-gray-700 mb-8">
              We do more than just microwave repair — check out our other Ottawa services:
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors font-semibold"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

