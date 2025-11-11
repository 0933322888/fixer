import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "Freezer Repair Nepean – Fast, Reliable Upright & Chest Freezer Service | Fixer",
  description: "Fixer Appliance Repair provides expert freezer repair in Nepean. From leaks to noisy compressors and temperature issues, we service Whirlpool, Samsung, LG & more — with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Freezer warm but light works",
    description: "May be a sensor, defrost system, or refrigerant leak.",
  },
  {
    title: "Interior frozen solid",
    description: "Failed defrost system — we restore cycle timing.",
  },
  {
    title: "Constant beeping or alerts",
    description: "We fix stuck alarms or reset sensors.",
  },
  {
    title: "Compressor noisy or hot",
    description: "We check overload protection and replace faulty relays.",
  },
  {
    title: "Door won't stay shut",
    description: "We realign hinges and replace gaskets.",
  },
  {
    title: "Ice building on shelves",
    description: "Usually poor sealing or blocked air vents.",
  },
  {
    title: "Display flickers",
    description: "Control board or wiring issue.",
  },
  {
    title: "Frozen water under bins",
    description: "Clogged drains or evaporator coil icing.",
  },
  {
    title: "Strange chemical smell",
    description: "Potential refrigerant leak — we act fast and safe.",
  },
  {
    title: "Runs constantly, never shuts off",
    description: "Sensor, fan, or board may be misreading temps.",
  },
];

const benefits = [
  "We respect your time and your kitchen",
  "Affordable repairs that last",
  "We take the time to explain what's wrong and how we'll fix it",
  "Appointments available at convenient times",
  "We value long-term trust over quick sales",
];

const serviceAreas = [
  "Barrhaven East",
  "Centrepointe",
  "Merivale Gardens",
  "Manordale",
  "Tanglewood",
  "Fallowfield",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/freezer-repair/kanata" },
  { name: "Stittsville", slug: "/freezer-repair/stittsville" },
  { name: "Orleans", slug: "/freezer-repair/orleans" },
  { name: "Vanier", slug: "/freezer-repair/vanier" },
  { name: "Barrhaven", slug: "/freezer-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/freezer-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/freezer-repair/arnprior" },
  { name: "Carleton Place", slug: "/freezer-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you repair freezers in Tanglewood and Arlington Woods?",
    answer: "Yes — we serve homes throughout Nepean.",
  },
  {
    question: "Is it worth repairing an older upright freezer?",
    answer: "Often yes — we'll help you decide based on age and cost.",
  },
  {
    question: "Do you offer quick freezer repairs in Nepean?",
    answer: "We aim for service within 48 hours, often sooner.",
  },
  {
    question: "Do you carry parts for Danby and GE?",
    answer: "Yes — we stock for common models.",
  },
  {
    question: "Do you repair commercial freezers too?",
    answer: "No — we focus on residential appliances only.",
  },
];

export default function FreezerRepairNepeanPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <FaSnowflake className="text-6xl mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fast Freezer Repair for Nepean Families
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            If your freezer can't hold steady temperatures, makes loud noises, or leaks water, Fixer Appliance Repair is ready to help in Nepean. Many repairs can be handled in a single visit.
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
              We work with Whirlpool, GE, Samsung, LG, Maytag, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Common Problems We Fix</h2>
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
            <h2 className="heading-md text-center mb-8">Installation Services</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                Considering freezer replacement in Nepean?
              </p>
              <p className="text-center">
                Read our repair vs. replace guide first — it explains when repair is still a good option.
              </p>
              <p className="text-center">
                If you've already purchased one, we provide freezer installation in Nepean. Our team installs and tests it using the current power supply.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ We don't add new circuits or plumbing.
              </p>
              <div className="text-center mt-6">
                <Link href="/freezer-installation" className="btn-primary">
                  Learn More About Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <FaCheckCircle className="text-primary-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* Service Area */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Service Area: Nepean and Nearby</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            We provide appliance repair services across the entire Nepean area, including:
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

      {/* Discover Nepean */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Things to Do in Nepean While We Fix Your Freezer</h2>
          <p className="text-center text-gray-700 mb-8">Here are a few ideas to make the wait more enjoyable:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Andrew Haydon Park</h3>
              <p className="text-gray-600">Fresh air by the waterfront</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Bruce Pit</h3>
              <p className="text-gray-600">A popular family and dog-friendly area</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Merivale Mall</h3>
              <p className="text-gray-600">All-in-one shopping stop</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Art Is In Bakery</h3>
              <p className="text-gray-600">Sandwiches and breads with style</p>
            </div>
          </div>
          <p className="text-center mt-8">
            <a 
              href="https://ottawatourism.ca/en/see-and-do/events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              See what's happening in the community this week: Events in Nepean
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
          <h2 className="heading-md mb-4 text-white">Book Your Freezer Repair in Nepean</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Freezer on the fritz? Let us handle it.
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-xl font-semibold">(613) 555-0199</p>
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
          <h2 className="heading-md text-center mb-8">Also Need Help With…</h2>
          <p className="text-center text-gray-700 mb-8">
            We handle more than freezers — here are our other services in Nepean:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/washer-repair/nepean" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Washer Repair Nepean
            </Link>
            <Link href="/dryer-repair/nepean" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dryer Repair Nepean
            </Link>
            <Link href="/dishwasher-repair/nepean" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dishwasher Repair Nepean
            </Link>
            <Link href="/fridge-repair/nepean" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Fridge Repair Nepean
            </Link>
            <Link href="/oven-repair" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Oven Repair Nepean
            </Link>
            <Link href="/freezer-installation" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Freezer Installation Nepean
            </Link>
          </div>
          <p className="text-center text-gray-700 mt-8">
            Need help with another appliance? We're ready to assist in Nepean.
          </p>
        </div>
      </section>

      <MapSection />
    </>
  );
}
