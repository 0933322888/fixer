import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Freezer Repair Stittsville – Fast, Reliable Upright & Chest Freezer Service | Fixer",
  description: "Fixer Appliance Repair provides expert freezer repair in Stittsville. From frost buildup to noisy compressors, we service Whirlpool, Samsung, LG & more — with same-day service, fair pricing, and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Freezer won't freeze food properly",
    description: "We test sensors, seal system, and fans.",
  },
  {
    title: "Loud vibration during use",
    description: "Mounts, fans, or base may be unbalanced.",
  },
  {
    title: "Condensation on walls",
    description: "May be from bad seals or poor airflow — we adjust or replace parts.",
  },
  {
    title: "Lights don't work",
    description: "Faulty switch or broken LED module.",
  },
  {
    title: "Food gets freezer burn",
    description: "Inconsistent temperature — we calibrate thermostat.",
  },
  {
    title: "Strange noises overnight",
    description: "Compressor or defrost heater might be engaging incorrectly.",
  },
  {
    title: "Plastic parts broken",
    description: "Bins, rails, and supports — we install replacements.",
  },
  {
    title: "Cycle never ends",
    description: "We inspect thermistors and defrost timer.",
  },
  {
    title: "Leaking when defrosting",
    description: "Drain tube may be clogged.",
  },
  {
    title: "Display not responding",
    description: "UI board or touchpad failure — we repair or replace.",
  },
];

const benefits = [
  "Fast repair solutions for your freezing problems",
  "Clear communication and no confusing jargon",
  "Skilled with both garage and kitchen freezer models",
  "Upfront quotes and fair rates",
  "Your satisfaction is our priority",
];

const serviceAreas = [
  "Crossing Bridge",
  "Jackson Trails",
  "Bryanston Gate",
  "West Ridge",
  "Timbermere",
  "Fairwinds",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/freezer-repair/kanata" },
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
    question: "Do you service Jackson Trails and Granite Ridge?",
    answer: "Absolutely — we work across all Stittsville neighborhoods.",
  },
  {
    question: "Do you fix frost buildup or temperature swings?",
    answer: "Yes — we'll diagnose the issue and offer reliable fixes.",
  },
  {
    question: "What's the typical repair time in Stittsville?",
    answer: "Usually 1–2 hours, depending on the fault.",
  },
  {
    question: "Do you offer weekend appointments?",
    answer: "Sometimes — reach out for availability.",
  },
  {
    question: "Do you recycle old units if replacement is needed?",
    answer: "We can assist in removal but don't offer direct recycling.",
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

export default function FreezerRepairStittsvillePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <FaSnowflake className="text-6xl mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Freezer Not Cooling? We're on It in Stittsville
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            From strange buzzing sounds to freezers that over-freeze, Fixer Appliance Repair keeps Stittsville homes and small businesses running smoothly. We service Maytag, Whirlpool, GE, Samsung, LG, and Frigidaire.
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
              We service all major freezer brands with honest, reliable repairs.
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
                Need a new freezer in Stittsville?
              </p>
              <p className="text-center">
                Before spending on a replacement, look at our repair vs. replace guide — it outlines common failures, costs, and lifespan.
              </p>
              <p className="text-center">
                Once you've chosen a new unit, we'll handle freezer installation in Stittsville. We connect and test it with your existing electrical hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ No new wiring or plumbing included.
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
          <h2 className="heading-md text-center mb-8">Service Area: Stittsville and Nearby</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            We provide appliance repair services across the entire Stittsville area, including:
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

      {/* Discover Stittsville */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Discover Stittsville While We Work on Your Freezer</h2>
          <p className="text-center text-gray-700 mb-8">Waiting doesn't have to be boring — try these spots:</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Amberwood Village Trails</h3>
              <p className="text-gray-600">Refreshing and scenic</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Quitters Coffee</h3>
              <p className="text-gray-600">Cozy café loved by residents</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Village Square Park</h3>
              <p className="text-gray-600">A simple place to recharge</p>
            </div>
          </div>
          <p className="text-center mt-8">
            <a 
              href="https://ottawatourism.ca/en/see-and-do/events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              See what events are on: Events in Stittsville
            </a>
          </p>
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
          <h2 className="heading-md mb-4 text-white">Book Your Freezer Repair in Stittsville</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Local and fast — we'll get your freezer working again in no time.
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-xl font-semibold">Call/text: (613) 555-0199</p>
            <p className="text-xl">service@fixerappliancerepair.ca</p>
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
