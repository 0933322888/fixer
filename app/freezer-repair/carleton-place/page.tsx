import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";

export const metadata: Metadata = {
  title: "Freezer Repair Carleton Place – Upright & Chest Freezer Service | Fixer",
  description: "Fixer Appliance Repair offers trusted freezer repair in Carleton Place. From frost buildup and clicking noises to power issues and leaks, we fix Whirlpool, Samsung, GE, LG & more. Same-day service available with a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Freezer not powering on",
    description: "In Carleton Place, power surges or bad control boards often cause a complete shutdown. We'll bring it back to life.",
  },
  {
    title: "Food thawing too quickly",
    description: "A faulty thermostat or low refrigerant often causes unstable temps. We'll restore proper freezing.",
  },
  {
    title: "Frost covering drawers",
    description: "Broken defrost sensors or air leaks create ice buildup. We'll repair seals and clear frost.",
  },
  {
    title: "Freezer door won't close tight",
    description: "Damaged hinges or gaskets keep cold air from staying in. We'll fix them quickly.",
  },
  {
    title: "Clicking noises",
    description: "Often a relay struggling to start the compressor. We'll diagnose and replace it.",
  },
  {
    title: "Plastic bins cracking",
    description: "We'll replace worn or broken drawers so your freezer looks and works like new.",
  },
];

const benefits = [
  "Local Carleton Place technicians experienced with all major freezer brands",
  "Transparent pricing and no upselling",
  "Same-day and next-day booking options",
  "Every repair or install covered by a 90-day guarantee",
];

const serviceAreas = [
  "Carleton Place West",
  "Carleton Place East",
  "Riverside Park",
  "Mississippi Quays",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/freezer-repair/kanata" },
  { name: "Stittsville", slug: "/freezer-repair/stittsville" },
  { name: "Nepean", slug: "/freezer-repair/nepean" },
  { name: "Orleans", slug: "/freezer-repair/orleans" },
  { name: "Vanier", slug: "/freezer-repair/vanier" },
  { name: "Barrhaven", slug: "/freezer-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/freezer-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/freezer-repair/arnprior" },
];

const faqs = [
  {
    question: "Do you offer same-day freezer service in Carleton Place?",
    answer: "When possible, yes.",
  },
  {
    question: "Why is my freezer making clicking noises?",
    answer: "Often a relay, compressor, or fan problem.",
  },
  {
    question: "Do you install new freezers?",
    answer: "Yes — with existing power supply.",
  },
  {
    question: "Do you service nearby areas?",
    answer: "Yes — Beckwith, Franktown, and more.",
  },
  {
    question: "Do you guarantee your work?",
    answer: "Yes — 90-day warranty included.",
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

export default function FreezerRepairCarletonPlacePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <FaSnowflake className="text-6xl mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted Freezer Repair in Carleton Place
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            A broken freezer can mean spoiled food and frustration. Fixer Appliance Repair helps Carleton Place residents with fast diagnostics and dependable repairs, covering leaks, electrical faults, and cooling problems.
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
              We work with brands like GE, Maytag, Samsung, Whirlpool, and LG.
            </p>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Common Freezer Issues We Fix in Carleton Place</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {commonIssues.map((issue, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{issue.title}</h3>
                <p className="text-gray-600">{issue.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Freezer Installation in Carleton Place</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                Need a freezer upgrade in Carleton Place?
              </p>
              <p className="text-center">
                First, see our repair vs. replace guide — it breaks down costs, lifespan, and common failures.
              </p>
              <p className="text-center">
                For new purchases, we provide freezer installation in Carleton Place. We'll connect and test it with your existing electrical supply.
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
          <h2 className="heading-md text-center mb-8">Service Area</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            We provide appliance repair services across the entire Carleton Place area, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
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
              For full coverage, see our Freezer Repair Ottawa page
            </Link>
          </p>
        </div>
      </section>

      {/* Discover Carleton Place */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Explore the Town While We Repair Your Freezer</h2>
          <p className="text-center text-gray-700 mb-8">Turn repair time into an outing:</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Riverside Park</h3>
              <p className="text-gray-600">Stroll along the Mississippi River.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Downtown Carleton Place</h3>
              <p className="text-gray-600">Shops and dining in the heart of town.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Heritage Museum</h3>
              <p className="text-gray-600">Local heritage on display.</p>
            </div>
          </div>
          <p className="text-center mt-8">
            <a 
              href="https://ottawatourism.ca/en/see-and-do/events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              See what's going on in Carleton Place
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">FAQ – Freezer Repair in Carleton Place</h2>
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
          <h2 className="heading-md mb-4 text-white">Schedule Your Freezer Repair in Carleton Place</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Don't let your food thaw — text or call Fixer Appliance Repair to arrange service:
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-xl font-semibold">Call/Text: 613-413-6969</p>
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
