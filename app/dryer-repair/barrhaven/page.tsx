import { Metadata } from "next";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";

export const metadata: Metadata = {
  title: "Dryer Repair in Barrhaven – Local Technicians You Can Trust | Fixer",
  description: "Trusted dryer repair for Barrhaven homes. Same-day appointments in many areas, upfront rates, and a 90-day labour warranty.",
};

const commonIssues = [
  {
    title: "Dryer won't switch on",
    description: "In Barrhaven's newer townhomes, tripped breakers or bad switches are common. We'll find the cause quickly.",
  },
  {
    title: "No heat",
    description: "A failed element or bad thermostat means cold clothes. We'll replace what's broken.",
  },
  {
    title: "Loud rattling",
    description: "Bad rollers or a loose blower wheel can make dryers noisy. We'll quiet it down.",
  },
  {
    title: "Drum stuck still",
    description: "Belts wear out or motors seize up. We'll restore movement.",
  },
  {
    title: "Takes too long to dry",
    description: "Moisture sensors or clogged vents reduce efficiency. We'll recalibrate or clear airflow.",
  },
  {
    title: "Stops before the cycle ends",
    description: "Overheating from lint buildup often causes this. We'll deep-clean and reset safety systems.",
  },
  {
    title: "Door won't latch",
    description: "A simple part replacement gets your dryer sealing again.",
  },
];

const whyChooseUs = [
  "Over a decade of proven appliance repair experience",
  "Same-day service available in many Barrhaven areas",
  "Honest pricing with no hidden fees",
  "Professional, friendly team focused on customer satisfaction",
  "Repairs backed by a 90-day labour warranty",
];

const neighborhoods = [
  "Chapman Mills",
  "Stonebridge",
  "Longfields",
  "Half Moon Bay",
  "Knollsbrook",
];

const nearbyAreas = [
  { name: "Dryer Repair Kanata", slug: "kanata" },
  { name: "Dryer Repair Stittsville", slug: "stittsville" },
  { name: "Dryer Repair Nepean", slug: "nepean" },
  { name: "Dryer Repair Orleans", slug: "orleans" },
  { name: "Dryer Repair Vanier", slug: "vanier" },
  { name: "Dryer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dryer Repair Arnprior", slug: "arnprior" },
  { name: "Dryer Repair Carleton Place", slug: "carleton-place" },
];

const barrhavenAttractions = [
  "Walter Baker Centre – indoor pool and gym.",
  "Chapman Mills trails – walk along the Rideau River.",
  "Marketplace Barrhaven – food and shops in one place.",
];

const faqs = [
  {
    question: "Can I book a same-day dryer repair in Barrhaven?",
    answer: "Often yes — especially if you call early in the day.",
  },
  {
    question: "Why does my dryer smell like something is burning?",
    answer: "Lint buildup or wiring issues could be the cause — we'll inspect it safely.",
  },
  {
    question: "Do you repair energy-efficient dryers?",
    answer: "Yes — our technicians are trained on high-efficiency models.",
  },
  {
    question: "Do you provide dryer installation?",
    answer: "Yes — we install dryers in Barrhaven using existing hookups.",
  },
  {
    question: "Do you service nearby communities?",
    answer: "Yes — including Stonebridge, Half Moon Bay, and Chapman Mills.",
  },
];

const relatedServices = [
  { name: "Washer Repair Barrhaven", href: "/washer-repair/barrhaven" },
  { name: "Dishwasher Repair Barrhaven", href: "/dishwasher-repair/barrhaven" },
  { name: "Fridge Repair Barrhaven", href: "/fridge-repair/barrhaven" },
  { name: "Freezer Repair Barrhaven", href: "/freezer-repair/barrhaven" },
  { name: "Oven Repair Barrhaven", href: "/oven-repair/barrhaven" },
  { name: "Cooktop Repair Barrhaven", href: "/cooktop-repair/barrhaven" },
  { name: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { name: "Dryer Installation Barrhaven", href: "/dryer-installation" },
];

export default function DryerRepairBarrhavenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white">Professional Dryer Repair in Barrhaven</h1>
            <p className="text-xl leading-relaxed mb-8">
              Laundry piling up because the dryer won't heat properly? Fixer Appliance Repair offers Barrhaven homeowners prompt, professional dryer service. From noisy bearings to electrical issues, our team delivers clear quotes, same-day availability in many areas, and a 90-day warranty on all work. We repair dryers from Samsung, LG, Whirlpool, GE, and Maytag.
            </p>
            <p className="text-lg">
              👉 For all appliance help in your area, check our{" "}
              <Link href="/barrhaven" className="font-semibold hover:underline">
                Barrhaven appliance repair page
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
            Got a new dryer? We also provide dryer installation in Barrhaven with same-day service available in most areas.
          </p>
          <Link href="/dryer-installation" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
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
              We also serve households in:
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
                👉 Looking for city-wide service? Explore our{" "}
                <Link href="/dryer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Dryer Repair Ottawa
                </Link>
                {" "}page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enjoy Barrhaven While We Repair Your Dryer */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Enjoy Barrhaven While We Repair Your Dryer</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Here are a few ideas nearby:
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
                👉 Find local events in Barrhaven:
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
          <h2 className="heading-md mb-6 text-white">Schedule Your Dryer Repair in Barrhaven</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your dryer repair with Fixer Appliance Repair today — we're here to help:
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
              Beyond dryer repair, we also offer these services in Barrhaven:
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
              From dryers to ovens, we've got Barrhaven covered.
            </p>
            <p className="text-center text-gray-900 font-semibold mt-4">
              Fixer Appliance Repair — your local dryer repair team in Barrhaven.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

