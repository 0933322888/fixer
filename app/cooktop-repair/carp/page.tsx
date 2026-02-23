import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import CTASection from "@/components/CTASection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import FAQSection from "@/components/FAQSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import BenefitsSection from "@/components/BenefitsSection";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Cooktop Repair Carp - Reliable Cooktop Service | Fixer",
  description:
    "Fixer Appliance Repair provides expert cooktop repair in Carp. From cracked glass and faulty switches to wiring issues and error codes, we service Whirlpool, Samsung, LG, GE & more. Clear pricing, rural-friendly service, 90-day warranty.",
};

const commonIssues = [
  {
    title: "Burner works intermittently",
    description: "Loose wiring or failing connection — we secure and test.",
  },
  {
    title: "One burner is much hotter",
    description: "Miscalibrated or stuck infinite switch — we replace it.",
  },
  {
    title: "Scratches on cooktop surface",
    description: "We assess damage and recommend refinishing or replacement.",
  },
  {
    title: "Cooktop dead after power surge",
    description: "Control board or fuse likely damaged — we replace parts.",
  },
  {
    title: "Burner stays on high only",
    description: "Failed power switch — we install a new one.",
  },
  {
    title: "Touchpad flickers or fails",
    description: "Moisture or heat damage — we repair or replace.",
  },
  {
    title: "Cooktop overheating surrounding counter",
    description: "Ventilation or insulation issue — we correct installation.",
  },
  {
    title: "Electric shock from knob",
    description: "Loose ground or bad wiring — we fix for safety.",
  },
  {
    title: "Cooktop uneven or tilting",
    description: "Mounting hardware may need adjustment.",
  },
  {
    title: "Error code on digital panel",
    description: "We reset and fix any underlying faults.",
  },
];

const whyChooseUs = [
  "Skilled with both modern and classic cooktops",
  "Prompt arrival with everything needed to repair",
  "Honest recommendations without upselling",
  "Respectful of your home and time",
  "Clean service, even in tricky rural kitchens",
];

const serviceAreas = ["Village of Carp", "Huntley", "Corkery", "Upper Dwyer Hill"];

const nearbyAreas = [
  { name: "Cooktop Repair Kanata", href: "/cooktop-repair/kanata" },
  { name: "Cooktop Repair Stittsville", href: "/cooktop-repair/stittsville" },
  { name: "Cooktop Repair Nepean", href: "/cooktop-repair/nepean" },
  { name: "Cooktop Repair Orleans", href: "/cooktop-repair/orleans" },
  { name: "Cooktop Repair Vanier", href: "/cooktop-repair/vanier" },
  { name: "Cooktop Repair Barrhaven", href: "/cooktop-repair/barrhaven" },
  { name: "Cooktop Repair Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
  { name: "Cooktop Repair Carleton Place", href: "/cooktop-repair/carleton-place" },
];

const highlights = [
  { title: "Carp Farmers' Market", description: "One of the best in Ontario." },
  { title: "Diefenbunker Cold War Museum", description: "Unique and fascinating." },
  { title: "Rural Art Studios & seasonal markets", description: "Local art and crafts." },
  { title: "Carp Ridge EcoWellness Centre", description: "Nature walks, spa, and more." },
];

const faqs = [
  {
    question: "Can you fix cooktops in Carp Village and Kinburn?",
    answer: "Yes — we serve those areas and more.",
  },
  {
    question: "Do you repair ceramic and coil cooktops?",
    answer: "Yes — including dual element types.",
  },
  {
    question: "My cooktop works partially — can you fix one burner?",
    answer: "Yes — often it's a switch or element issue.",
  },
  {
    question: "Do you provide quotes before repair?",
    answer: "Always — we explain the cost before starting.",
  },
  {
    question: "Do you help install replacements?",
    answer: "Yes — full installation is available.",
  },
];

const otherServices = [
  { name: "Washer Repair Carp", href: "/washer-repair/carp" },
  { name: "Dryer Repair Carp", href: "/dryer-repair/carp" },
  { name: "Dishwasher Repair Carp", href: "/dishwasher-repair/carp" },
  { name: "Fridge Repair Carp", href: "/fridge-repair/carp" },
  { name: "Freezer Repair Carp", href: "/freezer-repair/carp" },
  { name: "Oven Repair Carp", href: "/oven-repair/carp" },
  { name: "Microwave Repair Carp", href: "/microwave-repair/carp" },
  { name: "Cooktop Installation Carp", href: "/appliance-installation/cooktop" },
];

export default function CooktopRepairCarpPage() {
  return (
    <>
      <ServiceHero
        title="Quick Cooktop Fixes for Carp Homes"
        description="Whether it's an older model or a newer glass top unit, Fixer Appliance Repair delivers expert electric cooktop repair to Carp homes — rural and residential alike. We service LG, Samsung, Whirlpool, GE, Maytag, and more."
        icon={<FaFire className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <p className="text-lg text-gray-100">
            👉 Discover more about the area on our{" "}
            <Link href="/carp" className="font-semibold text-white underline-offset-4 hover:underline">
              Local Carp page
            </Link>
            .
          </p>
        }
        useSectionPadding={true}
      />

      <CommonIssuesSection issues={commonIssues} />

      <BenefitsSection 
        heading="Why choose us"
        benefits={whyChooseUs}
        applianceName="Cooktop"
      />

      <RepairOrReplaceSection description="Replacing a cooktop can be costly. If it is still under 10 to 12 years old, our guide can help you decide if it is worth saving." />

      <InstallationCTASection
        applianceName="Cooktop"
        description="Upgrading to a new unit? We also offer cooktop installation in Carp — fast, safe, and fully insured."
        href="/appliance-installation/cooktop"
      />

      <ServiceAreaSection
        title="Service Area: Carp and Nearby"
        description="We provide appliance repair services across the entire Carp area, including:"
        neighborhoods={serviceAreas}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name.replace("Cooktop Repair ", ""),
          slug: area.href.replace("/cooktop-repair/", "")
        }))}
        applianceType="cooktop"
        nearbyAreasLabel="We also help nearby residents in:"
        surroundingLabel="and surrounding rural neighbourhoods"
        footerText={
          <p className="text-lg text-gray-700">
            👉 For full coverage of the Ottawa region, visit our{" "}
            <Link href="/cooktop-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Cooktop Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      <ThingsToDoSection
        attractions={highlights}
        heading="Take a Break in Carp While We Repair Your Cooktop"
        description="Instead of waiting around, explore some of Carp's best spots:"
        linkText="Events in Carp"
      />

      <FAQSection applianceName="Cooktop" faqs={faqs} />

      <CTASection 
        heading="Book Your Cooktop Repair in Carp"
        description="Rural repairs, fast results — schedule your visit today."
        />

      {/* Related Services */}
      <RelatedServicesSection
        services={otherServices}
        heading="Also Need Help With..."
        description="Cooktop repair is just one part of what we do — here are more services in Carp:"
        applianceName="Cooktop"
      />
    </>
  );
}

