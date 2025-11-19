import { Metadata } from "next";
import Link from "next/link";
import { FaUtensils, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Dishwasher Repair Carleton Place – Fast, Local Service | Fixer",
  description: "Fixer provides trusted dishwasher repair in Carleton Place. We fix leaks, draining issues & error codes for Whirlpool, Bosch, LG & more — with same-day service & warranty.",
};

const commonIssues = [
  {
    title: "Dishwasher won't start",
    description: "In Carleton Place homes, a faulty latch, tripped breaker, or worn control panel often keeps the cycle from running. We'll fix it quickly.",
  },
  {
    title: "Not draining fully",
    description: "If you see water at the bottom after every load, it's often a blocked filter or hose. We'll clean and restore drainage.",
  },
  {
    title: "Making squealing or grinding sounds",
    description: "Motors, pumps, or worn bearings are frequent culprits. We'll track down the source of the noise.",
  },
  {
    title: "Leaking water onto the floor",
    description: "Loose hose fittings or bad seals often cause puddles. We'll repair the leak and protect your Carleton Place kitchen.",
  },
  {
    title: "Dishes not getting clean",
    description: "Spray arms or detergent dispensers often fail with age. We'll restore full cleaning power.",
  },
  {
    title: "Error codes flashing",
    description: "Flashing lights or codes like E24 or OE point to clogged pumps or sensors. We'll diagnose and repair all major brands.",
  },
];

const whyChooseUs = [
  "Local Carleton Place technicians who know common dishwasher issues",
  "Same-day and next-day service options",
  "Transparent pricing, no upselling",
  "Backed by a 90-day service guarantee",
];

const neighborhoods = [
  "Carleton Place West",
  "Carleton Place East",
  "Riverside Park",
  "Mississippi Quays",
];

const nearbyAreas = [
  { name: "Dishwasher Repair Kanata", slug: "kanata" },
  { name: "Dishwasher Repair Stittsville", slug: "stittsville" },
  { name: "Dishwasher Repair Nepean", slug: "nepean" },
  { name: "Dishwasher Repair Orleans", slug: "orleans" },
  { name: "Dishwasher Repair Vanier", slug: "vanier" },
  { name: "Dishwasher Repair Barrhaven", slug: "barrhaven" },
  { name: "Dishwasher Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dishwasher Repair Arnprior", slug: "arnprior" },
];

const carletonPlaceAttractions = [
  "Riverside Park – perfect for a riverside walk.",
  "Downtown Carleton Place – browse unique shops and cafés.",
  "Carleton Place and Beckwith Heritage Museum – discover local stories.",
];

const faqs = [
  {
    question: "Do you offer same-day dishwasher service in Carleton Place?",
    answer: "When possible, yes — call early to confirm availability.",
  },
  {
    question: "Why is my dishwasher not filling with water?",
    answer: "It may be a faulty inlet valve, float switch, or blocked hose.",
  },
  {
    question: "Do you also install dishwashers?",
    answer: "Yes — we provide installation across Carleton Place using existing lines.",
  },
  {
    question: "Do you cover nearby communities too?",
    answer: "Yes — including Beckwith, Franktown, and surrounding areas.",
  },
  {
    question: "What warranty do you provide on dishwasher work?",
    answer: "All labour is backed by a 90-day warranty.",
  },
];

const relatedServices = [
  { name: "Washer Repair Carleton Place", href: "/washer-repair/carleton-place" },
  { name: "Dryer Repair Carleton Place", href: "/dryer-repair/carleton-place" },
  { name: "Fridge Repair Carleton Place", href: "/fridge-repair/carleton-place" },
  { name: "Freezer Repair Carleton Place", href: "/freezer-repair/carleton-place" },
  { name: "Oven Repair Carleton Place", href: "/oven-repair/carleton-place" },
  { name: "Cooktop Repair Carleton Place", href: "/cooktop-repair/carleton-place" },
  { name: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
  { name: "Dishwasher Installation Carleton Place", href: "/dishwasher-installation" },
];

export default function DishwasherRepairCarletonPlacePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaUtensils className="text-[30px] mb-2 inline-block" /> Dishwasher Repair Carleton Place 
              <br /> Fast, Local Service</h1>
            <p className="text-xl leading-relaxed mb-8">
              Tired of handwashing dishes because the dishwasher won't cooperate? Fixer Appliance Repair serves Carleton Place with professional, local service. We handle drainage issues, control failures, and more — always with upfront pricing and a 90-day warranty.
            </p>
            <p className="text-lg mb-6">
              We repair popular brands including LG, Samsung, Whirlpool, Bosch, and GE.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, see our{" "}
              <Link href="/carleton-place" className="font-semibold hover:underline">
                Local Carleton Place page
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
            <h2 className="heading-md text-center mb-12">Common Dishwasher Issues We Fix in Carleton Place</h2>
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

      {/* Installation Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-6">Dishwasher Installation in Carleton Place</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Thinking of upgrading your dishwasher in Carleton Place?</strong> Before buying, check out our{" "}
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                  repair vs. replace guide
                </Link>
                {" "}— it covers typical repair costs and replacement value.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Already have one delivered? We provide dishwasher installation in Carleton Place. Our team will connect, level, and test it with the existing water and power hookups.
              </p>
              <p className="text-gray-700 mb-6">
                👉 No new plumbing or wiring is included.
              </p>
              <div className="text-center">
                <Link href="/dishwasher-installation" className="btn-primary">
                  Learn more about Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection applianceName="Dishwasher" benefits={whyChooseUs} />

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
              We also service:
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
                For Ottawa-wide coverage, visit our{" "}
                <Link href="/dishwasher-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Dishwasher Repair Ottawa
                </Link>
                {" "}page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Things to Do in Carleton Place */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Things to Do in Carleton Place While We Repair Your Dishwasher</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Spend the time exploring the area:
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
                🔍 Discover what's happening in Carleton Place:
              </p>
              <a 
                href="https://www.carletonplace.ca/en/discover-carleton-place/events.aspx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                Carleton Place Events
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQSection applianceName="Dishwasher" faqs={faqs} />

      {/* Contact CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6 text-white">Schedule Your Dishwasher Repair in Carleton Place</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't wait until dishes pile up — schedule your dishwasher service now:
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
              Dishwasher issues aren't all we handle — here are more services in Carleton Place:
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
              Fixer Appliance Repair — your dishwasher repair pros in Carleton Place.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
