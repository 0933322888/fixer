import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";

export const metadata: Metadata = {
  title: "Freezer Repair Vanier – Upright & Chest Freezers Fixed Fast | Fixer",
  description: "Fixer Appliance Repair provides expert freezer repair in Vanier. From leaks and frost buildup to noisy compressors and power failures, we service Whirlpool, GE, Samsung, LG & more. Same-day local service with a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Freezer won't turn on",
    description: "In older Vanier homes, worn wiring or tripped breakers often cause power loss. We'll test and repair quickly.",
  },
  {
    title: "Freezer over-freezing",
    description: "If food turns rock solid and frost covers everything, the thermostat may be stuck. We'll replace it.",
  },
  {
    title: "Water pooling at the bottom",
    description: "Clogged drains often cause puddles. We'll clear them and stop leaks.",
  },
  {
    title: "Freezer making knocking sounds",
    description: "A failing compressor or loose fan blade can knock loudly. We'll locate and repair the issue.",
  },
  {
    title: "Interior light not working",
    description: "Sometimes it's just a bulb, sometimes a bad door switch. We'll handle both.",
  },
  {
    title: "Plastic drawers cracked",
    description: "We'll replace damaged drawers so the freezer works and looks better.",
  },
];

const benefits = [
  "Skilled Vanier freezer repair and installation technicians",
  "Straightforward, upfront pricing",
  "90-day labour warranty for peace of mind",
  "Same-day and next-day availability",
];

const serviceAreas = [
  "Overbrook",
  "Beechwood Village",
  "Cardinal Glen",
  "Notre Dame des Champs",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/freezer-repair/kanata" },
  { name: "Stittsville", slug: "/freezer-repair/stittsville" },
  { name: "Nepean", slug: "/freezer-repair/nepean" },
  { name: "Orleans", slug: "/freezer-repair/orleans" },
  { name: "Barrhaven", slug: "/freezer-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/freezer-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/freezer-repair/arnprior" },
  { name: "Carleton Place", slug: "/freezer-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you repair freezers in Vanier apartments and homes?",
    answer: "Yes — both houses and multi-unit buildings.",
  },
  {
    question: "Why is my freezer too noisy?",
    answer: "Fan motor or compressor issues.",
  },
  {
    question: "Do you install freezers?",
    answer: "Yes — with current power supply.",
  },
  {
    question: "Do you repair all brands?",
    answer: "Yes — Whirlpool, GE, Samsung, LG, and more.",
  },
  {
    question: "Do you provide a warranty?",
    answer: "Yes — every job backed by a 90-day warranty.",
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

export default function FreezerRepairVanierPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <FaSnowflake className="text-6xl mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Dependable Freezer Repair in Vanier
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            A freezer that won't cool properly or drips water onto the floor needs attention fast. Fixer Appliance Repair serves Vanier with skilled, trustworthy service and transparent quotes every time.
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
              We fix all major makes, including Frigidaire, Whirlpool, GE, Samsung, and LG.
            </p>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Common Freezer Issues We Fix in Vanier</h2>
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
            <h2 className="heading-md text-center mb-8">Freezer Installation in Vanier</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                Need freezer installation in Vanier?
              </p>
              <p className="text-center">
                Before you replace the old one, check our repair vs. replace guide — it helps make the right choice.
              </p>
              <p className="text-center">
                If you already have a new freezer, we provide installation in Vanier. We'll connect, balance, and test it using the current hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ No new plumbing or electrical lines included.
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
            We provide appliance repair services across the entire Vanier area, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
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

      {/* Discover Vanier */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Explore Vanier While We Fix Your Freezer</h2>
          <p className="text-center text-gray-700 mb-8">Here's how you could spend the time:</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Richelieu Park</h3>
              <p className="text-gray-600">Trails and fresh air.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Vanier Museopark</h3>
              <p className="text-gray-600">Cultural stop worth a visit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Beechwood Avenue</h3>
              <p className="text-gray-600">Shops and dining.</p>
            </div>
          </div>
          <p className="text-center mt-8">
            <a 
              href="https://ottawatourism.ca/en/see-and-do/events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              See local Vanier events
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">FAQ – Freezer Repair in Vanier</h2>
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
          <h2 className="heading-md mb-4 text-white">Schedule Your Freezer Repair in Vanier</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Ready to get your freezer fixed? Reach out now to Fixer Appliance Repair:
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
