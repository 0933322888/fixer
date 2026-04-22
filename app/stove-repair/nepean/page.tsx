import { Metadata } from "next";
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
  title: "Stove Repair in Nepean – Electric Ranges & Quick Service | Fixer",
  description:
    "Trusted electric stove repair in Nepean, from Barrhaven East to Centrepointe. We fix burners, ovens, and controls on all brands — with clear pricing and a 90-day warranty.",
  keywords:
    "stove repair Nepean, range repair Nepean, electric stove repair Nepean, Fixer Appliance Repair Nepean",
};

const repairOrReplaceDescription =
  "Electric ranges often fail one burner, sensor, or board at a time while the rest of the unit stays solid. We'll help you decide when repair beats replacement — with straight answers and clear pricing.";

const commonIssues = [
  {
    title: "Stove beeps but oven won’t start",
    description: "We inspect door switches, latches, and fuses.",
  },
  {
    title: "Oven shuts off during preheat",
    description: "Thermal fuse, sensor, or board — we find the dropouts.",
  },
  {
    title: "Oven slow to preheat",
    description: "Weak element or calibration — we test both.",
  },
  {
    title: "Oven door opens too easily mid-cycle",
    description: "Latch or hinge wear — we realign and secure.",
  },
  {
    title: "Convection fan not running",
    description: "Motor, relay, or wiring — we restore airflow.",
  },
  {
    title: "Display on when it shouldn’t be",
    description: "Control fault — we repair or replace the board.",
  },
  {
    title: "Coil element wobbles",
    description: "We replace drip bowls and receptacles when worn.",
  },
  {
    title: "Clock keeps resetting",
    description: "Power supply or board — we stabilize voltage paths.",
  },
  {
    title: "Vibration when convection runs",
    description: "Fan or shroud — we balance and secure.",
  },
  {
    title: "Broil works, bake doesn’t (or reverse)",
    description: "Element or relay path failure — we split the circuits.",
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
  "We solve common and uncommon range problems",
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
  { name: "Stove Repair Kanata", href: "/stove-repair/kanata" },
  { name: "Stove Repair Stittsville", href: "/stove-repair/stittsville" },
  { name: "Stove Repair Orleans", href: "/stove-repair/orleans" },
  { name: "Stove Repair Vanier", href: "/stove-repair/vanier" },
  { name: "Stove Repair Barrhaven", href: "/stove-repair/barrhaven" },
  { name: "Stove Repair Mississippi Mills", href: "/stove-repair/mississippi-mills" },
  { name: "Stove Repair Arnprior", href: "/stove-repair/arnprior" },
  { name: "Stove Repair Carleton Place", href: "/stove-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you fix stoves in Bells Corners and Centrepointe?",
    answer: "Yes — we work across Nepean.",
  },
  {
    question: "Do you repair slide-in ranges?",
    answer: "Yes — electric models are our specialty.",
  },
  {
    question: "Can you help with display or keypad issues?",
    answer: "Absolutely — we repair non-responsive controls.",
  },
  {
    question: "What if the stove doesn’t turn on at all?",
    answer: "We’ll check the breaker, terminal block, and controls.",
  },
  {
    question: "Do you install new ranges?",
    answer: "Yes — we handle removal and installation with proper testing.",
  },
];

const services = [
  { label: "Washer Repair Nepean", href: "/washer-repair/nepean" },
  { label: "Dryer Repair Nepean", href: "/dryer-repair/nepean" },
  { label: "Fridge Repair Nepean", href: "/fridge-repair/nepean" },
  { label: "Freezer Repair Nepean", href: "/freezer-repair/nepean" },
  { label: "Oven Repair Nepean", href: "/oven-repair/nepean" },
  { label: "Cooktop Repair Nepean", href: "/cooktop-repair/nepean" },
  { label: "Stove Repair Nepean", href: "/stove-repair/nepean" },
  { label: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { label: "Appliance Installation", href: "/appliance-installation/locations/nepean" },
];

export default function StoveRepairNepeanPage() {
  return (
    <>
      <ServiceHero
        title="Nepean's Trusted Stove Repair Technicians"
        description="Nepean residents, don't let a dead burner or cold oven derail dinner. Whether it's uneven baking or error codes, Fixer is just a call away with quick, professional electric range service."
        icon={<FaFire className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <>
            <p className="text-lg text-gray-200 mb-6">
              We work on LG, Samsung, Whirlpool, GE, Maytag, and more — same-day or next-day visits when available.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Learn more about local support on our{" "}
              <Link href="/service-areas/nepean" className="font-semibold text-white underline hover:text-gray-200">
                Nepean service area page
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

      <BenefitsSection applianceName="Stove" benefits={whyChooseUs} />

      <RepairOrReplaceSection description={repairOrReplaceDescription} />

      <InstallationCTASection
        applianceName="Range"
        description="Upgrading to a new unit? We also offer electric range installation in Nepean — fast, safe, and fully insured."
        href="/appliance-installation/oven"
      />

      <ServiceAreaSection
        title="Service Area: Nepean and Nearby"
        description="We provide appliance repair services across the entire Nepean area, including:"
        neighborhoods={serviceAreas.filter((area) => area !== "Surrounding neighbourhoods")}
        nearbyAreas={nearbyAreas.map((area) => ({
          name: area.name.replace("Stove Repair ", ""),
          slug: area.href.replace("/stove-repair/", ""),
        }))}
        applianceType="stove"
        nearbyAreasLabel="We also serve nearby areas like:"
        surroundingLabel={
          serviceAreas.includes("Surrounding neighbourhoods")
            ? "Surrounding neighbourhoods"
            : "and surrounding neighbourhoods"
        }
        footerText={
          <p className="text-lg text-gray-700">
            For full coverage across the city, visit our{" "}
            <Link href="/stove-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Stove Repair Ottawa
            </Link>{" "}
            page.
          </p>
        }
      />

      <ThingsToDoSection
        attractions={highlights}
        heading="Explore Nepean While We Work on Your Stove"
        description="Turn repair time into discovery time:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Stove" faqs={faqs} />

      <CTASection
        heading="Book Your Stove Repair in Nepean"
        description="No need to wait — call now and we'll be on our way."
        buttonText="Book Online Now"
      />

      <RelatedServicesSection
        services={services}
        heading="Also Need Help With…"
        description="We handle more than stoves — here are our other services in Nepean:"
        applianceName="stove"
      />
    </>
  );
}
