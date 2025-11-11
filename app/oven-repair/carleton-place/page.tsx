import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import ServiceHero from "@/components/ServiceHero";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Oven Repair Carleton Place – Fast, Reliable Electric Oven Service | Fixer",
  description: "Fixer Appliance Repair provides trusted oven repair in Carleton Place. From faulty elements and flickering displays to noisy fans and door issues, we fix Whirlpool, GE, Samsung, LG & more. Same-day service, clear pricing, 90-day warranty.",
  keywords: "oven repair Carleton Place, electric oven repair, oven not heating Carleton Place, oven repair service",
};

const benefits = [
  "Local Carleton Place oven specialists with experience across all major brands",
  "Same-day and next-day service options",
  "Transparent, no-upsell pricing",
  "Work guaranteed with a 90-day warranty",
];

const commonIssues = [
  {
    issue: "Oven won't power on",
    description: "Blown fuses or faulty wiring often cause this. We'll restore safe operation.",
  },
  {
    issue: "Takes too long to cook",
    description: "Misreading sensors or weak heating elements extend cooking times. We'll recalibrate or replace them.",
  },
  {
    issue: "Oven door won't lock during cleaning",
    description: "Switches or latches may be failing. We'll repair them.",
  },
  {
    issue: "Flickering display",
    description: "Worn wiring or control boards often cause this. We'll fix it.",
  },
  {
    issue: "No heat in broil setting",
    description: "A bad upper element or relay is usually to blame. We'll restore broiling.",
  },
  {
    issue: "Oven fan noisy",
    description: "Worn bearings make rattling sounds. We'll replace the fan motor.",
  },
];

const serviceAreas = [
  "Carleton Place West",
  "Carleton Place East",
  "Riverside Park",
  "Mississippi Quays",
];

const faqs = [
  {
    question: "Do you provide same-day oven service in Carleton Place?",
    answer: "When possible, yes.",
  },
  {
    question: "Why is my oven door not closing properly?",
    answer: "Worn hinges or door gaskets.",
  },
  {
    question: "Do you handle oven installations?",
    answer: "Yes — with current hookups.",
  },
  {
    question: "Do you also cover nearby areas?",
    answer: "Yes — Beckwith, Franktown, and others.",
  },
  {
    question: "Do you guarantee repairs?",
    answer: "Yes — 90-day labour warranty.",
  },
];

export default function OvenRepairCarletonPlacePage() {
  return (
    <>
      <ServiceHero
        title="Carleton Place Oven Repair Specialists"
        description="Weekend dinner plans ruined by a broken oven? Our repair experts respond quickly with honest, reliable service for homes across the town. We repair all major electric oven brands, including LG, Samsung, Whirlpool, GE, and Maytag."
        icon={<FaFire className="text-6xl text-white" />}
      />

      {/* Common Issues Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-12 text-center">Common Oven Issues We Fix in Carleton Place</h2>
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

      {/* Oven Installation Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Oven Installation in Carleton Place</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center mb-6">
                Need oven installation in Carleton Place? Our repair vs. replace guide explains when it's 
                better to fix and when it's smarter to upgrade.
              </p>
              <p className="text-center">
                Once you have a new oven, we'll handle installation in Carleton Place. We connect, level, 
                and test it with your existing power supply.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ We don't provide new wiring or gas hookups.
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
              We provide appliance repair services across the entire Carleton Place area, including:
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
              <Link href="/oven-repair/mississippi-mills" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Mississippi Mills
              </Link>
              , and{" "}
              <Link href="/oven-repair/arnprior" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Arnprior
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

      {/* Things to Do in Carleton Place */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Enjoy Carleton Place While We Repair Your Oven</h2>
            <p className="text-lg text-gray-700 mb-6">Take a short break and explore:</p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>Riverside Park</strong> – calm scenery by the water</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>Downtown Carleton Place</strong> – grab a bite or shop around</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>Heritage Museum</strong> – learn about the community's history</span>
              </li>
            </ul>
            <p className="text-gray-700">
              <a 
                href="https://www.carletonplace.ca/en/explore-and-play/events-calendar.aspx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Explore upcoming events in Carleton Place
              </a>
            </p>
          </div>
        </div>
      </section>

      <FAQSection applianceName="Oven" faqs={faqs} />

      {/* Booking CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Schedule Your Oven Repair in Carleton Place</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Dinner plans on hold? Don't wait — text or call Fixer Appliance Repair to book service:
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
              Oven issues aren't the only thing we handle — here are more services in Carleton Place:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/washer-repair/carleton-place" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Washer Repair Carleton Place
              </Link>
              <Link href="/dryer-repair/carleton-place" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Dryer Repair Carleton Place
              </Link>
              <Link href="/dishwasher-repair/carleton-place" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Dishwasher Repair Carleton Place
              </Link>
              <Link href="/fridge-repair/carleton-place" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Fridge Repair Carleton Place
              </Link>
              <Link href="/freezer-repair/carleton-place" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Freezer Repair Carleton Place
              </Link>
              <Link href="/stove-repair" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Electric Cooktop Repair Carleton Place
              </Link>
              <Link href="/oven-installation" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Oven Installation Carleton Place
              </Link>
            </div>
            <p className="text-center text-gray-700 mt-8">
              Need another appliance serviced? We're ready in Carleton Place.
            </p>
            <p className="text-center text-gray-800 font-semibold mt-4">
              Fixer Appliance Repair — your oven repair pros in Carleton Place.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
