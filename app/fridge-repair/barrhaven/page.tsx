import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "Fridge Repair Barrhaven – Fast, Reliable Local Service | Fixer",
  description: "Fixer Appliance Repair offers expert fridge repair in Barrhaven. From cooling issues to noisy fans and ice maker leaks, we service Whirlpool, Samsung, LG & more — with same-day availability and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Fridge not cooling properly",
    description: "In Barrhaven's newer townhomes, airflow blockages or thermostat faults are common. We'll restore the right temperature.",
  },
  {
    title: "Ice maker overflowing",
    description: "Leaky valves or frozen lines can flood the bin. We'll repair the ice system quickly.",
  },
  {
    title: "Fridge running too loud",
    description: "Buzzing or rattling often comes from worn condenser fans. We'll quiet it down with the right repair.",
  },
  {
    title: "Water inside the crisper drawers",
    description: "Usually a clogged defrost drain. We'll clear it so produce stays fresh and dry.",
  },
  {
    title: "Fridge shutting off randomly",
    description: "Control board issues or faulty wiring sometimes cut power. We'll trace the fault and fix it.",
  },
];

const benefits = [
  "Local Barrhaven team with deep fridge repair knowledge",
  "Professional service and clear communication",
  "90-day labour warranty for peace of mind",
  "Same-day and next-day appointments offered",
];

const serviceAreas = [
  "Chapman Mills",
  "Stonebridge",
  "Longfields",
  "Half Moon Bay",
  "Knollsbrook",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/fridge-repair/kanata" },
  { name: "Stittsville", slug: "/fridge-repair/stittsville" },
  { name: "Nepean", slug: "/fridge-repair/nepean" },
  { name: "Orleans", slug: "/fridge-repair/orleans" },
  { name: "Vanier", slug: "/fridge-repair/vanier" },
  { name: "Mississippi Mills", slug: "/fridge-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/fridge-repair/arnprior" },
  { name: "Carleton Place", slug: "/fridge-repair/carleton-place" },
];

const faqs = [
  {
    question: "Can I book a same-day fridge repair in Barrhaven?",
    answer: "Yes — depending on our schedule.",
  },
  {
    question: "Why is my fridge running constantly?",
    answer: "It may be dirty coils, a bad sensor, or refrigerant issues.",
  },
  {
    question: "Do you provide fridge installation?",
    answer: "Yes — installation using existing hookups.",
  },
  {
    question: "Do you cover nearby areas?",
    answer: "Yes — including Stonebridge and Half Moon Bay.",
  },
  {
    question: "Do you offer upfront pricing?",
    answer: "Yes — always before work starts.",
  },
];

export default function FridgeRepairBarrhavenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <FaSnowflake className="text-6xl mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fridge Repair in Barrhaven
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            If your fridge in Barrhaven is leaking, humming loudly, or simply not cooling, Fixer Appliance Repair can help. We deliver quick local service with a 90-day workmanship warranty on every job.
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
              Brands we repair include Samsung, LG, Whirlpool, GE, and Maytag.
            </p>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Common Fridge Issues We Fix in Barrhaven</h2>
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
            <h2 className="heading-md text-center mb-8">Fridge Installation in Barrhaven</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                Upgrading to a new fridge in Barrhaven?
              </p>
              <p className="text-center">
                Our repair vs. replace guide will help you decide which option makes the most sense.
              </p>
              <p className="text-center">
                If you already purchased one, we provide fridge installation in Barrhaven. We'll connect and test it using your existing water and power supply.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ No plumbing or high-voltage work included.
              </p>
              <div className="text-center mt-6">
                <Link href="/fridge-installation" className="btn-primary">
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
          <h2 className="heading-md text-center mb-8">Service Area</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            We provide appliance repair services across the entire Barrhaven area, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {serviceAreas.map((area, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-800">{area}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-700 mb-6">
            We also provide fridge repair services in:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            {nearbyAreas.map((area, index) => (
              <Link
                key={index}
                href={area.slug}
                className="flex items-center justify-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors text-sm"
              >
                <FaMapMarkerAlt className="text-primary-600 flex-shrink-0" />
                <span>Fridge Repair {area.name}</span>
              </Link>
            ))}
          </div>
          
          <p className="text-center">
            <Link href="/fridge-repair" className="text-primary-600 hover:text-primary-700 underline">
              For full coverage, see our Fridge Repair Ottawa page
            </Link>
          </p>
        </div>
      </section>

      {/* Discover Barrhaven */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Discover Barrhaven While We Repair Your Fridge</h2>
          <p className="text-center text-gray-700 mb-8">Instead of waiting, check out:</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Walter Baker Centre</h3>
              <p className="text-gray-600">Fun for the family.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Chapman Mills Conservation Area</h3>
              <p className="text-gray-600">Peaceful walking paths.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Marketplace Barrhaven</h3>
              <p className="text-gray-600">Shops and restaurants.</p>
            </div>
          </div>
          <p className="text-center mt-8">
            <a 
              href="https://ottawatourism.ca/en/see-and-do/events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              See what's on in Barrhaven
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">FAQ – Fridge Repair in Barrhaven</h2>
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
          <h2 className="heading-md mb-4 text-white">Schedule Your Fridge Repair in Barrhaven</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're ready to help — schedule your fridge repair with Fixer Appliance Repair today:
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
          <h2 className="heading-md text-center mb-8">Also Need Help With…</h2>
          <p className="text-center text-gray-700 mb-8">
            Beyond fridge repair, we also provide these services in Barrhaven:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/washer-repair/barrhaven" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Washer Repair Barrhaven
            </Link>
            <Link href="/dryer-repair/barrhaven" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dryer Repair Barrhaven
            </Link>
            <Link href="/dishwasher-repair/barrhaven" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dishwasher Repair Barrhaven
            </Link>
            <Link href="/oven-repair" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Oven Repair Barrhaven
            </Link>
            <Link href="/fridge-installation" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Fridge Installation Barrhaven
            </Link>
          </div>
          <p className="text-center text-gray-700 mt-8">
            Need fast, reliable help? We're ready in Barrhaven.
          </p>
        </div>
      </section>

      <MapSection />
    </>
  );
}
