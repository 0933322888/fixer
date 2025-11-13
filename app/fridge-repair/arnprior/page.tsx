import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";

export const metadata: Metadata = {
  title: "Fridge Repair Arnprior – Trusted Local Technicians | Fixer",
  description: "Fixer Appliance Repair provides expert fridge repair in Arnprior. From cooling failures to leaks and ice maker issues, we service Whirlpool, Samsung, LG & more — with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Fridge won't cool at all",
    description: "In Arnprior homes, this is often a compressor or start relay failure. We'll get your fridge back to safe temperatures.",
  },
  {
    title: "Freezer not freezing",
    description: "If food stays soft, it may be a bad evaporator fan or clogged coils. We'll restore full freezing power.",
  },
  {
    title: "Water leaking onto the floor",
    description: "Loose inlet lines or cracked trays are common culprits. We'll seal leaks before they cause water damage.",
  },
  {
    title: "Interior lights not working",
    description: "Sometimes it's just a bulb, but it can also be a door switch fault. We'll check both.",
  },
  {
    title: "Digital display errors",
    description: "Modern fridges show codes when sensors fail. We'll decode the message and handle the repair.",
  },
];

const benefits = [
  "Experienced Arnprior fridge specialists with 15+ years of service",
  "Clear, upfront pricing on every job",
  "Same-day and next-day scheduling available",
  "Repairs and installs covered by a 90-day warranty",
];

const serviceAreas = [
  "Downtown Arnprior",
  "Braeside",
  "McNab",
  "White Lake",
  "Sand Point",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/fridge-repair/kanata" },
  { name: "Stittsville", slug: "/fridge-repair/stittsville" },
  { name: "Nepean", slug: "/fridge-repair/nepean" },
  { name: "Orleans", slug: "/fridge-repair/orleans" },
  { name: "Vanier", slug: "/fridge-repair/vanier" },
  { name: "Barrhaven", slug: "/fridge-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/fridge-repair/mississippi-mills" },
  { name: "Carleton Place", slug: "/fridge-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you repair fridges in Arnprior homes?",
    answer: "Yes — and nearby areas like Braeside and White Lake.",
  },
  {
    question: "Why is my fridge freezing food?",
    answer: "Likely a faulty thermostat or control board.",
  },
  {
    question: "Do you install new fridges?",
    answer: "Yes — installation with current hookups only.",
  },
  {
    question: "Do you service both standard and French-door fridges?",
    answer: "Yes — all major designs and brands.",
  },
  {
    question: "Do you provide a warranty?",
    answer: "Yes — 90-day labour warranty on all work.",
  },
];

export default function FridgeRepairArnpriorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <FaSnowflake className="text-6xl mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fridge Repair in Arnprior
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            From ice maker problems to fridges that cycle constantly, Fixer Appliance Repair has Arnprior covered. Our technicians bring years of experience, same-day availability in many cases, and honest quotes before the work begins.
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
              We service most brands, including Frigidaire, Whirlpool, Samsung, LG, and GE.
            </p>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Common Fridge Issues We Fix in Arnprior</h2>
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
            <h2 className="heading-md text-center mb-8">Fridge Installation in Arnprior</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                Need fridge installation in Arnprior?
              </p>
              <p className="text-center">
                Before replacing, take a look at our repair vs. replace guide — it explains costs and common repair issues.
              </p>
              <p className="text-center">
                When you bring home a new fridge, we provide installation in Arnprior. We'll connect, balance, and test it with the current hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ We don't create new plumbing or electrical lines.
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
            We provide appliance repair services across the entire Arnprior area, including:
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

      {/* Discover Arnprior */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Discover Arnprior While We Fix Your Fridge</h2>
          <p className="text-center text-gray-700 mb-8">Take a break at some local favorites:</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Robert Simpson Park</h3>
              <p className="text-gray-600">Riverside relaxation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Gillies Grove</h3>
              <p className="text-gray-600">Enjoy nature in the forest.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Downtown Arnprior</h3>
              <p className="text-gray-600">Shopping and dining close by.</p>
            </div>
          </div>
          <p className="text-center mt-8">
            <a 
              href="https://ottawatourism.ca/en/see-and-do/events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              See local events in Arnprior
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">FAQ – Fridge Repair in Arnprior</h2>
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
          <h2 className="heading-md mb-4 text-white">Schedule Your Fridge Repair in Arnprior</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Fridge problems? Contact Fixer Appliance Repair for quick, professional service:
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
            We handle more than just fridges — here are our other services in Arnprior:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/washer-repair/arnprior" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Washer Repair Arnprior
            </Link>
            <Link href="/dryer-repair/arnprior" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dryer Repair Arnprior
            </Link>
            <Link href="/dishwasher-repair" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dishwasher Repair Arnprior
            </Link>
            <Link href="/oven-repair" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Oven Repair Arnprior
            </Link>
            <Link href="/fridge-installation" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Fridge Installation Arnprior
            </Link>
          </div>
          <p className="text-center text-gray-700 mt-8">
            Looking for help with another appliance? We're here for Arnprior homes.
          </p>
        </div>
      </section>

    </>
  );
}
