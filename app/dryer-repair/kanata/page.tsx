import { Metadata } from "next";
import Link from "next/link";
import { FaWind, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import FAQSection from "@/components/FAQSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import ServiceAreaSection from "@/components/ServiceAreaSection";

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
  { name: "Dryer Installation Kanata", href: "/appliance-installation/dryer" },
];

export default function DryerRepairKanataPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaWind className="text-[30px] mb-2 inline-block" /> Dryer Repair Services in Kanata You Can Trust</h1>
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

      <CommonIssuesSection issues={commonIssues} />

      {/* Dryer Installation CTA */}
      <InstallationCTASection
        applianceName="Dryer"
        description="Got a new dryer? We also provide dryer installation in Kanata with same-day service available in most areas."
        href="/appliance-installation/dryer"
      />

      <BenefitsSection applianceName="Dryer" benefits={whyChooseUs} />

      {/* Service Area: Kanata and Nearby */}
      <ServiceAreaSection
        title="Service Area: Kanata and Nearby"
        description="We provide appliance repair services across the entire Kanata area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="dryer"
      />

      {/* Things to Do */}
      <ThingsToDoSection
        attractions={kanataAttractions}
        heading="Explore Kanata While We Fix Your Dryer"
        description="Waiting for your dryer to be fixed? Make the most of your time in Kanata and explore what the city has to offer:"
        
        linkText="Ottawa Tourism Events"
      />

      {/* FAQs */}
      <FAQSection applianceName="Dryer" faqs={faqs} />

      {/* Book Your Dryer Repair in Kanata */}
      <CTASection 
        heading="Book Your Dryer Repair in Kanata"
        description="Laundry piling up? Let us help."
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With…"
        description="We repair more than just dryers — here are our other services in Kanata:"
        applianceName="Dryer"
      />
    </>
  );
}

