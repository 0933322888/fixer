import { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceHero from "@/components/ServiceHero";
import { FaFire } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import FAQSection from "@/components/FAQSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";

export const metadata: Metadata = {
  title: "Stove Repair in Carleton Place – Electric Ranges & Trusted Help | Fixer",
  description:
    "Reliable electric stove repair in Carleton Place, from Riverside Park to Mississippi Quays. We fix burners, ovens, and controls — with upfront pricing and a 90-day warranty.",
  keywords:
    "stove repair Carleton Place, range repair Carleton Place, electric stove repair Carleton Place, Fixer Appliance Repair Carleton Place",
};

const repairOrReplaceDescription =
  "Electric ranges often fail one burner, sensor, or board at a time while the rest of the unit stays solid. We'll help you decide when repair beats replacement — with straight answers and clear pricing.";

const commonIssues = [
  {
    title: "Stove not powering on",
    description:
      "We check breakers, terminal block, and controls common in Carleton Place homes.",
  },
  {
    title: "Oven bakes unevenly",
    description:
      "Sensor drift or weak elements — we’ll restore even heat.",
  },
  {
    title: "Touch panel not responding",
    description:
      "A failed control pad or board often blocks input — we’ll replace what’s needed.",
  },
  {
    title: "Burnt smell from oven",
    description:
      "Spilled food or wiring faults — we’ll clean and repair safely.",
  },
  {
    title: "Random codes on display",
    description:
      "LG, Whirlpool, and Samsung ranges often show errors — we interpret and repair.",
  },
  {
    title: "Oven won’t turn off",
    description:
      "A stuck relay or faulty control can keep heat on — we’ll fix it quickly.",
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
  "Local Carleton Place technicians with range expertise",
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
  { name: "Stove Repair Kanata", href: "/stove-repair/kanata" },
  { name: "Stove Repair Stittsville", href: "/stove-repair/stittsville" },
  { name: "Stove Repair Nepean", href: "/stove-repair/nepean" },
  { name: "Stove Repair Orleans", href: "/stove-repair/orleans" },
  { name: "Stove Repair Vanier", href: "/stove-repair/vanier" },
  { name: "Stove Repair Barrhaven", href: "/stove-repair/barrhaven" },
  { name: "Stove Repair Mississippi Mills", href: "/stove-repair/mississippi-mills" },
  { name: "Stove Repair Arnprior", href: "/stove-repair/arnprior" },
];

const faqs = [
  {
    question: "Do you offer same-day stove service in Carleton Place?",
    answer: "When possible, yes.",
  },
  {
    question: "Why does my oven run but not heat?",
    answer: "Likely element, fuse, or sensor — we diagnose on site.",
  },
  {
    question: "Do you install electric ranges?",
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
  { label: "Stove Repair Carleton Place", href: "/stove-repair/carleton-place" },
  { label: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
  { label: "Appliance Installation", href: "/appliance-installation/locations/ottawa" },
];

export default function StoveRepairCarletonPlacePage() {
  return (
    <Fragment>
      <ServiceHero
        title="Reliable Stove Repair in Carleton Place"
        description="Range won't heat evenly, keeps beeping, or flashes codes? Our Carleton Place team provides expert electric stove repairs with honest pricing and fast response."
        icon={<FaFire className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <div>
            <p className="text-lg text-gray-200 mb-6">
              We service LG, Samsung, Whirlpool, GE, and Maytag electric ranges. Same-day bookings when available.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              Explore local insights on our{" "}
              <Link href="/service-areas/carleton-place" className="font-semibold text-white underline hover:text-gray-200">
                Carleton Place service area page
              </Link>
              .
            </p>
          </div>
        }
        phoneNumber="613-413-6969"
        phoneText="CALL NOW"
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Stove Issues We Fix in Carleton Place" />

      <InstallationCTASection
        applianceName="Range"
        description="Got a new electric range? We also provide range installation in Carleton Place with same-day service available in most areas."
        href="/appliance-installation/oven"
      />

      <BenefitsSection applianceName="Stove" benefits={whyChooseUs} />

      <RepairOrReplaceSection description={repairOrReplaceDescription} />

      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Carleton Place area, including:"
        neighborhoods={serviceAreas.filter((area) => area !== "Surrounding neighbourhoods")}
        nearbyAreas={nearbyAreas.map((area) => ({
          name: area.name.replace("Stove Repair ", ""),
          slug: area.href.replace("/stove-repair/", ""),
        }))}
        applianceType="stove"
        nearbyAreasLabel="We also serve:"
        surroundingLabel={
          serviceAreas.includes("Surrounding neighbourhoods")
            ? "Surrounding neighbourhoods"
            : "and surrounding neighbourhoods"
        }
        footerText={
          <p className="text-lg text-gray-700">
            👉 For complete service info, visit our{" "}
            <Link href="/stove-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Stove Repair Ottawa
            </Link>{" "}
            page.
          </p>
        }
      />

      <ThingsToDoSection
        attractions={highlights}
        heading="Discover Carleton Place While We Work on Your Stove"
        description="Here are a few nearby spots worth visiting:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Stove" faqs={faqs} />

      <CTASection
        heading="Schedule Your Stove Repair in Carleton Place"
        description="Don't wait with a broken range — text or call Fixer Appliance Repair to arrange service."
        buttonText="Book Online Now"
      />

      <RelatedServicesSection
        services={services}
        heading="Also Need Help With…"
        description="Stove issues aren't the only thing we fix — here are more services in Carleton Place:"
        applianceName="stove"
      />
    </Fragment>
  );
}
