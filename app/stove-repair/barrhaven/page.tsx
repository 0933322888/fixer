import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceHero from "@/components/ServiceHero";
import { FaFire } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";

export const metadata: Metadata = {
  title: "Stove Repair in Barrhaven – Electric Ranges & Local Experts | Fixer",
  description:
    "Reliable electric stove and range repair in Barrhaven, serving Chapman Mills, Stonebridge, and Half Moon Bay. We fix burners, ovens, and controls — with upfront pricing and a 90-day warranty.",
  keywords:
    "stove repair Barrhaven, range repair Barrhaven, electric stove repair Barrhaven, Fixer Appliance Repair Barrhaven",
};

const repairOrReplaceDescription =
  "Electric ranges often fail one burner, sensor, or board at a time while the rest of the unit stays solid. We'll help you decide when repair beats replacement — with straight answers and clear pricing.";

const commonIssues = [
  {
    title: "Stove won’t power up",
    description:
      "In Barrhaven’s newer townhomes, tripped breakers or wiring faults often stop the unit. We’ll fix it.",
  },
  {
    title: "Oven bakes unevenly",
    description:
      "A weak bake element, sensor drift, or fan issue — we’ll restore even heat.",
  },
  {
    title: "Touch controls frozen",
    description:
      "Moisture inside the panel or a bad control board can disable inputs. We’ll repair it.",
  },
  {
    title: "Electrical smell from oven",
    description:
      "Burned wiring or overheated parts — we’ll inspect and repair safely.",
  },
  {
    title: "Burner won’t respond",
    description:
      "Switch or element failure — we replace what’s needed.",
  },
  {
    title: "Exterior gets very hot",
    description:
      "Ventilation or cooling fan issues — we check airflow and controls.",
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
  "Local Barrhaven stove repair and installation support",
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
  { name: "Stove Repair Kanata", href: "/stove-repair/kanata" },
  { name: "Stove Repair Stittsville", href: "/stove-repair/stittsville" },
  { name: "Stove Repair Nepean", href: "/stove-repair/nepean" },
  { name: "Stove Repair Orleans", href: "/stove-repair/orleans" },
  { name: "Stove Repair Vanier", href: "/stove-repair/vanier" },
  { name: "Stove Repair Mississippi Mills", href: "/stove-repair/mississippi-mills" },
  { name: "Stove Repair Arnprior", href: "/stove-repair/arnprior" },
  { name: "Stove Repair Carleton Place", href: "/stove-repair/carleton-place" },
];

const faqs = [
  {
    question: "Can I get same-day stove repair in Barrhaven?",
    answer: "Yes — depending on availability.",
  },
  {
    question: "Why does my oven smell like burning when I preheat?",
    answer: "Spill residue or wiring issues — we’ll inspect it.",
  },
  {
    question: "Do you install electric ranges?",
    answer: "Yes — using your existing supply where appropriate.",
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
  { label: "Stove Repair Barrhaven", href: "/stove-repair/barrhaven" },
  { label: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { label: "Appliance Installation", href: "/appliance-installation/locations/ottawa" },
];

export default function StoveRepairBarrhavenPage() {
  return (
    <>
      <ServiceHero
        title="Barrhaven Stove Repair You Can Trust"
        description="Range not heating or a burner dead? Our Barrhaven specialists provide quick, reliable electric stove repair across all neighbourhoods."
        icon={<FaFire className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <>
            <p className="text-lg text-gray-200 mb-6">
              We service LG, Samsung, Whirlpool, GE, and Maytag electric ranges. Upfront pricing, 90-day warranty.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 See more about our service area on the{" "}
              <Link href="/service-areas/barrhaven" className="font-semibold text-white underline hover:text-gray-200">
                Barrhaven service area page
              </Link>
              .
            </p>
          </>
        }
        phoneNumber="613-413-6969"
        phoneText="Call us"
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Stove Issues We Fix in Barrhaven" />

      <InstallationCTASection
        applianceName="Range"
        description="Got a new electric range? We also provide range and oven installation in Barrhaven with same-day service available in most areas."
        href="/appliance-installation/oven"
      />

      <BenefitsSection applianceName="Stove" benefits={whyChooseUs} />

      <RepairOrReplaceSection description={repairOrReplaceDescription} />

      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Barrhaven area, including:"
        neighborhoods={serviceAreas.filter((area) => area !== "Surrounding neighbourhoods")}
        nearbyAreas={nearbyAreas.map((area) => ({
          name: area.name.replace("Stove Repair ", ""),
          slug: area.href.replace("/stove-repair/", ""),
        }))}
        applianceType="stove"
        nearbyAreasLabel="We also serve households in:"
        surroundingLabel={
          serviceAreas.includes("Surrounding neighbourhoods")
            ? "Surrounding neighbourhoods"
            : "and surrounding neighbourhoods"
        }
        footerText={
          <p className="text-lg text-gray-700">
            👉 For a city-wide view, visit our{" "}
            <Link href="/stove-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Stove Repair Ottawa
            </Link>{" "}
            page.
          </p>
        }
      />

      <ThingsToDoSection
        attractions={highlights}
        heading="Discover Barrhaven While We Work on Your Stove"
        description="Make the wait enjoyable:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Stove" faqs={faqs} />

      <CTASection
        heading="Schedule Your Stove Repair in Barrhaven"
        description="We're ready to assist — book your stove repair with Fixer Appliance Repair today."
        buttonText="Book Online Now"
      />

      <RelatedServicesSection
        services={services}
        heading="Also Need Help With…"
        description="Beyond stove repair, we also provide these services in Barrhaven:"
        applianceName="stove"
      />
    </>
  );
}
