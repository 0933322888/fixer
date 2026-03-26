import { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceHero from "@/components/ServiceHero";
import { FaWaveSquare } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import FAQSection from "@/components/FAQSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";

export const metadata: Metadata = {
  title: "Microwave Repair in Carleton Place – Fast, Trusted Help | Fixer",
  description:
    "Reliable microwave repair in Carleton Place, from Riverside Park to Mississippi Quays. We fix heating, power, and control issues — with upfront pricing and a 90-day warranty.",
  keywords:
    "microwave repair Carleton Place, microwave service Carleton Place, microwave not heating Carleton Place, Fixer Appliance Repair Carleton Place",
};

const commonIssues = [
  {
    title: "Microwave not powering on",
    description:
      "We check fuses, switches, and power supply issues common in Carleton Place homes.",
  },
  {
    title: "Heats food unevenly",
    description:
      "If one side stays cold, airflow or sensor issues may be to blame. We’ll restore even heating.",
  },
  {
    title: "Touch panel not responding",
    description:
      "A failed control pad or board often blocks input. We’ll replace what’s needed.",
  },
  {
    title: "Microwave smells burnt",
    description:
      "Spilled food or wiring faults cause odors. We’ll clean and repair it safely.",
  },
  {
    title: "Random codes flashing on screen",
    description:
      "LG, Whirlpool, and Panasonic models often display error codes. We’ll interpret and repair.",
  },
  {
    title: "Microwave won’t stop running",
    description:
      "A stuck relay or faulty control can keep the unit powered. We’ll fix it quickly.",
  },
];

const highlights = [
  {
    title: "Riverside Park",
    description: "Relaxing views along the Mississippi River.",
  },
  {
    title: "Downtown Carleton Place",
    description: "Browse unique shops and cafés while we work.",
  },
  {
    title: "Carleton Place and Beckwith Heritage Museum",
    description: "Step into local history and exhibits.",
  },
];

const whyChooseUs = [
  "Local Carleton Place microwave technicians with brand expertise",
  "Same-day and next-day appointments offered",
  "Transparent pricing — no hidden extras",
  "Every service covered by a 90-day guarantee",
];

const serviceAreas = [
  "Carleton Place West",
  "Carleton Place East",
  "Riverside Park",
  "Mississippi Quays",
  "Surrounding neighbourhoods",
];

const nearbyAreas = [
  { name: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { name: "Microwave Repair Orleans", href: "/microwave-repair/orleans" },
  { name: "Microwave Repair Vanier", href: "/microwave-repair/vanier" },
  { name: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { name: "Microwave Repair Mississippi Mills", href: "/microwave-repair/mississippi-mills" },
  { name: "Microwave Repair Arnprior", href: "/microwave-repair/arnprior" },
];

const faqs = [
  {
    question: "Do you offer same-day microwave service in Carleton Place?",
    answer: "When possible, yes.",
  },
  {
    question: "Why does my microwave run but not heat?",
    answer: "Likely a magnetron or high-voltage component issue.",
  },
  {
    question: "Do you install microwaves?",
    answer: "Yes — using current hookups.",
  },
  {
    question: "Do you cover nearby areas?",
    answer: "Yes — Beckwith, Franktown, and more.",
  },
  {
    question: "Do you offer warranty coverage?",
    answer: "Yes — 90-day labour warranty.",
  },
];

const services = [
  { label: "Washer Repair Carleton Place", href: "/washer-repair/carleton-place" },
  { label: "Dryer Repair Carleton Place", href: "/dryer-repair/carleton-place" },
  { label: "Fridge Repair Carleton Place", href: "/fridge-repair/carleton-place" },
  { label: "Freezer Repair Carleton Place", href: "/freezer-repair/carleton-place" },
  { label: "Oven Repair Carleton Place", href: "/oven-repair/carleton-place" },
  { label: "Cooktop Repair Carleton Place", href: "/cooktop-repair/carleton-place" },
  { label: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
  { label: "Appliance Installation", href: "/appliance-installation/dishwasher" },
];

export default function MicrowaveRepairCarletonPlacePage() {
  return (
    <Fragment>
      <ServiceHero
        title="Reliable Microwave Repair in Carleton Place"
        description={
          "Microwave won't heat, keeps running, or flashes codes? Our Carleton Place team provides expert repairs with honest pricing and fast response."
        }
        icon={<FaWaveSquare className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <div>
            <p className="text-lg text-gray-200 mb-6">
              We service LG, Samsung, Whirlpool, GE, and Maytag microwaves. Same-day bookings when available.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              Explore local insights on our{" "}
              <Link href="/carleton-place" className="font-semibold text-white underline hover:text-gray-200">
                Local Carleton Place page
              </Link>
              .
            </p>
          </div>
        }
        phoneNumber="613-413-6969"
        phoneText="Call us"
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Microwave Issues We Fix in Carleton Place" />

      <InstallationCTASection
        applianceName="Microwave"
        description="Got a new microwave? We also provide microwave installation in Carleton Place with same-day service available in most areas."
        href="/appliance-installation/microwave"
      />

      <BenefitsSection applianceName="Microwave" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="Microwaves often fail due to a single component like the magnetron or door switch. We'll help you decide when it's smarter to repair than replace — and give you an honest estimate either way." />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Carleton Place area, including:"
        neighborhoods={serviceAreas.filter(area => area !== "Surrounding neighbourhoods")}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name.replace("Microwave Repair ", ""),
          slug: area.href.replace("/microwave-repair/", "")
        }))}
        applianceType="microwave"
        nearbyAreasLabel="We also serve:"
        surroundingLabel={serviceAreas.includes("Surrounding neighbourhoods") ? "Surrounding neighbourhoods" : "and surrounding neighbourhoods"}
        footerText={
          <p className="text-lg text-gray-700">
            👉 For complete service info, visit our{" "}
            <Link href="/microwave-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Microwave Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Things to Do */}
      <ThingsToDoSection
        attractions={highlights}
        heading="Discover Carleton Place While We Work on Your Microwave"
        description="Here are a few nearby spots worth visiting:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Microwave" faqs={faqs} />

      <CTASection
        heading="Schedule Your Microwave Repair in Carleton Place"
        description="Don't wait with a broken microwave — text or call Fixer Appliance Repair to arrange service."
        buttonText="Book Online Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={services}
        heading="Also Need Help With…"
        description="Microwave issues aren't the only thing we fix — here are more services in Carleton Place:"
        applianceName="Microwave"
      />
    </Fragment>
  );
}
