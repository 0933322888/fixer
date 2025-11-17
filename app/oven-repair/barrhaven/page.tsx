import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import ServiceHero from "@/components/ServiceHero";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Oven Repair Barrhaven – Fast, Reliable Electric Oven Service | Fixer",
  description: "Fixer Appliance Repair provides trusted oven repair in Barrhaven. From uneven baking and faulty elements to display errors and broken doors, we service Whirlpool, Samsung, LG, GE & more. Same-day appointments, clear pricing, 90-day warranty.",
  keywords: "oven repair Barrhaven, electric oven repair, oven not heating Barrhaven, oven repair service",
};

const benefits = [
  "Local Barrhaven oven repair and installation team",
  "Same-day and next-day scheduling available",
  "Work covered by our 90-day service warranty",
  "Dependable service with clear communication",
];

const commonIssues = [
  {
    title: "Oven won't start",
    description: "In Barrhaven townhomes, this can be a bad switch, fuse, or control panel. We'll fix it fast.",
  },
  {
    title: "Food cooks unevenly",
    description: "If dishes don't bake evenly, the fan or heating element may need replacement.",
  },
  {
    title: "Door won't stay shut",
    description: "Loose hinges or worn gaskets often let heat escape. We'll repair both.",
  },
  {
    title: "Beeping or flashing codes",
    description: "Modern ovens show errors when sensors fail. We'll decode and fix them.",
  },
  {
    title: "No heat in broil mode",
    description: "A broken relay or top element is usually the culprit. We'll replace it.",
  },
  {
    title: "Numbers flickering on display",
    description: "Control board or wiring issues cause this. We'll stabilize it.",
  },
];

const serviceAreas = [
  "Chapman Mills",
  "Stonebridge",
  "Longfields",
  "Half Moon Bay",
  "Knollsbrook",
];

const faqs = [
  {
    question: "Can I get same-day oven repair in Barrhaven?",
    answer: "Yes — depending on schedule.",
  },
  {
    question: "Why does my oven smell when turned on?",
    answer: "Burned wiring, spills, or first-use residue.",
  },
  {
    question: "Do you install ovens in Barrhaven?",
    answer: "Yes — with current hookups.",
  },
  {
    question: "Do you service nearby communities?",
    answer: "Yes — Stonebridge, Half Moon Bay, Chapman Mills.",
  },
  {
    question: "Do you provide warranty?",
    answer: "Yes — every oven repair is backed by 90 days.",
  },
];

export default function OvenRepairBarrhavenPage() {
  return (
    <>
      <ServiceHero
        title="Barrhaven Oven Repair Experts"
        description="Oven not heating properly or baking unevenly? Our Barrhaven oven repair specialists bring fast, dependable service to townhomes and family kitchens across the area. We service all major electric oven brands, including LG, Samsung, Whirlpool, GE, and Maytag."
        icon={<FaFire className="text-6xl text-white" />}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Oven Issues We Fix in Barrhaven" />

      <BenefitsSection applianceName="Oven" benefits={benefits} />

      {/* Oven Installation Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Oven Installation in Barrhaven</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center mb-6">
                Replacing your oven in Barrhaven? Before you decide, review our repair vs. replace guide 
                — it outlines costs, repair frequency, and replacement timing.
              </p>
              <p className="text-center">
                For new purchases, we provide oven installation in Barrhaven. Our team installs and tests 
                the unit using existing power hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ We don't add new wiring or gas lines.
              </p>
              <div className="text-center mt-8">
                <Link href="/oven-installation" className="btn-primary">
                  Learn More About Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Service Area</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We provide appliance repair services across the entire Barrhaven area, including:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {serviceAreas.map((area, index) => (
                <div key={index} className="px-6 py-3 bg-gray-50 rounded-lg font-semibold text-gray-800">
                  {area}
                </div>
              ))}
              <div className="px-6 py-3 bg-gray-50 rounded-lg font-semibold text-gray-800">
                and surrounding neighbourhoods
              </div>
            </div>
            <p className="text-center text-gray-700 mb-6">
              For full coverage, see our{" "}
              <Link href="/oven-repair" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Ottawa
              </Link>{" "}
              page. We also service customers in{" "}
              <Link href="/oven-repair/kanata" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Kanata
              </Link>
              ,{" "}
              <Link href="/oven-repair/stittsville" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Stittsville
              </Link>
              ,{" "}
              <Link href="/oven-repair/nepean" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Nepean
              </Link>
              ,{" "}
              <Link href="/oven-repair/orleans" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Orleans
              </Link>
              ,{" "}
              <Link href="/oven-repair/vanier" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Vanier
              </Link>
              ,{" "}
              <Link href="/oven-repair/mississippi-mills" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Mississippi Mills
              </Link>
              ,{" "}
              <Link href="/oven-repair/arnprior" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Arnprior
              </Link>
              , and{" "}
              <Link href="/oven-repair/carleton-place" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Carleton Place
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CTASection />

      {/* Things to Do in Barrhaven */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Enjoy Your Time in Barrhaven While We Fix the Oven</h2>
            <p className="text-lg text-gray-700 mb-6">Use the time to explore:</p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>Walter Baker Centre</strong> – indoor activities</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>Chapman Mills</strong> – trails and fresh air</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>Marketplace Barrhaven</strong> – stores and cafés</span>
              </li>
            </ul>
            <p className="text-gray-700">
              <a 
                href="https://ottawatourism.ca/en/see-and-do/events" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Find local happenings in Barrhaven
              </a>
            </p>
          </div>
        </div>
      </section>

      <FAQSection applianceName="Oven" faqs={faqs} />

      {/* Booking CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Schedule Your Oven Repair in Barrhaven</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're ready when you are — book your oven repair with Fixer Appliance Repair today:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:6134136969" className="text-xl font-semibold hover:underline">
              📞 Call/Text: 613-413-6969
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
            <h2 className="heading-md mb-8 text-center">Also Need Help With…</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Beyond oven repair, we also provide these services in Barrhaven:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/washer-repair/barrhaven" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Washer Repair Barrhaven
              </Link>
              <Link href="/dryer-repair/barrhaven" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Dryer Repair Barrhaven
              </Link>
              <Link href="/dishwasher-repair/barrhaven" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Dishwasher Repair Barrhaven
              </Link>
              <Link href="/fridge-repair/barrhaven" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Fridge Repair Barrhaven
              </Link>
              <Link href="/freezer-repair/barrhaven" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Freezer Repair Barrhaven
              </Link>
              <Link href="/stove-repair" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Cooktop Repair Barrhaven
              </Link>
              <Link href="/oven-installation" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Oven Installation Barrhaven
              </Link>
            </div>
            <p className="text-center text-gray-700 mt-8">
              Need quick appliance help? We're ready in Barrhaven.
            </p>
            <p className="text-center text-gray-800 font-semibold mt-4">
              Fixer Appliance Repair — your local oven repair team in Barrhaven.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
