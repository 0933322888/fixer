import { Metadata } from "next";
import Link from "next/link";
import { FaUtensils, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import FAQSection from "@/components/FAQSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ServiceHero from "@/components/ServiceHero";

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
  { name: "Dishwasher Installation Kanata", href: "/appliance-installation/dishwasher" },
];

export default function DishwasherRepairKanataPage() {
  return (
    <>
      <ServiceHero
        title="Trusted Dishwasher Repair Technicians in Kanata"
        description="Dishes coming out cloudy? Strange noises during wash? Fixer Appliance Repair provides Kanata homeowners with trusted dishwasher service that's quick and affordable."
        icon={<FaUtensils className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <>
            <p className="text-lg mb-6">
              We work on Bosch, Samsung, LG, Whirlpool, GE, Maytag, and more.
            </p>
            <p className="text-lg mb-8">
              👉 For all appliance services in your area, see our{" "}
              <Link href="/kanata" className="font-semibold hover:underline">
                Local Kanata page
              </Link>
              .
            </p>
          </>
        }
        useSectionPadding={true}
      />

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
                <Link href="/appliance-installation/dishwasher" className="btn-primary">
                  Learn more about Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection applianceName="Dishwasher" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="When your dishwasher breaks down, it's tempting to shop for a new one — but repairs are often quick and cost-effective. See how to tell when it's worth fixing." />

      <InstallationCTASection
        applianceName="Dishwasher"
        description="Upgrading to a new unit? We also offer dishwasher installation in Kanata — fast, safe, and fully insured."
        href="/appliance-installation/dishwasher"
      />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area: Kanata and Nearby"
        description="We provide appliance repair services across the entire Kanata area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="dishwasher"
        nearbyAreasLabel="We also help customers in nearby areas such as:"
        footerText={
          <p className="text-lg text-gray-700">
            For city-wide service, visit our{" "}
            <Link href="/dishwasher-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Dishwasher Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Things to Do */}
      <ThingsToDoSection
        attractions={kanataAttractions}
        heading="Explore Kanata While We Fix Your Dishwasher"
        description="Your dishwasher is in safe hands — take the opportunity to enjoy Kanata while we work:"
        
        linkText="Ottawa Tourism Events"
      />

      {/* FAQ */}
      <FAQSection applianceName="Dishwasher" faqs={faqs} />

      {/* Contact CTA */}
      <CTASection 
        heading="Book Your Dishwasher Repair in Kanata"
        description="Need fast dishwasher repair in Kanata? Call, text, or book online — our local tech will be on the way in no time."
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With…"
        description="We fix more than just dishwashers — here are our other services in Kanata:"
        applianceName="Dishwasher"
      />
    </>
  );
}
