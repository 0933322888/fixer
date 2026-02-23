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
  title: "Oven Repair Orleans – Fast, Reliable Electric Oven Service | Fixer",
  description: "Fixer Appliance Repair provides expert oven repair in Orleans. From uneven baking and heating failures to broken doors or displays, we fix Whirlpool, Samsung, LG, GE & more. Same-day service, clear pricing, 90-day warranty.",
  keywords: "oven repair Orleans, electric oven repair, oven not heating Orleans, oven repair service",
};

const benefits = [
  "Local Orleans oven repair and installation experts",
  "Same-day and next-day appointments available",
  "90-day warranty on all labour",
  "Honest pricing before we start",
];

const commonIssues = [
  {
    title: "Oven won't turn on",
    description: "We check power supply, fuses, and control boards to restore function.",
  },
  {
    title: "Burner works but oven doesn't",
    description: "This often points to a failed bake element or thermostat. We'll replace it quickly.",
  },
  {
    title: "Uneven baking results",
    description: "If one tray cooks faster, the convection fan or sensor may be faulty. We'll fix the airflow.",
  },
  {
    title: "Oven door won't close properly",
    description: "Loose hinges or worn gaskets leak heat. We'll replace them.",
  },
  {
    title: "No heat in broil mode",
    description: "The top element or relay may be bad. We'll restore full heating.",
  },
  {
    title: "Display not responding",
    description: "Control panels or wiring often fail with age. We'll repair or replace them.",
  },
];

const serviceAreas = [
  "Fallingbrook",
  "Avalon",
  "Queenswood Heights",
  "Chapel Hill",
  "Convent Glen",
];

const faqs = [
  {
    question: "Can I get same-day oven repair in Orleans?",
    answer: "Often yes — depending on schedule.",
  },
  {
    question: "Why is my oven not heating evenly?",
    answer: "Usually a faulty element or convection fan.",
  },
  {
    question: "Do you install ovens?",
    answer: "Yes — with existing hookups.",
  },
  {
    question: "Do you service areas near Orleans?",
    answer: "Yes — Chapel Hill, Avalon, Fallingbrook.",
  },
  {
    question: "Do you offer warranty coverage?",
    answer: "Yes — 90-day labour warranty.",
  },
];

export default function OvenRepairOrleansPage() {
  return (
    <>
      <ServiceHero
        title="Orleans Oven Repair You Can Rely On"
        description="Dinner plans on hold because your oven won't heat up? Our team delivers fast, local help to get you cooking again. Fixer provides professional service for all major electric ovens. We repair top brands like LG, Samsung, Whirlpool, GE, Maytag, and more."
        icon={<FaFire className="inline-block mr-2 text-[30px]" />}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Oven Issues We Fix in Orleans" />

      <BenefitsSection applianceName="Oven" benefits={benefits} />

      <RepairOrReplaceSection description="Faulty heating elements, unresponsive controls — most oven problems are repairable. Before you invest in a new one, explore whether a fix is the better option. Our expert technicians will provide honest advice on the most cost-effective solution for your situation." />

      <InstallationCTASection
        applianceName="Oven"
        description="Upgrading to a new unit? We also offer oven installation in Orleans — fast, safe, and fully insured."
        href="/appliance-installation/oven"
      />

      <OvenRepairServiceAreaSection
        serviceAreas={serviceAreas}
        locationName="Orleans"
      />

      <CTASection />

      {/* Things to Do in Orleans */}
      <ThingsToDoSection
        attractions={[
          { name: "Petrie Island", description: "for fresh air and nature" },
          { name: "Shenkman Arts Centre", description: "arts and culture" },
          { name: "Place d'Orleans", description: "dining and shops" },
        ]}
        heading="Enjoy Your Time in Orleans While We Repair the Oven"
        description="Why not take a short break?"
        linkText="See what's happening around Orleans this month"
      />

      <FAQSection applianceName="Oven" faqs={faqs} />

      {/* Booking CTA */}
      <CTASection 
        heading="Schedule Your Oven Repair in Orleans"
        description="Oven not heating properly? Call Fixer Appliance Repair today to book fast service:"
        buttonText="Book Service Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Orleans", href: "/washer-repair/orleans" },
          { name: "Dryer Repair Orleans", href: "/dryer-repair/orleans" },
          { name: "Fridge Repair Orleans", href: "/fridge-repair/orleans" },
          { name: "Freezer Repair Orleans", href: "/freezer-repair/orleans" },
          { name: "Oven Repair Orleans", href: "/oven-repair/orleans" },
          { name: "Cooktop Repair Orleans", href: "/cooktop-repair/orleans" },
          { name: "Microwave Repair Orleans", href: "/microwave-repair/orleans" },
          { name: "Appliance Installation", href: "/appliance-installation/dishwasher" },
        ]}
        heading="Also Need Help With…"
        description="Our team handles more than ovens — here's what else we do in Orleans:"
        applianceName="Oven"
      />
    </>
  );
}
