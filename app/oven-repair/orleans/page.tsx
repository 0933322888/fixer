import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import ServiceHero from "@/components/ServiceHero";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Oven Repair Orleans – Fast, Reliable Electric Oven Service | Fixer",
  description: "Fixer Appliance Repair provides expert oven repair in Orleans. From uneven baking and heating failures to broken doors or displays, we fix Whirlpool, Samsung, LG, GE & more. Same-day service, clear pricing, 90-day warranty.",
  keywords: "oven repair Orleans, electric oven repair, oven not heating Orleans, oven repair service",
};

const benefits = [
  "Local Orleans oven repair and installation experts",
  "Same-day and next-day appointments available",
  "90-day warranty on all labour",
  "Honest pricing before we start",
];

const commonIssues = [
  {
    title: "Oven won't turn on",
    description: "We check power supply, fuses, and control boards to restore function.",
  },
  {
    title: "Burner works but oven doesn't",
    description: "This often points to a failed bake element or thermostat. We'll replace it quickly.",
  },
  {
    title: "Uneven baking results",
    description: "If one tray cooks faster, the convection fan or sensor may be faulty. We'll fix the airflow.",
  },
  {
    title: "Oven door won't close properly",
    description: "Loose hinges or worn gaskets leak heat. We'll replace them.",
  },
  {
    title: "No heat in broil mode",
    description: "The top element or relay may be bad. We'll restore full heating.",
  },
  {
    title: "Display not responding",
    description: "Control panels or wiring often fail with age. We'll repair or replace them.",
  },
];

const serviceAreas = [
  "Fallingbrook",
  "Avalon",
  "Queenswood Heights",
  "Chapel Hill",
  "Convent Glen",
];

const faqs = [
  {
    question: "Can I get same-day oven repair in Orleans?",
    answer: "Often yes — depending on schedule.",
  },
  {
    question: "Why is my oven not heating evenly?",
    answer: "Usually a faulty element or convection fan.",
  },
  {
    question: "Do you install ovens?",
    answer: "Yes — with existing hookups.",
  },
  {
    question: "Do you service areas near Orleans?",
    answer: "Yes — Chapel Hill, Avalon, Fallingbrook.",
  },
  {
    question: "Do you offer warranty coverage?",
    answer: "Yes — 90-day labour warranty.",
  },
];

export default function OvenRepairOrleansPage() {
  return (
    <>
      <ServiceHero
        title="Orleans Oven Repair You Can Rely On"
        description="Dinner plans on hold because your oven won't heat up? Our team delivers fast, local help to get you cooking again. Fixer provides professional service for all major electric ovens. We repair top brands like LG, Samsung, Whirlpool, GE, Maytag, and more."
        icon={<FaFire className="text-6xl text-white" />}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Oven Issues We Fix in Orleans" />

      <BenefitsSection applianceName="Oven" benefits={benefits} />

      {/* Oven Installation Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Oven Installation in Orleans</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center mb-6">
                Looking for oven installation in Orleans? Before making the purchase, read our repair vs. 
                replace guide — it explains costs, reliability, and lifespan.
              </p>
              <p className="text-center">
                Already got a new oven? We provide installation in Orleans. We'll connect, level, and test 
                it using your existing electrical setup.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ We don't install new high-voltage wiring or gas connections.
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
              We provide appliance repair services across the entire Orleans area, including:
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

      {/* Things to Do in Orleans */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Enjoy Your Time in Orleans While We Repair the Oven</h2>
            <p className="text-lg text-gray-700 mb-6">Why not take a short break?</p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span>Visit <strong>Petrie Island</strong> for fresh air and nature</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span>Experience arts and culture at <strong>Shenkman Arts Centre</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span>Drop by <strong>Place d'Orleans</strong> for dining and shops</span>
              </li>
            </ul>
            <p className="text-gray-700">
              <a 
                href="https://ottawatourism.ca/en/see-and-do/events" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                See what's happening around Orleans this month
              </a>
            </p>
          </div>
        </div>
      </section>

      <FAQSection applianceName="Oven" faqs={faqs} />

      {/* Booking CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Schedule Your Oven Repair in Orleans</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Oven not heating properly? Call Fixer Appliance Repair today to book fast service:
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
              Our team handles more than ovens — here's what else we do in Orleans:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/washer-repair/orleans" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Washer Repair Orleans
              </Link>
              <Link href="/dryer-repair/orleans" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Dryer Repair Orleans
              </Link>
              <Link href="/dishwasher-repair/orleans" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Dishwasher Repair Orleans
              </Link>
              <Link href="/fridge-repair/orleans" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Fridge Repair Orleans
              </Link>
              <Link href="/freezer-repair/orleans" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Freezer Repair Orleans
              </Link>
              <Link href="/stove-repair" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Cooktop Repair Orleans
              </Link>
              <Link href="/oven-installation" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Oven Installation Orleans
              </Link>
            </div>
            <p className="text-center text-gray-700 mt-8">
              Looking for another service? We've got Orleans covered.
            </p>
            <p className="text-center text-gray-800 font-semibold mt-4">
              Fixer Appliance Repair — your friendly oven repair team in Orleans.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
