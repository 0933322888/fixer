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
  title: "Freezer Repair Mississippi Mills – Fast Upright & Chest Freezer Service | Fixer",
  description: "Fixer Appliance Repair provides trusted freezer repair in Mississippi Mills. From frost buildup to noisy compressors and leaks, we service Whirlpool, GE, Samsung, LG & more — with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Freezer won't stay cold",
    description: "Rural Mississippi Mills homes often have voltage drops that stress compressors. We'll test the sealed system and restore cooling.",
  },
  {
    title: "Excessive frost or ice sheets",
    description: "Defrost system failures or worn gaskets often cause heavy buildup. We'll repair heaters and seals.",
  },
  {
    title: "Uneven freezing",
    description: "When some food freezes solid while others stay soft, airflow fans or sensors are usually to blame. We'll balance the cooling.",
  },
  {
    title: "Freezer too noisy",
    description: "Rattling or grinding often comes from fans or bearings. We'll quiet it down.",
  },
  {
    title: "Leaks onto the floor",
    description: "Clogged drains can push water out of the unit. We'll clear them and stop the mess.",
  },
  {
    title: "Interior light won't switch on",
    description: "Sometimes it's a simple bulb, other times a bad door switch. We'll replace whichever is faulty.",
  },
];

const benefits = [
  "Trusted freezer service specialists in Mississippi Mills",
  "Honest estimates before we start",
  "Fast response — often same or next day",
  "Backed by a 90-day service warranty",
];

const serviceAreas = [
  "Almonte",
  "Appleton",
  "Blakeney",
  "Pakenham",
  "Ramsay",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/freezer-repair/kanata" },
  { name: "Stittsville", slug: "/freezer-repair/stittsville" },
  { name: "Nepean", slug: "/freezer-repair/nepean" },
  { name: "Orleans", slug: "/freezer-repair/orleans" },
  { name: "Vanier", slug: "/freezer-repair/vanier" },
  { name: "Barrhaven", slug: "/freezer-repair/barrhaven" },
  { name: "Arnprior", slug: "/freezer-repair/arnprior" },
  { name: "Carleton Place", slug: "/freezer-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you repair freezers in Mississippi Mills?",
    answer: "Yes — Almonte, Appleton, and surrounding areas.",
  },
  {
    question: "Why is frost building up inside?",
    answer: "Defrost system failure or gasket leaks.",
  },
  {
    question: "Do you handle freezer installation?",
    answer: "Yes — using current hookups.",
  },
  {
    question: "Do you repair upright and chest freezers?",
    answer: "Yes — all types and brands.",
  },
  {
    question: "Do you provide upfront estimates?",
    answer: "Yes — before starting work.",
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

export default function FreezerRepairMississippiMillsPage() {
  return (
    <>
      <ServiceHero
        title="Expert Freezer Service in Mississippi Mills"
        description="From chest freezers on rural properties to uprights in Almonte kitchens, Fixer Appliance Repair keeps your food safe and frozen. We fix thermostat issues, noisy compressors, and frost build-up — often with same-day availability."
        icon={<FaSnowflake className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <p className="text-lg text-gray-200 mb-8">
            Brands we handle include Frigidaire, Whirlpool, GE, LG, and Samsung.
          </p>
        }
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Freezer Issues We Fix in Mississippi Mills" />

      <BenefitsSection applianceName="Freezer" benefits={benefits} />

      <RepairOrReplaceSection description="A good freezer can last well over a decade. If yours isn't cooling right, read our article to find out if a repair makes more sense than a new unit." />

      <InstallationCTASection
        applianceName="Freezer"
        description="Upgrading to a new unit? We also offer freezer installation in Mississippi Mills — fast, safe, and fully insured."
        href="/appliance-installation/locations/ottawa"
      />

      <CTASection />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Mississippi Mills area, including:"
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

      {/* Discover Mississippi Mills */}
      <ThingsToDoSection
        attractions={[
          { name: "Almonte Riverwalk", description: "Stroll by the river" },
          { name: "Mill of Kintail", description: "Learn and hike" },
          { name: "Downtown Almonte", description: "Shops and cafés" },
        ]}
        heading="Explore the Area While We Fix Your Freezer"
        description="Turn repair time into discovery time:"
        
        linkText="See what's happening in Mississippi Mills"
      />

      {/* FAQ */}
      <FAQSection applianceName="Freezer" faqs={faqs} />

      {/* Schedule Service */}
      <CTASection 
        heading="Schedule Your Freezer Repair in Mississippi Mills"
        description="Serving Almonte, Appleton, and surrounding areas — schedule your freezer repair now:"
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
