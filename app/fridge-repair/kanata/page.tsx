import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "Fridge Repair Kanata – Fast, Reliable Local Experts | Fixer",
  description: "Fixer provides trusted fridge repair in Kanata. We fix cooling, leaks & noise issues for Whirlpool, LG, Samsung & more — with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Fridge not cold enough",
    description: "We check compressor, fans, and settings.",
  },
  {
    title: "Fridge makes buzzing sound",
    description: "Motor or evaporator fan might be worn.",
  },
  {
    title: "Freezer frosting over",
    description: "Likely defrost timer or gasket failure.",
  },
  {
    title: "Ice dispenser jammed",
    description: "We clear and adjust auger or chute.",
  },
  {
    title: "Fridge light stays on",
    description: "Door switch may need replacing.",
  },
  {
    title: "Door doesn't close easily",
    description: "Misaligned hinges or worn gaskets are common.",
  },
  {
    title: "Fridge smells bad",
    description: "Blocked drain line or food residue — we clean thoroughly.",
  },
  {
    title: "Food spoils too fast",
    description: "Unstable temperature — we test sensors.",
  },
  {
    title: "Water under crisper drawers",
    description: "Blocked defrost drain likely — we clear it.",
  },
  {
    title: "Touch controls unresponsive",
    description: "Control panel or wiring may need repair.",
  },
];

const benefits = [
  "Prompt and knowledgeable service for all fridge types",
  "We carry parts to speed up your repair",
  "Friendly team with years of appliance experience",
  "Clear quotes and honest recommendations",
  "We protect your floors and respect your time",
];

const serviceAreas = [
  "Morgan's Grant",
  "Beaverbrook",
  "Katimavik-Hazeldean",
  "Glen Cairn",
  "Bridlewood",
  "Kanata Lakes",
  "Emerald Meadows",
];

const nearbyAreas = [
  { name: "Stittsville", slug: "/fridge-repair/stittsville" },
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
    question: "Can you fix fridges in Glen Cairn and South March?",
    answer: "Yes — we serve all Kanata neighborhoods.",
  },
  {
    question: "Do you handle French-door refrigerator repairs?",
    answer: "Yes — including models from Samsung, LG, and GE.",
  },
  {
    question: "My fridge makes loud humming noises — is that fixable?",
    answer: "Yes — it may be the fan, compressor, or evaporator.",
  },
  {
    question: "Do you offer emergency fridge service?",
    answer: "Yes — especially when cooling fails suddenly.",
  },
  {
    question: "Do you stock parts for Whirlpool and Frigidaire?",
    answer: "Yes — we carry common parts and can order rare ones.",
  },
];

export default function FridgeRepairKanataPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <FaSnowflake className="text-6xl mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kanata's Go-To Technicians for Fridge Repair
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Fridge running too warm? Ice maker clogged? Fixer Appliance Repair offers trusted refrigerator repairs in Kanata, from thermostat failures to broken door seals.
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
              We work with Whirlpool, LG, Samsung, GE, Maytag, and Frigidaire.
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
            <h2 className="heading-md text-center mb-8">Fridge Installation in Kanata</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                Replacing your fridge in Kanata?
              </p>
              <p className="text-center">
                Before buying, check our repair vs. replace guide — it explains costs, lifespan, and common failures.
              </p>
              <p className="text-center">
                If you've already purchased a new fridge, we provide installation in Kanata. We'll set it up, level it, and test cooling using your existing water and electrical hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ Note: we don't add new plumbing lines or high-voltage wiring.
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
          <h2 className="heading-md text-center mb-8">Service Area: Kanata and Nearby</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            We provide appliance repair services across the entire Kanata area, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {serviceAreas.map((area, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-800">{area}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-700 mb-6">
            We also handle fridge repairs in:
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

      {/* Discover Kanata */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Explore Kanata While We Fix...</h2>
          <p className="text-center text-gray-700 mb-8">
            While our technician is taking care of your fridge, you don't need to waste the day — Kanata has plenty to see:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">South March Highlands</h3>
              <p className="text-gray-600">Scenic forest trails for walking or biking</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Walter Baker Park</h3>
              <p className="text-gray-600">Open green spaces for a family break</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Kanata Centrum</h3>
              <p className="text-gray-600">Shopping, coffee, and local dining</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Canadian Tire Centre</h3>
              <p className="text-gray-600">Hockey, shows, and live concerts</p>
            </div>
          </div>
          <p className="text-center mt-8">
            <a 
              href="https://ottawatourism.ca/en/see-and-do/events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Check out what's on this week in Kanata
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
          <h2 className="heading-md mb-4 text-white">Book Your Fridge Repair in Kanata</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Don't let spoiled food ruin your day — we offer fast fridge repair across Kanata.
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
            We repair more than just fridges — here are our other services in Kanata:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/washer-repair/kanata" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Washer Repair Kanata
            </Link>
            <Link href="/dryer-repair/kanata" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dryer Repair Kanata
            </Link>
            <Link href="/dishwasher-repair/kanata" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dishwasher Repair Kanata
            </Link>
            <Link href="/oven-repair" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Oven Repair Kanata
            </Link>
            <Link href="/fridge-installation" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Fridge Installation Kanata
            </Link>
          </div>
          <p className="text-center text-gray-700 mt-8">
            Need another appliance fixed? We've got you covered across Kanata.
          </p>
        </div>
      </section>

      <MapSection />
    </>
  );
}
