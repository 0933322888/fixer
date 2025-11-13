import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";

export const metadata: Metadata = {
  title: "Freezer Repair Mississippi Mills – Fast Upright & Chest Freezer Service | Fixer",
  description: "Fixer Appliance Repair provides trusted freezer repair in Mississippi Mills. From frost buildup to noisy compressors and leaks, we service Whirlpool, GE, Samsung, LG & more — with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Freezer won't stay cold",
    description: "Rural Mississippi Mills homes often have voltage drops that stress compressors. We'll test the sealed system and restore cooling.",
  },
  {
    title: "Excessive frost or ice sheets",
    description: "Defrost system failures or worn gaskets often cause heavy buildup. We'll repair heaters and seals.",
  },
  {
    title: "Uneven freezing",
    description: "When some food freezes solid while others stay soft, airflow fans or sensors are usually to blame. We'll balance the cooling.",
  },
  {
    title: "Freezer too noisy",
    description: "Rattling or grinding often comes from fans or bearings. We'll quiet it down.",
  },
  {
    title: "Leaks onto the floor",
    description: "Clogged drains can push water out of the unit. We'll clear them and stop the mess.",
  },
  {
    title: "Interior light won't switch on",
    description: "Sometimes it's a simple bulb, other times a bad door switch. We'll replace whichever is faulty.",
  },
];

const benefits = [
  "Trusted freezer service specialists in Mississippi Mills",
  "Honest estimates before we start",
  "Fast response — often same or next day",
  "Backed by a 90-day service warranty",
];

const serviceAreas = [
  "Almonte",
  "Appleton",
  "Blakeney",
  "Pakenham",
  "Ramsay",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/freezer-repair/kanata" },
  { name: "Stittsville", slug: "/freezer-repair/stittsville" },
  { name: "Nepean", slug: "/freezer-repair/nepean" },
  { name: "Orleans", slug: "/freezer-repair/orleans" },
  { name: "Vanier", slug: "/freezer-repair/vanier" },
  { name: "Barrhaven", slug: "/freezer-repair/barrhaven" },
  { name: "Arnprior", slug: "/freezer-repair/arnprior" },
  { name: "Carleton Place", slug: "/freezer-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you repair freezers in Mississippi Mills?",
    answer: "Yes — Almonte, Appleton, and surrounding areas.",
  },
  {
    question: "Why is frost building up inside?",
    answer: "Defrost system failure or gasket leaks.",
  },
  {
    question: "Do you handle freezer installation?",
    answer: "Yes — using current hookups.",
  },
  {
    question: "Do you repair upright and chest freezers?",
    answer: "Yes — all types and brands.",
  },
  {
    question: "Do you provide upfront estimates?",
    answer: "Yes — before starting work.",
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

export default function FreezerRepairMississippiMillsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <FaSnowflake className="text-6xl mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Expert Freezer Service in Mississippi Mills
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            From chest freezers on rural properties to uprights in Almonte kitchens, Fixer Appliance Repair keeps your food safe and frozen. We fix thermostat issues, noisy compressors, and frost build-up — often with same-day availability.
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
              Brands we handle include Frigidaire, Whirlpool, GE, LG, and Samsung.
            </p>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Common Freezer Issues We Fix in Mississippi Mills</h2>
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
            <h2 className="heading-md text-center mb-8">Freezer Installation in Mississippi Mills</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                Freezer acting up in Mississippi Mills?
              </p>
              <p className="text-center">
                Before replacing, review our repair vs. replace guide — it may save you money.
              </p>
              <p className="text-center">
                If replacement is the choice, we provide freezer installation in Mississippi Mills. We'll install and test it using your current power connections.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ We don't run new wiring or plumbing lines.
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
            We provide appliance repair services across the entire Mississippi Mills area, including:
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
              For full coverage, see our Freezer Repair Ottawa page
            </Link>
          </p>
        </div>
      </section>

      {/* Discover Mississippi Mills */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Explore the Area While We Fix Your Freezer</h2>
          <p className="text-center text-gray-700 mb-8">Turn repair time into discovery time:</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Almonte Riverwalk</h3>
              <p className="text-gray-600">Stroll by the river.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Mill of Kintail</h3>
              <p className="text-gray-600">Learn and hike.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Downtown Almonte</h3>
              <p className="text-gray-600">Shops and cafés.</p>
            </div>
          </div>
          <p className="text-center mt-8">
            <a 
              href="https://ottawatourism.ca/en/see-and-do/events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              See what's happening in Mississippi Mills
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">FAQ – Freezer Repair in Mississippi Mills</h2>
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
          <h2 className="heading-md mb-4 text-white">Schedule Your Freezer Repair in Mississippi Mills</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Serving Almonte, Appleton, and surrounding areas — schedule your freezer repair now:
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
