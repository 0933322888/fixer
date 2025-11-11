import { Metadata } from "next";
import Link from "next/link";
import { FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Barrhaven Washer Repair – Trusted Local Experts | Fixer",
  description: "Fast, efficient washer repair in Barrhaven. Same-day visits in many areas, no hidden fees, and a 90-day workmanship warranty. Call now for service.",
};

const commonIssues = [
  {
    title: "Washer won't start up?",
    description: "In Barrhaven's newer developments, this can follow a power surge or tripped breaker. If not, it may be a faulty control or latch. We'll identify and resolve the problem.",
  },
  {
    title: "Not draining fully?",
    description: "Drainage problems are often due to blocked pumps or hoses in basement setups. We'll clear them and restore proper flow.",
  },
  {
    title: "Noisy washer during spin?",
    description: "Shaking or squeaking often comes from worn shocks or loose parts. We'll balance your washer so it runs smoothly.",
  },
  {
    title: "Door won't unlock?",
    description: "Front-load machines in Barrhaven townhouses sometimes stick due to sensor glitches. We'll release the door and fix the lock issue.",
  },
  {
    title: "Water leaks?",
    description: "Loose hose fittings or worn gaskets are common leak sources. We'll find and repair the issue quickly.",
  },
  {
    title: "Error codes displayed?",
    description: "Flashing washer codes can be confusing. We'll translate and repair — whether it's Samsung, Whirlpool, or GE.",
  },
];

const whyChooseUs = [
  "Trusted washer repair pros serving Barrhaven homes",
  "Flexible scheduling, including many same-day slots",
  "Honest service with no hidden fees",
  "90-day guarantee on all labour performed",
];

const neighborhoods = [
  "Chapman Mills",
  "Stonebridge",
  "Longfields",
  "Half Moon Bay",
  "Knollsbrook",
];

const nearbyAreas = [
  { name: "Washer Repair Kanata", slug: "kanata" },
  { name: "Washer Repair Stittsville", slug: "stittsville" },
  { name: "Washer Repair Nepean", slug: "nepean" },
  { name: "Washer Repair Orleans", slug: "orleans" },
  { name: "Washer Repair Vanier", slug: "vanier" },
  { name: "Washer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Washer Repair Arnprior", slug: "arnprior" },
  { name: "Washer Repair Carleton Place", slug: "carleton-place" },
];

const barrhavenAttractions = [
  "Walter Baker Sports Centre – recreation and swimming.",
  "Chapman Mills Conservation Area – scenic river trails.",
  "Marketplace Barrhaven – shopping and dining hub.",
];

const faqs = [
  {
    question: "Can I get same-day washer service in Barrhaven?",
    answer: "Often yes — we can confirm availability when you call.",
  },
  {
    question: "Do you repair energy-efficient washers?",
    answer: "Yes — our technicians are trained on both standard and high-efficiency models.",
  },
  {
    question: "Do you service nearby areas outside Barrhaven?",
    answer: "Yes — including Stonebridge, Half Moon Bay, and surrounding communities.",
  },
];

const relatedServices = [
  { name: "Dryer Repair Barrhaven", href: "/dryer-repair" },
  { name: "Dishwasher Repair Barrhaven", href: "/dishwasher-repair" },
  { name: "Fridge Repair Barrhaven", href: "/fridge-repair" },
  { name: "Freezer Repair Barrhaven", href: "/freezer-repair" },
  { name: "Oven Repair Barrhaven", href: "/oven-repair" },
  { name: "Electric Cooktop Repair Barrhaven", href: "/cooktop-repair" },
  { name: "Microwave Repair Barrhaven", href: "/microwave-repair" },
  { name: "Washer Installation Barrhaven", href: "/washer-installation" },
];

export default function WasherRepairBarrhavenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white">Washer Repair Services in Barrhaven, ON</h1>
            <p className="text-xl leading-relaxed mb-8">
              If your washer stops mid-cycle, makes unusual noises, or leaks water, our Barrhaven repair team is ready to help. We service all makes and models, offering clear pricing, same-day availability in many neighbourhoods, and a 90-day workmanship guarantee on every repair.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, check our{" "}
              <Link href="/barrhaven" className="font-semibold hover:underline">
                Barrhaven appliance repair page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Common Washer Issues */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Washer Issues We Fix in Barrhaven</h2>
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
                <strong>Thinking of a new washer in Barrhaven?</strong> Before making the purchase, check our{" "}
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                  repair vs. replace guide
                </Link>
                {" "}— it explains typical repair costs and lifespan.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                If you already have one, we offer washer installation in Barrhaven. We'll install and test your unit with the current water and power connections.
              </p>
              <p className="text-gray-700 mb-6">
                👉 No new plumbing or wiring included.
              </p>
              <div className="text-center">
                <Link href="/washer-installation" className="btn-primary">
                  Learn more about Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">Why Choose Us</h2>
            <div className="space-y-4">
              {whyChooseUs.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary-600 text-2xl flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Service Area</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We provide appliance repair services across the entire Barrhaven area, including:
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
              We also serve:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {nearbyAreas.map((area, index) => (
                <Link 
                  key={index} 
                  href={`/washer-repair/${area.slug}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-primary-50 transition-colors shadow-sm"
                >
                  <FaMapMarkerAlt className="text-primary-600 text-lg flex-shrink-0" />
                  <p className="text-gray-700 hover:text-primary-700 font-medium">{area.name}</p>
                </Link>
              ))}
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700">
                👉 Need washer help across Ottawa? Learn more about our{" "}
                <Link href="/washer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
                  washer repair in Ottawa
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Barrhaven While We Fix Your Washer */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Explore Barrhaven While We Fix Your Washer</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              While we handle the repair, you could:
            </p>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-6">
              <ul className="space-y-4">
                {barrhavenAttractions.map((attraction, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-600 text-xl">•</span>
                    <p className="text-gray-700 text-lg">{attraction}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center bg-primary-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                👉 See what's happening in Barrhaven:
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

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">FAQ – Washer Repair in Barrhaven</h2>
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
          <h2 className="heading-md mb-6 text-white">Need Washer Repair in Barrhaven?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Fast service, clear pricing, and a 90-day guarantee — get in touch today!
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
              Beyond washer repair, we also provide these services in Barrhaven:
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
              Need appliance help today? We're ready in Barrhaven.
            </p>
            <p className="text-center text-gray-900 font-semibold mt-4">
              Fixer Appliance Repair — your local washer repair team in Barrhaven.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
