import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import ServiceHero from "@/components/ServiceHero";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import FeedbacksSection from "@/components/FeedbacksSection";
import FAQSection from "@/components/FAQSection";
import MapSection from "@/components/MapSection";

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
  "Whirlpool",
  "GE",
  "Samsung",
  "Frigidaire",
  "LG",
  "Maytag",
  "Bosch",
  "Electrolux",
  "Kenmore",
];

const serviceAreas = [
  { name: "Kanata", slug: "kanata" },
  { name: "Carp", slug: "carp" },
  { name: "Stittsville", slug: "stittsville" },
  { name: "Nepean", slug: "nepean" },
  { name: "Orleans", slug: "orleans" },
  { name: "Barrhaven", slug: "barrhaven" },
  { name: "Vanier", slug: "vanier" },
  { name: "Arnprior", slug: "arnprior" },
  { name: "Carleton Place", slug: "carleton-place" },
  { name: "Mississippi Mills", slug: "mississippi-mills" },
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
      <ServiceHero
        title="Electric Oven Repair Ottawa – Precision You Can Taste"
        description="If your oven won't heat, bake evenly, or keeps shutting off — call Fixer Appliance Repair. We service Ottawa homes with expert electric oven repair, from element issues to control board faults. We fix LG, Samsung, Whirlpool, GE, Frigidaire, Maytag, and more."
        icon={<FaFire className="text-6xl text-white" />}
      />

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

      <BenefitsSection applianceName="Electric Oven" benefits={benefits} />

      {/* Repair or Replace Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Repair or Replace?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Faulty heating elements, unresponsive controls — most oven problems are repairable. 
              Before you invest in a new one, explore whether a fix is the better option. Our expert 
              technicians will provide honest advice on the most cost-effective solution for your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Services CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Installation Services</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We also offer electric oven installation in Ottawa — safe hookup, proper leveling, and secure fit included.
          </p>
          <Link href="/oven-installation" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Learn About Oven Installation
          </Link>
        </div>
      </section>

      {/* Brands We Repair */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-8">Brands We Repair</h2>
            <p className="text-lg text-gray-700 mb-8">
              We fix electric ovens from all major brands. Whether it's built-in, wall-mounted, or freestanding — we've got you covered.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {brands.map((brand, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg font-semibold text-gray-800">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      <FeedbacksSection applianceName="Electric Oven" />

      {/* Service Areas Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">We Serve These Areas</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Fixer Appliance Repair provides reliable oven repair throughout Ottawa and surrounding neighborhoods, including:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {serviceAreas.map((area, index) => (
                <Link
                  key={index}
                  href={`/oven-repair/${area.slug}`}
                  className="p-4 bg-white border border-gray-200 rounded-lg hover:border-primary-500 hover:shadow-md transition-all text-center font-semibold text-primary-600 hover:text-primary-700"
                >
                  Oven Repair {area.name}
                </Link>
              ))}
            </div>
            <p className="text-center text-gray-600">
              Need service elsewhere? Reach out — we may already be nearby.
            </p>
          </div>
        </div>
      </section>

      <FAQSection applianceName="Oven" faqs={faqs} />

      {/* Things to Do in Ottawa */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Things to Do in Ottawa While We Repair Your Oven</h2>
            <p className="text-lg text-gray-700 mb-6">
              No oven? No problem — here's how to spend a few hours away from the kitchen:
            </p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>Glebe neighbourhood</strong> – cafés, bookstores, and bakeries</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>Arlington Five</strong> – top-tier coffee and vibes</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>St. Luke's Park</strong> – quiet downtown green space</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>Black Squirrel Books & Espresso Bar</strong> – perfect reading and sipping combo</span>
              </li>
            </ul>
            <p className="text-gray-700">
              🔍 Want to catch a live event or exhibit? Check what's happening this week:{" "}
              <a 
                href="https://ottawatourism.ca/en/see-and-do/events" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Ottawa Tourism Events
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Book Your Oven Repair in Ottawa</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Hungry for fast help? Get your oven repaired quickly and safely. Call, text or use our simple booking form — we'll get you cooking again in no time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:6135550199" className="text-xl font-semibold hover:underline">
              📞 Call or text: (613) 555-0199
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:service@fixerappliancerepair.ca" className="text-xl font-semibold hover:underline">
              📧 service@fixerappliancerepair.ca
            </a>
          </div>
          <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Book Service Now
          </Link>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">We Also Offer</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              We don't just fix ovens! We also handle:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/washer-repair" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Washer Repair Ottawa
              </Link>
              <Link href="/dryer-repair" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Dryer Repair Ottawa
              </Link>
              <Link href="/fridge-repair" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Fridge Repair Ottawa
              </Link>
              <Link href="/freezer-repair" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Freezer Repair Ottawa
              </Link>
              <Link href="/dishwasher-repair" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Dishwasher Repair Ottawa
              </Link>
              <Link href="/stove-repair" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Cooktop Repair Ottawa
              </Link>
              <Link href="/oven-installation" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Oven Installation Ottawa
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

