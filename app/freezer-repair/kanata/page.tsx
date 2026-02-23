import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import FAQSection from "@/components/FAQSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Freezer Repair Kanata – Fast, Reliable Upright & Chest Freezer Service | Fixer",
  description: "Fixer Appliance Repair provides expert freezer repair in Kanata. From frost buildup to cooling failures, we service Whirlpool, Samsung, LG & more — with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Freezer not cold enough",
    description: "We check refrigerant flow, thermostat, and sealed system.",
  },
  {
    title: "Excessive frost buildup",
    description: "Usually caused by door gasket leaks or failed defrost cycles.",
  },
  {
    title: "Water pooling inside",
    description: "Blocked drain or defrost overflow — we fix and clean it.",
  },
  {
    title: "Unit runs non-stop",
    description: "Dirty coils or broken temp sensors may be at fault.",
  },
  {
    title: "Clicking or buzzing sounds",
    description: "Signs of relay or compressor problems.",
  },
  {
    title: "Food freezing unevenly",
    description: "We adjust sensors and fix circulation issues.",
  },
  {
    title: "Interior light won't work",
    description: "We replace bulbs or test door switches.",
  },
  {
    title: "Plastic drawers cracking",
    description: "We replace damaged components.",
  },
  {
    title: "Display flashing error codes",
    description: "We interpret the code and correct the issue.",
  },
  {
    title: "Freezer smells strange",
    description: "Odors often come from spills or motor overheating.",
  },
];

const benefits = [
  "Professional freezer repair backed by experience",
  "Technicians skilled in diagnosing cooling issues",
  "Fast response times for urgent situations",
  "Polite, reliable, and respectful service",
  "You'll always know what you're paying for",
];

const serviceAreas = [
  "Morgan's Grant",
  "Beaverbrook",
  "Katimavik-Hazeldean",
  "Glen Cairn",
  "Bridlewood",
  "Kanata Lakes",
  "Emerald Meadows",
];

const nearbyAreas = [
  { name: "Stittsville", slug: "/freezer-repair/stittsville" },
  { name: "Nepean", slug: "/freezer-repair/nepean" },
  { name: "Orleans", slug: "/freezer-repair/orleans" },
  { name: "Vanier", slug: "/freezer-repair/vanier" },
  { name: "Barrhaven", slug: "/freezer-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/freezer-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/freezer-repair/arnprior" },
  { name: "Carleton Place", slug: "/freezer-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you repair freezers in Kanata Lakes and Bridlewood?",
    answer: "Yes — we provide freezer repair throughout Kanata.",
  },
  {
    question: "Do you fix both upright and chest freezers?",
    answer: "Absolutely — we handle residential freezers of all types.",
  },
  {
    question: "My freezer is icing up — can that be repaired?",
    answer: "Yes — we'll check for defrost sensor, heater, or seal issues.",
  },
  {
    question: "Can you help quickly if food is thawing?",
    answer: "Yes — let us know it's urgent, and we'll prioritize.",
  },
  {
    question: "Do you carry parts for Frigidaire and Whirlpool freezers?",
    answer: "Yes — those are common brands we work with.",
  },
];

const relatedServices = [
  { name: "Washer Repair in Ottawa", href: "/washer-repair" },
  { name: "Dryer Repair in Ottawa", href: "/dryer-repair" },
  { name: "Dishwasher Repair in Ottawa", href: "/dishwasher-repair" },
  { name: "Fridge Repair in Ottawa", href: "/fridge-repair" },
  { name: "Oven Repair in Ottawa", href: "/oven-repair" },
  { name: "Freezer Installation in Ottawa", href: "/appliance-installation" },
];

export default function FreezerRepairKanataPage() {
  return (
    <>
      <ServiceHero
        title="Frozen Goods in Danger? Kanata Freezer Repair"
        description="Freezer frosting up or not keeping food cold enough? Fixer Appliance Repair offers same-day freezer repairs in Kanata, tackling everything from thermostat issues to compressor failures."
        icon={<FaSnowflake className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <p className="text-lg text-gray-200 mb-8">
            We repair Whirlpool, Samsung, LG, GE, and Maytag.
          </p>
        }
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} />

      <BenefitsSection applianceName="Freezer" benefits={benefits} />

      <RepairOrReplaceSection description="A good freezer can last well over a decade. If yours isn't cooling right, read our article to find out if a repair makes more sense than a new unit." />

      <InstallationCTASection
        applianceName="Freezer"
        description="Upgrading to a new unit? We also offer freezer installation in Kanata — fast, safe, and fully insured."
        href="/appliance-installation/locations/ottawa"
      />

      <CTASection />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area: Kanata and Nearby"
        description="We provide appliance repair services across the entire Kanata area, including:"
        neighborhoods={serviceAreas}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name,
          slug: area.slug.replace("/freezer-repair/", "")
        }))}
        applianceType="freezer"
        nearbyAreasLabel="We also provide freezer repair services in:"
        footerText={
          <p className="text-lg text-gray-700">
            For complete coverage, see our{" "}
            <Link href="/freezer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Freezer Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Things to Do */}
      <ThingsToDoSection
        attractions={[
          "South March Highlands – scenic forest trails",
          "Walter Baker Park – a quiet walk or picnic",
          "Kanata Centrum – shopping and dining",
          "Canadian Tire Centre – sports and concerts",
        ]}
        heading="Explore Kanata While We Fix Your Freezer"
        description="Don't let a freezer repair freeze your day — explore Kanata instead:"
        
        linkText="Ottawa Tourism Events"
      />

      {/* FAQ */}
      <FAQSection applianceName="Freezer" faqs={faqs} />

      {/* Schedule Service */}
      <CTASection 
        heading="Book Your Freezer Repair in Kanata"
        description="Frozen goods at risk? We'll be there quickly. Contact your local freezer pro:"
        
        />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With..."
        description="We do more than just freezer repair — check out our other Ottawa services:"
        applianceName="Freezer"
      />
    </>
  );
}
