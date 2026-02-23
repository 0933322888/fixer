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
  title: "Freezer Repair Vanier – Upright & Chest Freezers Fixed Fast | Fixer",
  description: "Fixer Appliance Repair provides expert freezer repair in Vanier. From leaks and frost buildup to noisy compressors and power failures, we service Whirlpool, GE, Samsung, LG & more. Same-day local service with a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Freezer won't turn on",
    description: "In older Vanier homes, worn wiring or tripped breakers often cause power loss. We'll test and repair quickly.",
  },
  {
    title: "Freezer over-freezing",
    description: "If food turns rock solid and frost covers everything, the thermostat may be stuck. We'll replace it.",
  },
  {
    title: "Water pooling at the bottom",
    description: "Clogged drains often cause puddles. We'll clear them and stop leaks.",
  },
  {
    title: "Freezer making knocking sounds",
    description: "A failing compressor or loose fan blade can knock loudly. We'll locate and repair the issue.",
  },
  {
    title: "Interior light not working",
    description: "Sometimes it's just a bulb, sometimes a bad door switch. We'll handle both.",
  },
  {
    title: "Plastic drawers cracked",
    description: "We'll replace damaged drawers so the freezer works and looks better.",
  },
];

const benefits = [
  "Skilled Vanier freezer repair and installation technicians",
  "Straightforward, upfront pricing",
  "90-day labour warranty for peace of mind",
  "Same-day and next-day availability",
];

const serviceAreas = [
  "Overbrook",
  "Beechwood Village",
  "Cardinal Glen",
  "Notre Dame des Champs",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/freezer-repair/kanata" },
  { name: "Stittsville", slug: "/freezer-repair/stittsville" },
  { name: "Nepean", slug: "/freezer-repair/nepean" },
  { name: "Orleans", slug: "/freezer-repair/orleans" },
  { name: "Barrhaven", slug: "/freezer-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/freezer-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/freezer-repair/arnprior" },
  { name: "Carleton Place", slug: "/freezer-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you repair freezers in Vanier apartments and homes?",
    answer: "Yes — both houses and multi-unit buildings.",
  },
  {
    question: "Why is my freezer too noisy?",
    answer: "Fan motor or compressor issues.",
  },
  {
    question: "Do you install freezers?",
    answer: "Yes — with current power supply.",
  },
  {
    question: "Do you repair all brands?",
    answer: "Yes — Whirlpool, GE, Samsung, LG, and more.",
  },
  {
    question: "Do you provide a warranty?",
    answer: "Yes — every job backed by a 90-day warranty.",
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

export default function FreezerRepairVanierPage() {
  return (
    <>
      <ServiceHero
        title="Dependable Freezer Repair in Vanier"
        description="A freezer that won't cool properly or drips water onto the floor needs attention fast. Fixer Appliance Repair serves Vanier with skilled, trustworthy service and transparent quotes every time."
        icon={<FaSnowflake className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <p className="text-lg text-gray-200 mb-8">
            We fix all major makes, including Frigidaire, Whirlpool, GE, Samsung, and LG.
          </p>
        }
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Freezer Issues We Fix in Vanier" />

      <BenefitsSection applianceName="Freezer" benefits={benefits} />

      <RepairOrReplaceSection description="A good freezer can last well over a decade. If yours isn't cooling right, read our article to find out if a repair makes more sense than a new unit." />

      <InstallationCTASection
        applianceName="Freezer"
        description="Upgrading to a new unit? We also offer freezer installation in Vanier — fast, safe, and fully insured."
        href="/appliance-installation/locations/ottawa"
      />

      <CTASection />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Vanier area, including:"
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

      {/* Discover Vanier */}
      <ThingsToDoSection
        attractions={[
          { name: "Richelieu Park", description: "Trails and fresh air" },
          { name: "Vanier Museopark", description: "Cultural stop worth a visit" },
          { name: "Beechwood Avenue", description: "Shops and dining" },
        ]}
        heading="Explore Vanier While We Fix Your Freezer"
        description="Here's how you could spend the time:"
        
        linkText="See local Vanier events"
      />

      {/* FAQ */}
      <FAQSection applianceName="Freezer" faqs={faqs} />

      {/* Schedule Service */}
      <CTASection 
        heading="Schedule Your Freezer Repair in Vanier"
        description="Ready to get your freezer fixed? Reach out now to Fixer Appliance Repair:"
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
