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
  title: "Freezer Repair Stittsville – Fast, Reliable Upright & Chest Freezer Service | Fixer",
  description: "Fixer Appliance Repair provides expert freezer repair in Stittsville. From frost buildup to noisy compressors, we service Whirlpool, Samsung, LG & more — with same-day service, fair pricing, and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Freezer won't freeze food properly",
    description: "We test sensors, seal system, and fans.",
  },
  {
    title: "Loud vibration during use",
    description: "Mounts, fans, or base may be unbalanced.",
  },
  {
    title: "Condensation on walls",
    description: "May be from bad seals or poor airflow — we adjust or replace parts.",
  },
  {
    title: "Lights don't work",
    description: "Faulty switch or broken LED module.",
  },
  {
    title: "Food gets freezer burn",
    description: "Inconsistent temperature — we calibrate thermostat.",
  },
  {
    title: "Strange noises overnight",
    description: "Compressor or defrost heater might be engaging incorrectly.",
  },
  {
    title: "Plastic parts broken",
    description: "Bins, rails, and supports — we install replacements.",
  },
  {
    title: "Cycle never ends",
    description: "We inspect thermistors and defrost timer.",
  },
  {
    title: "Leaking when defrosting",
    description: "Drain tube may be clogged.",
  },
  {
    title: "Display not responding",
    description: "UI board or touchpad failure — we repair or replace.",
  },
];

const benefits = [
  "Fast repair solutions for your freezing problems",
  "Clear communication and no confusing jargon",
  "Skilled with both garage and kitchen freezer models",
  "Upfront quotes and fair rates",
  "Your satisfaction is our priority",
];

const serviceAreas = [
  "Crossing Bridge",
  "Jackson Trails",
  "Bryanston Gate",
  "West Ridge",
  "Timbermere",
  "Fairwinds",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/freezer-repair/kanata" },
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
    question: "Do you service Jackson Trails and Granite Ridge?",
    answer: "Absolutely — we work across all Stittsville neighborhoods.",
  },
  {
    question: "Do you fix frost buildup or temperature swings?",
    answer: "Yes — we'll diagnose the issue and offer reliable fixes.",
  },
  {
    question: "What's the typical repair time in Stittsville?",
    answer: "Usually 1–2 hours, depending on the fault.",
  },
  {
    question: "Do you offer weekend appointments?",
    answer: "Sometimes — reach out for availability.",
  },
  {
    question: "Do you recycle old units if replacement is needed?",
    answer: "We can assist in removal but don't offer direct recycling.",
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

export default function FreezerRepairStittsvillePage() {
  return (
    <>
      <ServiceHero
        title="Freezer Not Cooling? We're on It in Stittsville"
        description="From strange buzzing sounds to freezers that over-freeze, Fixer Appliance Repair keeps Stittsville homes and small businesses running smoothly. We service Maytag, Whirlpool, GE, Samsung, LG, and Frigidaire."
        icon={<FaSnowflake className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <p className="text-lg text-gray-200 mb-8">
            We service all major freezer brands with honest, reliable repairs.
          </p>
        }
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} />

      <BenefitsSection applianceName="Freezer" benefits={benefits} />

      <RepairOrReplaceSection description="A good freezer can last well over a decade. If yours isn't cooling right, read our article to find out if a repair makes more sense than a new unit." />

      <InstallationCTASection
        applianceName="Freezer"
        description="Upgrading to a new unit? We also offer freezer installation in Stittsville — fast, safe, and fully insured."
        href="/appliance-installation/locations/ottawa"
      />

      <CTASection />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area: Stittsville and Nearby"
        description="We provide appliance repair services across the entire Stittsville area, including:"
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

      {/* Discover Stittsville */}
      <ThingsToDoSection
        attractions={[
          { name: "Amberwood Village Trails", description: "Refreshing and scenic" },
          { name: "Quitters Coffee", description: "Cozy café loved by residents" },
          { name: "Village Square Park", description: "A simple place to recharge" },
        ]}
        heading="Discover Stittsville While We Work on Your Freezer"
        description="Waiting doesn't have to be boring — try these spots:"
        
        linkText="See what events are on: Events in Stittsville"
      />

      {/* FAQ */}
      <FAQSection applianceName="Freezer" faqs={faqs} />

      {/* Schedule Service */}
      <CTASection 
        heading="Book Your Freezer Repair in Stittsville"
        description="Local and fast — we'll get your freezer working again in no time."
        
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
