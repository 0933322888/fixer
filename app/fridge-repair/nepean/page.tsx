import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Fridge Repair Nepean – Fast, Affordable Local Service | Fixer",
  description: "Fixer provides expert fridge repair in Nepean. We fix cooling, leaks & noise issues for Whirlpool, Samsung, LG & more — with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Fridge not cooling evenly",
    description: "Blocked vents or failing fans can cause warm spots.",
  },
  {
    title: "No power to fridge",
    description: "We test outlets, fuses, and internal wiring.",
  },
  {
    title: "Water leaking inside",
    description: "Clogged defrost drain or cracked interior liner.",
  },
  {
    title: "Rattling noise when running",
    description: "Loose fan blades or compressor mounts.",
  },
  {
    title: "Food spoils quickly",
    description: "Unstable thermostat or defrost failure.",
  },
  {
    title: "Door pops open",
    description: "Hinges may need adjustment or seal replacement.",
  },
  {
    title: "Ice maker leaking",
    description: "We replace faulty valves or lines.",
  },
  {
    title: "Digital display flashing",
    description: "Board or software reset may be needed.",
  },
  {
    title: "Fridge cycles too often",
    description: "Could be bad defrost timer or dirty coils.",
  },
  {
    title: "Water tastes odd",
    description: "We replace filters and flush the system.",
  },
];

const benefits = [
  "Clear, upfront pricing — always",
  "Repairs done with care and precision",
  "Flexible service times that fit your schedule",
  "Honest advice based on your fridge's real condition",
  "We clean up after every visit",
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
  { name: "Kanata", slug: "/fridge-repair/kanata" },
  { name: "Stittsville", slug: "/fridge-repair/stittsville" },
  { name: "Orleans", slug: "/fridge-repair/orleans" },
  { name: "Vanier", slug: "/fridge-repair/vanier" },
  { name: "Barrhaven", slug: "/fridge-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/fridge-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/fridge-repair/arnprior" },
  { name: "Carleton Place", slug: "/fridge-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you service Parkwood Hills and Bells Corners?",
    answer: "Yes — those are common stops for our fridge technicians.",
  },
  {
    question: "Do you work with energy-efficient models?",
    answer: "Yes — including inverter-based and ENERGY STAR units.",
  },
  {
    question: "Do you diagnose control board problems?",
    answer: "Yes — we carry tools for advanced diagnostics.",
  },
  {
    question: "Can you repair noisy compressors?",
    answer: "Sometimes — if not, we'll explain next steps.",
  },
  {
    question: "Is same-day repair possible in Nepean?",
    answer: "Sometimes — call early to check availability.",
  },
];

export default function FridgeRepairNepeanPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <FaSnowflake className="text-6xl mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fridge Repair in Nepean – Fast, Local, Affordable
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            From inconsistent cooling to faulty ice dispensers, fridge problems can't wait. Fixer Appliance Repair serves Nepean with fast, reliable refrigerator service and a 90-day warranty.
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
              We service Whirlpool, GE, Samsung, LG, Maytag, Frigidaire, and more.
            </p>
          </div>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} />

      {/* Fridge Installation CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">New Fridge? We Can Install It</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Got a new fridge? We also provide fridge installation in Nepean with same-day service available in most areas.
          </p>
          <Link href="/appliance-installation" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Learn About Fridge Installation
          </Link>
        </div>
      </section>

      <BenefitsSection applianceName="Fridge" benefits={benefits} />

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
              For full coverage, visit our Fridge Repair Ottawa page
            </Link>
          </p>
        </div>
      </section>

      {/* Discover Nepean */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Discover Nepean While We Repair Your Fridge</h2>
          <p className="text-center text-gray-700 mb-8">Instead of waiting around, explore some local favorites:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Andrew Haydon Park</h3>
              <p className="text-gray-600">Calm and scenic with walking paths</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Bruce Pit</h3>
              <p className="text-gray-600">Community-loved dog park and trails</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Merivale Mall</h3>
              <p className="text-gray-600">Shop or grab a bite nearby</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Art Is In Bakery</h3>
              <p className="text-gray-600">Hip café for bread lovers</p>
            </div>
          </div>
          <p className="text-center mt-8">
            <a 
              href="https://ottawatourism.ca/en/see-and-do/events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Explore what's on in town: Events in Nepean
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
          <h2 className="heading-md mb-4 text-white">Book Your Fridge Repair in Nepean</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Need help in Nepean? We're nearby and ready to fix your fridge fast.
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
          <h2 className="heading-md text-center mb-8">Also Need Help With…</h2>
          <p className="text-center text-gray-700 mb-8">
            We service more than just fridges — here are our other options in Nepean:
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
            <Link href="/oven-repair" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Oven Repair Nepean
            </Link>
            <Link href="/fridge-installation" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Fridge Installation Nepean
            </Link>
          </div>
          <p className="text-center text-gray-700 mt-8">
            Need another appliance repaired? We're here to help across Nepean.
          </p>
        </div>
      </section>

    </>
  );
}
