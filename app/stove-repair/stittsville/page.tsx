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
import CommonIssuesSection from "@/components/CommonIssuesSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";

export const metadata: Metadata = {
  title: "Stove Repair in Stittsville – Electric Ranges & Local Service | Fixer",
  description:
    "Dependable electric stove repair in Stittsville, from Fairwinds to Timbermere. We fix burners, ovens, and controls on all brands — backed by a 90-day warranty.",
  keywords:
    "stove repair Stittsville, range repair Stittsville, electric stove repair Stittsville, Fixer Appliance Repair Stittsville",
};

const repairOrReplaceDescription =
  "Electric ranges often fail one burner, sensor, or board at a time while the rest of the unit stays solid. We'll help you decide when repair beats replacement — with straight answers and clear pricing.";

const commonIssues = [
  {
    title: "Oven won’t heat but surface works",
    description: "Element, fuse, or sensor on the oven circuit — we isolate and fix.",
  },
  {
    title: "Oven door won’t latch",
    description: "We fix hooks, switches, and alignment.",
  },
  {
    title: "Flashing display or error message",
    description: "We interpret codes and reset or repair the control system.",
  },
  {
    title: "Rattling when convection runs",
    description: "Fan blade or motor wear — we repair or replace.",
  },
  {
    title: "Burner won’t respond to dial",
    description: "Switch or harness fault — we replace the failed part.",
  },
  {
    title: "Interior oven light out",
    description: "Bulb, socket, or door switch — common quick fixes.",
  },
  {
    title: "Stuck in lock or clean mode",
    description: "We reset controls or repair latch and sensors.",
  },
  {
    title: "Chipped enamel inside oven",
    description: "We assess safety and touch up or replace liners when needed.",
  },
  {
    title: "Smell when baking",
    description: "Spills on hidden bake element or wiring — we clean and repair.",
  },
  {
    title: "Relay stuck — oven won’t turn off",
    description: "We replace faulty relays or boards.",
  },
];

const highlights = [
  {
    title: "Amberwood Village Trails",
    description: "Unwind with a walk through quiet neighbourhood paths.",
  },
  {
    title: "Quitters Coffee",
    description: "Sip and relax on the patio while we repair.",
  },
  {
    title: "Village Square Park",
    description: "A small but charming park right in Stittsville.",
  },
];

const whyChooseUs = [
  "Experience with major electric range brands",
  "Timely, respectful, and efficient repairs",
  "Affordable rates without sacrificing quality",
  "We’re happy to answer all your questions",
  "No mess left behind",
];

const serviceAreas = [
  "Crossing Bridge",
  "Jackson Trails",
  "Bryanston Gate",
  "West Ridge",
  "Timbermere",
  "Fairwinds",
  "Surrounding neighbourhoods",
];

const nearbyAreas = [
  { name: "Stove Repair Kanata", href: "/stove-repair/kanata" },
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
    question: "Do you repair stoves in Fairwinds and Timbermere?",
    answer: "Yes — we serve all Stittsville neighborhoods.",
  },
  {
    question: "My oven smells hot — is that dangerous?",
    answer: "It can be — turn off the breaker and call us to inspect.",
  },
  {
    question: "Do you fix touchpad and knob issues?",
    answer: "Yes — we handle both electronic and mechanical controls.",
  },
  {
    question: "Do you work on double-oven ranges?",
    answer: "Yes — many models, contact us with the brand.",
  },
  {
    question: "Do you offer repair guarantees?",
    answer: "Yes — 90 days for parts and labor.",
  },
];

const services = [
  { label: "Washer Repair Stittsville", href: "/washer-repair/stittsville" },
  { label: "Dryer Repair Stittsville", href: "/dryer-repair/stittsville" },
  { label: "Fridge Repair Stittsville", href: "/fridge-repair/stittsville" },
  { label: "Freezer Repair Stittsville", href: "/freezer-repair/stittsville" },
  { label: "Oven Repair Stittsville", href: "/oven-repair/stittsville" },
  { label: "Cooktop Repair Stittsville", href: "/cooktop-repair/stittsville" },
  { label: "Stove Repair Stittsville", href: "/stove-repair/stittsville" },
  { label: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { label: "Appliance Installation", href: "/appliance-installation/locations/stittsville" },
];

export default function StoveRepairStittsvillePage() {
  return (
    <>
      <ServiceHero
        title="Stittsville Stove Repair – We Get It Working Again"
        description="Burner dead or oven won’t hold temp? If you're in Stittsville, our local techs can bring your electric range back to life. Fixer handles all major brands with care."
        icon={<FaFire className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <>
            <p className="text-lg text-gray-200 mb-6">
              We handle LG, Samsung, Whirlpool, GE, and Maytag — same-day or next-day visits when available.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Check more details on our{" "}
              <Link href="/service-areas/stittsville" className="font-semibold text-white underline hover:text-gray-200">
                Stittsville service area page
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
        description="Upgrading to a new unit? We also offer electric range installation in Stittsville — fast, safe, and fully insured."
        href="/appliance-installation/oven"
      />

      <ServiceAreaSection
        title="Service Area: Stittsville and Nearby"
        description="We provide appliance repair services across the entire Stittsville area, including:"
        neighborhoods={serviceAreas.filter((area) => area !== "Surrounding neighbourhoods")}
        nearbyAreas={nearbyAreas.map((area) => ({
          name: area.name.replace("Stove Repair ", ""),
          slug: area.href.replace("/stove-repair/", ""),
        }))}
        applianceType="stove"
        nearbyAreasLabel="We also repair stoves for customers in:"
        surroundingLabel={
          serviceAreas.includes("Surrounding neighbourhoods")
            ? "Surrounding neighbourhoods"
            : "and surrounding neighbourhoods"
        }
        footerText={
          <p className="text-lg text-gray-700">
            For full coverage across Ottawa, visit our{" "}
            <Link href="/stove-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Stove Repair Ottawa
            </Link>{" "}
            page.
          </p>
        }
      />

      <ThingsToDoSection
        attractions={highlights}
        heading="Take a Break in Stittsville While We Repair Your Stove"
        description="Even a short wait can be pleasant if you step outside:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Stove" faqs={faqs} />

      <CTASection
        heading="Book Your Stove Repair in Stittsville"
        description="Local help, friendly service — schedule today."
        buttonText="Book Online Now"
      />

      <RelatedServicesSection
        services={services}
        heading="Also Need Help With…"
        description="Need more than stove repair? Here's what else we service in Stittsville:"
        applianceName="stove"
      />
    </>
  );
}
