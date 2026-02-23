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
  title: "Oven Repair Stittsville – Fast Electric Oven Service | Fixer",
  description: "Fixer Appliance Repair provides expert oven repair in Stittsville. From uneven baking and faulty elements to control board errors, we fix Whirlpool, LG, Samsung, GE & more. Same-day service with a 90-day warranty.",
  keywords: "oven repair Stittsville, electric oven repair, oven not heating Stittsville, oven repair service",
};

const benefits = [
  "Knowledgeable team that solves problems quickly",
  "Fair pricing and upfront quotes",
  "We explain your options clearly",
  "Neat and professional service, always",
  "Repairs backed by real experience",
];

const commonIssues = [
  {
    title: "Oven won't maintain temperature",
    description: "Sensor or control board may be misreading heat levels.",
  },
  {
    title: "Broil works, bake doesn't",
    description: "The bake element or relay needs service.",
  },
  {
    title: "Oven light won't shut off",
    description: "Likely a faulty door switch — we replace it.",
  },
  {
    title: "Takes too long to cook",
    description: "Calibration or airflow problems can reduce heat.",
  },
  {
    title: "Door hinges broken",
    description: "We replace spring assemblies and realign the door.",
  },
  {
    title: "Smoke when turning on",
    description: "Spill residue or failing wiring may be at fault.",
  },
  {
    title: "Buttons not responding",
    description: "Touchpad or control board could be worn.",
  },
  {
    title: "Timer not setting",
    description: "We repair or replace UI boards.",
  },
  {
    title: "Convection fan noisy",
    description: "Worn bearings — we install new parts.",
  },
  {
    title: "Error code flashing",
    description: "We read and clear system diagnostics.",
  },
];

const serviceAreas = [
  "Crossing Bridge",
  "Jackson Trails",
  "Bryanston Gate",
  "West Ridge",
  "Timbermere",
  "Fairwinds",
];

const faqs = [
  {
    question: "Do you offer oven repair in Crossing Bridge and Fairwinds?",
    answer: "Yes — we service all of Stittsville.",
  },
  {
    question: "My oven's touch controls don't respond — can you fix that?",
    answer: "Yes — we repair electronic and control board issues.",
  },
  {
    question: "Do you test everything after repairs?",
    answer: "Always — including safety checks.",
  },
  {
    question: "Can you install a new oven for me?",
    answer: "Yes — we provide complete installation.",
  },
  {
    question: "Do you offer repair guarantees?",
    answer: "Yes — 90 days on labor and installed parts.",
  },
];

export default function OvenRepairStittsvillePage() {
  return (
    <>
      <ServiceHero
        title="Stittsville Oven Repair – Done Right the First Time"
        description="An oven that bakes unevenly or won't preheat is frustrating. Fixer Appliance Repair serves Stittsville with professional-time electric oven repair. We handle all popular brands, including LG, Samsung, Whirlpool, GE, and Maytag."
        icon={<FaFire className="inline-block mr-2 text-[30px]" />}
      />

      <CommonIssuesSection issues={commonIssues} />

      <BenefitsSection applianceName="Oven" benefits={benefits} />

      <RepairOrReplaceSection description="Faulty heating elements, unresponsive controls — most oven problems are repairable. Before you invest in a new one, explore whether a fix is the better option. Our expert technicians will provide honest advice on the most cost-effective solution for your situation." />

      <InstallationCTASection
        applianceName="Oven"
        description="Upgrading to a new unit? We also offer oven installation in Stittsville — fast, safe, and fully insured."
        href="/appliance-installation/oven"
      />

      <OvenRepairServiceAreaSection
        serviceAreas={serviceAreas}
        locationName="Stittsville"
        heading="Service Area: Stittsville and Nearby"
      />

      <CTASection />

      {/* Things to Do in Stittsville */}
      <ThingsToDoSection
        attractions={[
          { name: "Amberwood Village Trails", description: "quiet paths for a stroll" },
          { name: "Quitters Coffee", description: "grab a snack or coffee break" },
          { name: "Village Square Park", description: "central, easy, and pleasant" },
        ]}
        heading="Enjoy Your Time in Stittsville During the Repair"
        description="Make the most of the downtime with a little local exploring:"
        
        linkText="Events in Stittsville"
      />

      <FAQSection applianceName="Oven" faqs={faqs} />

      {/* Booking CTA */}
      <CTASection 
        heading="Book Your Oven Repair in Stittsville"
        description="Book now and get back to home cooking."
        buttonText="Book Service Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Stittsville", href: "/washer-repair/stittsville" },
          { name: "Dryer Repair Stittsville", href: "/dryer-repair/stittsville" },
          { name: "Fridge Repair Stittsville", href: "/fridge-repair/stittsville" },
          { name: "Freezer Repair Stittsville", href: "/freezer-repair/stittsville" },
          { name: "Oven Repair Stittsville", href: "/oven-repair/stittsville" },
          { name: "Cooktop Repair Stittsville", href: "/cooktop-repair/stittsville" },
          { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
          { name: "Appliance Installation", href: "/appliance-installation/dishwasher" },
        ]}
        heading="Also Need Help With…"
        description="Need more than oven repair? Here's what else we service in Stittsville:"
        applianceName="Oven"
      />
    </>
  );
}
