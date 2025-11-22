import { Metadata } from "next";
import Link from "next/link";
import { FaTshirt, FaMapMarkerAlt, FaUtensils, FaTree, FaBook } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import ServiceAreaSection from "@/components/ServiceAreaSection";

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
  { name: "Washer Installation Kanata", href: "/appliance-installation/washer" },
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
      <InstallationCTASection
        applianceName="Washer"
        description="Got a new washer? We also provide washer installation in Kanata with same-day service available in most areas."
        href="/appliance-installation/washer"
      />

      <BenefitsSection applianceName="Washer" benefits={whyChooseUs} />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area: Kanata and Nearby"
        description="We provide appliance repair services across the entire Kanata area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="washer"
        nearbyAreasLabel="We also help customers in nearby areas such as:"
        footerText={
          <p className="text-lg text-gray-700">
            👉 Need help outside Kanata? Learn more about our{" "}
            <Link href="/washer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              washer repair in Ottawa
            </Link>
            .
          </p>
        }
      />

      {/* Things to Do */}
      <ThingsToDoSection
        attractions={kanataAttractions}
        heading="Explore Kanata While We Fix Your Washer"
        description="While we handle your washer repair, why not take a break and enjoy some of the best places in Kanata? Whether you're into nature, food, or family fun, there's always something to explore:"
        
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Washer" faqs={faqs} />

      {/* Schedule Your Washer Repair */}
      <CTASection 
        heading="Schedule Your Washer Repair in Kanata"
        description="Washer acting up? We're here to help. Contact Fixer Appliance Repair today:"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With…"
        description="We fix more than just washers — here are our other services in Kanata:"
        applianceName="Washer"
      />
    </>
  );
}
