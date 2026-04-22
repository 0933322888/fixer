import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import FAQSection from "@/components/FAQSection";
import ServiceHero from "@/components/ServiceHero";
import { FaFire } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Stove Repair in Orleans – Electric Ranges & Local Service | Fixer",
  description:
    "Expert electric stove repair in Orleans, serving Fallingbrook, Avalon, and Chapel Hill. We fix burners, ovens, and controls on all brands — with upfront pricing and a 90-day warranty.",
  keywords:
    "stove repair Orleans, range repair Orleans, electric stove repair Orleans, Fixer Appliance Repair Orleans",
};

const repairOrReplaceDescription =
  "Electric ranges often fail one burner, sensor, or board at a time while the rest of the unit stays solid. We'll help you decide when repair beats replacement — with straight answers and clear pricing.";

const commonIssues = [
  {
    title: "Stove won’t power on",
    description:
      "In Orleans homes, this is often a tripped breaker or terminal issue. We’ll test and restore power safely.",
  },
  {
    title: "Oven bakes unevenly",
    description:
      "If casseroles brown on one side only, convection fan or sensor may be failing.",
  },
  {
    title: "Touchpad unresponsive",
    description:
      "Moisture or worn panels often stop inputs. We’ll repair or replace the controls.",
  },
  {
    title: "Smell when oven heats",
    description:
      "Spills on elements or wiring faults — we’ll inspect and clean properly.",
  },
  {
    title: "One burner always low heat",
    description:
      "On coil or radiant models, switch or element failure — we replace the right part.",
  },
  {
    title: "Display flashing codes",
    description:
      "Samsung and LG ranges often show errors — we decode and repair.",
  },
];

const highlights = [
  {
    title: "Petrie Island",
    description: "Relax on riverside trails and beaches while we repair your stove.",
  },
  {
    title: "Shenkman Arts Centre",
    description: "Catch a performance or browse local art just minutes away.",
  },
  {
    title: "Place d’Orleans",
    description: "Visit for food, shopping, or to cross errands off your list.",
  },
];

const whyChooseUs = [
  "Local Orleans stove repair and installation experts",
  "Same-day and next-day service available",
  "Upfront, honest pricing every time",
  "90-day labour warranty on all jobs",
];

const serviceAreas = [
  "Fallingbrook",
  "Avalon",
  "Queenswood Heights",
  "Chapel Hill",
  "Convent Glen",
  "Surrounding neighbourhoods",
];

const nearbyAreas = [
  { name: "Stove Repair Kanata", href: "/stove-repair/kanata" },
  { name: "Stove Repair Stittsville", href: "/stove-repair/stittsville" },
  { name: "Stove Repair Nepean", href: "/stove-repair/nepean" },
  { name: "Stove Repair Vanier", href: "/stove-repair/vanier" },
  { name: "Stove Repair Barrhaven", href: "/stove-repair/barrhaven" },
  { name: "Stove Repair Mississippi Mills", href: "/stove-repair/mississippi-mills" },
  { name: "Stove Repair Arnprior", href: "/stove-repair/arnprior" },
  { name: "Stove Repair Carleton Place", href: "/stove-repair/carleton-place" },
];

const faqs = [
  {
    question: "Can I get same-day stove repair in Orleans?",
    answer: "Often yes — depending on our schedule.",
  },
  {
    question: "Why won’t my oven reach set temperature?",
    answer: "Usually sensor, element, or calibration — we test all three.",
  },
  {
    question: "Do you install electric ranges?",
    answer: "Yes — with suitable existing supply.",
  },
  {
    question: "Do you cover nearby Orleans communities?",
    answer: "Yes — Fallingbrook, Avalon, Chapel Hill, and more.",
  },
  {
    question: "Do you provide warranty coverage?",
    answer: "Yes — 90-day labour warranty.",
  },
];

const services = [
  { label: "Washer Repair Orleans", href: "/washer-repair/orleans" },
  { label: "Dryer Repair Orleans", href: "/dryer-repair/orleans" },
  { label: "Fridge Repair Orleans", href: "/fridge-repair/orleans" },
  { label: "Freezer Repair Orleans", href: "/freezer-repair/orleans" },
  { label: "Oven Repair Orleans", href: "/oven-repair/orleans" },
  { label: "Cooktop Repair Orleans", href: "/cooktop-repair/orleans" },
  { label: "Stove Repair Orleans", href: "/stove-repair/orleans" },
  { label: "Microwave Repair Orleans", href: "/microwave-repair/orleans" },
  { label: "Appliance Installation", href: "/appliance-installation/locations/ottawa" },
];

export default function StoveRepairOrleansPage() {
  return (
    <>
      <ServiceHero
        title="Dependable Stove Repair in Orleans"
        description="From Fallingbrook to Chapel Hill, our Orleans technicians repair electric ranges that won’t heat, bake unevenly, or show error codes. Affordable local service, done right."
        icon={<FaFire className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <>
            <p className="text-lg text-gray-200 mb-6">
              We service LG, Samsung, Whirlpool, GE, and Maytag electric ranges with same-day or next-day appointments when available.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Discover more about the community on our{" "}
              <Link href="/service-areas/orleans" className="font-semibold text-white underline hover:text-gray-200">
                Orleans service area page
              </Link>
              .
            </p>
          </>
        }
        phoneNumber="613-413-6969"
        phoneText="Call us"
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Stove Issues We Fix in Orleans" />

      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Range Installation in Orleans</h2>
            <p className="text-lg text-gray-700 mb-4">
              Looking for electric range installation in Orleans? Before replacing your unit, check our{" "}
              <Link href="/blog/repair-vs-replace-appliance" className="text-primary-600 hover:text-primary-700 font-semibold">
                repair vs. replace guide
              </Link>{" "}
              — it helps you make the right choice.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              For new purchases, we handle range installation in Orleans. We’ll connect and test using your existing supply where appropriate.
            </p>
            <p className="text-gray-700 mb-6">👉 No new electrical circuits or cabinetry modifications are included.</p>
            <Link href="/appliance-installation/oven" className="btn-primary inline-flex items-center justify-center">
              Learn more about Installation
            </Link>
          </div>
        </div>
      </section>

      <BenefitsSection applianceName="Stove" benefits={whyChooseUs} />

      <RepairOrReplaceSection description={repairOrReplaceDescription} />

      <InstallationCTASection
        applianceName="Range"
        description="Upgrading to a new unit? We also offer electric range installation in Orleans — fast, safe, and fully insured."
        href="/appliance-installation/oven"
      />

      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Orleans area, including:"
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
            👉 For complete coverage, visit our{" "}
            <Link href="/stove-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Stove Repair Ottawa
            </Link>{" "}
            page.
          </p>
        }
      />

      <ThingsToDoSection
        attractions={highlights}
        heading="Discover Orleans While We Work on Your Stove"
        description="Turn repair time into a mini outing:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Stove" faqs={faqs} />

      <CTASection
        heading="Schedule Your Stove Repair in Orleans"
        description="Oven not heating? Call Fixer Appliance Repair today to book quick service."
        buttonText="Book Online Now"
      />

      <RelatedServicesSection
        services={services}
        heading="Also Need Help With…"
        description="Our expertise goes beyond stoves — here's what else we do in Orleans:"
        applianceName="stove"
      />
    </>
  );
}
