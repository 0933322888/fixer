import { Metadata } from "next";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Dishwasher Repair Kanata – Trusted Local Service | Fixer",
  description: "Fixer provides fast dishwasher repair in Kanata for Bosch, Samsung, Whirlpool & more. Same-day service, clear pricing, and a 90-day warranty. Call today!",
};

const commonIssues = [
  {
    title: "Won't start",
    description: "Could be power, latch, or board related. We test all inputs.",
  },
  {
    title: "Water not draining",
    description: "Clogs in pump or hose are common — we clear them.",
  },
  {
    title: "White film on dishes",
    description: "Poor rinse cycles or hard water buildup.",
  },
  {
    title: "Door spring broken",
    description: "We repair hinges and install new springs.",
  },
  {
    title: "Stops after a few minutes",
    description: "Sensor or float switch issues are likely.",
  },
  {
    title: "Detergent remains",
    description: "We test dispenser function and replace if needed.",
  },
  {
    title: "Dishwasher makes loud hum",
    description: "Often the circulation pump or debris in spray arm.",
  },
  {
    title: "Touchpad unresponsive",
    description: "The control board may need repair or replacement.",
  },
  {
    title: "Smells like mildew",
    description: "We deep-clean filters and run sanitizing cycles.",
  },
  {
    title: "Racks falling off tracks",
    description: "We install new wheels and rail stops.",
  },
];

const whyChooseUs = [
  "Local Kanata pros with deep experience",
  "Friendly, professional service every time",
  "Upfront pricing before we begin",
  "We handle repair and installation",
  "Trusted in homes across Kanata",
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
  { name: "Dishwasher Repair Stittsville", slug: "stittsville" },
  { name: "Dishwasher Repair Nepean", slug: "nepean" },
  { name: "Dishwasher Repair Orleans", slug: "orleans" },
  { name: "Dishwasher Repair Vanier", slug: "vanier" },
  { name: "Dishwasher Repair Barrhaven", slug: "barrhaven" },
  { name: "Dishwasher Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dishwasher Repair Arnprior", slug: "arnprior" },
  { name: "Dishwasher Repair Carleton Place", slug: "carleton-place" },
];

const kanataAttractions = [
  "South March Highlands – scenic forest trails for walking or biking",
  "Walter Baker Park – family-friendly green space",
  "Kanata Centrum – perfect for shopping or a quick coffee",
  "Canadian Tire Centre – major events and hockey games",
];

const faqs = [
  {
    question: "Do you repair dishwashers in Glen Cairn and Bridlewood?",
    answer: "Absolutely! We frequently visit homes in Glen Cairn, Bridlewood, and other parts of Kanata.",
  },
  {
    question: "How fast can I get service in Kanata?",
    answer: "We usually offer service within 24–48 hours, and same-day appointments are sometimes available.",
  },
  {
    question: "What types of dishwasher issues do you fix?",
    answer: "We fix leaks, draining problems, poor cleaning, and more.",
  },
  {
    question: "Do you carry parts for brands popular in Kanata?",
    answer: "Yes — we stock parts for LG, Whirlpool, Samsung, KitchenAid, and more.",
  },
  {
    question: "Do you offer installation if my dishwasher is beyond repair?",
    answer: "Yes — we can uninstall your old unit and professionally install a new one.",
  },
];

const relatedServices = [
  { name: "Washer Repair Kanata", href: "/washer-repair/kanata" },
  { name: "Dryer Repair Kanata", href: "/dryer-repair/kanata" },
  { name: "Fridge Repair Kanata", href: "/fridge-repair/kanata" },
  { name: "Freezer Repair Kanata", href: "/freezer-repair/kanata" },
  { name: "Oven Repair Kanata", href: "/oven-repair/kanata" },
  { name: "Cooktop Repair Kanata", href: "/cooktop-repair/kanata" },
  { name: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
  { name: "Dishwasher Installation Kanata", href: "/dishwasher-installation" },
];

export default function DishwasherRepairKanataPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white">Trusted Dishwasher Repair Technicians in Kanata</h1>
            <p className="text-xl leading-relaxed mb-8">
              Dishes coming out cloudy? Strange noises during wash? Fixer Appliance Repair provides Kanata homeowners with trusted dishwasher service that's quick and affordable.
            </p>
            <p className="text-lg mb-6">
              We work on Bosch, Samsung, LG, Whirlpool, GE, Maytag, and more.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, see our{" "}
              <Link href="/kanata" className="font-semibold hover:underline">
                Local Kanata page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} />

      {/* Installation Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-6">Installation Services</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Thinking about replacing your dishwasher in Kanata?</strong> Before you decide, read our{" "}
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                  repair vs. replace guide
                </Link>
                {" "}— it explains lifespan, repair costs, and when it makes sense to upgrade.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Already purchased a new unit? We provide dishwasher installation in Kanata. We'll connect it to your existing water and power lines and test for leaks.
              </p>
              <p className="text-gray-700 mb-6">
                👉 Note: we don't install new plumbing or high-voltage wiring.
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

      {/* Things to Do */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-4">Explore Kanata While We Fix Your Dishwasher</h2>
            <p className="text-lg text-gray-700 mb-6">
              Your dishwasher is in safe hands — take the opportunity to enjoy Kanata while we work:
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
          <h2 className="heading-md mb-6 text-white">Book Your Dishwasher Repair in Kanata</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Need fast dishwasher repair in Kanata? Call, text, or book online — our local tech will be on the way in no time.
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
              We fix more than just dishwashers — here are our other services in Kanata:
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
              Looking for another appliance service? We've got you covered across Kanata.
            </p>
            <p className="text-center text-gray-900 font-semibold mt-4">
              Fixer Appliance Repair — your friendly dishwasher repair team in Kanata.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
