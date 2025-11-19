import { Metadata } from "next";
import Link from "next/link";
import { FaTshirt, FaMapMarkerAlt, FaUtensils, FaTree, FaBook } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Washer Repair Kanata – Fast, Local Service | Fixer",
  description: "Need washer repair in Kanata? Fixer offers fast, reliable service for all major brands, same-day appointments, and a 90-day warranty. Call 613-413-6969.",
};

const commonIssues = [
  {
    title: "Washer not turning on?",
    description: "In Kanata homes, this often happens after a power surge or a tripped breaker — especially in newer developments. If power isn't the issue, it could be a faulty latch or start switch. We'll pinpoint it quickly and get your laundry routine back on track.",
  },
  {
    title: "Washer not draining properly?",
    description: "Blocked drain pumps and kinked hoses are typical causes, especially if your washer is located in the basement. We'll inspect the pump and hose to restore proper drainage.",
  },
  {
    title: "Loud noises during the spin cycle?",
    description: "Thumping or squealing sounds in Kanata washers often come from loose shock absorbers or an unbalanced load. We'll diagnose whether it's a minor load issue or worn suspension components.",
  },
  {
    title: "Washer door stuck closed?",
    description: "When a front-load washer won't open, it's usually due to a jammed lock or sensor glitch. In Arcadia and Beaverbrook, we see this often in newer energy-efficient models.",
  },
  {
    title: "Water leaking around the washer?",
    description: "Leaks are frequently caused by worn door seals or loose connections. We'll track down the exact spot and fix it before it causes water damage to your Kanata home.",
  },
  {
    title: "Error codes on the display?",
    description: "If your washer flashes a code like OE, LE, or UE, don't stress. We service LG, Samsung, Whirlpool, and other popular brands — we'll translate the message and fix the root issue.",
  },
];

const whyChooseUs = [
  "15+ years of repair experience",
  "Same-day and next-day appointments",
  "90-day labour warranty",
  "Clear pricing, no upselling",
  "Technicians who know Kanata inside and out",
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
  { name: "Washer Repair Stittsville", slug: "stittsville" },
  { name: "Washer Repair Nepean", slug: "nepean" },
  { name: "Washer Repair Orleans", slug: "orleans" },
  { name: "Washer Repair Vanier", slug: "vanier" },
  { name: "Washer Repair Barrhaven", slug: "barrhaven" },
  { name: "Washer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Washer Repair Arnprior", slug: "arnprior" },
  { name: "Washer Repair Carleton Place", slug: "carleton-place" },
  { name: "Washer Repair Carp", slug: "carp" },
];

const kanataAttractions = [
  "South March Highlands – scenic forest trails for walking or mountain biking",
  "Walter Baker Park – great for a relaxing stroll or a picnic",
  "Kanata Centrum – local shopping, coffee, and restaurants",
  "Canadian Tire Centre – home of the Ottawa Senators and major concerts",
];

const faqs = [
  {
    question: "How quickly can you come out to Kanata?",
    answer: "We offer same-day or next-day service for most calls in Kanata.",
  },
  {
    question: "Do you repair all washer brands?",
    answer: "Yes — we work with most major brands and models. Just send us your washer's make and model, and we'll confirm support right away.",
  },
  {
    question: "Should I repair or replace my washer?",
    answer: "It depends on the age and condition. We're happy to provide honest advice after a quick diagnostic. For a deeper comparison, check out our repair vs replace guide.",
    link: "/blog/repair-vs-replace-appliance",
  },
  {
    question: "Do you guarantee your work?",
    answer: "Absolutely. We offer a 90-day warranty on all labour.",
  },
];

const relatedServices = [
  { name: "Dryer Repair Kanata", href: "/dryer-repair/kanata" },
  { name: "Dishwasher Repair Kanata", href: "/dishwasher-repair" },
  { name: "Fridge Repair Kanata", href: "/fridge-repair/kanata" },
  { name: "Freezer Repair Kanata", href: "/freezer-repair/kanata" },
  { name: "Oven Repair Kanata", href: "/oven-repair/kanata" },
  { name: "Cooktop Repair Kanata", href: "/cooktop-repair/kanata" },
  { name: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
  { name: "Washer Installation Kanata", href: "/washer-installation" },
];

export default function WasherRepairKanataPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaTshirt className="text-[30px] mb-2 inline-block" /> Local Washer Repair You Can Count On</h1>
            <p className="text-xl leading-relaxed mb-8">
              Washer leaving clothes soaking wet or flashing error codes? Fixer Appliance Repair is your local Kanata team for quick, dependable washer repairs. From faulty door locks to cycles that won't finish, we'll get your laundry routine back on track. We service leading brands including Whirlpool, LG, Samsung, GE, Maytag, and Frigidaire.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, see our full{" "}
              <Link href="/service-areas/kanata" className="font-semibold hover:underline">
                Kanata appliance repair page
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
            <h2 className="heading-md text-center mb-12">Common Washer Issues We Fix in Kanata</h2>
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

      {/* Washer Installation CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">New Washer? We Can Install It</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Got a new washer? We also provide washer installation in Kanata with same-day service available in most areas.
          </p>
          <Link href="/washer-installation" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Learn About Washer Installation
          </Link>
        </div>
      </section>

      <BenefitsSection applianceName="Washer" benefits={whyChooseUs} />

      {/* Service Area */}
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
              We also help customers in nearby areas such as:
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
                👉 Need help outside Kanata? Learn more about our{" "}
                <Link href="/washer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
                  washer repair in Ottawa
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Things to Do */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-4">Explore Kanata While We Fix Your Washer</h2>
            <p className="text-lg text-gray-700 mb-6">
              While we handle your washer repair, why not take a break and enjoy some of the best places in Kanata? Whether you're into nature, food, or family fun, there's always something to explore:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {kanataAttractions.map((attraction, index) => {
                const icons = [FaMapMarkerAlt, FaTree, FaUtensils, FaBook];
                const Icon = icons[index % icons.length];
                const parts = attraction.split(" – ");
                const name = parts[0];
                const description = parts[1] || "";
                return (
                  <div key={index} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-accent-500 flex items-start gap-4">
                    <Icon className="text-accent-500 text-xl flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
                      <p className="text-gray-600 text-sm">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 bg-gradient-to-r from-accent-50 to-primary-50 border border-accent-200 rounded-lg p-6 text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Want to catch a live event or exhibit?
              </p>
              <p className="text-gray-700 mb-3">
                Check what's happening this week:
              </p>
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-600 font-semibold hover:text-accent-700 hover:underline transition-colors"
              >
                Ottawa Tourism Events
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQSection applianceName="Washer" faqs={faqs} />

      {/* Schedule Your Washer Repair */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6 text-white">Schedule Your Washer Repair in Kanata</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Washer acting up? We're here to help. Contact Fixer Appliance Repair today:
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
              We fix more than just washers — here are our other services in Kanata:
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
              Fixer Appliance Repair — your friendly washer repair team in Kanata.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
