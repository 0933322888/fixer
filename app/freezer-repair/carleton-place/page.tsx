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
  title: "Freezer Repair Carleton Place – Upright & Chest Freezer Service | Fixer",
  description: "Fixer Appliance Repair offers trusted freezer repair in Carleton Place. From frost buildup and clicking noises to power issues and leaks, we fix Whirlpool, Samsung, GE, LG & more. Same-day service available with a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Freezer not powering on",
    description: "In Carleton Place, power surges or bad control boards often cause a complete shutdown. We'll bring it back to life.",
  },
  {
    title: "Food thawing too quickly",
    description: "A faulty thermostat or low refrigerant often causes unstable temps. We'll restore proper freezing.",
  },
  {
    title: "Frost covering drawers",
    description: "Broken defrost sensors or air leaks create ice buildup. We'll repair seals and clear frost.",
  },
  {
    title: "Freezer door won't close tight",
    description: "Damaged hinges or gaskets keep cold air from staying in. We'll fix them quickly.",
  },
  {
    title: "Clicking noises",
    description: "Often a relay struggling to start the compressor. We'll diagnose and replace it.",
  },
  {
    title: "Plastic bins cracking",
    description: "We'll replace worn or broken drawers so your freezer looks and works like new.",
  },
];

const benefits = [
  "Local Carleton Place technicians experienced with all major freezer brands",
  "Transparent pricing and no upselling",
  "Same-day and next-day booking options",
  "Every repair or install covered by a 90-day guarantee",
];

const serviceAreas = [
  "Carleton Place West",
  "Carleton Place East",
  "Riverside Park",
  "Mississippi Quays",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/freezer-repair/kanata" },
  { name: "Stittsville", slug: "/freezer-repair/stittsville" },
  { name: "Nepean", slug: "/freezer-repair/nepean" },
  { name: "Orleans", slug: "/freezer-repair/orleans" },
  { name: "Vanier", slug: "/freezer-repair/vanier" },
  { name: "Barrhaven", slug: "/freezer-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/freezer-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/freezer-repair/arnprior" },
];

const faqs = [
  {
    question: "Do you offer same-day freezer service in Carleton Place?",
    answer: "When possible, yes.",
  },
  {
    question: "Why is my freezer making clicking noises?",
    answer: "Often a relay, compressor, or fan problem.",
  },
  {
    question: "Do you install new freezers?",
    answer: "Yes — with existing power supply.",
  },
  {
    question: "Do you service nearby areas?",
    answer: "Yes — Beckwith, Franktown, and more.",
  },
  {
    question: "Do you guarantee your work?",
    answer: "Yes — 90-day warranty included.",
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

export default function FreezerRepairCarletonPlacePage() {
  return (
    <>
      <ServiceHero
        title="Trusted Freezer Repair in Carleton Place"
        description="A broken freezer can mean spoiled food and frustration. Fixer Appliance Repair helps Carleton Place residents with fast diagnostics and dependable repairs, covering leaks, electrical faults, and cooling problems."
        icon={<FaSnowflake className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <p className="text-lg text-gray-200 mb-8">
            We work with brands like GE, Maytag, Samsung, Whirlpool, and LG.
          </p>
        }
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Freezer Issues We Fix in Carleton Place" />

      <BenefitsSection applianceName="Freezer" benefits={benefits} />

      <RepairOrReplaceSection description="A good freezer can last well over a decade. If yours isn't cooling right, read our article to find out if a repair makes more sense than a new unit." />

      <InstallationCTASection
        applianceName="Freezer"
        description="Upgrading to a new unit? We also offer freezer installation in Carleton Place — fast, safe, and fully insured."
        href="/appliance-installation/locations/ottawa"
      />

      <CTASection />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Carleton Place area, including:"
        neighborhoods={serviceAreas}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name,
          slug: area.slug.replace("/freezer-repair/", "")
        }))}
        applianceType="freezer"
        nearbyAreasLabel="We also provide freezer repair services in:"
        footerText={
          <p className="text-lg text-gray-700">
            For full coverage, see our{" "}
            <Link href="/freezer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Freezer Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Discover Carleton Place */}
      <ThingsToDoSection
        attractions={[
          { name: "Riverside Park", description: "Stroll along the Mississippi River" },
          { name: "Downtown Carleton Place", description: "Shops and dining in the heart of town" },
          { name: "Heritage Museum", description: "Local heritage on display" },
        ]}
        heading="Explore the Town While We Repair Your Freezer"
        description="Turn repair time into an outing:"
        
        linkText="See what's going on in Carleton Place"
      />

      {/* FAQ */}
      <FAQSection applianceName="Freezer" faqs={faqs} />

      {/* Schedule Service */}
      <CTASection 
        heading="Schedule Your Freezer Repair in Carleton Place"
        description="Don't let your food thaw — text or call Fixer Appliance Repair to arrange service:"
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
