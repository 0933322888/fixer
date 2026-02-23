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
  title: "Oven Repair Carleton Place – Fast, Reliable Electric Oven Service | Fixer",
  description: "Fixer Appliance Repair provides trusted oven repair in Carleton Place. From faulty elements and flickering displays to noisy fans and door issues, we fix Whirlpool, GE, Samsung, LG & more. Same-day service, clear pricing, 90-day warranty.",
  keywords: "oven repair Carleton Place, electric oven repair, oven not heating Carleton Place, oven repair service",
};

const benefits = [
  "Local Carleton Place oven specialists with experience across all major brands",
  "Same-day and next-day service options",
  "Transparent, no-upsell pricing",
  "Work guaranteed with a 90-day warranty",
];

const commonIssues = [
  {
    title: "Oven won't power on",
    description: "Blown fuses or faulty wiring often cause this. We'll restore safe operation.",
  },
  {
    title: "Takes too long to cook",
    description: "Misreading sensors or weak heating elements extend cooking times. We'll recalibrate or replace them.",
  },
  {
    title: "Oven door won't lock during cleaning",
    description: "Switches or latches may be failing. We'll repair them.",
  },
  {
    title: "Flickering display",
    description: "Worn wiring or control boards often cause this. We'll fix it.",
  },
  {
    title: "No heat in broil setting",
    description: "A bad upper element or relay is usually to blame. We'll restore broiling.",
  },
  {
    title: "Oven fan noisy",
    description: "Worn bearings make rattling sounds. We'll replace the fan motor.",
  },
];

const serviceAreas = [
  "Carleton Place West",
  "Carleton Place East",
  "Riverside Park",
  "Mississippi Quays",
];

const faqs = [
  {
    question: "Do you provide same-day oven service in Carleton Place?",
    answer: "When possible, yes.",
  },
  {
    question: "Why is my oven door not closing properly?",
    answer: "Worn hinges or door gaskets.",
  },
  {
    question: "Do you handle oven installations?",
    answer: "Yes — with current hookups.",
  },
  {
    question: "Do you also cover nearby areas?",
    answer: "Yes — Beckwith, Franktown, and others.",
  },
  {
    question: "Do you guarantee repairs?",
    answer: "Yes — 90-day labour warranty.",
  },
];

export default function OvenRepairCarletonPlacePage() {
  return (
    <>
      <ServiceHero
        title="Carleton Place Oven Repair Specialists"
        description="Weekend dinner plans ruined by a broken oven? Our repair experts respond quickly with honest, reliable service for homes across the town. We repair all major electric oven brands, including LG, Samsung, Whirlpool, GE, and Maytag."
        icon={<FaFire className="inline-block mr-2 text-[30px]" />}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Oven Issues We Fix in Carleton Place" />

      <BenefitsSection applianceName="Oven" benefits={benefits} />

      <RepairOrReplaceSection description="Faulty heating elements, unresponsive controls — most oven problems are repairable. Before you invest in a new one, explore whether a fix is the better option. Our expert technicians will provide honest advice on the most cost-effective solution for your situation." />

      <InstallationCTASection
        applianceName="Oven"
        description="Upgrading to a new unit? We also offer oven installation in Carleton Place — fast, safe, and fully insured."
        href="/appliance-installation/oven"
      />

      <OvenRepairServiceAreaSection
        serviceAreas={serviceAreas}
        locationName="Carleton Place"
      />

      <CTASection />

      {/* Things to Do in Carleton Place */}
      <ThingsToDoSection
        attractions={[
          { name: "Riverside Park", description: "calm scenery by the water" },
          { name: "Downtown Carleton Place", description: "grab a bite or shop around" },
          { name: "Heritage Museum", description: "learn about the community's history" },
        ]}
        heading="Enjoy Carleton Place While We Repair Your Oven"
        description="Take a short break and explore:"
        linkText="Explore upcoming events in Carleton Place"
      />

      <FAQSection applianceName="Oven" faqs={faqs} />

      {/* Booking CTA */}
      <CTASection 
        heading="Schedule Your Oven Repair in Carleton Place"
        description="Dinner plans on hold? Don't wait — text or call Fixer Appliance Repair to book service:"
        buttonText="Book Service Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Carleton Place", href: "/washer-repair/carleton-place" },
          { name: "Dryer Repair Carleton Place", href: "/dryer-repair/carleton-place" },
          { name: "Fridge Repair Carleton Place", href: "/fridge-repair/carleton-place" },
          { name: "Freezer Repair Carleton Place", href: "/freezer-repair/carleton-place" },
          { name: "Oven Repair Carleton Place", href: "/oven-repair/carleton-place" },
          { name: "Cooktop Repair Carleton Place", href: "/cooktop-repair/carleton-place" },
          { name: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
          { name: "Appliance Installation", href: "/appliance-installation/dishwasher" },
        ]}
        heading="Also Need Help With…"
        description="Oven issues aren't the only thing we handle — here are more services in Carleton Place:"
        applianceName="Oven"
      />
    </>
  );
}
