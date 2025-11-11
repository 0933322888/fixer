import { Metadata } from "next";
import Link from "next/link";
import { FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Dishwasher Repair Vanier – Fast, Reliable Local Service | Fixer",
  description: "Fixer provides expert dishwasher repair in Vanier. We fix leaks, draining issues & error codes for Whirlpool, Bosch, LG & more — with same-day service & warranty.",
};

const commonIssues = [
  {
    title: "Dishwasher won't power up",
    description: "In older Vanier homes, breakers, latches, or aging control boards are often the cause. We'll test each and repair.",
  },
  {
    title: "Not draining properly",
    description: "Food clogs in the filter or drain pump cause standing water. We'll clear them quickly.",
  },
  {
    title: "Loud rattling or buzzing",
    description: "Loose parts or bad motors are common in older dishwashers. We'll replace what's failing.",
  },
  {
    title: "Leaking water on the floor",
    description: "Hoses, seals, or valves often cause puddles. We'll repair the leak before it spreads.",
  },
  {
    title: "Dirty or spotty dishes",
    description: "Weak spray arms or detergent issues cause poor results. We'll fix it so dishes come out spotless.",
  },
  {
    title: "Error lights flashing",
    description: "Codes like E24 or UE often point to pump problems. We'll identify and repair the issue for Bosch, LG, or Whirlpool.",
  },
];

const whyChooseUs = [
  "Experienced Vanier dishwasher repair and installation pros",
  "Honest, clear pricing before work starts",
  "Same-day and next-day availability",
  "Every job backed by a 90-day warranty",
];

const neighborhoods = [
  "Overbrook",
  "Beechwood Village",
  "Cardinal Glen",
  "Notre Dame des Champs",
];

const nearbyAreas = [
  { name: "Dishwasher Repair Kanata", slug: "kanata" },
  { name: "Dishwasher Repair Stittsville", slug: "stittsville" },
  { name: "Dishwasher Repair Nepean", slug: "nepean" },
  { name: "Dishwasher Repair Orleans", slug: "orleans" },
  { name: "Dishwasher Repair Barrhaven", slug: "barrhaven" },
  { name: "Dishwasher Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dishwasher Repair Arnprior", slug: "arnprior" },
  { name: "Dishwasher Repair Carleton Place", slug: "carleton-place" },
];

const vanierAttractions = [
  "Richelieu Park – great for a short walk.",
  "Vanier Museopark – heritage and exhibits.",
  "Beechwood Avenue – food and boutiques.",
];

const faqs = [
  {
    question: "Do you service dishwashers in Vanier apartments and homes?",
    answer: "Yes — we work in both houses and multi-unit buildings.",
  },
  {
    question: "Why is my dishwasher leaking water on the floor?",
    answer: "It could be a worn door gasket, faulty pump, or loose hose connection.",
  },
  {
    question: "Do you provide dishwasher installation in Vanier?",
    answer: "Yes — we'll install it using your existing hookups.",
  },
  {
    question: "Do you work on all brands?",
    answer: "Yes — from Whirlpool and Maytag to Bosch and LG.",
  },
  {
    question: "What kind of warranty do you offer?",
    answer: "Every dishwasher repair or install comes with a 90-day labour warranty.",
  },
];

const relatedServices = [
  { name: "Washer Repair Vanier", href: "/washer-repair/vanier" },
  { name: "Dryer Repair Vanier", href: "/dryer-repair/vanier" },
  { name: "Fridge Repair Vanier", href: "/fridge-repair" },
  { name: "Freezer Repair Vanier", href: "/freezer-repair" },
  { name: "Oven Repair Vanier", href: "/oven-repair" },
  { name: "Electric Cooktop Repair Vanier", href: "/cooktop-repair" },
  { name: "Microwave Repair Vanier", href: "/microwave-repair" },
  { name: "Dishwasher Installation Vanier", href: "/dishwasher-installation" },
];

export default function DishwasherRepairVanierPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white">Dishwasher Repair Vanier – Fast, Reliable Local Service</h1>
            <p className="text-xl leading-relaxed mb-8">
              Vanier residents know the hassle of a dishwasher that won't drain or keeps flashing error codes. Fixer Appliance Repair delivers quick, transparent service with a 90-day workmanship guarantee.
            </p>
            <p className="text-lg mb-6">
              We repair brands such as Whirlpool, LG, Bosch, Samsung, and GE.
            </p>
            <p className="text-lg">
              👉 For all appliance services nearby, see our{" "}
              <Link href="/vanier" className="font-semibold hover:underline">
                Local Vanier page
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
            <h2 className="heading-md text-center mb-12">Common Dishwasher Issues We Fix in Vanier</h2>
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
            <h2 className="heading-md text-center mb-6">Dishwasher Installation in Vanier</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Looking at dishwasher replacement in Vanier?</strong> Before making the purchase, review our{" "}
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                  repair vs. replace guide
                </Link>
                {" "}— it helps you decide wisely.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                If you've bought a new one, we provide dishwasher installation in Vanier. We'll hook it up and test it with your existing hookups.
              </p>
              <p className="text-gray-700 mb-6">
                👉 We don't run new plumbing or high-voltage lines.
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
              We provide appliance repair services across the entire Vanier area, including:
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
              We also provide dishwasher repair in:
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

      {/* Things to Do in Vanier */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Things to Do in Vanier While We Fix Your Dishwasher</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Here are a few ideas:
            </p>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-6">
              <ul className="space-y-4">
                {vanierAttractions.map((attraction, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-600 text-xl">•</span>
                    <p className="text-gray-700 text-lg">{attraction}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center bg-primary-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                🔍 Discover what's on in Vanier:
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
            <h2 className="heading-md text-center mb-12">FAQ – Dishwasher Repair in Vanier</h2>
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
          <h2 className="heading-md mb-6 text-white">Schedule Your Dishwasher Repair in Vanier</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to get your dishwasher fixed? Reach out now to Fixer Appliance Repair:
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
              Dishwashers aren't all we repair — here are our other services in Vanier:
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
              Need something else fixed? We've got Vanier covered.
            </p>
            <p className="text-center text-gray-900 font-semibold mt-4">
              Fixer Appliance Repair — your friendly dishwasher repair team in Vanier.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
