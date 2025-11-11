import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "Fridge Repair Carp – Reliable Service for Homes & Cottages | Fixer",
  description: "Fixer provides expert fridge repair in Carp. We fix cooling, leaks & noise issues for Whirlpool, Samsung, GE & more — with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Fridge not running at all",
    description: "We test start relay, overload protector, and power.",
  },
  {
    title: "Runs too often",
    description: "Could be dirty coils or stuck thermostat.",
  },
  {
    title: "Clicking noise from back",
    description: "Compressor or relay failure may be to blame.",
  },
  {
    title: "Door won't seal properly",
    description: "We adjust hinges or replace the gasket.",
  },
  {
    title: "Ice buildup in freezer",
    description: "Faulty defrost heater or blocked vents.",
  },
  {
    title: "Water filter not working",
    description: "We replace filters and check connections.",
  },
  {
    title: "Display flickers",
    description: "We inspect wiring and boards.",
  },
  {
    title: "Milk spoiling quickly",
    description: "Fluctuating temps from failing sensors.",
  },
  {
    title: "Shelves keep breaking",
    description: "We order and install replacements.",
  },
  {
    title: "Control board beeping",
    description: "We diagnose the alert and silence it.",
  },
];

const benefits = [
  "Experienced with both modern and older models",
  "Efficient diagnostics and reliable solutions",
  "Friendly technicians who respect rural households",
  "Clean work and proper disposal of old parts",
  "Flexible scheduling options",
];

const serviceAreas = [
  "Village of Carp",
  "Huntley",
  "Corkery",
  "Upper Dwyer Hill",
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
    question: "Do you repair fridges in Kinburn and Huntley?",
    answer: "Yes — we cover Carp and nearby areas.",
  },
  {
    question: "Do you work with built-in or panel-ready fridges?",
    answer: "We do — including premium brands.",
  },
  {
    question: "Is it worth fixing a 10-year-old fridge?",
    answer: "Often yes — we'll assess and give you honest advice.",
  },
  {
    question: "How quickly can you get to Carp?",
    answer: "Usually within 1–2 business days, sometimes sooner.",
  },
  {
    question: "Do you install new fridges?",
    answer: "Yes — we offer full installation services.",
  },
];

export default function FridgeRepairCarpPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <FaSnowflake className="text-6xl mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fridge Repair Services for Carp Homes & Cottages
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            A faulty refrigerator in Carp — whether it's frosting up, leaking, or running non-stop — can ruin more than groceries. Fixer Appliance Repair provides dependable rural fridge service with clear, upfront pricing.
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
              We repair brands like GE, Maytag, Whirlpool, Samsung, and LG.
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
                Need fridge installation in Carp?
              </p>
              <p className="text-center">
                Before replacing your current unit, review our repair vs. replace guide — it helps compare costs and long-term value.
              </p>
              <p className="text-center">
                For new purchases, we handle fridge installation in Carp. We'll connect, balance, and test it with the current hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ We don't install new plumbing or wiring.
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
          <h2 className="heading-md text-center mb-8">Service Area: Carp and Nearby</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            We provide appliance repair services across the entire Carp area, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
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
              For complete coverage, see our Fridge Repair Ottawa page
            </Link>
          </p>
        </div>
      </section>

      {/* Discover Carp */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Explore Carp While We Fix...</h2>
          <p className="text-center text-gray-700 mb-8">
            Carp has a warm small-town charm perfect for a quiet outing. While we fix your fridge, check out:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Carp Farmers' Market</h3>
              <p className="text-gray-600">One of the best in Ontario</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Diefenbunker Museum</h3>
              <p className="text-gray-600">Unique and fascinating</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Rural Art Studios</h3>
              <p className="text-gray-600">Seasonal markets</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Carp Ridge Centre</h3>
              <p className="text-gray-600">Nature walks and spa</p>
            </div>
          </div>
          <p className="text-center mt-8">
            <a 
              href="https://ottawatourism.ca/en/see-and-do/events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Check out what's happening now: Events in Carp
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
          <h2 className="heading-md mb-4 text-white">Book Your Fridge Repair in Carp</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We service all of Carp and surrounding farms — book now and keep your fridge cool.
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
            Fridge repair is only part of what we do — here are our other services in Carp:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/washer-repair/carp" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Washer Repair Carp
            </Link>
            <Link href="/dryer-repair/carp" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dryer Repair Carp
            </Link>
            <Link href="/dishwasher-repair/carp" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dishwasher Repair Carp
            </Link>
            <Link href="/oven-repair" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Oven Repair Carp
            </Link>
            <Link href="/fridge-installation" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Fridge Installation Carp
            </Link>
          </div>
          <p className="text-center text-gray-700 mt-8">
            Looking for help beyond fridges? We're here for you in Carp.
          </p>
        </div>
      </section>

      <MapSection />
    </>
  );
}
