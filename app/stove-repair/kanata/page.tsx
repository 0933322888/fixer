import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import FAQSection from "@/components/FAQSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ServiceHero from "@/components/ServiceHero";
import { FaFire } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Stove Repair in Kanata – Electric Ranges & Local Service | Fixer",
  description:
    "Trusted electric stove and range repair in Kanata, from Bridlewood to Kanata Lakes. We fix burners, ovens, and controls on all major brands — with clear pricing and a 90-day warranty.",
  keywords:
    "stove repair Kanata, range repair Kanata, electric stove repair Kanata, Fixer Appliance Repair Kanata",
};

const repairOrReplaceDescription =
  "Electric ranges often fail one burner, sensor, or board at a time while the rest of the unit stays solid. We'll help you decide when repair beats replacement — with straight answers and clear pricing.";

const commonIssues = [
  {
    title: "Stove won’t power up",
    description: "We check breakers, terminal block, and supply wiring — common after moves or renovations.",
  },
  {
    title: "Oven won’t heat but cooktop works",
    description: "Bake or broil element, fuse, or sensor — we test the oven circuit end to end.",
  },
  {
    title: "Touch controls frozen or erratic",
    description: "Moisture or a failing board can lock the panel — we repair or replace it.",
  },
  {
    title: "Burner stuck on high",
    description: "Infinite switch or relay fault — we replace the defective control path.",
  },
  {
    title: "Burning smell when oven runs",
    description: "Spills on elements, wiring, or insulation — we find the source and fix it safely.",
  },
  {
    title: "Display flashes error codes",
    description: "We decode manufacturer codes and repair the underlying fault.",
  },
  {
    title: "Oven door won’t stay closed",
    description: "Hinge, latch, or seal — we adjust or replace so heat stays inside.",
  },
  {
    title: "Hot-surface light won’t turn off",
    description: "Faulty sensor or indicator circuit — we swap the right part.",
  },
  {
    title: "Self-clean won’t start",
    description: "Latch, sensor, or board — we restore self-clean when parts allow.",
  },
  {
    title: "Uneven baking",
    description: "Convection fan, element, or temperature sensor — we balance oven performance.",
  },
];

const highlights = [
  {
    title: "South March Highlands",
    description: "Scenic forest trails for walking or biking.",
  },
  {
    title: "Walter Baker Park",
    description: "Peaceful green space for the whole family.",
  },
  {
    title: "Kanata Centrum",
    description: "Plenty of shopping and casual dining.",
  },
  {
    title: "Canadian Tire Centre",
    description: "Catch hockey, concerts, or live events.",
  },
];

const whyChooseUs = [
  "Skilled with electric ranges — burners, ovens, and safety systems",
  "We show up ready to diagnose and fix",
  "Transparent pricing every time",
  "Trusted team with a professional approach",
  "We explain everything before we begin",
];

const serviceAreas = [
  "Morgan’s Grant",
  "Beaverbrook",
  "Katimavik-Hazeldean",
  "Glen Cairn",
  "Bridlewood",
  "Kanata Lakes",
  "Emerald Meadows",
  "Surrounding neighbourhoods",
];

const nearbyAreas = [
  { name: "Stove Repair Stittsville", href: "/stove-repair/stittsville" },
  { name: "Stove Repair Nepean", href: "/stove-repair/nepean" },
  { name: "Stove Repair Orleans", href: "/stove-repair/orleans" },
  { name: "Stove Repair Vanier", href: "/stove-repair/vanier" },
  { name: "Stove Repair Barrhaven", href: "/stove-repair/barrhaven" },
  { name: "Stove Repair Mississippi Mills", href: "/stove-repair/mississippi-mills" },
  { name: "Stove Repair Arnprior", href: "/stove-repair/arnprior" },
  { name: "Stove Repair Carleton Place", href: "/stove-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you repair stoves in Glen Cairn and Morgan’s Grant?",
    answer: "Yes — we provide range and stove repair across Kanata.",
  },
  {
    question: "My oven won’t heat but the burners work — can that be fixed?",
    answer: "Yes — usually an element, fuse, or sensor on the oven side.",
  },
  {
    question: "Do you work on slide-in and freestanding ranges?",
    answer: "Yes — electric models from major brands.",
  },
  {
    question: "Do you install new stoves?",
    answer: "Yes — see our range and oven installation options.",
  },
  {
    question: "Do you offer installation service?",
    answer: "Yes — with suitable existing electrical supply.",
  },
];

const services = [
  { label: "Washer Repair Kanata", href: "/washer-repair/kanata" },
  { label: "Dryer Repair Kanata", href: "/dryer-repair/kanata" },
  { label: "Fridge Repair Kanata", href: "/fridge-repair/kanata" },
  { label: "Freezer Repair Kanata", href: "/freezer-repair/kanata" },
  { label: "Oven Repair Kanata", href: "/oven-repair/kanata" },
  { label: "Cooktop Repair Kanata", href: "/cooktop-repair/kanata" },
  { label: "Stove Repair Kanata", href: "/stove-repair/kanata" },
  { label: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
  { label: "Appliance Installation", href: "/appliance-installation/locations/kanata" },
];

export default function StoveRepairKanataPage() {
  return (
    <>
      <ServiceHero
        title="Reliable Stove Repair in Kanata"
        description="When your range won’t heat evenly, a burner dies, or the oven won’t hold temperature, call the experts. We provide trusted electric stove repair throughout Kanata — fast, safe, and affordable."
        icon={<FaFire className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <>
            <p className="text-lg text-gray-200 mb-6">
              We service LG, Samsung, Whirlpool, GE, and Maytag electric ranges.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Get more local info on our{" "}
              <Link href="/service-areas/kanata" className="font-semibold text-white underline hover:text-gray-200">
                Kanata service area page
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

      <InstallationCTASection
        applianceName="Range"
        description="Got a new electric range? We also provide range and oven installation in Kanata with same-day service available in most areas."
        href="/appliance-installation/oven"
      />

      <BenefitsSection applianceName="Stove" benefits={whyChooseUs} />

      <RepairOrReplaceSection description={repairOrReplaceDescription} />

      <ServiceAreaSection
        title="Service Area: Kanata and Nearby"
        description="We provide appliance repair services across the entire Kanata area, including:"
        neighborhoods={serviceAreas.filter((area) => area !== "Surrounding neighbourhoods")}
        nearbyAreas={nearbyAreas.map((area) => ({
          name: area.name.replace("Stove Repair ", ""),
          slug: area.href.replace("/stove-repair/", ""),
        }))}
        applianceType="stove"
        nearbyAreasLabel="Our Kanata stove repair services also extend to:"
        surroundingLabel={
          serviceAreas.includes("Surrounding neighbourhoods")
            ? "Surrounding neighbourhoods"
            : "and surrounding neighbourhoods"
        }
        footerText={
          <p className="text-lg text-gray-700">
            👉 For all locations we cover, check our{" "}
            <Link href="/stove-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Stove Repair Ottawa
            </Link>{" "}
            page.
          </p>
        }
      />

      <ThingsToDoSection
        attractions={highlights}
        heading="Explore Kanata While We Fix Your Stove"
        description="A stove repair doesn’t have to stall your day — while we work, you can check out:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Stove" faqs={faqs} />

      <CTASection
        heading="Book Your Stove Repair in Kanata"
        description="Need your range back in shape? Let's book your service."
        buttonText="Book Online Now"
      />

      <RelatedServicesSection
        services={services}
        heading="Also Need Help With…"
        description="We fix more than stoves — here are our other services in Kanata:"
        applianceName="stove"
      />
    </>
  );
}
