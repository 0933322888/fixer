import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import ServiceHero from "@/components/ServiceHero";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Oven Repair Mississippi Mills – Reliable Appliance Service | Fixer",
  description: "Fixer Appliance Repair provides expert oven repair in Mississippi Mills, including Almonte, Appleton & Pakenham. We fix heating issues, error codes, faulty fans & more. Same-day service, clear pricing, 90-day warranty.",
  keywords: "oven repair Mississippi Mills, oven repair Almonte, electric oven repair, oven not heating",
};

const benefits = [
  "Trusted oven service pros serving Mississippi Mills homes",
  "Clear estimates given upfront",
  "Fast response time — often same or next day",
  "Backed by a 90-day warranty",
];

const commonIssues = [
  {
    title: "Oven not heating enough",
    description: "In rural homes, worn elements or miscalibrated thermostats often leave food undercooked. We'll restore the right temperature.",
  },
  {
    title: "Self-clean cycle stuck",
    description: "When the door won't unlock, the latch or control board is usually to blame. We'll release it safely.",
  },
  {
    title: "Oven bakes unevenly",
    description: "A weak convection fan often causes hot and cold spots. We'll replace it.",
  },
  {
    title: "Strange burning smell",
    description: "Wiring issues or food spills can cause odors. We'll check and clean it.",
  },
  {
    title: "Oven light won't turn off",
    description: "This usually means a jammed or faulty door switch. We'll repair it.",
  },
  {
    title: "Random beeping or error codes",
    description: "We'll reset sensors, interpret codes, and repair the source.",
  },
];

const serviceAreas = [
  "Almonte",
  "Appleton",
  "Blakeney",
  "Pakenham",
  "Ramsay",
];

const faqs = [
  {
    question: "Do you repair ovens in Mississippi Mills homes?",
    answer: "Yes — Almonte, Appleton, and surrounding areas.",
  },
  {
    question: "Why does my oven take too long to preheat?",
    answer: "Often a weak element or faulty thermostat.",
  },
  {
    question: "Do you install new ovens?",
    answer: "Yes — using existing electrical supply.",
  },
  {
    question: "Do you repair all oven brands?",
    answer: "Yes — Whirlpool, Samsung, LG, GE, Maytag.",
  },
  {
    question: "Do you provide upfront estimates?",
    answer: "Yes — always before work starts.",
  },
];

export default function OvenRepairMississippiMillsPage() {
  return (
    <>
      <ServiceHero
        title="Trusted Oven Repair in Mississippi Mills"
        description="From Almonte to Pakenham, our oven repair experts are ready to help when your oven stops baking evenly or won't start at all. Fixer offers reliable repairs tailored for rural homes. We service all major electric oven brands, including LG, Samsung, Whirlpool, GE, and Maytag."
        icon={<FaFire className="text-6xl text-white" />}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Oven Issues We Fix in Mississippi Mills" />

      <BenefitsSection applianceName="Oven" benefits={benefits} />

      {/* Oven Installation Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Oven Installation in Mississippi Mills</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center mb-6">
                Is your oven failing in Mississippi Mills? Before replacing, check our repair vs. replace 
                guide — it helps weigh repair value against replacement.
              </p>
              <p className="text-center">
                For new units, we provide oven installation in Mississippi Mills. We'll hook it up and test 
                it using your current hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ We don't run new wiring or gas lines.
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
              We provide appliance repair services across the entire Mississippi Mills area, including:
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
              For nearby service, check our{" "}
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
              <Link href="/oven-repair/barrhaven" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Barrhaven
              </Link>
              ,{" "}
              <Link href="/oven-repair/arnprior" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Arnprior
              </Link>
              , and{" "}
              <Link href="/oven-repair/carleton-place" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Carleton Place
              </Link>
              . For full coverage, see our{" "}
              <Link href="/oven-repair" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Ottawa
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      <CTASection />

      {/* Things to Do in Mississippi Mills */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Enjoy Your Time in Mississippi Mills While We Repair the Oven</h2>
            <p className="text-lg text-gray-700 mb-6">Take advantage of the break with some local highlights:</p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>The Almonte Riverwalk</strong> – a peaceful riverside trail</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>Mill of Kintail</strong> – history and outdoor fun in one place</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>Downtown Almonte</strong> – cozy cafés and unique shops</span>
              </li>
            </ul>
            <p className="text-gray-700">
              <a 
                href="https://www.mississippimills.ca/en/discover-and-enjoy/events-calendar.aspx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Explore upcoming events in Mississippi Mills
              </a>
            </p>
          </div>
        </div>
      </section>

      <FAQSection applianceName="Oven" faqs={faqs} />

      {/* Booking CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Schedule Your Oven Repair in Mississippi Mills</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Serving Almonte, Appleton, and nearby areas — schedule your oven repair now:
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
              Ovens are just the beginning — here are our other services in Mississippi Mills:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/washer-repair/mississippi-mills" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Washer Repair Mississippi Mills
              </Link>
              <Link href="/dryer-repair/mississippi-mills" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Dryer Repair Mississippi Mills
              </Link>
              <Link href="/dishwasher-repair/mississippi-mills" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Dishwasher Repair Mississippi Mills
              </Link>
              <Link href="/fridge-repair/mississippi-mills" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Fridge Repair Mississippi Mills
              </Link>
              <Link href="/freezer-repair/mississippi-mills" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Freezer Repair Mississippi Mills
              </Link>
              <Link href="/stove-repair" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Cooktop Repair Mississippi Mills
              </Link>
              <Link href="/oven-installation" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Oven Installation Mississippi Mills
              </Link>
            </div>
            <p className="text-center text-gray-700 mt-8">
              From Almonte to Appleton, we've got you covered.
            </p>
            <p className="text-center text-gray-800 font-semibold mt-4">
              Fixer Appliance Repair — your trusted oven repair team in Mississippi Mills.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
