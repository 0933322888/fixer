import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import ServiceHero from "@/components/ServiceHero";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Cooktop Repair in Vanier – Local, Reliable Service | Fixer",
  description: "Professional cooktop repair in Vanier, including Overbrook and Beechwood Village. Same or next-day service, upfront pricing, and a 90-day warranty on all repairs.",
  keywords: "cooktop repair Vanier, cooktop not heating Vanier, cooktop repair service",
};

const benefits = [
  "Experienced Vanier cooktop technicians who know the local needs",
  "Straightforward pricing before we begin",
  "Same-day and next-day availability",
  "90-day warranty backing every repair and install",
];

const commonIssues = [
  {
    issue: "Cooktop not starting",
    description: "In older Vanier homes, worn wiring or tripped breakers often cut power. We’ll restore connection.",
  },
  {
    issue: "Burner shuts off mid-cook",
    description: "Infinite switches or sensors may fail, cycling the burner too soon. We’ll replace the faulty part.",
  },
  {
    issue: "Cooktop won’t shut down",
    description: "A stuck relay or switch can leave burners hot. We’ll fix it quickly for safety.",
  },
  {
    issue: "Touchpad not working",
    description: "Control boards wear out over time. We’ll repair or swap the board.",
  },
  {
    issue: "Glass top cracked",
    description: "We’ll install a replacement surface to restore both safety and appearance.",
  },
  {
    issue: "Unusual buzzing or humming",
    description: "Often caused by faulty relays or worn components. We’ll quiet it down.",
  },
];

const serviceAreas = [
  "Overbrook",
  "Beechwood Village",
  "Cardinal Glen",
  "Notre Dame des Champs",
];

const faqs = [
  {
    question: "Do you repair cooktops in Vanier homes and apartments?",
    answer: "Yes. All types of housing.",
  },
  {
    question: "Why is my cooktop not turning on at all?",
    answer: "It could be a fuse, wiring, or control issue.",
  },
  {
    question: "Do you install cooktops?",
    answer: "Yes. We can install units that have an existing power supply.",
  },
  {
    question: "Do you repair all brands?",
    answer: "Yes. Whirlpool, LG, Samsung, GE, and Bosch are all covered.",
  },
  {
    question: "Do you offer warranty?",
    answer: "Yes. We provide a 90-day labor warranty.",
  },
];

export default function OvenRepairVanierPage() {
  return (
    <>
      <ServiceHero
        title="Vanier Cooktop Repair Experts"
        description="In older and newer Vanier homes, cooktops face wiring, heating, and surface issues. Our team delivers safe, affordable repairs to keep your kitchen running.We service LG, Samsung, Whirlpool, GE, Maytag, and more."
        icon={<FaFire className="text-6xl text-white" />}
      />

      {/* Common Issues Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-12 text-center">Common Oven Issues We Fix in Vanier</h2>
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

      {/* Cooktop Installation Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Cooktop Installation in Vanier</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center mb-6">
                Before making a final decision, read our repair vs. replace guide — it helps compare costs and lifespan.
              </p>
              <p className="text-center">
                If you’ve purchased a new cooktop, we’ll install it in Vanier. Our team connects and tests it with your current power supply.
              </p>
              <div className="text-center mb-6">
                <Link href="/blog/repair-vs-replace" className="btn-primary">
                  Repair or replace?
                </Link>
              </div>
              <br />
              <div className="text-center mb-6 mt-6 space-y-4">
                <p className="text-center text-sm mb-6 text-gray-600">
                  ⚠️ We don’t install new high-voltage wiring or gas lines.
                </p>
              </div>
              <div className="text-center mt-8">
                <Link href="/cooktop-installation" className="btn-primary">
                  Learn More
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
              We provide appliance repair services across the entire Vanier area, including:
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
              Households in Vanier and surrounding areas{" - "}
              <Link href="/oven-repair" className="text-primary-600 hover:text-primary-700 underline">
                Cooktop Repair Ottawa
              </Link>{" "}
              page — we also cover{" "}
              <Link href="/cooktop-repair/kanata" className="text-primary-600 hover:text-primary-700 underline">
                Cooktop Repair Kanata
              </Link>
              ,{" "}
              <Link href="/cooktop-repair/stittsville" className="text-primary-600 hover:text-primary-700 underline">
                Cooktop Repair Stittsville
              </Link>
              ,{" "}
              <Link href="/cooktop-repair/nepean" className="text-primary-600 hover:text-primary-700 underline">
                Cooktop Repair Nepean
              </Link>
              ,{" "}
              <Link href="/cooktop-repair/orleans" className="text-primary-600 hover:text-primary-700 underline">
                Cooktop Repair Orleans
              </Link>
              ,{" "}
              <Link href="/cooktop-repair/barrhaven" className="text-primary-600 hover:text-primary-700 underline">
                Cooktop Repair Barrhaven
              </Link>
              ,{" "}
              <Link href="/cooktop-repair/mississippi-mills" className="text-primary-600 hover:text-primary-700 underline">
                Cooktop Repair Mississippi Mills
              </Link>
              ,{" "}
              <Link href="/cooktop-repair/arnprior" className="text-primary-600 hover:text-primary-700 underline">
                Cooktop Repair Arnprior
              </Link>
              , and{" "}
              <Link href="/cooktop-repair/carleton-place" className="text-primary-600 hover:text-primary-700 underline">
                Cooktop Repair Carleton Place
              </Link>
              can all rely on our cooktop services. </p>
            <p className="text-center text-gray-700 mb-2"> For broader coverage, see our <Link href="/cooktop-repair" className="text-primary-600 hover:text-primary-700 underline">
              Cooktop Repair Ottawa
            </Link> page. </p>
          </div>
        </div>
      </section>

      <CTASection />

      {/* Things to Do in Vanier */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Take a Break in Vanier While We Repair Your Cooktop</h2>
            <p className="text-lg text-gray-700 mb-6">Make the wait pleasant with a little exploring:</p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>Richelieu Park</strong> - nature trails in the city.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>Vanier Museopark</strong> - culture and history.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>Beechwood Avenue</strong> - dining and local stores.</span>
              </li>
            </ul>
            <p className="text-gray-700">
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                See Vanier happenings this week
              </a>
            </p>
          </div>
        </div>
      </section>

      <FAQSection applianceName="Oven" faqs={faqs} />

      {/* Booking CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Schedule Your Cooktop Repair in Vanier</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Need professional cooktop service? Reach out now and get your repair scheduled:
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
            Cooktops aren't all we repair — here are our other services in Vanier:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/washer-repair/vanier" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Washer Repair Vanier
              </Link>
              <Link href="/dryer-repair/vanier" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Dryer Repair Vanier
              </Link>
              <Link href="/dishwasher-repair/vanier" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Dishwasher Repair Vanier
              </Link>
              <Link href="/fridge-repair/vanier" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Fridge Repair Vanier
              </Link>
              <Link href="/freezer-repair/vanier" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Freezer Repair Vanier
              </Link>
              <Link href="/oven-repair/vanier" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Oven Repair Vanier
              </Link>
              <Link href="/microwave-repair/vanier" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Microwave Repair Vanier
              </Link>
              <Link href="/cooktop-installation/vanier" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Cooktop Installation Vanier
              </Link>
            </div>
            <p className="text-center text-gray-700 mt-8">
              From kitchens to laundry rooms, we've got Vanier covered.
            </p>
            <p className="text-center text-gray-800 font-semibold mt-4">
              Fixer Appliance Repair — your friendly oven repair team in Vanier.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
