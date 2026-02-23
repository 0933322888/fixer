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
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Dryer Repair Carp – Fast, Reliable Service for Homes & Farms | Fixer",
  description: "Fixer provides trusted dryer repair in Carp for rural homes and farms. We fix heating, noise, and power issues with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Dryer won't turn on",
    description: "Check for faulty wiring or blown fuses — we'll restore power.",
  },
  {
    title: "Dryer overheats",
    description: "Bad thermostats or blocked vents may trigger safety shutdowns.",
  },
  {
    title: "Clothes still wet after cycle",
    description: "Sensor or heating element issues might be to blame.",
  },
  {
    title: "Dryer shakes during use",
    description: "Loose parts or leveling issues — we stabilize the unit.",
  },
  {
    title: "Makes rattling or banging",
    description: "Worn drum rollers or loose internal components often cause noise.",
  },
  {
    title: "Burning odor during drying",
    description: "Lint or wiring problems can be dangerous — we clean and repair.",
  },
  {
    title: "Drum not spinning",
    description: "Likely due to a broken belt or motor failure — we replace and test.",
  },
  {
    title: "Dryer stops after a few minutes",
    description: "Could be a failing motor or overheating sensor.",
  },
  {
    title: "Dryer hums but doesn't start",
    description: "Indicates motor start capacitor or switch trouble.",
  },
  {
    title: "Control panel flickering",
    description: "A power supply or interface board issue — we diagnose it quickly.",
  },
];

const whyChooseUs = [
  "Professional service for both homes and farms",
  "Carp's go-to team for electric dryer repair",
  "Clean, respectful service every time",
  "We bring parts to you — no long waits",
  "Honest advice with no pressure",
];

const neighborhoods = [
  "Village of Carp",
  "Huntley",
  "Corkery",
  "Upper Dwyer Hill",
];

const nearbyAreas = [
  { name: "Dryer Repair Kanata", slug: "kanata" },
  { name: "Dryer Repair Stittsville", slug: "stittsville" },
  { name: "Dryer Repair Nepean", slug: "nepean" },
  { name: "Dryer Repair Orleans", slug: "orleans" },
  { name: "Dryer Repair Vanier", slug: "vanier" },
  { name: "Dryer Repair Barrhaven", slug: "barrhaven" },
  { name: "Dryer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dryer Repair Arnprior", slug: "arnprior" },
  { name: "Dryer Repair Carleton Place", slug: "carleton-place" },
];

const carpAttractions = [
  "Carp Farmers' Market – one of the best in Ontario",
  "Diefenbunker Cold War Museum – unique and fascinating",
  "Rural Art Studios or seasonal markets",
  "Carp Ridge EcoWellness Centre – nature walks, spa, and more",
];

const faqs = [
  {
    question: "Do you fix dryers in Carp Village and Huntley?",
    answer: "Yes — we serve both central Carp and surrounding rural areas like Huntley.",
  },
  {
    question: "My dryer heats but doesn't spin — can you help?",
    answer: "Absolutely. That's usually a drive belt or motor issue.",
  },
  {
    question: "Do you repair older Whirlpool or GE dryers?",
    answer: "Yes — we handle both newer and older model repairs.",
  },
  {
    question: "Can I schedule a visit outside business hours in Carp?",
    answer: "Sometimes — just let us know and we'll do our best to accommodate.",
  },
  {
    question: "Do you also install new dryers?",
    answer: "Yes, we offer full uninstall/install services for electric dryers.",
  },
];

const relatedServices = [
  { name: "Washer Repair Carp", href: "/washer-repair/carp" },
  { name: "Dishwasher Repair Carp", href: "/dishwasher-repair/carp" },
  { name: "Fridge Repair Carp", href: "/fridge-repair/carp" },
  { name: "Freezer Repair Carp", href: "/freezer-repair/carp" },
  { name: "Oven Repair Carp", href: "/oven-repair/carp" },
  { name: "Cooktop Repair Carp", href: "/cooktop-repair/carp" },
  { name: "Microwave Repair Carp", href: "/microwave-repair" },
  { name: "Dryer Installation Carp", href: "/appliance-installation/dryer" },
];

export default function DryerRepairCarpPage() {
  return (
    <>
      <ServiceHero
        title="Fast & Friendly Dryer Repair in Carp"
        description="Dryer overheating, shutting off early, or making a grinding noise? In Carp, Fixer Appliance Repair delivers tailored service for rural homes and farmhouses. No fuss, just reliable local repairs. We work with leading brands such as GE, Whirlpool, Samsung, Maytag, and LG."
        icon={<FaWind className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <p className="text-lg mb-8">
            👉 For all appliance services in your area, check our{" "}
            <Link href="/carp" className="font-semibold hover:underline">
              Carp appliance repair page
            </Link>
            .
          </p>
        }
        useSectionPadding={true}
      />

      <CommonIssuesSection issues={commonIssues} />

      {/* Dryer Installation CTA */}
      <InstallationCTASection
        applianceName="Dryer"
        description="Got a new dryer? We also provide dryer installation in Carp with same-day service available in most areas."
        href="/appliance-installation/dryer"
      />

      <BenefitsSection applianceName="Dryer" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="Wondering if your dryer is still worth fixing? Read our dryer repair vs. replacement guide to weigh your options before you buy a new one." />

      {/* Service Area: Carp and Nearby */}
      <ServiceAreaSection
        title="Service Area: Carp and Nearby"
        description="We provide appliance repair services across the entire Carp area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="dryer"
        nearbyAreasLabel="We also repair dryers for customers in:"
        surroundingLabel="and surrounding rural neighbourhoods"
      />

      {/* Explore Carp While We Fix... */}
      <ThingsToDoSection
        attractions={carpAttractions}
        heading="Explore Carp While We Fix Your Dryer"
        description="Waiting on your dryer repair? Make the most of your time in Carp:"
        
        linkText="Events in Carp"
      />

      {/* FAQs */}
      <FAQSection applianceName="Dryer" faqs={faqs} />

      {/* Book Your Dryer Repair in Carp */}
      <CTASection 
        heading="Book Your Dryer Repair in Carp"
        description="Serving all of Carp and rural areas nearby — get your dryer fixed fast."
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With…"
        description="Dryer repair is just one part of what we do — here are other services in Carp:"
        applianceName="Dryer"
      />
    </>
  );
}

