import { Metadata } from "next";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";

export const metadata: Metadata = {
  title: "Dishwasher Repair Arnprior – Fast, Reliable Local Service | Fixer",
  description: "Fixer provides expert dishwasher repair in Arnprior. We fix leaks, draining issues & error codes for Whirlpool, Bosch, Samsung & more — with same-day service & warranty.",
};

const commonIssues = [
  {
    title: "Dishwasher won't turn on",
    description: "Older Arnprior homes sometimes have wiring or breaker issues. If not, it could be the door switch or control board. We'll fix it fast.",
  },
  {
    title: "Won't drain water",
    description: "Drain pumps or hoses often clog with food debris. We'll clear the line so water drains fully.",
  },
  {
    title: "Unusual noises",
    description: "Grinding or rattling often points to a circulation pump problem. We'll replace the faulty part.",
  },
  {
    title: "Leaks near the door",
    description: "Door gaskets and seals wear down with time. We'll replace them to stop the leak.",
  },
  {
    title: "Dishes still dirty",
    description: "Clogged spray arms or weak water flow cause poor cleaning. We'll restore the wash performance.",
  },
  {
    title: "Error codes showing",
    description: "Flashing E-series codes are common in Bosch and Whirlpool dishwashers. We'll decode the issue and repair it.",
  },
];

const whyChooseUs = [
  "Friendly, professional Arnprior dishwasher specialists",
  "15+ years of appliance service experience",
  "Upfront pricing explained clearly",
  "Warranty coverage for 90 days",
];

const neighborhoods = [
  "Downtown Arnprior",
  "Braeside",
  "McNab",
  "White Lake",
  "Sand Point",
];

const nearbyAreas = [
  { name: "Dishwasher Repair Kanata", slug: "kanata" },
  { name: "Dishwasher Repair Stittsville", slug: "stittsville" },
  { name: "Dishwasher Repair Nepean", slug: "nepean" },
  { name: "Dishwasher Repair Orleans", slug: "orleans" },
  { name: "Dishwasher Repair Vanier", slug: "vanier" },
  { name: "Dishwasher Repair Barrhaven", slug: "barrhaven" },
  { name: "Dishwasher Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dishwasher Repair Carleton Place", slug: "carleton-place" },
];

const arnpriorAttractions = [
  "Robert Simpson Park – picnic by the river.",
  "Gillies Grove – historic forest trails.",
  "Downtown Arnprior – unique shops and eateries.",
];

const faqs = [
  {
    question: "Do you service dishwashers in Arnprior?",
    answer: "Yes — we work across town and nearby areas like Braeside and White Lake.",
  },
  {
    question: "Why does my dishwasher make loud grinding noises?",
    answer: "It could be the circulation pump, motor bearings, or foreign objects stuck inside.",
  },
  {
    question: "Do you provide dishwasher installation?",
    answer: "Yes — we install dishwashers in Arnprior using existing water and power hookups.",
  },
  {
    question: "Do you repair older and newer models?",
    answer: "Yes — from older Kenmore units to the latest Samsung and Bosch.",
  },
  {
    question: "Do you provide a warranty?",
    answer: "Yes — every job comes with our 90-day labour warranty.",
  },
];

const relatedServices = [
  { name: "Washer Repair Arnprior", href: "/washer-repair/arnprior" },
  { name: "Dryer Repair Arnprior", href: "/dryer-repair/arnprior" },
  { name: "Fridge Repair Arnprior", href: "/fridge-repair/arnprior" },
  { name: "Freezer Repair Arnprior", href: "/freezer-repair/arnprior" },
  { name: "Oven Repair Arnprior", href: "/oven-repair/arnprior" },
  { name: "Cooktop Repair Arnprior", href: "/cooktop-repair/arnprior" },
  { name: "Microwave Repair Arnprior", href: "/microwave-repair/arnprior" },
  { name: "Dishwasher Installation Arnprior", href: "/dishwasher-installation" },
];

export default function DishwasherRepairArnpriorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white">Dishwasher Repair Arnprior 
              <br /> Fast, Reliable Local Service</h1>
            <p className="text-xl leading-relaxed mb-8">
              If your dishwasher in Arnprior is leaking, stopping mid-cycle, or leaving cloudy glasses, Fixer Appliance Repair can help. Our technicians know the area and provide fast, reliable repairs you can trust.
            </p>
            <p className="text-lg mb-6">
              We handle leading makes like Bosch, Whirlpool, Maytag, GE, and Samsung.
            </p>
            <p className="text-lg">
              👉 For all appliance services nearby, see our{" "}
              <Link href="/arnprior" className="font-semibold hover:underline">
                Local Arnprior page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Common Dishwasher Issues */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Dishwasher Issues We Fix in Arnprior</h2>
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

      {/* Dishwasher Installation CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">New Dishwasher? We Can Install It</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Got a new dishwasher? We also provide dishwasher installation in Arnprior with same-day service available in most areas.
          </p>
          <Link href="/dishwasher-installation" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Learn About Dishwasher Installation
          </Link>
        </div>
      </section>

      <BenefitsSection applianceName="Dishwasher" benefits={whyChooseUs} />

      {/* Service Area */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Service Area</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We provide appliance repair services across the entire Arnprior area, including:
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {neighborhoods.map((neighborhood, index) => (
                  <span key={index} className="px-4 py-2 bg-primary-50 text-gray-900 rounded-lg">
                    {neighborhood}
                  </span>
                ))}
                <span className="px-4 py-2 bg-primary-50 text-gray-900 rounded-lg">
                  and surrounding rural neighbourhoods
                </span>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 text-center">
              We also repair dishwashers in:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {nearbyAreas.map((area, index) => (
                <Link 
                  key={index} 
                  href={`/dishwasher-repair/${area.slug}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-primary-50 transition-colors shadow-sm"
                >
                  <FaMapMarkerAlt className="text-primary-600 text-lg flex-shrink-0" />
                  <p className="text-gray-700 hover:text-primary-700 font-medium">{area.name}</p>
                </Link>
              ))}
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700">
                For full coverage, visit our{" "}
                <Link href="/dishwasher-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Dishwasher Repair Ottawa
                </Link>
                {" "}page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Things to Do in Arnprior */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Things to Do in Arnprior While We Repair Your Dishwasher</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Make the most of your wait with these stops:
            </p>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-6">
              <ul className="space-y-4">
                {arnpriorAttractions.map((attraction, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-600 text-xl">•</span>
                    <p className="text-gray-700 text-lg">{attraction}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center bg-primary-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                🔍 Check out what's happening in Arnprior:
              </p>
              <a 
                href="https://arnprior.ca/en/explore-and-play/events.aspx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                Arnprior Events
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">Frequently Asked Questions (FAQs)</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Q: {faq.question}</h3>
                  <p className="text-gray-700">A: {faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6 text-white">Schedule Your Dishwasher Repair in Arnprior</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Dishwasher acting up? Contact Fixer Appliance Repair for fast, local service:
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
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Also Need Help With...</h2>
            <p className="text-center text-gray-700 mb-8">
              We do more than just dishwasher repair — check out our other Ottawa services:
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
