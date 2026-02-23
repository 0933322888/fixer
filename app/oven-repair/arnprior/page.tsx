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
  title: "Oven Repair Arnprior – Trusted Local Electric Oven Service | Fixer",
  description: "Fixer Appliance Repair offers expert oven repair in Arnprior. From no-heat issues and uneven baking to faulty displays or sensors, we fix Whirlpool, GE, Samsung, LG & more. Same-day service, upfront pricing, 90-day warranty.",
  keywords: "oven repair Arnprior, electric oven repair, oven not heating Arnprior, oven repair service",
};

const benefits = [
  "Friendly Arnprior oven technicians with 15+ years of service",
  "Clear pricing explained before we begin",
  "Professional service every time",
  "90-day labour warranty for peace of mind",
];

const commonIssues = [
  {
    title: "Oven won't heat at all",
    description: "In Arnprior homes, failed elements or relays are common. We'll get it cooking again.",
  },
  {
    title: "Uneven baking",
    description: "Food burning on one side? Likely a faulty convection motor. We'll restore even heat.",
  },
  {
    title: "Oven light stays on",
    description: "A stuck door switch is usually the issue. We'll replace it.",
  },
  {
    title: "Display not lighting up",
    description: "Dead boards or wiring failures are common. We'll repair or swap parts.",
  },
  {
    title: "Random beeping",
    description: "Short circuits or failing sensors often cause beeps. We'll reset or replace them.",
  },
  {
    title: "Oven shuts off mid-cycle",
    description: "Overheating safety sensors sometimes cut power. We'll repair the root cause.",
  },
];

const serviceAreas = [
  "Downtown Arnprior",
  "Braeside",
  "McNab",
  "White Lake",
  "Sand Point",
];

const faqs = [
  {
    question: "Do you service ovens in Arnprior?",
    answer: "Yes — also in Braeside and White Lake.",
  },
  {
    question: "Why does my oven shut off mid-cycle?",
    answer: "Overheating sensor or control board fault.",
  },
  {
    question: "Do you install ovens?",
    answer: "Yes — with existing electrical setup.",
  },
  {
    question: "Do you work on both standard and convection ovens?",
    answer: "Yes — all models supported.",
  },
  {
    question: "Do you provide warranty coverage?",
    answer: "Yes — 90 days on all jobs.",
  },
];

export default function OvenRepairArnpriorPage() {
  return (
    <>
      <ServiceHero
        title="Arnprior's Trusted Oven Repair Team"
        description="From downtown Arnprior to White Lake, our technicians fix ovens that won't heat, bake unevenly, or spark electrical smells. Local, experienced service is just a call away. We service electric ovens from LG, Samsung, Whirlpool, GE, Maytag, and more."
        icon={<FaFire className="inline-block mr-2 text-[30px]" />}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Oven Issues We Fix in Arnprior" />

      <BenefitsSection applianceName="Oven" benefits={benefits} />

      <RepairOrReplaceSection description="Faulty heating elements, unresponsive controls — most oven problems are repairable. Before you invest in a new one, explore whether a fix is the better option. Our expert technicians will provide honest advice on the most cost-effective solution for your situation." />

      <InstallationCTASection
        applianceName="Oven"
        description="Upgrading to a new unit? We also offer oven installation in Arnprior — fast, safe, and fully insured."
        href="/appliance-installation/oven"
      />

      <OvenRepairServiceAreaSection
        serviceAreas={serviceAreas}
        locationName="Arnprior"
        surroundingLabel="and surrounding rural neighbourhoods"
      />

      <CTASection />

      {/* Things to Do in Arnprior */}
      <ThingsToDoSection
        attractions={[
          { name: "Robert Simpson Park", description: "waterfront trails and views" },
          { name: "Gillies Grove", description: "a nature escape in town" },
          { name: "Downtown Arnprior", description: "small-town charm" },
        ]}
        heading="Enjoy Your Time in Arnprior While We Repair the Oven"
        description="Step out for a bit and explore:"
        linkText="Find upcoming events in Arnprior"
      />

      <FAQSection applianceName="Oven" faqs={faqs} />

      {/* Booking CTA */}
      <CTASection 
        heading="Schedule Your Oven Repair in Arnprior"
        description="Oven troubles? Contact Fixer Appliance Repair today for quick, reliable help:"
        buttonText="Book Service Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Arnprior", href: "/washer-repair/arnprior" },
          { name: "Dryer Repair Arnprior", href: "/dryer-repair/arnprior" },
          { name: "Fridge Repair Arnprior", href: "/fridge-repair/arnprior" },
          { name: "Freezer Repair Arnprior", href: "/freezer-repair/arnprior" },
          { name: "Oven Repair Arnprior", href: "/oven-repair/arnprior" },
          { name: "Cooktop Repair Arnprior", href: "/cooktop-repair/arnprior" },
          { name: "Microwave Repair Arnprior", href: "/microwave-repair/arnprior" },
          { name: "Appliance Installation", href: "/appliance-installation/dishwasher" },
        ]}
        heading="Also Need Help With…"
        description="We service more than just ovens — here are our other options in Arnprior:"
        applianceName="Oven"
      />
    </>
  );
}
