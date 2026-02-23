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
  title: "Freezer Repair Nepean – Fast, Reliable Upright & Chest Freezer Service | Fixer",
  description: "Fixer Appliance Repair provides expert freezer repair in Nepean. From leaks to noisy compressors and temperature issues, we service Whirlpool, Samsung, LG & more — with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Freezer warm but light works",
    description: "May be a sensor, defrost system, or refrigerant leak.",
  },
  {
    title: "Interior frozen solid",
    description: "Failed defrost system — we restore cycle timing.",
  },
  {
    title: "Constant beeping or alerts",
    description: "We fix stuck alarms or reset sensors.",
  },
  {
    title: "Compressor noisy or hot",
    description: "We check overload protection and replace faulty relays.",
  },
  {
    title: "Door won't stay shut",
    description: "We realign hinges and replace gaskets.",
  },
  {
    title: "Ice building on shelves",
    description: "Usually poor sealing or blocked air vents.",
  },
  {
    title: "Display flickers",
    description: "Control board or wiring issue.",
  },
  {
    title: "Frozen water under bins",
    description: "Clogged drains or evaporator coil icing.",
  },
  {
    title: "Strange chemical smell",
    description: "Potential refrigerant leak — we act fast and safe.",
  },
  {
    title: "Runs constantly, never shuts off",
    description: "Sensor, fan, or board may be misreading temps.",
  },
];

const benefits = [
  "We respect your time and your kitchen",
  "Affordable repairs that last",
  "We take the time to explain what's wrong and how we'll fix it",
  "Appointments available at convenient times",
  "We value long-term trust over quick sales",
];

const serviceAreas = [
  "Barrhaven East",
  "Centrepointe",
  "Merivale Gardens",
  "Manordale",
  "Tanglewood",
  "Fallowfield",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/freezer-repair/kanata" },
  { name: "Stittsville", slug: "/freezer-repair/stittsville" },
  { name: "Orleans", slug: "/freezer-repair/orleans" },
  { name: "Vanier", slug: "/freezer-repair/vanier" },
  { name: "Barrhaven", slug: "/freezer-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/freezer-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/freezer-repair/arnprior" },
  { name: "Carleton Place", slug: "/freezer-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you repair freezers in Tanglewood and Arlington Woods?",
    answer: "Yes — we serve homes throughout Nepean.",
  },
  {
    question: "Is it worth repairing an older upright freezer?",
    answer: "Often yes — we'll help you decide based on age and cost.",
    link: "/blog/repair-vs-replace-appliance",
  },
  {
    question: "Do you offer quick freezer repairs in Nepean?",
    answer: "We aim for service within 48 hours, often sooner.",
  },
  {
    question: "Do you carry parts for Danby and GE?",
    answer: "Yes — we stock for common models.",
  },
  {
    question: "Do you repair commercial freezers too?",
    answer: "No — we focus on residential appliances only.",
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

export default function FreezerRepairNepeanPage() {
  return (
    <>
      <ServiceHero
        title="Fast Freezer Repair for Nepean Families"
        description="If your freezer can't hold steady temperatures, makes loud noises, or leaks water, Fixer Appliance Repair is ready to help in Nepean. Many repairs can be handled in a single visit."
        icon={<FaSnowflake className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <p className="text-lg text-gray-200 mb-8">
            We work with Whirlpool, GE, Samsung, LG, Maytag, and more.
          </p>
        }
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} />

      {/* Freezer Installation CTA */}
      <InstallationCTASection
        applianceName="Freezer"
        description="Got a new freezer? We also provide freezer installation in Nepean with same-day service available in most areas."
        href="/appliance-installation"
      />

      <BenefitsSection applianceName="Freezer" benefits={benefits} />

      <RepairOrReplaceSection description="A good freezer can last well over a decade. If yours isn't cooling right, read our article to find out if a repair makes more sense than a new unit." />

      <CTASection />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area: Nepean and Nearby"
        description="We provide appliance repair services across the entire Nepean area, including:"
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

      {/* Discover Nepean */}
      <ThingsToDoSection
        attractions={[
          { name: "Andrew Haydon Park", description: "Fresh air by the waterfront" },
          { name: "Bruce Pit", description: "A popular family and dog-friendly area" },
          { name: "Merivale Mall", description: "All-in-one shopping stop" },
          { name: "Art Is In Bakery", description: "Sandwiches and breads with style" },
        ]}
        heading="Things to Do in Nepean While We Fix Your Freezer"
        description="Here are a few ideas to make the wait more enjoyable:"
        
        linkText="See what's happening in the community this week: Events in Nepean"
      />

      {/* FAQ */}
      <FAQSection applianceName="Freezer" faqs={faqs} />

      {/* Schedule Service */}
      <CTASection 
        heading="Book Your Freezer Repair in Nepean"
        description="Freezer on the fritz? Let us handle it."
        
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
