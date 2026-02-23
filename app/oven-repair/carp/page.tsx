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
  title: "Oven Repair Carp – Reliable Local Service for Electric Ovens | Fixer",
  description: "Fixer Appliance Repair provides expert oven repair in Carp. From heating failures and uneven baking to faulty elements and control boards, we fix Whirlpool, LG, Samsung, GE & more. Same-day rural service with a 90-day warranty.",
  keywords: "oven repair Carp, electric oven repair, oven not heating Carp, oven repair service",
};

const benefits = [
  "Familiar with rural kitchen setups and wall ovens",
  "Practical advice and reliable repairs",
  "No hidden fees or upsells",
  "We treat your oven like our own",
  "Prompt arrival and respectful service",
];

const commonIssues = [
  {
    title: "Oven gets too hot",
    description: "Faulty thermostat or stuck relay could be the cause.",
  },
  {
    title: "Cooks only on one side",
    description: "Defective element or poor airflow — we fix both.",
  },
  {
    title: "No power at all",
    description: "We check the breaker, wiring, and fuse.",
  },
  {
    title: "Smells like burning plastic",
    description: "Often from electrical short or insulation damage.",
  },
  {
    title: "Oven turns off by itself",
    description: "Overheat protection or damaged main board.",
  },
  {
    title: "Control panel cracked or dead",
    description: "We replace digital interfaces.",
  },
  {
    title: "Oven door glass cracked",
    description: "We replace the glass for safe operation.",
  },
  {
    title: "Bake setting doesn't work",
    description: "Faulty lower element — we swap it out.",
  },
  {
    title: "Rattling noise inside",
    description: "Loose mounts or worn fan blades.",
  },
  {
    title: "Timer not responding",
    description: "Button or logic board may be failing.",
  },
];

const serviceAreas = [
  "Village of Carp",
  "Huntley",
  "Corkery",
  "Upper Dwyer Hill",
];

const faqs = [
  {
    question: "Do you repair ovens in Huntley and Westwood?",
    answer: "Absolutely — we visit all parts of Carp.",
  },
  {
    question: "Do you work with electric only?",
    answer: "Yes — we do not service gas ovens.",
  },
  {
    question: "What causes ovens not to turn on?",
    answer: "It may be fuses, control board, or power issues.",
  },
  {
    question: "Can you fix a broken oven door?",
    answer: "Yes — we repair or replace hinges, seals, and glass.",
  },
  {
    question: "Do you help choose new models if mine can't be fixed?",
    answer: "Yes — we can advise and install replacements.",
  },
];

export default function OvenRepairCarpPage() {
  return (
    <>
      <ServiceHero
        title="Electric Oven Repair for Carp Kitchens"
        description="Oven not holding temperature in Carp? We've got you covered. Fixer's experienced technicians can diagnose and repair heating issues, element problems, and more — right at your home. We work with brands like LG, Samsung, Whirlpool, GE, and Maytag."
        icon={<FaFire className="inline-block mr-2 text-[30px]" />}
      />

      <CommonIssuesSection issues={commonIssues} />

      <BenefitsSection applianceName="Oven" benefits={benefits} />

      <RepairOrReplaceSection description="Faulty heating elements, unresponsive controls — most oven problems are repairable. Before you invest in a new one, explore whether a fix is the better option. Our expert technicians will provide honest advice on the most cost-effective solution for your situation." />

      <InstallationCTASection
        applianceName="Oven"
        description="Upgrading to a new unit? We also offer oven installation in Carp — fast, safe, and fully insured."
        href="/appliance-installation/oven"
      />

      <OvenRepairServiceAreaSection
        serviceAreas={serviceAreas}
        locationName="Carp"
        heading="Service Area: Carp and Nearby"
        surroundingLabel="and surrounding rural neighbourhoods"
      />

      <CTASection />

      {/* Things to Do in Carp */}
      <ThingsToDoSection
        attractions={[
          { name: "Carp Farmers' Market", description: "one of the best in Ontario" },
          { name: "Diefenbunker Cold War Museum", description: "unique and fascinating" },
          { name: "Rural Art Studios", description: "seasonal markets" },
          { name: "Carp Ridge EcoWellness Centre", description: "nature walks, spa, and more" },
        ]}
        heading="Make the Most of Your Day in Carp"
        description="While we handle your oven repair, you can:"
        
        linkText="Events in Carp"
      />

      <FAQSection applianceName="Oven" faqs={faqs} />

      {/* Booking CTA */}
      <CTASection 
        heading="Book Your Oven Repair in Carp"
        description="We service ovens across rural Carp — fast, safe, and local."
        buttonText="Book Service Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Carp", href: "/washer-repair/carp" },
          { name: "Dryer Repair Carp", href: "/dryer-repair/carp" },
          { name: "Fridge Repair Carp", href: "/fridge-repair/carp" },
          { name: "Freezer Repair Carp", href: "/freezer-repair/carp" },
          { name: "Oven Repair Carp", href: "/oven-repair/carp" },
          { name: "Cooktop Repair Carp", href: "/cooktop-repair/carp" },
          { name: "Microwave Repair Carp", href: "/microwave-repair/carp" },
          { name: "Appliance Installation", href: "/appliance-installation/dishwasher" },
        ]}
        heading="Also Need Help With…"
        description="Oven repair is just one part of what we do — here are our other services in Carp:"
        applianceName="Oven"
      />
    </>
  );
}
