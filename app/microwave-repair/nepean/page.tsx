import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceHero from "@/components/ServiceHero";
import {
  FaBolt,
  FaMapMarkerAlt,
  FaTools,
  FaUtensils,
  FaTree,
  FaBook,
  FaWaveSquare,
} from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import FAQSection from "@/components/FAQSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";

export const metadata: Metadata = {
  title: "Microwave Repair in Nepean – Quick, Reliable Service | Fixer",
  description:
    "Trusted microwave repair in Nepean, from Barrhaven East to Centrepointe. We fix heating, sparking, and control issues on all brands — with clear pricing and a 90-day warranty.",
  keywords:
    "microwave repair Nepean, microwave service Nepean, microwave not heating Nepean, Fixer Appliance Repair Nepean",
};

const commonIssues = [
  {
    title: "Microwave beeps but won’t start",
    description: "We inspect door switches and fuses.",
  },
  {
    title: "Microwave turns off instantly",
    description: "Likely capacitor or thermal cut-out failure.",
  },
  {
    title: "Microwave heats slowly",
    description: "Weak magnetron or sensor error — we test both.",
  },
  {
    title: "Door opens mid-cycle",
    description: "Latch issues or loose fit — we realign and secure.",
  },
  {
    title: "Microwave fan not working",
    description: "Fan motor or control relay could be broken.",
  },
  {
    title: "Turns on by itself",
    description: "Serious board malfunction — we repair or replace.",
  },
  {
    title: "Cracks in turntable ring",
    description: "We replace with compatible parts.",
  },
  {
    title: "Clock keeps resetting",
    description: "Control panel or power supply issue.",
  },
  {
    title: "Unusual vibration during use",
    description: "Misaligned motor or unbalanced fan — we adjust and fix.",
  },
  {
    title: "Unit shuts down during reheating",
    description: "Overheating protection or control failure.",
  },
];

const highlights = [
  {
    title: "Andrew Haydon Park",
    description: "Enjoy nature and water views while we handle the repair.",
  },
  {
    title: "Bruce Pit",
    description: "Stretch your legs or walk the dog on nearby trails.",
  },
  {
    title: "Merivale Mall",
    description: "Pick up essentials or grab a bite just minutes away.",
  },
  {
    title: "Art Is In Bakery",
    description: "Treat yourself to creative pastries and coffee.",
  },
];

const whyChooseUs = [
  "Fast service that fits your schedule",
  "Reliable help from experienced technicians",
  "Clear rates and helpful guidance",
  "We solve common and uncommon microwave problems",
  "Trusted by families across Nepean",
];

const serviceAreas = [
  "Barrhaven East",
  "Centrepointe",
  "Merivale Gardens",
  "Manordale",
  "Tanglewood",
  "Fallowfield",
  "Surrounding neighbourhoods",
];

const nearbyAreas = [
  { name: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Microwave Repair Orleans", href: "/microwave-repair/orleans" },
  { name: "Microwave Repair Vanier", href: "/microwave-repair/vanier" },
  { name: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { name: "Microwave Repair Mississippi Mills", href: "/microwave-repair/mississippi-mills" },
  { name: "Microwave Repair Arnprior", href: "/microwave-repair/arnprior" },
  { name: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you fix microwaves in Bells Corners and Centrepointe?",
    answer: "Yes — we work across Nepean.",
  },
  {
    question: "Do you repair models over stoves?",
    answer: "Yes — over-the-range models are common.",
  },
  {
    question: "Can you help with display or keypad issues?",
    answer: "Absolutely — we repair non-responsive controls.",
  },
  {
    question: "What if the microwave doesn’t turn on at all?",
    answer: "We’ll check the fuse, door switch, and wiring.",
  },
  {
    question: "Do you install new microwaves?",
    answer: "Yes — we handle full installation and removal.",
  },
];

const services = [
  { label: "Washer Repair Nepean", href: "/washer-repair/nepean" },
  { label: "Dryer Repair Nepean", href: "/dryer-repair/nepean" },
  { label: "Fridge Repair Nepean", href: "/fridge-repair/nepean" },
  { label: "Freezer Repair Nepean", href: "/freezer-repair/nepean" },
  { label: "Oven Repair Nepean", href: "/oven-repair/nepean" },
  { label: "Cooktop Repair Nepean", href: "/cooktop-repair/nepean" },
  { label: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { label: "Appliance Installation", href: "/appliance-installation/dishwasher" },
];

export default function MicrowaveRepairNepeanPage() {
  return (
    <>
      <ServiceHero
        title="Nepean's Trusted Microwave Repair Technicians"
        description="Nepean residents, don't let a broken microwave ruin your routine. Whether it's not heating or sparking inside, Fixer is just a call away with quick, professional service."
        icon={<FaWaveSquare className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <>
            <p className="text-lg text-gray-200 mb-6">
              We work on LG, Samsung, Whirlpool, GE, Maytag, and more — same-day or next-day visits when available.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Learn more about local support on our{" "}
              <Link href="/microwave-repair" className="font-semibold text-white underline hover:text-gray-200">
                Microwave Repair Nepean page
              </Link>
              .
            </p>
          </>
        }
        phoneNumber="613-413-6969"
        phoneText="Call us"
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} />

      <BenefitsSection applianceName="Microwave" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="Microwaves often fail due to a single component like the magnetron or door switch. We'll help you decide when it's smarter to repair than replace — and give you an honest estimate either way." />

      <InstallationCTASection
        applianceName="Microwave"
        description="Upgrading to a new unit? We also offer microwave installation in Nepean — fast, safe, and fully insured."
        href="/appliance-installation/microwave"
      />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area: Nepean and Nearby"
        description="We provide appliance repair services across the entire Nepean area, including:"
        neighborhoods={serviceAreas.filter(area => area !== "Surrounding neighbourhoods")}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name.replace("Microwave Repair ", ""),
          slug: area.href.replace("/microwave-repair/", "")
        }))}
        applianceType="microwave"
        nearbyAreasLabel="We also serve nearby areas like:"
        surroundingLabel={serviceAreas.includes("Surrounding neighbourhoods") ? "Surrounding neighbourhoods" : "and surrounding neighbourhoods"}
        footerText={
          <p className="text-lg text-gray-700">
            For full coverage across the city, visit our{" "}
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
        heading="Explore Nepean While We Work on Your Microwave"
        description="Turn repair time into discovery time:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Microwave" faqs={faqs} />

      <CTASection
        heading="Book Your Microwave Repair in Nepean"
        description="No need to wait — call now and we'll be on our way."
        buttonText="Book Online Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={services}
        heading="Also Need Help With…"
        description="We handle more than microwaves — here are our other services in Nepean:"
        applianceName="Microwave"
      />
    </>
  );
}
