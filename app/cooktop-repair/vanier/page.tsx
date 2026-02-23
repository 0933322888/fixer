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
import ServiceAreaSection from "@/components/ServiceAreaSection";

export const metadata: Metadata = {
  title: "Cooktop Repair in Vanier – Local, Reliable Service | Fixer",
  description: "Professional cooktop repair in Vanier, including Overbrook and Beechwood Village. Same or next-day service, upfront pricing, and a 90-day warranty on all repairs.",
  keywords: "cooktop repair Vanier, cooktop not heating Vanier, cooktop repair service",
};

const benefits = [
  "Experienced Vanier cooktop technicians who know the local needs",
  "Straightforward pricing before we begin",
  "Same-day and next-day availability",
  "90-day warranty backing every repair and install",
];

const commonIssues = [
  {
    title: "Cooktop not starting",
    description: "In older Vanier homes, worn wiring or tripped breakers often cut power. We’ll restore connection.",
  },
  {
    title: "Burner shuts off mid-cook",
    description: "Infinite switches or sensors may fail, cycling the burner too soon. We’ll replace the faulty part.",
  },
  {
    title: "Cooktop won’t shut down",
    description: "A stuck relay or switch can leave burners hot. We’ll fix it quickly for safety.",
  },
  {
    title: "Touchpad not working",
    description: "Control boards wear out over time. We’ll repair or swap the board.",
  },
  {
    title: "Glass top cracked",
    description: "We’ll install a replacement surface to restore both safety and appearance.",
  },
  {
    title: "Unusual buzzing or humming",
    description: "Often caused by faulty relays or worn components. We’ll quiet it down.",
  },
];

const serviceAreas = [
  "Overbrook",
  "Beechwood Village",
  "Cardinal Glen",
  "Notre Dame des Champs",
];

const faqs = [
  {
    question: "Do you repair cooktops in Vanier homes and apartments?",
    answer: "Yes. All types of housing.",
  },
  {
    question: "Why is my cooktop not turning on at all?",
    answer: "It could be a fuse, wiring, or control issue.",
  },
  {
    question: "Do you install cooktops?",
    answer: "Yes. We can install units that have an existing power supply.",
  },
  {
    question: "Do you repair all brands?",
    answer: "Yes. Whirlpool, LG, Samsung, GE, and Bosch are all covered.",
  },
  {
    question: "Do you offer warranty?",
    answer: "Yes. We provide a 90-day labor warranty.",
  },
];

export default function OvenRepairVanierPage() {
  return (
    <>
      <ServiceHero
        title="Vanier Cooktop Repair Experts"
        description="In older and newer Vanier homes, cooktops face wiring, heating, and surface issues. Our team delivers safe, affordable repairs to keep your kitchen running.We service LG, Samsung, Whirlpool, GE, Maytag, and more."
        icon={<FaFire className="inline-block mr-2 text-[30px]" />}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Cooktop Issues We Fix in Vanier" />

      <BenefitsSection applianceName="Cooktop" benefits={benefits} />

      <RepairOrReplaceSection description="Replacing a cooktop can be costly. If it is still under 10 to 12 years old, our guide can help you decide if it is worth saving." />

      <InstallationCTASection
        applianceName="Cooktop"
        description="Upgrading to a new unit? We also offer cooktop installation in Vanier — fast, safe, and fully insured."
        href="/appliance-installation/cooktop"
      />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Vanier area, including:"
        neighborhoods={serviceAreas}
        nearbyAreas={[
          { name: "Kanata", slug: "kanata" },
          { name: "Stittsville", slug: "stittsville" },
          { name: "Nepean", slug: "nepean" },
          { name: "Orleans", slug: "orleans" },
          { name: "Barrhaven", slug: "barrhaven" },
          { name: "Mississippi Mills", slug: "mississippi-mills" },
          { name: "Arnprior", slug: "arnprior" },
          { name: "Carleton Place", slug: "carleton-place" },
        ]}
        applianceType="cooktop"
        nearbyAreasLabel="We also cover:"
        footerText={
          <p className="text-lg text-gray-700">
            For broader coverage, see our{" "}
            <Link href="/cooktop-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Cooktop Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      <CTASection />

      {/* Things To Do */}
      <ThingsToDoSection
        attractions={[
          "Richelieu Park – nature trails in the city",
          "Vanier Museopark – culture and history",
          "Beechwood Avenue – dining and local stores",
        ]}
        heading="Take a Break in Vanier While We Repair Your Cooktop"
        description="Make the wait pleasant with a little exploring:"
        linkText="See Vanier happenings this week"
      />

      <FAQSection applianceName="Oven" faqs={faqs} />

      {/* Booking CTA */}
      <CTASection 
        heading="Schedule Your Cooktop Repair in Vanier"
        description="Need professional cooktop service? Reach out now and get your repair scheduled:"
        buttonText="Book Service Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Vanier", href: "/washer-repair/vanier" },
          { name: "Dryer Repair Vanier", href: "/dryer-repair/vanier" },
          { name: "Dishwasher Repair Vanier", href: "/dishwasher-repair/vanier" },
          { name: "Fridge Repair Vanier", href: "/fridge-repair/vanier" },
          { name: "Freezer Repair Vanier", href: "/freezer-repair/vanier" },
          { name: "Oven Repair Vanier", href: "/oven-repair/vanier" },
          { name: "Microwave Repair Vanier", href: "/microwave-repair/vanier" },
          { name: "Cooktop Installation Vanier", href: "/appliance-installation/cooktop/vanier" },
        ]}
        heading="Also Need Help With…"
        description="Cooktops aren't all we repair — here are our other services in Vanier:"
        applianceName="Cooktop"
      />
    </>
  );
}
