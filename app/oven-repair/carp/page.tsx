import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import ServiceHero from "@/components/ServiceHero";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Oven Repair Carp – Reliable Local Service for Electric Ovens | Fixer",
  description: "Fixer Appliance Repair provides expert oven repair in Carp. From heating failures and uneven baking to faulty elements and control boards, we fix Whirlpool, LG, Samsung, GE & more. Same-day rural service with a 90-day warranty.",
  keywords: "oven repair Carp, electric oven repair, oven not heating Carp, oven repair service",
};

const benefits = [
  "Familiar with rural kitchen setups and wall ovens",
  "Practical advice and reliable repairs",
  "No hidden fees or upsells",
  "We treat your oven like our own",
  "Prompt arrival and respectful service",
];

const commonIssues = [
  {
    title: "Oven gets too hot",
    description: "Faulty thermostat or stuck relay could be the cause.",
  },
  {
    title: "Cooks only on one side",
    description: "Defective element or poor airflow — we fix both.",
  },
  {
    title: "No power at all",
    description: "We check the breaker, wiring, and fuse.",
  },
  {
    title: "Smells like burning plastic",
    description: "Often from electrical short or insulation damage.",
  },
  {
    title: "Oven turns off by itself",
    description: "Overheat protection or damaged main board.",
  },
  {
    title: "Control panel cracked or dead",
    description: "We replace digital interfaces.",
  },
  {
    title: "Oven door glass cracked",
    description: "We replace the glass for safe operation.",
  },
  {
    title: "Bake setting doesn't work",
    description: "Faulty lower element — we swap it out.",
  },
  {
    title: "Rattling noise inside",
    description: "Loose mounts or worn fan blades.",
  },
  {
    title: "Timer not responding",
    description: "Button or logic board may be failing.",
  },
];

const serviceAreas = [
  "Village of Carp",
  "Huntley",
  "Corkery",
  "Upper Dwyer Hill",
];

const faqs = [
  {
    question: "Do you repair ovens in Huntley and Westwood?",
    answer: "Absolutely — we visit all parts of Carp.",
  },
  {
    question: "Do you work with electric only?",
    answer: "Yes — we do not service gas ovens.",
  },
  {
    question: "What causes ovens not to turn on?",
    answer: "It may be fuses, control board, or power issues.",
  },
  {
    question: "Can you fix a broken oven door?",
    answer: "Yes — we repair or replace hinges, seals, and glass.",
  },
  {
    question: "Do you help choose new models if mine can't be fixed?",
    answer: "Yes — we can advise and install replacements.",
  },
];

export default function OvenRepairCarpPage() {
  return (
    <>
      <ServiceHero
        title="Electric Oven Repair for Carp Kitchens"
        description="Oven not holding temperature in Carp? We've got you covered. Fixer's experienced technicians can diagnose and repair heating issues, element problems, and more — right at your home. We work with brands like LG, Samsung, Whirlpool, GE, and Maytag."
        icon={<FaFire className="text-6xl text-white" />}
      />

      <CommonIssuesSection issues={commonIssues} />

      <BenefitsSection applianceName="Oven" benefits={benefits} />

      {/* Oven Installation Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Installation Services</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center mb-6">
                Need a new oven in Carp? Check our repair vs. replace guide first — it helps you compare 
                repair costs and replacement value.
              </p>
              <p className="text-center">
                For new units, we handle oven installation in Carp. We'll set it up and test it using your 
                current electrical hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ We don't install new wiring or gas lines.
              </p>
              <div className="text-center mt-8">
                <Link href="/appliance-installation/oven" className="btn-primary">
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
            <h2 className="heading-md mb-8 text-center">Service Area: Carp and Nearby</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We provide appliance repair services across the entire Carp area, including:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {serviceAreas.map((area, index) => (
                <div key={index} className="px-6 py-3 bg-gray-50 rounded-lg font-semibold text-gray-800">
                  {area}
                </div>
              ))}
              <div className="px-6 py-3 bg-gray-50 rounded-lg font-semibold text-gray-800">
                and surrounding rural neighbourhoods
              </div>
            </div>
            <p className="text-center text-gray-700 mb-6">
              We also provide oven repair in{" "}
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
              <Link href="/oven-repair/barrhaven" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Barrhaven
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
              . For the full service map, check our{" "}
              <Link href="/oven-repair" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Ottawa
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      <CTASection />

      {/* Things to Do in Carp */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Make the Most of Your Day in Carp</h2>
            <p className="text-lg text-gray-700 mb-6">While we handle your oven repair, you can:</p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span>Visit <strong>Carp Farmers' Market</strong> – one of the best in Ontario</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span>Explore <strong>Diefenbunker Cold War Museum</strong> – unique and fascinating</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span>Stop by <strong>Rural Art Studios</strong> or seasonal markets</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span>Relax at <strong>Carp Ridge EcoWellness Centre</strong> – nature walks, spa, and more</span>
              </li>
            </ul>
            <p className="text-gray-700">
              Find upcoming activities:{" "}
              <a 
                href="https://ottawatourism.ca/en/see-and-do/events" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Events in Carp
              </a>
            </p>
          </div>
        </div>
      </section>

      <FAQSection applianceName="Oven" faqs={faqs} />

      {/* Booking CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Book Your Oven Repair in Carp</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We service ovens across rural Carp — fast, safe, and local.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:6135550199" className="text-xl font-semibold hover:underline">
              📞 (613) 555-0199
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
              Oven repair is just one part of what we do — here are our other services in Carp:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/washer-repair/carp" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Washer Repair Carp
              </Link>
              <Link href="/dryer-repair/carp" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Dryer Repair Carp
              </Link>
              <Link href="/dishwasher-repair/carp" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Dishwasher Repair Carp
              </Link>
              <Link href="/fridge-repair/carp" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Fridge Repair Carp
              </Link>
              <Link href="/freezer-repair/carp" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Freezer Repair Carp
              </Link>
              <Link href="/stove-repair" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Cooktop Repair Carp
              </Link>
              <Link href="/appliance-installation/oven" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Oven Installation Carp
              </Link>
            </div>
            <p className="text-center text-gray-700 mt-8">
              Looking for more appliance help? We're here for you in Carp.
            </p>
            <p className="text-center text-gray-800 font-semibold mt-4">
              Fixer Appliance Repair — your trusted oven repair team in Carp.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
