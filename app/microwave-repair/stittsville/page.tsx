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
import CommonIssuesSection from "@/components/CommonIssuesSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";

export const metadata: Metadata = {
  title: "Microwave Repair in Stittsville – Local, Fast Service | Fixer",
  description:
    "Dependable microwave repair in Stittsville, from Fairwinds to Timbermere. We fix heating, sparking, and touchpad issues on all brands — backed by a 90-day warranty.",
  keywords:
    "microwave repair Stittsville, microwave service Stittsville, microwave not heating Stittsville, Fixer Appliance Repair Stittsville",
};

const commonIssues = [
  {
    title: "Microwave powers on but won’t heat",
    description: "High-voltage components may have failed.",
  },
  {
    title: "Door won’t latch properly",
    description: "We fix latch hooks and switches.",
  },
  {
    title: "Flashing display or error message",
    description: "We interpret and reset diagnostic codes.",
  },
  {
    title: "Microwave makes rattling sound",
    description: "Could be fan, motor, or loose internal part.",
  },
  {
    title: "Doesn’t recognize button presses",
    description: "Keypad or control circuit board may be at fault.",
  },
  {
    title: "Interior light not working",
    description: "We replace with manufacturer-approved parts.",
  },
  {
    title: "Stuck in child lock mode",
    description: "We reset or replace the control board.",
  },
  {
    title: "Paint peeling inside",
    description: "We clean and repaint using microwave-safe coating.",
  },
  {
    title: "Burning smell when running",
    description: "Spill residue or shorted wiring — we resolve it.",
  },
  {
    title: "Microwave won’t stop running",
    description: "Faulty relay or control system.",
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
  "Experience with all major microwave brands",
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
  { name: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
  { name: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { name: "Microwave Repair Orleans", href: "/microwave-repair/orleans" },
  { name: "Microwave Repair Vanier", href: "/microwave-repair/vanier" },
  { name: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { name: "Microwave Repair Mississippi Mills", href: "/microwave-repair/mississippi-mills" },
  { name: "Microwave Repair Arnprior", href: "/microwave-repair/arnprior" },
  { name: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you repair microwaves in Fairwinds and Timbermere?",
    answer: "Yes — we serve all Stittsville neighborhoods.",
  },
  {
    question: "My microwave sparks — is that dangerous?",
    answer: "It can be — unplug and contact us immediately.",
  },
  {
    question: "Do you repair touchpad issues?",
    answer: "Yes — we handle both hardware and control failures.",
  },
  {
    question: "Can you service built-in microwave drawers?",
    answer: "Yes — including premium models.",
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
  { label: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { label: "Appliance Installation", href: "/appliance-installation/dishwasher" },
];

export default function MicrowaveRepairStittsvillePage() {
  return (
    <>
      <ServiceHero
        title="Stittsville Microwave Repair – We Get It Working Again"
        description="Microwave won't start or smells like burning? If you're in Stittsville, our local techs can bring it back to life in no time. Fixer Appliance Repair handles all brands and models with care."
        icon={<FaWaveSquare className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <>
            <p className="text-lg text-gray-200 mb-6">
              We handle LG, Samsung, Whirlpool, GE, and Maytag — same-day or next-day visits when available.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Check more details on our{" "}
              <Link href="/stittsville" className="font-semibold text-white underline hover:text-gray-200">
                Microwave Repair Stittsville page
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
        description="Upgrading to a new unit? We also offer microwave installation in Stittsville — fast, safe, and fully insured."
        href="/appliance-installation/microwave"
      />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area: Stittsville and Nearby"
        description="We provide appliance repair services across the entire Stittsville area, including:"
        neighborhoods={serviceAreas.filter(area => area !== "Surrounding neighbourhoods")}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name.replace("Microwave Repair ", ""),
          slug: area.href.replace("/microwave-repair/", "")
        }))}
        applianceType="microwave"
        nearbyAreasLabel="We also repair microwaves for customers in:"
        surroundingLabel={serviceAreas.includes("Surrounding neighbourhoods") ? "Surrounding neighbourhoods" : "and surrounding neighbourhoods"}
        footerText={
          <p className="text-lg text-gray-700">
            For full coverage across Ottawa, visit our{" "}
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
        heading="Take a Break in Stittsville While We Repair Your Microwave"
        description="Even a short wait can be pleasant if you step outside:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Microwave" faqs={faqs} />

      <CTASection
        heading="Book Your Microwave Repair in Stittsville"
        description="Local help, friendly service — schedule today."
        buttonText="Book Online Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={services}
        heading="Also Need Help With…"
        description="Need more than microwave repair? Here's what else we service in Stittsville:"
        applianceName="Microwave"
      />
    </>
  );
}
