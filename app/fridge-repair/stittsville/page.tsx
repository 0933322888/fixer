import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";

export const metadata: Metadata = {
  title: "Fridge Repair Stittsville – Fast, Local Service You Can Trust | Fixer",
  description: "Fixer provides expert fridge repair in Stittsville. We fix cooling, leaks & noise issues for Samsung, Whirlpool, LG & more — with same-day service and warranty.",
};

const commonIssues = [
  {
    title: "Fridge warm, freezer cold",
    description: "Airflow blockage or damper issue — we restore balance.",
  },
  {
    title: "Humming all the time",
    description: "May be a noisy compressor or fan motor.",
  },
  {
    title: "Leaking from front",
    description: "Check door gasket and condensation tray.",
  },
  {
    title: "Freezer burns food",
    description: "Bad door seal or overcooling — we fix both.",
  },
  {
    title: "Lights out inside",
    description: "Could be bulb, socket, or switch.",
  },
  {
    title: "Water dispenser leaking",
    description: "We replace valve or tighten connections.",
  },
  {
    title: "Ice cubes too small",
    description: "Could be water pressure or valve issue.",
  },
  {
    title: "No display on screen",
    description: "We repair digital panels and boards.",
  },
  {
    title: "Fridge keeps beeping",
    description: "Temperature or door alarms — we resolve both.",
  },
  {
    title: "Fridge smells sour",
    description: "Deep clean and sanitize — plus check for drainage issues.",
  },
];

const benefits = [
  "Skilled in resolving common and complex fridge issues",
  "Fast, courteous service with attention to detail",
  "No unnecessary upsells — just what you need",
  "Straightforward, flat-rate pricing",
  "We take pride in being dependable and clean",
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
  { name: "Kanata", slug: "/fridge-repair/kanata" },
  { name: "Nepean", slug: "/fridge-repair/nepean" },
  { name: "Orleans", slug: "/fridge-repair/orleans" },
  { name: "Vanier", slug: "/fridge-repair/vanier" },
  { name: "Barrhaven", slug: "/fridge-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/fridge-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/fridge-repair/arnprior" },
  { name: "Carleton Place", slug: "/fridge-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you fix fridges in Jackson Trails and Timbermere?",
    answer: "Yes — we regularly work in those neighborhoods.",
  },
  {
    question: "My fridge leaks water — can you help?",
    answer: "Yes — leaks may come from clogged drains or faulty valves.",
  },
  {
    question: "Do you repair both fridge and freezer sections?",
    answer: "Yes — we handle all compartments.",
  },
  {
    question: "How long do repairs take in Stittsville?",
    answer: "Most visits last about 1–2 hours.",
  },
  {
    question: "What brands do you repair most?",
    answer: "Samsung, LG, Whirlpool, GE, and more.",
  },
];

export default function FridgeRepairStittsvillePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <FaSnowflake className="text-6xl mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We Keep Stittsville's Fridges Running Smoothly
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Struggling with a fridge that hums loudly, leaks, or can't hold the right temperature? Fixer Appliance Repair keeps Stittsville kitchens running with skilled local service.
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
              We handle leading brands including Frigidaire, Whirlpool, GE, Samsung, LG, and Maytag.
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

      {/* Fridge Installation CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">New Fridge? We Can Install It</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Got a new fridge? We also provide fridge installation in Stittsville with same-day service available in most areas.
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

      {/* Discover Stittsville */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Relax in Stittsville While We Handle Your Fridge Repair</h2>
          <p className="text-center text-gray-700 mb-8">Step outside and enjoy the area while we work:</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Amberwood Village Trails</h3>
              <p className="text-gray-600">Peaceful greenery all around</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Quitters Coffee</h3>
              <p className="text-gray-600">Sip something warm (or cold!)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Village Square Park</h3>
              <p className="text-gray-600">Take a seat and unwind</p>
            </div>
          </div>
          <p className="text-center mt-8">
            <a 
              href="https://ottawatourism.ca/en/see-and-do/events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Stay updated on local fun: Events in Stittsville
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
          <h2 className="heading-md mb-4 text-white">Book Your Fridge Repair in Stittsville</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Fixer provides trusted fridge repair right here in Stittsville — schedule today.
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
            Need more than fridge repair? Here's what else we offer in Stittsville:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/washer-repair/stittsville" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Washer Repair Stittsville
            </Link>
            <Link href="/dryer-repair/stittsville" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dryer Repair Stittsville
            </Link>
            <Link href="/dishwasher-repair/stittsville" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dishwasher Repair Stittsville
            </Link>
            <Link href="/oven-repair" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Oven Repair Stittsville
            </Link>
            <Link href="/fridge-installation" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Fridge Installation Stittsville
            </Link>
          </div>
          <p className="text-center text-gray-700 mt-8">
            From laundry rooms to kitchens, we've got Stittsville covered.
          </p>
        </div>
      </section>

    </>
  );
}
