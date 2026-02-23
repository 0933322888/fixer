import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceHero from "@/components/ServiceHero";
import {
  FaWaveSquare,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTools,
  FaUtensils,
  FaTree,
  FaBook,
} from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";

export const metadata: Metadata = {
  title: "Microwave Repair in Barrhaven – Fast, Local Experts | Fixer",
  description:
    "Reliable microwave repair in Barrhaven, serving Chapman Mills, Stonebridge, and Half Moon Bay. We fix heating, power, and control issues — with upfront pricing and a 90-day warranty.",
  keywords:
    "microwave repair Barrhaven, microwave service Barrhaven, microwave not heating Barrhaven, Fixer Appliance Repair Barrhaven",
};

const commonIssues = [
  {
    title: "Microwave won’t power up",
    description:
      "In Barrhaven’s newer townhomes, tripped breakers or wiring faults often stop the unit. We’ll fix it.",
  },
  {
    title: "Food heats unevenly",
    description:
      "A failing stirrer fan or sensor usually causes this. We’ll restore balanced cooking.",
  },
  {
    title: "Touch controls frozen",
    description:
      "Moisture inside the panel or a bad control board can disable inputs. We’ll repair it.",
  },
  {
    title: "Microwave smells electrical",
    description:
      "Burned wiring or overheated parts often give off odors. We’ll inspect and repair safely.",
  },
  {
    title: "Microwave won’t stop beeping",
    description:
      "Faulty control logic often triggers constant alerts. We’ll reset or replace the board.",
  },
  {
    title: "Exterior hot to the touch",
    description:
      "Poor ventilation can make the outside surface hot. We’ll check vents and fix the issue.",
  },
];

const highlights = [
  {
    title: "Walter Baker Centre",
    description: "Swim, skate, or work out while we handle your repair.",
  },
  {
    title: "Chapman Mills Conservation Area",
    description: "Walk the riverside boardwalk for fresh air.",
  },
  {
    title: "Marketplace Barrhaven",
    description: "Grab a bite or run errands nearby.",
  },
];

const whyChooseUs = [
  "Local Barrhaven microwave repair and installation team",
  "Same-day and next-day bookings available",
  "All work protected by a 90-day labour warranty",
  "Dependable service and honest communication",
];

const serviceAreas = [
  "Chapman Mills",
  "Stonebridge",
  "Longfields",
  "Half Moon Bay",
  "Knollsbrook",
  "Surrounding neighbourhoods",
];

const nearbyAreas = [
  { name: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { name: "Microwave Repair Orleans", href: "/microwave-repair/orleans" },
  { name: "Microwave Repair Vanier", href: "/microwave-repair/vanier" },
  { name: "Microwave Repair Mississippi Mills", href: "/microwave-repair/mississippi-mills" },
  { name: "Microwave Repair Arnprior", href: "/microwave-repair/arnprior" },
  { name: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
];

const faqs = [
  {
    question: "Can I get same-day microwave repair in Barrhaven?",
    answer: "Yes — depending on availability.",
  },
  {
    question: "Why does my microwave smell like burning?",
    answer: "Food residue or wiring issues — we’ll inspect it.",
  },
  {
    question: "Do you install over-the-range microwaves?",
    answer: "Yes — using your existing hookups.",
  },
  {
    question: "Do you service nearby communities?",
    answer: "Yes — Stonebridge, Half Moon Bay, Chapman Mills, and beyond.",
  },
  {
    question: "Do you provide warranty?",
    answer: "Yes — 90-day warranty included.",
  },
];

const services = [
  { label: "Washer Repair Barrhaven", href: "/washer-repair/barrhaven" },
  { label: "Dryer Repair Barrhaven", href: "/dryer-repair/barrhaven" },
  { label: "Fridge Repair Barrhaven", href: "/fridge-repair/barrhaven" },
  { label: "Freezer Repair Barrhaven", href: "/freezer-repair/barrhaven" },
  { label: "Oven Repair Barrhaven", href: "/oven-repair/barrhaven" },
  { label: "Cooktop Repair Barrhaven", href: "/cooktop-repair/barrhaven" },
  { label: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { label: "Appliance Installation", href: "/appliance-installation/dishwasher" },
];

export default function MicrowaveRepairBarrhavenPage() {
  return (
    <>
      <ServiceHero
        title="Barrhaven Microwave Repair You Can Trust"
        description="Microwave not heating or giving off a burning smell? Our Barrhaven specialists provide quick, reliable repair across all neighbourhoods."
        icon={<FaWaveSquare className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <>
            <p className="text-lg text-gray-200 mb-6">
              We service LG, Samsung, Whirlpool, GE, and Maytag microwaves. Upfront pricing, 90-day warranty.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 See more about our service area on the{" "}
              <Link href="/barrhaven" className="font-semibold text-white underline hover:text-gray-200">
                Local Barrhaven page
              </Link>
              .
            </p>
          </>
        }
        phoneNumber="613-413-6969"
        phoneText="Call us"
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Microwave Issues We Fix in Barrhaven" />

      {/* Microwave Installation CTA */}
      <InstallationCTASection
        applianceName="Microwave"
        description="Got a new microwave? We also provide microwave installation in Barrhaven with same-day service available in most areas."
        href="/appliance-installation/microwave"
      />

      <BenefitsSection applianceName="Microwave" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="Microwaves often fail due to a single component like the magnetron or door switch. We'll help you decide when it's smarter to repair than replace — and give you an honest estimate either way." />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Barrhaven area, including:"
        neighborhoods={serviceAreas.filter(area => area !== "Surrounding neighbourhoods")}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name.replace("Microwave Repair ", ""),
          slug: area.href.replace("/microwave-repair/", "")
        }))}
        applianceType="microwave"
        nearbyAreasLabel="We also serve households in:"
        surroundingLabel={serviceAreas.includes("Surrounding neighbourhoods") ? "Surrounding neighbourhoods" : "and surrounding neighbourhoods"}
        footerText={
          <p className="text-lg text-gray-700">
            👉 For a city-wide view, visit our{" "}
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
        heading="Discover Barrhaven While We Work on Your Microwave"
        description="Make the wait enjoyable:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Microwave" faqs={faqs} />

      <CTASection
        heading="Schedule Your Microwave Repair in Barrhaven"
        description="We're ready to assist — book your microwave repair with Fixer Appliance Repair today."
        buttonText="Book Online Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={services}
        heading="Also Need Help With…"
        description="Beyond microwave repair, we also provide these services in Barrhaven:"
        applianceName="Microwave"
      />
    </>
  );
}
