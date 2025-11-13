import { Metadata } from "next";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";

export const metadata: Metadata = {
  title: "Dryer Repair Kanata – Trusted Local Service | Fixer",
  description: "Need dryer repair in Kanata? Fixer provides fast, reliable service for Whirlpool, Samsung, LG & more — with same-day fixes and a 90-day warranty. Call today!",
};

const commonIssues = [
  {
    title: "Dryer won't start",
    description: "Could be power, fuse, or switch issues. We test all three.",
  },
  {
    title: "Not heating enough",
    description: "A weak element or blocked duct can reduce drying performance.",
  },
  {
    title: "Squealing noise",
    description: "Often from worn rollers or a stressed idler pulley.",
  },
  {
    title: "Drum won't turn",
    description: "Belt problems or motor failure might be the cause.",
  },
  {
    title: "Takes forever to finish",
    description: "We check sensors, venting, and internal airflow.",
  },
  {
    title: "Dryer shuts off early",
    description: "Usually caused by overheating or sensor faults.",
  },
  {
    title: "Clothes come out damp",
    description: "A partially blocked vent or low heat can leave laundry wet.",
  },
  {
    title: "Door won't latch",
    description: "A common mechanical failure — easily replaced.",
  },
  {
    title: "Dryer smells musty",
    description: "We deep-clean to remove lint buildup and mildew.",
  },
  {
    title: "Buttons not responding",
    description: "May be the UI board or simple wear-and-tear.",
  },
];

const whyChooseUs = [
  "Friendly, experienced Kanata-based technicians",
  "We specialize in dryer diagnostics and repair",
  "Fast response times and honest service with no hidden fees",
  "We bring parts for same-day fixes",
  "Locally trusted with dozens of 5-star reviews",
];

const neighborhoods = [
  "Morgan's Grant",
  "Beaverbrook",
  "Katimavik-Hazeldean",
  "Glen Cairn",
  "Bridlewood",
  "Kanata Lakes",
  "Emerald Meadows",
];

const nearbyAreas = [
  { name: "Dryer Repair Stittsville", slug: "stittsville" },
  { name: "Dryer Repair Nepean", slug: "nepean" },
  { name: "Dryer Repair Orleans", slug: "orleans" },
  { name: "Dryer Repair Vanier", slug: "vanier" },
  { name: "Dryer Repair Barrhaven", slug: "barrhaven" },
  { name: "Dryer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dryer Repair Arnprior", slug: "arnprior" },
  { name: "Dryer Repair Carleton Place", slug: "carleton-place" },
];

const kanataAttractions = [
  "South March Highlands – scenic forest trails for walking or mountain biking",
  "Walter Baker Park – perfect for a picnic or a leisurely stroll",
  "Kanata Centrum – shopping, coffee shops, and restaurants",
  "Canadian Tire Centre – catch a game or concert",
];

const faqs = [
  {
    question: "Do you repair dryers in Glen Cairn and Bridlewood?",
    answer: "Yes — we serve the entire Kanata area, including Glen Cairn and Bridlewood.",
  },
  {
    question: "Do you fix stacked dryer units in Kanata condos?",
    answer: "Absolutely. We're used to working in small spaces and high-efficiency units.",
  },
  {
    question: "What if my dryer isn't spinning?",
    answer: "It's likely a belt or motor issue — and we fix both.",
  },
  {
    question: "Can I get same-day dryer repair in Kanata?",
    answer: "Sometimes — call early and we'll do our best to fit you in.",
  },
  {
    question: "Do you carry parts for Whirlpool and Samsung dryers?",
    answer: "Yes — those are among the most common brands we repair.",
  },
];

const relatedServices = [
  { name: "Washer Repair Kanata", href: "/washer-repair/kanata" },
  { name: "Dishwasher Repair Kanata", href: "/dishwasher-repair/kanata" },
  { name: "Fridge Repair Kanata", href: "/fridge-repair/kanata" },
  { name: "Freezer Repair Kanata", href: "/freezer-repair/kanata" },
  { name: "Oven Repair Kanata", href: "/oven-repair/kanata" },
  { name: "Cooktop Repair Kanata", href: "/cooktop-repair/kanata" },
  { name: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
  { name: "Dryer Installation Kanata", href: "/dryer-installation" },
];

export default function DryerRepairKanataPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white">Dryer Repair Services in Kanata You Can Trust</h1>
            <p className="text-xl leading-relaxed mb-8">
              Clothes coming out damp even after a full cycle? Or maybe your dryer just won't turn on? Fixer Appliance Repair provides expert dryer service in Kanata, with quick diagnostics and dependable repairs. We handle Whirlpool, Samsung, LG, GE, Maytag, Frigidaire, and more.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, check our{" "}
              <Link href="/kanata" className="font-semibold hover:underline">
                Kanata appliance repair page
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

      {/* Dryer Installation CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">New Dryer? We Can Install It</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Got a new dryer? We also provide dryer installation in Kanata with same-day service available in most areas.
          </p>
          <Link href="/dryer-installation" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Learn About Dryer Installation
          </Link>
        </div>
      </section>

      <BenefitsSection applianceName="Dryer" benefits={whyChooseUs} />

      {/* Service Area: Kanata and Nearby */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Service Area: Kanata and Nearby</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We provide appliance repair services across the entire Kanata area, including:
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
              We also provide:
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

      {/* Things to Do */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-4">Explore Kanata While We Fix Your Dryer</h2>
            <p className="text-lg text-gray-700 mb-6">
              Waiting for your dryer to be fixed? Make the most of your time in Kanata and explore what the city has to offer:
            </p>
            <ul className="space-y-3 text-gray-700">
              {kanataAttractions.map((attraction, index) => (
                <li key={index}>{attraction}</li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              Want to catch a live event or exhibit? Check what's happening this week:
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 font-medium ml-2 hover:underline"
              >
                Ottawa Tourism Events
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
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

      {/* Book Your Dryer Repair in Kanata */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6 text-white">Book Your Dryer Repair in Kanata</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Laundry piling up? Let us help.
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-2xl">
              📞 Call or text: <a href="tel:613-413-6969" className="font-semibold hover:underline">613-413-6969</a>
            </p>
            <p className="text-xl">
              📧 Email: <a href="mailto:service@fixerappliancerepair.ca" className="font-semibold hover:underline">service@fixerappliancerepair.ca</a>
            </p>
          </div>
        </div>
      </section>

      {/* Also Need Help With… */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-8">Also Need Help With…</h2>
            <p className="text-center text-gray-700 mb-8">
              We repair more than just dryers — here are our other services in Kanata:
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
              Looking for help with another appliance? We've got you covered across Kanata.
            </p>
            <p className="text-center text-gray-900 font-semibold mt-4">
              Fixer Appliance Repair — your friendly dryer repair team in Kanata.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

