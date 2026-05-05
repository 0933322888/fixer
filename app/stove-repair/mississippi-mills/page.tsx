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
  title: "Stove Repair in Mississippi Mills – Electric Ranges & Local Service | Fixer",
  description:
    "Professional electric stove repair in Mississippi Mills, including Almonte, Appleton, and Pakenham. We fix burners, ovens, and controls — with clear pricing and a 90-day warranty.",
  keywords:
    "stove repair Mississippi Mills, range repair Almonte, electric stove repair Mississippi Mills, Fixer Appliance Repair",
};

const repairOrReplaceDescription =
  "Electric ranges often fail one burner, sensor, or board at a time while the rest of the unit stays solid. We'll help you decide when repair beats replacement — with straight answers and clear pricing.";

const commonIssues = [
  {
    title: "Stove won’t turn on",
    description:
      "In rural Mississippi Mills homes, supply or breaker issues sometimes trip. We’ll restore safe power.",
  },
  {
    title: "Oven won’t heat but surface works",
    description:
      "Failed bake element, fuse, or sensor — we’ll replace what’s needed.",
  },
  {
    title: "Noise when convection runs",
    description:
      "Fan motor or obstruction — we’ll fix the source.",
  },
  {
    title: "Cabinet beside oven feels very hot",
    description:
      "Cooling fan or vent blockage — we inspect for safety.",
  },
  {
    title: "Oven light flickers",
    description:
      "Loose bulbs or wiring — we repair quickly.",
  },
  {
    title: "Uneven baking",
    description:
      "Sensors or convection airflow — we balance performance.",
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
  "Trusted range specialists serving Mississippi Mills homes",
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
  { name: "Stove Repair Kanata", href: "/stove-repair/kanata" },
  { name: "Stove Repair Stittsville", href: "/stove-repair/stittsville" },
  { name: "Stove Repair Nepean", href: "/stove-repair/nepean" },
  { name: "Stove Repair Orleans", href: "/stove-repair/orleans" },
  { name: "Stove Repair Vanier", href: "/stove-repair/vanier" },
  { name: "Stove Repair Barrhaven", href: "/stove-repair/barrhaven" },
  { name: "Stove Repair Arnprior", href: "/stove-repair/arnprior" },
  { name: "Stove Repair Carleton Place", href: "/stove-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you service stoves in Mississippi Mills?",
    answer: "Yes — in Almonte, Appleton, Pakenham, and nearby rural areas.",
  },
  {
    question: "Why does my oven fan make grinding noises?",
    answer: "Often the convection motor or obstruction — we diagnose and repair.",
  },
  {
    question: "Do you provide electric range installation?",
    answer: "Yes — with your existing supply where appropriate.",
  },
  {
    question: "Do you repair slide-in and freestanding ranges?",
    answer: "Yes — major electric models and configurations.",
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
  { label: "Stove Repair Mississippi Mills", href: "/stove-repair/mississippi-mills" },
  { label: "Microwave Repair Mississippi Mills", href: "/microwave-repair/mississippi-mills" },
  { label: "Appliance Installation", href: "/appliance-installation/locations/ottawa" },
];

export default function StoveRepairMississippiMillsPage() {
  return (
    <Fragment>
      <ServiceHero
        title="Trusted Stove Repair in Mississippi Mills"
        description="Living in Almonte, Appleton, or Pakenham and dealing with a finicky range? Fixer provides safe, dependable electric stove repair across Mississippi Mills."
        icon={<FaFire className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <div>
            <p className="text-lg text-gray-200 mb-6">
              We service LG, Samsung, Whirlpool, GE, and Maytag electric ranges — same-day or next-day appointments when available.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              Check out what we do in your neighbourhood on our{" "}
              <Link href="/service-areas/mississippi-mills" className="font-semibold text-white underline hover:text-gray-200">
                Mississippi Mills service area page
              </Link>
              .
            </p>
          </div>
        }
        phoneNumber="613-413-6969"
        phoneText="CALL NOW"
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Stove Issues We Fix in Mississippi Mills" />

      <InstallationCTASection
        applianceName="Range"
        description="Got a new electric range? We also provide range installation in Mississippi Mills with same-day service available in most areas."
        href="/appliance-installation/oven"
      />

      <BenefitsSection applianceName="Stove" benefits={whyChooseUs} />

      <RepairOrReplaceSection description={repairOrReplaceDescription} />

      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Mississippi Mills area, including:"
        neighborhoods={serviceAreas.filter((area) => area !== "Surrounding rural neighbourhoods")}
        nearbyAreas={nearbyAreas.map((area) => ({
          name: area.name.replace("Stove Repair ", ""),
          slug: area.href.replace("/stove-repair/", ""),
        }))}
        applianceType="stove"
        nearbyAreasLabel="We also provide stove service throughout:"
        surroundingLabel={
          serviceAreas.includes("Surrounding rural neighbourhoods")
            ? "Surrounding rural neighbourhoods"
            : "and surrounding neighbourhoods"
        }
        footerText={
          <p className="text-lg text-gray-700">
            👉 For a full list of areas, see our{" "}
            <Link href="/stove-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Stove Repair Ottawa
            </Link>{" "}
            page.
          </p>
        }
      />

      <ThingsToDoSection
        attractions={highlights}
        heading="Discover Mississippi Mills While We Work on Your Stove"
        description="Make the most of your time with these spots:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Stove" faqs={faqs} />

      <CTASection
        heading="Schedule Your Stove Repair in Mississippi Mills"
        description="Serving Almonte, Appleton, and surrounding areas — schedule your stove repair now."
        buttonText="Book Online Now"
      />

      <RelatedServicesSection
        services={services}
        heading="Also Need Help With…"
        description="Stoves are just the beginning — here are our other services in Mississippi Mills:"
        applianceName="stove"
      />
    </Fragment>
  );
}
