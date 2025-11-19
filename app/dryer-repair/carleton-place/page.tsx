import { Metadata } from "next";
import Link from "next/link";
import { FaWind, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Carleton Place Dryer Repair – Friendly, Trusted Technicians | Fixer",
  description: "Dependable dryer repair in Carleton Place. Local family-run service with clear rates, same-day availability, and a 90-day workmanship guarantee.",
};

const commonIssues = [
  {
    title: "Dryer won't start",
    description: "Commonly caused by power supply problems, bad fuses, or a faulty door switch. We'll pinpoint it quickly.",
  },
  {
    title: "No heat or weak heat",
    description: "Heating coils and thermal fuses often fail with age. We'll test and replace them.",
  },
  {
    title: "Squeaking or squealing noises",
    description: "Usually worn rollers or an idler pulley under strain. We'll quiet things down.",
  },
  {
    title: "Drum won't rotate",
    description: "A broken belt or seized motor can stop the drum. We'll restore motion.",
  },
  {
    title: "Cycle too long",
    description: "Moisture sensors or clogged vents are often the cause. We'll make drying time normal again.",
  },
  {
    title: "Dryer stops suddenly",
    description: "Overheating triggers auto-shutoff. We'll find and fix the reason.",
  },
  {
    title: "Door latch broken",
    description: "We'll replace latches or hinges so the door closes tight.",
  },
];

const whyChooseUs = [
  "Experienced team serving Carleton Place for over 15 years",
  "Same-day bookings offered in many nearby areas",
  "Honest service with no hidden fees",
  "Technicians carry common parts to finish most jobs right away",
  "90-day workmanship warranty included",
];

const neighborhoods = [
  "Carleton Place West",
  "Carleton Place East",
  "Riverside Park",
  "Mississippi Quays",
];

const nearbyAreas = [
  { name: "Dryer Repair Kanata", slug: "kanata" },
  { name: "Dryer Repair Stittsville", slug: "stittsville" },
  { name: "Dryer Repair Nepean", slug: "nepean" },
  { name: "Dryer Repair Orleans", slug: "orleans" },
  { name: "Dryer Repair Vanier", slug: "vanier" },
  { name: "Dryer Repair Barrhaven", slug: "barrhaven" },
  { name: "Dryer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dryer Repair Arnprior", slug: "arnprior" },
];

const carletonPlaceAttractions = [
  "Riverside Park – relaxing trails and riverside views.",
  "Downtown Carleton Place – shops and cozy restaurants.",
  "Heritage Museum – a look into the town's past.",
];

const faqs = [
  {
    question: "Do you provide same-day dryer service in Carleton Place?",
    answer: "When possible, yes — call to check today's schedule.",
  },
  {
    question: "Why is my dryer making loud squealing or thumping sounds?",
    answer: "This often points to worn rollers, belts, or idler pulleys.",
  },
  {
    question: "Do you repair all dryer brands?",
    answer: "Yes — including Whirlpool, Samsung, LG, GE, and others.",
  },
  {
    question: "Do you also install dryers?",
    answer: "Yes — we install dryers across Carleton Place using existing hookups.",
  },
  {
    question: "Is the work covered by warranty?",
    answer: "Yes — every repair and install is backed by our 90-day labour warranty.",
  },
];

