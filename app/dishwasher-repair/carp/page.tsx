import { Metadata } from "next";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";

export const metadata: Metadata = {
  title: "Dishwasher Repair Carp – Expert Service for Homes & Farms | Fixer",
  description: "Fixer provides dishwasher repair in Carp for farmhouses & rural homes. We fix leaks, clogs, and cloudy dishes with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Dishwasher won't turn on",
    description: "Check for a faulty breaker or door switch — we'll fix it.",
  },
  {
    title: "Water fills but doesn't wash",
    description: "Spray arm or circulation motor might need replacement.",
  },
  {
    title: "Dishes come out cloudy",
    description: "We treat hard water film or rinse aid failure.",
  },
  {
    title: "Leaking from underneath",
    description: "We check for tub cracks, worn gaskets, or drain hose damage.",
  },
  {
    title: "Runs too long",
    description: "Thermostat or sensor might be misreading temperature.",
  },
  {
    title: "Noisy operation",
    description: "Pump motor or fan blades may be worn or loose.",
  },
  {
    title: "Not drying dishes",
    description: "The heating element or fan assembly might be to blame.",
  },
  {
    title: "Flash error codes",
    description: "We read and clear diagnostic codes accurately.",
  },
  {
    title: "Rinse cycle doesn't finish",
    description: "We inspect timers and water inlet valves.",
  },
  {
    title: "Water splashes out",
    description: "Misaligned spray arms or float switch problems.",
  },
];

const whyChooseUs = [
  "Specialized in rural and home installs",
  "Familiar with farmhouse kitchen layouts",
  "Carp-based team — no travel delays",
  "We respect your schedule and space",
  "Clear, fair rates always",
];

const neighborhoods = [
  "Village of Carp",
  "Huntley",
  "Corkery",
  "Upper Dwyer Hill",
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

const carpAttractions = [
  "Carp Farmers' Market – one of the best in Ontario",
  "Diefenbunker Cold War Museum – unique and fascinating",
  "Rural Art Studios or seasonal markets",
  "Carp Ridge EcoWellness Centre – nature walks, spa, and more",
];

const faqs = [
  {
    question: "Can I get dishwasher repair in Carp Village or Huntley?",
    answer: "Yes! We regularly serve homes in Carp Village, Huntley, and nearby areas.",
  },
  {
    question: "Is next-day service available in Carp?",
    answer: "In most cases — yes. Let us know if it's urgent.",
  },
  {
    question: "Do you work with older dishwashers?",
    answer: "Yes, we diagnose and repair dishwashers of all ages and styles.",
  },
  {
    question: "What brands do you repair in Carp?",
    answer: "We work with Bosch, GE, LG, Frigidaire, Whirlpool, and more.",
  },
  {
    question: "Can you help with dishwasher installation?",
    answer: "Absolutely — we offer full installation service when needed.",
  },
];

const relatedServices = [
  { name: "Washer Repair Carp", href: "/washer-repair/carp" },
  { name: "Dryer Repair Carp", href: "/dryer-repair/carp" },
  { name: "Fridge Repair Carp", href: "/fridge-repair/carp" },
  { name: "Freezer Repair Carp", href: "/freezer-repair/carp" },
  { name: "Oven Repair Carp", href: "/oven-repair/carp" },
  { name: "Cooktop Repair Carp", href: "/cooktop-repair/carp" },
  { name: "Microwave Repair Carp", href: "/microwave-repair/carp" },
  { name: "Dishwasher Installation Carp", href: "/dishwasher-installation" },
];

export default function DishwasherRepairCarpPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white">Expert Dishwasher Repair for Carp Kitchens</h1>
            <p className="text-xl leading-relaxed mb-8">
              In Carp, dishwashers face everything from leaks to clogged pumps. Fixer Appliance Repair is here with skilled, rural-friendly service — whether you're in a new build or a farmhouse kitchen.
            </p>
            <p className="text-lg mb-6">
              We handle Bosch, Whirlpool, GE, LG, Maytag, Samsung, and others.
            </p>
            <p className="text-lg">
              👉 For all appliance services nearby, see our{" "}
              <Link href="/carp" className="font-semibold hover:underline">
                Local Carp page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Common Problems We Fix */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Problems We Fix</h2>
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
            <h2 className="heading-md text-center mb-6">Installation Services</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Need a new dishwasher in Carp?</strong> Before buying, check our{" "}
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                  repair vs. replace guide
                </Link>
                {" "}— it breaks down common failures, costs, and long-term value.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                If you already have a new one, we provide dishwasher installation in Carp. Our team connects, levels, and runs it using your current hookups.
              </p>
              <p className="text-gray-700 mb-6">
                👉 New plumbing or electrical lines are not included.
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
            <h2 className="heading-md text-center mb-8">Service Area: Carp and Nearby</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We provide appliance repair services across the entire Carp area, including:
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
              You'll also see us working in:
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
                For city-wide service, visit our{" "}
                <Link href="/dishwasher-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Dishwasher Repair Ottawa
                </Link>
                {" "}page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Things to Do in Carp */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Explore Carp While We Handle Your Dishwasher Repair</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              No need to wait around — take some time to enjoy Carp:
            </p>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-6">
              <ul className="space-y-4">
                {carpAttractions.map((attraction, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-600 text-xl">•</span>
                    <p className="text-gray-700 text-lg">{attraction}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center bg-primary-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                🔍 Want more ideas? Check out:
              </p>
              <a 
                href="https://ottawatourism.ca/en/see-and-do/events" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                Events in Carp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6 text-white">Book Your Dishwasher Repair in Carp</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Serving all of Carp and nearby — book your dishwasher repair today. We're just a call or text away.
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
              Dishwasher repair is just one part of what we do — here are more services in Carp:
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
              Need something else fixed? We're here to help in Carp.
            </p>
            <p className="text-center text-gray-900 font-semibold mt-4">
              Fixer Appliance Repair — your trusted dishwasher repair team in Carp.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
