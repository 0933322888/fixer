import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Freezer Repair Carp – Reliable Upright & Chest Freezer Service | Fixer",
  description: "Fixer Appliance Repair provides fast freezer repair in Carp. From frost buildup to compressor failure, we service Whirlpool, GE, Samsung & more — with honest pricing, rural-friendly service, and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Freezer not turning on",
    description: "We test the power cord, control board, and fuse.",
  },
  {
    title: "Frost everywhere inside",
    description: "Failed door gasket or stuck defrost system.",
  },
  {
    title: "Water on the floor",
    description: "Defrost drain could be blocked — we clean it thoroughly.",
  },
  {
    title: "Buzzing or loud humming",
    description: "Usually linked to motor or compressor wear.",
  },
  {
    title: "Lights blinking",
    description: "We diagnose the control panel or internal switch.",
  },
  {
    title: "Compressor too hot",
    description: "We test overload relays and fan operation.",
  },
  {
    title: "No ice production",
    description: "We inspect water lines and inlet valves.",
  },
  {
    title: "Error message on screen",
    description: "We reset and repair electronic errors.",
  },
  {
    title: "Smells like burning",
    description: "Could indicate electrical or insulation failure.",
  },
  {
    title: "Interior parts cracked or loose",
    description: "We replace or secure drawer tracks, shelves, and more.",
  },
];

const benefits = [
  "We know how important your freezer is — especially in rural homes",
  "Quick diagnosis and clear explanation of the problem",
  "No extra fees for longer drive times",
  "Courteous and tidy repairs every time",
  "We're committed to fixing it right the first time",
];

const serviceAreas = [
  "Village of Carp",
  "Huntley",
  "Corkery",
  "Upper Dwyer Hill",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/freezer-repair/kanata" },
  { name: "Stittsville", slug: "/freezer-repair/stittsville" },
  { name: "Nepean", slug: "/freezer-repair/nepean" },
  { name: "Orleans", slug: "/freezer-repair/orleans" },
  { name: "Vanier", slug: "/freezer-repair/vanier" },
  { name: "Barrhaven", slug: "/freezer-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/freezer-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/freezer-repair/arnprior" },
  { name: "Carleton Place", slug: "/freezer-repair/carleton-place" },
];

const faqs = [
  {
    question: "Can you fix freezers in Carp Village and Kinburn?",
    answer: "Yes — we work across Carp and nearby communities.",
  },
  {
    question: "Do you handle older freezers?",
    answer: "Yes — we repair many models from 10+ years ago.",
  },
  {
    question: "What causes sudden freezer failure?",
    answer: "Often thermostat, control board, or compressor issues.",
  },
  {
    question: "Can you bring parts to Carp?",
    answer: "Yes — we carry parts for popular brands and can order if needed.",
  },
  {
    question: "Do you offer freezer installation?",
    answer: "Yes — for upright and chest units.",
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

export default function FreezerRepairCarpPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"><FaSnowflake className="text-[30px] mb-2 inline-block" /> Dependable Freezer Repair in Carp</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            A broken freezer in Carp can mean wasted food and stress. Whether it's a chest unit or an upright, Fixer Appliance Repair provides fast, lasting solutions — with honest, rural-friendly service.
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
              We handle GE, Whirlpool, Samsung, LG, and Maytag.
            </p>
          </div>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} />

      {/* Freezer Installation CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">New Freezer? We Can Install It</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Got a new freezer? We also provide freezer installation in Carp with same-day service available in most areas.
          </p>
          <Link href="/appliance-installation" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Learn About Freezer Installation
          </Link>
        </div>
      </section>

      <BenefitsSection applianceName="Freezer" benefits={benefits} />

      <CTASection />

      {/* Service Area */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Service Area: Carp and Nearby</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            We provide appliance repair services across the entire Carp area, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
            {serviceAreas.map((area, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-800">{area}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-700 mb-6">
            We also provide freezer repair services in:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
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

      {/* Explore Carp */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Explore Carp While We Fix...</h2>
          <p className="text-center text-gray-700 mb-8">Carp is full of hidden gems. While we repair your freezer, explore:</p>
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
              <h3 className="font-bold text-gray-900 mb-2">Carp Ridge EcoWellness</h3>
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
              See current happenings here: Events in Carp
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
          <h2 className="heading-md mb-4 text-white">Book Your Freezer Repair in Carp</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Call or text us today — we service both upright and chest freezers across Carp.
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
