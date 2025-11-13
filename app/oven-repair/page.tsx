import { Metadata } from "next";
import Link from "next/link";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { FaMapMarkerAlt, FaUtensils, FaTree, FaBook } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Electric Oven Repair Ottawa – Fast, Reliable Appliance Service | Fixer",
  description: "Fixer Appliance Repair provides expert electric oven repair in Ottawa. From heating failures and uneven baking to control board faults, we fix Whirlpool, Samsung, LG, GE, Frigidaire & more. Same-day service with a 90-day warranty.",
  keywords: "electric oven repair Ottawa, oven not heating, uneven baking, oven repair service, Whirlpool oven repair, Samsung oven repair, LG oven repair",
};

const benefits = [
  "We specialize in electric ovens of all makes and models",
  "Fast, safe repairs done right the first time",
  "Transparent pricing and no guesswork",
  "We bring parts to speed up your service",
  "Clear communication from start to finish",
  "90-day warranty on all repairs and parts",
];

const commonIssues = [
  {
    issue: "Oven not heating",
    description: "Usually caused by a failed bake or broil element — we test and replace them fast.",
  },
  {
    issue: "Uneven baking",
    description: "Could be a bad fan, faulty sensor, or weak bottom element.",
  },
  {
    issue: "Takes too long to preheat",
    description: "We test element strength and temperature sensors.",
  },
  {
    issue: "Oven shuts off mid-use",
    description: "May be overheating protection or control board failure.",
  },
  {
    issue: "Oven door won't close properly",
    description: "We adjust hinges and replace seals to restore heat retention.",
  },
  {
    issue: "Burning smell when heating",
    description: "Could be melted wiring or burned-out insulation — we inspect thoroughly.",
  },
  {
    issue: "Display shows error code",
    description: "We scan codes and repair the underlying issue.",
  },
  {
    issue: "Light not turning on",
    description: "We replace bulbs or fix the door switch.",
  },
  {
    issue: "Clock and timer not working",
    description: "Control panel or board issue — we replace components.",
  },
  {
    issue: "Food burns too quickly",
    description: "Could be calibration or sensor drift.",
  },
  {
    issue: "Self-cleaning won't start",
    description: "Latch sensor or main board may be to blame.",
  },
  {
    issue: "Oven won't turn off",
    description: "We fix stuck relays or timer board failures.",
  },
  {
    issue: "Beeping won't stop",
    description: "Faulty alert sensors — we silence them permanently.",
  },
  {
    issue: "Oven door locked",
    description: "We manually unlock and repair the latch system.",
  },
  {
    issue: "Oven not keeping temperature",
    description: "Temperature sensor or board misreading actual heat.",
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

const relatedServices = [
  { name: "Washer Repair Ottawa", href: "/washer-repair" },
  { name: "Dryer Repair Ottawa", href: "/dryer-repair" },
  { name: "Fridge Repair Ottawa", href: "/fridge-repair" },
  { name: "Freezer Repair Ottawa", href: "/freezer-repair" },
  { name: "Dishwasher Repair Ottawa", href: "/dishwasher-repair" },
  { name: "Microwave Repair Ottawa", href: "/microwave-repair" },
  { name: "Cooktop Repair Ottawa", href: "/stove-repair" },
  { name: "Oven Installation Ottawa", href: "/oven-installation" },
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
    question: "How much does oven repair cost?",
    answer: "$130–$260 is typical, depending on the issue.",
  },
  {
    question: "Do you repair electric ovens only?",
    answer: "Yes — we specialize in electric ovens and cooktops.",
  },
  {
    question: "Can you fix ovens that won't heat up?",
    answer: "Yes — common fixes include elements, fuses, and thermostats.",
  },
  {
    question: "What if the oven heats unevenly?",
    answer: "We'll check the convection fan, sensor, and control board.",
  },
  {
    question: "Do you service wall ovens?",
    answer: "Absolutely — including built-in and double ovens.",
  },
  {
    question: "Can you fix touchpad and control issues?",
    answer: "Yes — we handle electronic and digital failures.",
  },
  {
    question: "Do you carry oven parts with you?",
    answer: "We stock common elements and fuses. Others can be ordered.",
  },
  {
    question: "Is it worth repairing a 10+ year-old oven?",
    answer: "If the body is solid — often yes. We'll advise after diagnosis.",
  },
  {
    question: "Do you install new ovens?",
    answer: "Yes — we uninstall and professionally install replacements.",
  },
  {
    question: "Do you test everything after repairs?",
    answer: "Always. We test heat, safety, and controls before we leave.",
  },
];

export default function OvenRepairPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
      <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white">Electric Oven Repair Ottawa – Precision You Can Taste</h1>
            <p className="text-xl text-gray-100 mb-8">
              If your oven won't heat, bake evenly, or keeps shutting off — call Fixer Appliance Repair. We service Ottawa homes with expert electric oven repair, from element issues to control board faults. We fix LG, Samsung, Whirlpool, GE, Frigidaire, Maytag, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                Book Online
              </Link>
              <a href="tel:613-413-6969" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500">
                Call us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-12 text-center">Common Problems We Fix</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonIssues.map((item, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-lg hover:border-primary-500 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.issue}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection applianceName="Oven" benefits={benefits} />

      {/* Repair or Replace */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Repair or Replace?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Faulty heating elements, unresponsive controls — most oven problems are repairable. 
              Before you invest in a new one, explore whether a fix is the better option. Our expert 
              technicians will provide honest advice on the most cost-effective solution for your situation.
            </p>
            <Link href="/repair-vs-replace" className="btn-primary">
              Read Our Repair vs. Replace Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Oven Installation CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">New Oven? We Can Install It</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Got a new oven? We also provide oven installation in Ottawa with same-day service available in most areas.
          </p>
          <Link href="/oven-installation" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Learn About Oven Installation
          </Link>
        </div>
      </section>

      {/* Brands We Repair */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8"> <Link href="/brands" className="text-primary-600 hover:text-primary-700 font-semibold">Brands We Repair</Link></h2>
            <p className="text-center text-gray-700 mb-8">
              We fix electric ovens from all major brands. Whether it's built-in, wall-mounted, or freestanding — we've got you covered.
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
              Not sure about your model? No problem. We'll identify the issue and explain your options.
            </p>
          </div>
        </div>
      </section>

      <CTASection />

      {/* Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">We Repair Ovens Across Ottawa</h2>
            <p className="text-center text-gray-700 mb-8">
              We proudly repair ovens across all Ottawa neighborhoods, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {serviceAreas.map((area, index) => {
                const slug = area.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link 
                    key={index} 
                    href={`/oven-repair/${slug}`}
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
            <h2 className="heading-md mb-4">Things to Do in Ottawa While We Repair Your Oven</h2>
            <p className="text-lg text-gray-700 mb-6">
              No oven? No problem — here's how to spend a few hours away from the kitchen:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Glebe neighbourhood", description: "cafés, bookstores, and bakeries" },
                { name: "Arlington Five", description: "top-tier coffee and vibes" },
                { name: "St. Luke's Park", description: "quiet downtown green space" },
                { name: "Black Squirrel Books & Espresso Bar", description: "perfect reading and sipping combo" },
              ].map((attraction, index) => {
                const icons = [FaMapMarkerAlt, FaTree, FaUtensils, FaBook];
                const Icon = icons[index % icons.length];
                return (
                  <div key={index} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-accent-500 flex items-start gap-4">
                    <Icon className="text-accent-500 text-xl flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{attraction.name}</h3>
                      <p className="text-gray-600 text-sm">{attraction.description}</p>
                    </div>
                  </div>
                );
              })}
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
          <h2 className="heading-lg mb-4 text-white">Book Your Oven Repair in Ottawa</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Hungry for fast help? Get your oven repaired quickly and safely. Call, text or use our simple booking form — we'll get you cooking again in no time.
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
              We do more than just oven repair — check out our other Ottawa services:
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {relatedServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors font-semibold"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

