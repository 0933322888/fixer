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
  title: "Microwave Repair in Mississippi Mills – Local, Reliable Service | Fixer",
  description:
    "Professional microwave repair in Mississippi Mills, including Almonte, Appleton, and Pakenham. We fix heating, power, and control issues — with clear pricing and a 90-day warranty.",
  keywords:
    "microwave repair Mississippi Mills, microwave service Almonte, microwave not heating Mississippi Mills, Fixer Appliance Repair",
};

const commonIssues = [
  {
    title: "Microwave won’t turn on",
    description:
      "In rural Mississippi Mills homes, wiring or voltage issues sometimes damage fuses. We’ll restore the connection.",
  },
  {
    title: "No heat but fan still runs",
    description:
      "A bad magnetron or capacitor usually causes this. We’ll replace it so food heats again.",
  },
  {
    title: "Microwave makes grinding noise",
    description:
      "Often a turntable motor or fan blade obstruction. We’ll fix the noise source.",
  },
  {
    title: "Exterior gets too hot",
    description:
      "Blocked vents or bad shielding may be the cause. We’ll inspect and repair for safety.",
  },
  {
    title: "Interior light flickers",
    description:
      "Loose bulbs or wiring shorts are common. We’ll repair them quickly.",
  },
  {
    title: "Uneven heating",
    description:
      "Sensors or stirrer fans can fail over time. We’ll balance the heating.",
  },
];

const highlights = [
  {
    title: "Almonte Riverwalk",
    description: "Enjoy a scenic stroll along the Mississippi River falls.",
  },
  {
    title: "Mill of Kintail",
    description: "Explore outdoor trails and heritage exhibits.",
  },
  {
    title: "Downtown Almonte",
    description: "Shop and dine in charming local cafés and boutiques.",
  },
];

const whyChooseUs = [
  "Trusted microwave specialists serving Mississippi Mills homes",
  "Clear cost estimates before we start",
  "Fast response times — often same or next day",
  "Backed by a 90-day warranty",
];

const serviceAreas = [
  "Almonte",
  "Appleton",
  "Blakeney",
  "Pakenham",
  "Ramsay",
  "Surrounding rural neighbourhoods",
];

const nearbyAreas = [
  { name: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { name: "Microwave Repair Orleans", href: "/microwave-repair/orleans" },
  { name: "Microwave Repair Vanier", href: "/microwave-repair/vanier" },
  { name: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { name: "Microwave Repair Arnprior", href: "/microwave-repair/arnprior" },
  { name: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you service microwaves in Mississippi Mills?",
    answer: "Yes — in Almonte, Appleton, Pakenham, and nearby rural areas.",
  },
  {
    question: "Why does my microwave make grinding noises?",
    answer: "Often the turntable motor or fan blade. We’ll diagnose and repair it.",
  },
  {
    question: "Do you provide microwave installation?",
    answer: "Yes — we install using your existing power supply.",
  },
  {
    question: "Do you repair countertop and built-in microwaves?",
    answer: "Yes — we handle all major models and configurations.",
  },
  {
    question: "Do you provide clear estimates?",
    answer: "Yes — all pricing is upfront before work begins.",
  },
];

const services = [
  { label: "Washer Repair Mississippi Mills", href: "/washer-repair/mississippi-mills" },
  { label: "Dryer Repair Mississippi Mills", href: "/dryer-repair/mississippi-mills" },
  { label: "Fridge Repair Mississippi Mills", href: "/fridge-repair/mississippi-mills" },
  { label: "Freezer Repair Mississippi Mills", href: "/freezer-repair/mississippi-mills" },
  { label: "Oven Repair Mississippi Mills", href: "/oven-repair/mississippi-mills" },
  { label: "Cooktop Repair Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
  { label: "Microwave Repair Mississippi Mills", href: "/microwave-repair/mississippi-mills" },
  { label: "Appliance Installation", href: "/appliance-installation/dishwasher" },
];

export default function MicrowaveRepairMississippiMillsPage() {
  return (
    <>
      <ServiceHero
        title="Trusted Microwave Repair in Mississippi Mills"
        description="Living in Almonte, Appleton, or Pakenham and dealing with a broken microwave? Fixer provides safe, dependable repair service across all of Mississippi Mills."
        icon={<FaWaveSquare className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <>
            <p className="text-lg text-gray-200 mb-6">
              We service LG, Samsung, Whirlpool, GE, and Maytag microwaves — same-day or next-day appointments when available.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Check out what we do in your neighbourhood on our{" "}
              <Link href="/mississippi-mills" className="font-semibold text-white underline hover:text-gray-200">
                Local Mississippi Mills page
              </Link>
              .
            </p>
          </>
        }
        phoneNumber="613-413-6969"
        phoneText="Call us"
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Microwave Issues We Fix in Mississippi Mills" />

      {/* Installation Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
      <BenefitsSection applianceName="Microwave" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="Microwaves often fail due to a single component like the magnetron or door switch. We'll help you decide when it's smarter to repair than replace — and give you an honest estimate either way." />

      <InstallationCTASection
        applianceName="Microwave"
        description="Upgrading to a new unit? We also offer microwave installation in Mississippi Mills — fast, safe, and fully insured."
        href="/appliance-installation/microwave"
      />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Mississippi Mills area, including:"
        neighborhoods={serviceAreas.filter(area => area !== "Surrounding rural neighbourhoods")}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name.replace("Microwave Repair ", ""),
          slug: area.href.replace("/microwave-repair/", "")
        }))}
        applianceType="microwave"
        nearbyAreasLabel="We also provide microwave service throughout:"
        surroundingLabel={serviceAreas.includes("Surrounding rural neighbourhoods") ? "Surrounding rural neighbourhoods" : "and surrounding neighbourhoods"}
        footerText={
          <p className="text-lg text-gray-700">
            👉 For a full list of areas, see our{" "}
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
        heading="Discover Mississippi Mills While We Work on Your Microwave"
        description="Make the most of your time with these spots:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Microwave" faqs={faqs} />

      <CTASection
        heading="Schedule Your Microwave Repair in Mississippi Mills"
        description="Serving Almonte, Appleton, and surrounding areas — schedule your microwave repair now."
        buttonText="Book Online Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={services}
        heading="Also Need Help With…"
        description="Microwaves are just the beginning — here are our other services in Mississippi Mills:"
        applianceName="Microwave"
      />
    </>
  );
}