const relatedServices = [
  { name: "Washer Repair Carleton Place", href: "/washer-repair/carleton-place" },
  { name: "Dishwasher Repair Carleton Place", href: "/dishwasher-repair/carleton-place" },
  { name: "Fridge Repair Carleton Place", href: "/fridge-repair/carleton-place" },
  { name: "Freezer Repair Carleton Place", href: "/freezer-repair/carleton-place" },
  { name: "Oven Repair Carleton Place", href: "/oven-repair/carleton-place" },
  { name: "Cooktop Repair Carleton Place", href: "/cooktop-repair/carleton-place" },
  { name: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
  { name: "Dryer Installation Carleton Place", href: "/appliance-installation/dryer" },
];

export default function DryerRepairCarletonPlacePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaWind className="text-[30px] mb-2 inline-block" /> Trusted Dryer Repair in Carleton Place</h1>
            <p className="text-xl leading-relaxed mb-8">
              If your Carleton Place dryer is overheating, refusing to start, or shutting down mid-cycle, Fixer Appliance Repair is here to help. Our skilled technicians provide fast, dependable repairs, backed by transparent pricing and a 90-day workmanship warranty. We handle leading models from GE, Samsung, Whirlpool, LG, and Maytag.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, check our{" "}
              <Link href="/carleton-place" className="font-semibold hover:underline">
                Carleton Place appliance repair page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Common Dryer Problems */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Dryer Problems We Fix</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {commonIssues.map((issue, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{issue.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{issue.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dryer Installation CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">New Dryer? We Can Install It</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Got a new dryer? We also provide dryer installation in Carleton Place with same-day service available in most areas.
          </p>
          <Link href="/appliance-installation/dryer" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Learn About Dryer Installation
          </Link>
        </div>
      </section>

      <BenefitsSection applianceName="Dryer" benefits={whyChooseUs} />

      {/* Service Area */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Service Area</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We provide appliance repair services across the entire Carleton Place area, including:
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {neighborhoods.map((neighborhood, index) => (
                  <span key={index} className="px-4 py-2 bg-primary-50 text-gray-900 rounded-lg">
                    {neighborhood}
                  </span>
                ))}
                <span className="px-4 py-2 bg-primary-50 text-gray-900 rounded-lg">
                  and surrounding neighbourhoods
                </span>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 text-center">
              We also work with customers from:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {nearbyAreas.map((area, index) => (
                <Link 
                  key={index} 
                  href={`/dryer-repair/${area.slug}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-primary-50 transition-colors shadow-sm"
                >
                  <FaMapMarkerAlt className="text-primary-600 text-lg flex-shrink-0" />
                  <p className="text-gray-700 hover:text-primary-700 font-medium">{area.name}</p>
                </Link>
              ))}
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700">
                👉 Need dryer help across Ottawa? Learn more about our{" "}
                <Link href="/dryer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Dryer Repair Ottawa
                </Link>
                {" "}page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enjoy Carleton Place While We Repair Your Dryer */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Enjoy Carleton Place While We Repair Your Dryer</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Waiting for your dryer to be fixed? Try these spots:
            </p>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-6">
              <ul className="space-y-4">
                {carletonPlaceAttractions.map((attraction, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-600 text-xl">•</span>
                    <p className="text-gray-700 text-lg">{attraction}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center bg-primary-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                👉 Find events in Carleton Place:
              </p>
              <a 
                href="https://ottawatourism.ca/en/see-and-do/events" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                Ottawa Events Calendar
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQSection applianceName="Dryer" faqs={faqs} />

      {/* Contact CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6 text-white">Schedule Your Dryer Repair in Carleton Place</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let laundry pile up — book your dryer service now with Fixer Appliance Repair:
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-2xl">
              📞 Call/Text: <a href="tel:613-413-6969" className="font-semibold hover:underline">613-413-6969</a>
            </p>
            <p className="text-xl">
              📧 Email: <a href="mailto:service@fixerappliancerepair.ca" className="font-semibold hover:underline">service@fixerappliancerepair.ca</a>
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-8">Also Need Help With…</h2>
            <p className="text-center text-gray-700 mb-8">
              Dryer issues aren't the only thing we fix — here are more services in Carleton Place:
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
            <p className="text-center text-gray-700 mt-8">
              Looking for another service? We've got Carleton Place covered.
            </p>
            <p className="text-center text-gray-900 font-semibold mt-4">
              Fixer Appliance Repair — your dryer repair pros in Carleton Place.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

