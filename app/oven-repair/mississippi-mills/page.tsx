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
  title: "Oven Repair Mississippi Mills – Reliable Appliance Service | Fixer",
  description: "Fixer Appliance Repair provides expert oven repair in Mississippi Mills, including Almonte, Appleton & Pakenham. We fix heating issues, error codes, faulty fans & more. Same-day service, clear pricing, 90-day warranty.",
  keywords: "oven repair Mississippi Mills, oven repair Almonte, electric oven repair, oven not heating",
};

const benefits = [
  "Trusted oven service pros serving Mississippi Mills homes",
  "Clear estimates given upfront",
  "Fast response time — often same or next day",
  "Backed by a 90-day warranty",
];

const commonIssues = [
  {
    title: "Oven not heating enough",
    description: "In rural homes, worn elements or miscalibrated thermostats often leave food undercooked. We'll restore the right temperature.",
  },
  {
    title: "Self-clean cycle stuck",
    description: "When the door won't unlock, the latch or control board is usually to blame. We'll release it safely.",
  },
  {
    title: "Oven bakes unevenly",
    description: "A weak convection fan often causes hot and cold spots. We'll replace it.",
  },
  {
    title: "Strange burning smell",
    description: "Wiring issues or food spills can cause odors. We'll check and clean it.",
  },
  {
    title: "Oven light won't turn off",
    description: "This usually means a jammed or faulty door switch. We'll repair it.",
  },
  {
    title: "Random beeping or error codes",
    description: "We'll reset sensors, interpret codes, and repair the source.",
  },
];

const serviceAreas = [
  "Almonte",
  "Appleton",
  "Blakeney",
  "Pakenham",
  "Ramsay",
];

const faqs = [
  {
    question: "Do you repair ovens in Mississippi Mills homes?",
    answer: "Yes — Almonte, Appleton, and surrounding areas.",
  },
  {
    question: "Why does my oven take too long to preheat?",
    answer: "Often a weak element or faulty thermostat.",
  },
  {
    question: "Do you install new ovens?",
    answer: "Yes — using existing electrical supply.",
  },
  {
    question: "Do you repair all oven brands?",
    answer: "Yes — Whirlpool, Samsung, LG, GE, Maytag.",
  },
  {
    question: "Do you provide upfront estimates?",
    answer: "Yes — always before work starts.",
  },
];

export default function OvenRepairMississippiMillsPage() {
  return (
    <>
      <ServiceHero
        title="Trusted Oven Repair in Mississippi Mills"
        description="From Almonte to Pakenham, our oven repair experts are ready to help when your oven stops baking evenly or won't start at all. Fixer offers reliable repairs tailored for rural homes. We service all major electric oven brands, including LG, Samsung, Whirlpool, GE, and Maytag."
        icon={<FaFire className="inline-block mr-2 text-[30px]" />}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Oven Issues We Fix in Mississippi Mills" />

      <BenefitsSection applianceName="Oven" benefits={benefits} />

      <RepairOrReplaceSection description="Faulty heating elements, unresponsive controls — most oven problems are repairable. Before you invest in a new one, explore whether a fix is the better option. Our expert technicians will provide honest advice on the most cost-effective solution for your situation." />

      <InstallationCTASection
        applianceName="Oven"
        description="Upgrading to a new unit? We also offer oven installation in Mississippi Mills — fast, safe, and fully insured."
        href="/appliance-installation/oven"
      />

      <OvenRepairServiceAreaSection
        serviceAreas={serviceAreas}
        locationName="Mississippi Mills"
        surroundingLabel="and surrounding rural neighbourhoods"
      />

      <CTASection />

      {/* Things to Do in Mississippi Mills */}
      <ThingsToDoSection
        attractions={[
          { name: "The Almonte Riverwalk", description: "a peaceful riverside trail" },
          { name: "Mill of Kintail", description: "history and outdoor fun in one place" },
          { name: "Downtown Almonte", description: "cozy cafés and unique shops" },
        ]}
        heading="Enjoy Your Time in Mississippi Mills While We Repair the Oven"
        description="Take advantage of the break with some local highlights:"
        linkText="Explore upcoming events in Mississippi Mills"
      />

      <FAQSection applianceName="Oven" faqs={faqs} />

      {/* Booking CTA */}
      <CTASection 
        heading="Schedule Your Oven Repair in Mississippi Mills"
        description="Serving Almonte, Appleton, and nearby areas — schedule your oven repair now:"
        buttonText="Book Service Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Mississippi Mills", href: "/washer-repair/mississippi-mills" },
          { name: "Dryer Repair Mississippi Mills", href: "/dryer-repair/mississippi-mills" },
          { name: "Fridge Repair Mississippi Mills", href: "/fridge-repair/mississippi-mills" },
          { name: "Freezer Repair Mississippi Mills", href: "/freezer-repair/mississippi-mills" },
          { name: "Oven Repair Mississippi Mills", href: "/oven-repair/mississippi-mills" },
          { name: "Cooktop Repair Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
          { name: "Microwave Repair Mississippi Mills", href: "/microwave-repair/mississippi-mills" },
          { name: "Appliance Installation", href: "/appliance-installation/dishwasher" },
        ]}
        heading="Also Need Help With…"
        description="Ovens are just the beginning — here are our other services in Mississippi Mills:"
        applianceName="Oven"
      />
    </>
  );
}
