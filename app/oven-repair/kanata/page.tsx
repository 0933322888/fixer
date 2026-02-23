import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import ServiceHero from "@/components/ServiceHero";
import BenefitsSection from "@/components/BenefitsSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import OvenRepairServiceAreaSection from "@/components/OvenRepairServiceAreaSection";

export const metadata: Metadata = {
  title: "Oven Repair Kanata – Fast Local Service for Electric Ovens | Fixer",
  description: "Fixer Appliance Repair offers expert oven repair in Kanata. From heating failures and uneven baking to broken elements and error codes, we service Whirlpool, LG, Samsung, GE & more. Same-day local service with a 90-day warranty.",
  keywords: "oven repair Kanata, electric oven repair, oven not heating Kanata, oven repair service",
};

const benefits = [
  "Skilled in fixing everything from old coils to modern touch panels",
  "Prompt service with flexible scheduling",
  "You approve the price before we begin",
  "Friendly team that keeps your space clean",
  "No pressure, just honest work",
];

const commonIssues = [
  {
    title: "Oven won't turn on",
    description: "We check incoming power, fuse, and main controls.",
  },
  {
    title: "Burner works but oven doesn't",
    description: "Element or thermostat failure likely — we replace the part.",
  },
  {
    title: "Bakes unevenly",
    description: "A failed convection fan or element might be the cause.",
  },
  {
    title: "Oven door won't lock",
    description: "We repair door switches and hinges.",
  },
  {
    title: "No heat in broil mode",
    description: "The top element or relay could be faulty.",
  },
  {
    title: "Display not lighting up",
    description: "We troubleshoot and replace control boards.",
  },
  {
    title: "Oven light stays on",
    description: "A door switch might be jammed.",
  },
  {
    title: "Flickering numbers",
    description: "Wiring or control board failure.",
  },
  {
    title: "Takes long to cook",
    description: "Sensor miscalibration can drop temperatures.",
  },
  {
    title: "Beeping randomly",
    description: "We reset sensors and repair short circuits.",
  },
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

const faqs = [
  {
    question: "Do you fix ovens in Katimavik and Kanata North?",
    answer: "Yes — we repair ovens throughout Kanata.",
  },
  {
    question: "Do you service wall ovens and built-in models?",
    answer: "Yes — including double ovens and touch control units.",
  },
  {
    question: "My oven heats unevenly — can you fix that?",
    answer: "Yes — we check sensors, fans, and heating elements.",
  },
  {
    question: "Do you install new ovens?",
    answer: "Yes — we handle uninstallation and installation.",
  },
  {
    question: "Are parts for Whirlpool and GE ovens available?",
    answer: "Yes — we stock common oven parts.",
  },
];

export default function OvenRepairKanataPage() {
  return (
    <>
      <ServiceHero
        title="Kanata's Expert Oven Repair Team"
        description="Having trouble baking dinner in Kanata? Our oven repair experts are just around the corner. Fixer Appliance Repair offers efficient, local service for all major electric ovens. We service all major electric oven brands, including LG, Samsung, Whirlpool, GE, and Maytag."
        icon={<FaFire className="inline-block mr-2 text-[30px]" />}
      />

      <CommonIssuesSection issues={commonIssues} />

      <BenefitsSection applianceName="Oven" benefits={benefits} />

      <RepairOrReplaceSection description="Faulty heating elements, unresponsive controls — most oven problems are repairable. Before you invest in a new one, explore whether a fix is the better option. Our expert technicians will provide honest advice on the most cost-effective solution for your situation." />

      <InstallationCTASection
        applianceName="Oven"
        description="Upgrading to a new unit? We also offer oven installation in Kanata — fast, safe, and fully insured."
        href="/appliance-installation/oven"
      />

      <OvenRepairServiceAreaSection
        serviceAreas={serviceAreas}
        locationName="Kanata"
        heading="Service Area: Kanata and Nearby"
      />

      <CTASection />

      {/* Things to Do in Kanata */}
      <ThingsToDoSection
        attractions={[
          "South March Highlands – scenic forest trails for walking or mountain biking",
          "Walter Baker Park – picnic areas and wide open spaces",
          "Kanata Centrum – shopping and plenty of dining choices",
          "Canadian Tire Centre – concerts, hockey, and entertainment",
        ]}
        heading="Explore Kanata While We Fix Your Oven"
        description="While we handle your oven repair, you can spend some time exploring Kanata's best spots:"
        
        linkText="See what's happening in Kanata this week"
      />

      <FAQSection applianceName="Oven" faqs={faqs} />

      {/* Booking CTA */}
      <CTASection 
        heading="Book Your Oven Repair in Kanata"
        description="Hungry for help? We'll get your oven back to baking in no time."
        buttonText="Book Service Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Kanata", href: "/washer-repair/kanata" },
          { name: "Dryer Repair Kanata", href: "/dryer-repair/kanata" },
          { name: "Fridge Repair Kanata", href: "/fridge-repair/kanata" },
          { name: "Freezer Repair Kanata", href: "/freezer-repair/kanata" },
          { name: "Oven Repair Kanata", href: "/oven-repair/kanata" },
          { name: "Cooktop Repair Kanata", href: "/cooktop-repair/kanata" },
          { name: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
          { name: "Appliance Installation", href: "/appliance-installation/dishwasher" },
        ]}
        heading="Also Need Help With…"
        description="We fix more than just ovens — here are our other services in Kanata:"
        applianceName="Oven"
      />
    </>
  );
}
