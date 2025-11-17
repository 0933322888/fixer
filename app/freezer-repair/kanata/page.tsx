import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Freezer Repair Kanata – Fast, Reliable Upright & Chest Freezer Service | Fixer",
  description: "Fixer Appliance Repair provides expert freezer repair in Kanata. From frost buildup to cooling failures, we service Whirlpool, Samsung, LG & more — with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Freezer not cold enough",
    description: "We check refrigerant flow, thermostat, and sealed system.",
  },
  {
    title: "Excessive frost buildup",
    description: "Usually caused by door gasket leaks or failed defrost cycles.",
  },
  {
    title: "Water pooling inside",
    description: "Blocked drain or defrost overflow — we fix and clean it.",
  },
  {
    title: "Unit runs non-stop",
    description: "Dirty coils or broken temp sensors may be at fault.",
  },
  {
    title: "Clicking or buzzing sounds",
    description: "Signs of relay or compressor problems.",
  },
  {
    title: "Food freezing unevenly",
    description: "We adjust sensors and fix circulation issues.",
  },
  {
    title: "Interior light won't work",
    description: "We replace bulbs or test door switches.",
  },
  {
    title: "Plastic drawers cracking",
    description: "We replace damaged components.",
  },
  {
    title: "Display flashing error codes",
    description: "We interpret the code and correct the issue.",
  },
  {
    title: "Freezer smells strange",
    description: "Odors often come from spills or motor overheating.",
  },
];

const benefits = [
  "Professional freezer repair backed by experience",
  "Technicians skilled in diagnosing cooling issues",
  "Fast response times for urgent situations",
  "Polite, reliable, and respectful service",
  "You'll always know what you're paying for",
];

const serviceAreas = [
  "Morgan's Grant",
  "Beaverbrook",
  "Katimavik-Hazeldean",
  "Glen Cairn",
  "Bridlewood",
  "Kanata Lakes",
  "Emerald Meadows",
];

const nearbyAreas = [
  { name: "Stittsville", slug: "/freezer-repair/stittsville" },
  { name: "Nepean", slug: "/freezer-repair/nepean" },
  { name: "Orleans", slug: "/freezer-repair/orleans" },
  { name: "Vanier", slug: "/freezer-repair/vanier" },
  { name: "Barrhaven", slug: "/freezer-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/freezer-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/freezer-repair/arnprior" },
  { name: "Carleton Place", slug: "/freezer-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you repair freezers in Kanata Lakes and Bridlewood?",
    answer: "Yes — we provide freezer repair throughout Kanata.",
  },
  {
    question: "Do you fix both upright and chest freezers?",
    answer: "Absolutely — we handle residential freezers of all types.",
  },
  {
    question: "My freezer is icing up — can that be repaired?",
    answer: "Yes — we'll check for defrost sensor, heater, or seal issues.",
  },
  {
    question: "Can you help quickly if food is thawing?",
    answer: "Yes — let us know it's urgent, and we'll prioritize.",
  },
  {
    question: "Do you carry parts for Frigidaire and Whirlpool freezers?",
    answer: "Yes — those are common brands we work with.",
  },
];

const relatedServices = [
  { name: "Washer Repair in Ottawa", href: "/washer-repair" },
  { name: "Dryer Repair in Ottawa", href: "/dryer-repair" },
  { name: "Dishwasher Repair in Ottawa", href: "/dishwasher-repair" },
  { name: "Fridge Repair in Ottawa", href: "/fridge-repair" },
  { name: "Oven Repair in Ottawa", href: "/oven-repair" },
  { name: "Freezer Installation in Ottawa", href: "/appliance-installation" },
];

export default function FreezerRepairKanataPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <FaSnowflake className="text-6xl mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frozen Goods in Danger? Kanata Freezer Repair
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Freezer frosting up or not keeping food cold enough? Fixer Appliance Repair offers same-day freezer repairs in Kanata, tackling everything from thermostat issues to compressor failures.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Book Service Now
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              We repair Whirlpool, Samsung, LG, GE, and Maytag.
            </p>
          </div>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} />

      {/* Installation Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Installation Services</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                Thinking about replacing your freezer in Kanata?
              </p>
              <p className="text-center">
                Before you decide, read our repair vs. replace guide — it explains lifespan, repair costs, and when it makes sense to upgrade.
              </p>
              <p className="text-center">
                Already bought a new unit? We provide freezer installation in Kanata. We'll connect and level it using your existing electrical hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ Note: we don't add new wiring or plumbing lines.
              </p>
              <div className="text-center mt-6">
                <Link href="/appliance-installation" className="btn-primary">
                  Learn More About Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection applianceName="Freezer" benefits={benefits} />

      <CTASection />

      {/* Service Area */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Service Area: Kanata and Nearby</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            We provide appliance repair services across the entire Kanata area, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {serviceAreas.map((area, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-800">{area}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-700 mb-6">
            We also provide freezer repair services in:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            {nearbyAreas.map((area, index) => (
              <Link
                key={index}
                href={area.slug}
                className="flex items-center justify-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors text-sm"
              >
                <FaMapMarkerAlt className="text-primary-600 flex-shrink-0" />
                <span>Freezer Repair {area.name}</span>
              </Link>
            ))}
          </div>
          
          <p className="text-center">
            <Link href="/freezer-repair" className="text-primary-600 hover:text-primary-700 underline">
              For complete coverage, see our Freezer Repair Ottawa page
            </Link>
          </p>
        </div>
      </section>

      {/* Things to Do */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-4">Explore Kanata While We Fix Your Freezer</h2>
            <p className="text-lg text-gray-700 mb-6">Don't let a freezer repair freeze your day — explore Kanata instead:</p>
            <ul className="space-y-3 text-gray-700">
              <li>South March Highlands – scenic forest trails</li>
              <li>Walter Baker Park – a quiet walk or picnic</li>
              <li>Kanata Centrum – shopping and dining</li>
              <li>Canadian Tire Centre – sports and concerts</li>
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              Want to catch a live event or exhibit? Check what's happening this week:
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 font-medium ml-2 hover:underline"
              >
                Ottawa Tourism Events
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">FAQs</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Service */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Book Your Freezer Repair in Kanata</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Frozen goods at risk? We'll be there quickly. Contact your local freezer pro:
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-xl font-semibold">Call or text: (613) 555-0199</p>
            <p className="text-xl">Email: service@fixerappliancerepair.ca</p>
          </div>
          <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Book Online
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Also Need Help With...</h2>
            <p className="text-center text-gray-700 mb-8">
              We do more than just freezer repair — check out our other Ottawa services:
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
