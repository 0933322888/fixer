import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";

export const metadata: Metadata = {
  title: "Fridge Repair Carleton Place – Trusted Local Service | Fixer",
  description: "Fixer Appliance Repair provides expert fridge repair in Carleton Place. From cooling failures to leaks and ice maker issues, we service Whirlpool, Samsung, LG & more — with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Fridge not cooling",
    description: "Could be due to a failed compressor, thermostat, or fan motor. We'll test and fix it fast.",
  },
  {
    title: "Water leaking",
    description: "Blocked defrost drain or cracked water line are common causes.",
  },
  {
    title: "Strange noises",
    description: "Buzzing, clicking, or humming may come from fans or compressor.",
  },
  {
    title: "Ice maker not working",
    description: "We check water lines, valves, and sensors.",
  },
  {
    title: "Display not working",
    description: "We inspect and replace faulty control boards or wiring.",
  },
];

const benefits = [
  "Experienced Carleton Place fridge specialists",
  "Clear, upfront pricing on every job",
  "Same-day and next-day scheduling available",
  "Repairs covered by a 90-day warranty",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/fridge-repair/kanata" },
  { name: "Stittsville", slug: "/fridge-repair/stittsville" },
  { name: "Nepean", slug: "/fridge-repair/nepean" },
  { name: "Orleans", slug: "/fridge-repair/orleans" },
  { name: "Vanier", slug: "/fridge-repair/vanier" },
  { name: "Barrhaven", slug: "/fridge-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/fridge-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/fridge-repair/arnprior" },
];

const faqs = [
  {
    question: "Do you repair fridges in Carleton Place?",
    answer: "Yes — we serve all of Carleton Place and surrounding areas.",
  },
  {
    question: "Why is my fridge not cooling?",
    answer: "Common causes include compressor failure, thermostat issues, or blocked airflow.",
  },
  {
    question: "Do you install new fridges?",
    answer: "Yes — installation with current hookups only.",
  },
  {
    question: "Do you service all brands?",
    answer: "Yes — all major designs and brands.",
  },
  {
    question: "Do you provide a warranty?",
    answer: "Yes — 90-day labour warranty on all work.",
  },
];

export default function FridgeRepairCarletonPlacePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <FaSnowflake className="text-6xl mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fridge Repair in Carleton Place
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Fast, reliable fridge repair services in Carleton Place. Our experienced technicians provide same-day service with honest quotes and quality workmanship.
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
              We service all major brands including Whirlpool, Samsung, LG, GE, and Maytag.
            </p>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Common Fridge Issues We Fix in Carleton Place</h2>
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
            <h2 className="heading-md text-center mb-8">Fridge Installation in Carleton Place</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                We also provide professional fridge installation services in Carleton Place.
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

      <BenefitsSection applianceName="Fridge" benefits={benefits} />

      <CTASection />

      {/* Service Area */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Service Area</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            We provide appliance repair services in Carleton Place and surrounding areas.
          </p>
          
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

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">FAQ – Fridge Repair in Carleton Place</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
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
          <h2 className="heading-md mb-4 text-white">Schedule Your Fridge Repair in Carleton Place</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact Fixer Appliance Repair for quick, professional service:
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
            We handle more than just fridges — here are our other services in Carleton Place:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/washer-repair/carleton-place" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Washer Repair Carleton Place
            </Link>
            <Link href="/dryer-repair/carleton-place" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dryer Repair Carleton Place
            </Link>
            <Link href="/dishwasher-repair/carleton-place" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dishwasher Repair Carleton Place
            </Link>
            <Link href="/oven-repair" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Oven Repair Carleton Place
            </Link>
            <Link href="/fridge-installation" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Fridge Installation Carleton Place
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
