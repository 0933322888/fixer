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
  title: "Freezer Repair Orleans – Fast, Reliable Upright & Chest Freezer Service | Fixer",
  description: "Fixer Appliance Repair provides expert freezer repair in Orleans. From frost buildup to leaks and noisy compressors, we service Samsung, Whirlpool, LG & more — with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Freezer not freezing properly",
    description: "In Orleans homes, this is often due to weak compressors, thermostat faults, or low refrigerant. We'll restore safe freezing temperatures.",
  },
  {
    title: "Frost building up on walls",
    description: "When defrost heaters or door gaskets fail, frost takes over. We'll repair the system and prevent ice overload.",
  },
  {
    title: "Water leaking inside drawers",
    description: "Blocked drains or defrost overflow are common. We'll clear the drain and stop leaks.",
  },
  {
    title: "Freezer running all the time",
    description: "Dirty coils or broken sensors force the unit to run non-stop. We'll fix it and cut your hydro bills.",
  },
  {
    title: "Unusual buzzing noises",
    description: "Relays and compressors often buzz before failing. We'll replace them before a total breakdown.",
  },
  {
    title: "Control panel flashing codes",
    description: "Samsung, LG, and Whirlpool freezers show error codes when parts fail. We'll decode and repair the problem.",
  },
];

const benefits = [
  "Local Orleans freezer repair and installation pros",
  "Same-day and next-day availability",
  "90-day labour warranty on all work",
  "Clear, upfront pricing with no surprises",
];

const serviceAreas = [
  "Fallingbrook",
  "Avalon",
  "Queenswood Heights",
  "Chapel Hill",
  "Convent Glen",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/freezer-repair/kanata" },
  { name: "Stittsville", slug: "/freezer-repair/stittsville" },
  { name: "Nepean", slug: "/freezer-repair/nepean" },
  { name: "Vanier", slug: "/freezer-repair/vanier" },
  { name: "Barrhaven", slug: "/freezer-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/freezer-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/freezer-repair/arnprior" },
  { name: "Carleton Place", slug: "/freezer-repair/carleton-place" },
];

const faqs = [
  {
    question: "Can I get same-day freezer repair in Orleans?",
    answer: "Often yes — call early.",
  },
  {
    question: "Why is my freezer not cold enough?",
    answer: "It may be refrigerant flow, thermostat, or a sealed system issue.",
  },
  {
    question: "Do you install freezers?",
    answer: "Yes — with existing hookups.",
  },
  {
    question: "Do you service nearby areas?",
    answer: "Yes — including Chapel Hill, Avalon, and Fallingbrook.",
  },
  {
    question: "Do you offer a warranty?",
    answer: "Yes — 90 days on all labour.",
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

export default function FreezerRepairOrleansPage() {
  return (
    <>
      <ServiceHero
        title="Reliable Freezer Repair in Orleans"
        description="Freezer frosting up, leaking water, or not keeping food cold? Fixer Appliance Repair provides fast, local service in Orleans with clear pricing and a 90-day guarantee. We repair all major freezer brands, including Samsung, Whirlpool, LG, GE, and Maytag."
        icon={<FaSnowflake className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Freezer Issues We Fix in Orleans" />

      <BenefitsSection applianceName="Freezer" benefits={benefits} />

      <RepairOrReplaceSection description="A good freezer can last well over a decade. If yours isn't cooling right, read our article to find out if a repair makes more sense than a new unit." />

      <InstallationCTASection
        applianceName="Freezer"
        description="Upgrading to a new unit? We also offer freezer installation in Orleans — fast, safe, and fully insured."
        href="/appliance-installation/locations/ottawa"
      />

      <CTASection />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Orleans area, including:"
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

      {/* Discover Orleans */}
      <ThingsToDoSection
        attractions={[
          { name: "Petrie Island", description: "Unwind at scenic trails and beaches" },
          { name: "Shenkman Arts Centre", description: "Catch a show" },
          { name: "Place d'Orleans", description: "Shop and eat" },
        ]}
        heading="Explore Orleans While We Fix Your Freezer"
        description="Here are a few things you can do nearby:"
        
        linkText="See the latest happenings in Orleans this month"
      />

      {/* FAQ */}
      <FAQSection applianceName="Freezer" faqs={faqs} />

      {/* Schedule Service */}
      <CTASection 
        heading="Schedule Your Freezer Repair in Orleans"
        description="Freezer not keeping food cold? Call Fixer Appliance Repair today to book service:"
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
