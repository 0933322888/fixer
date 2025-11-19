import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import ServiceHero from "@/components/ServiceHero";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Oven Repair Stittsville – Fast Electric Oven Service | Fixer",
  description: "Fixer Appliance Repair provides expert oven repair in Stittsville. From uneven baking and faulty elements to control board errors, we fix Whirlpool, LG, Samsung, GE & more. Same-day service with a 90-day warranty.",
  keywords: "oven repair Stittsville, electric oven repair, oven not heating Stittsville, oven repair service",
};

const benefits = [
  "Knowledgeable team that solves problems quickly",
  "Fair pricing and upfront quotes",
  "We explain your options clearly",
  "Neat and professional service, always",
  "Repairs backed by real experience",
];

const commonIssues = [
  {
    title: "Oven won't maintain temperature",
    description: "Sensor or control board may be misreading heat levels.",
  },
  {
    title: "Broil works, bake doesn't",
    description: "The bake element or relay needs service.",
  },
  {
    title: "Oven light won't shut off",
    description: "Likely a faulty door switch — we replace it.",
  },
  {
    title: "Takes too long to cook",
    description: "Calibration or airflow problems can reduce heat.",
  },
  {
    title: "Door hinges broken",
    description: "We replace spring assemblies and realign the door.",
  },
  {
    title: "Smoke when turning on",
    description: "Spill residue or failing wiring may be at fault.",
  },
  {
    title: "Buttons not responding",
    description: "Touchpad or control board could be worn.",
  },
  {
    title: "Timer not setting",
    description: "We repair or replace UI boards.",
  },
  {
    title: "Convection fan noisy",
    description: "Worn bearings — we install new parts.",
  },
  {
    title: "Error code flashing",
    description: "We read and clear system diagnostics.",
  },
];

const serviceAreas = [
  "Crossing Bridge",
  "Jackson Trails",
  "Bryanston Gate",
  "West Ridge",
  "Timbermere",
  "Fairwinds",
];

const faqs = [
  {
    question: "Do you offer oven repair in Crossing Bridge and Fairwinds?",
    answer: "Yes — we service all of Stittsville.",
  },
  {
    question: "My oven's touch controls don't respond — can you fix that?",
    answer: "Yes — we repair electronic and control board issues.",
  },
  {
    question: "Do you test everything after repairs?",
    answer: "Always — including safety checks.",
  },
  {
    question: "Can you install a new oven for me?",
    answer: "Yes — we provide complete installation.",
  },
  {
    question: "Do you offer repair guarantees?",
    answer: "Yes — 90 days on labor and installed parts.",
  },
];

export default function OvenRepairStittsvillePage() {
  return (
    <>
      <ServiceHero
        title="Stittsville Oven Repair – Done Right the First Time"
        description="An oven that bakes unevenly or won't preheat is frustrating. Fixer Appliance Repair serves Stittsville with professional-time electric oven repair. We handle all popular brands, including LG, Samsung, Whirlpool, GE, and Maytag."
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
                Upgrading your oven in Stittsville? Before replacing, read our repair vs. replace guide 
                — it covers typical repair costs, lifespan, and upgrade timing.
              </p>
              <p className="text-center">
                Once you've bought a new one, we provide oven installation in Stittsville. Our team connects 
                and tests it with your existing power supply.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ New high-voltage wiring or gas hookups are not included.
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
            <h2 className="heading-md mb-8 text-center">Service Area: Stittsville and Nearby</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We provide appliance repair services across the entire Stittsville area, including:
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
              We also cover{" "}
              <Link href="/oven-repair/kanata" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Kanata
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

      {/* Things to Do in Stittsville */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Enjoy Your Time in Stittsville During the Repair</h2>
            <p className="text-lg text-gray-700 mb-6">Make the most of the downtime with a little local exploring:</p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>Amberwood Village Trails</strong> – quiet paths for a stroll</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>Quitters Coffee</strong> – grab a snack or coffee break</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>Village Square Park</strong> – central, easy, and pleasant</span>
              </li>
            </ul>
            <p className="text-gray-700">
              See what's scheduled this week:{" "}
              <a 
                href="https://ottawatourism.ca/en/see-and-do/events" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Events in Stittsville
              </a>
            </p>
          </div>
        </div>
      </section>

      <FAQSection applianceName="Oven" faqs={faqs} />

      {/* Booking CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Book Your Oven Repair in Stittsville</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Book now and get back to home cooking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:6135550199" className="text-xl font-semibold hover:underline">
              📞 Call/text: (613) 555-0199
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

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Also Need Help With…</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Need more than oven repair? Here's what else we service in Stittsville:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/washer-repair/stittsville" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Washer Repair Stittsville
              </Link>
              <Link href="/dryer-repair/stittsville" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Dryer Repair Stittsville
              </Link>
              <Link href="/dishwasher-repair/stittsville" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Dishwasher Repair Stittsville
              </Link>
              <Link href="/fridge-repair/stittsville" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Fridge Repair Stittsville
              </Link>
              <Link href="/freezer-repair/stittsville" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Freezer Repair Stittsville
              </Link>
              <Link href="/stove-repair" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Cooktop Repair Stittsville
              </Link>
              <Link href="/appliance-installation/oven" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Oven Installation Stittsville
              </Link>
            </div>
            <p className="text-center text-gray-700 mt-8">
              From kitchens to laundry rooms, we've got Stittsville covered.
            </p>
            <p className="text-center text-gray-800 font-semibold mt-4">
              Fixer Appliance Repair — your local oven repair experts in Stittsville.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
