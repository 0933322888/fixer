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
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Microwave Repair in Kanata – Fast, Affordable Service | Fixer",
  description:
    "Trusted microwave repair in Kanata, from Bridlewood to Kanata Lakes. We fix heating, sparking, and display issues on all major brands — with clear pricing and 90-day warranty.",
  keywords:
    "microwave repair Kanata, microwave service Kanata, microwave not heating Kanata, Fixer Appliance Repair Kanata",
};

const commonIssues = [
  {
    title: "Microwave won’t turn on",
    description: "Check fuse, door switch, or power supply — we test and restore.",
  },
  {
    title: "No heat but lights and fan work",
    description: "Usually a magnetron or high-voltage issue.",
  },
  {
    title: "Touchpad unresponsive",
    description: "We repair or replace faulty panels.",
  },
  {
    title: "Strange smell when heating",
    description: "Food residue or burned parts — we clean and inspect.",
  },
  {
    title: "Microwave makes grinding noise",
    description: "Could be turntable motor or fan blade obstruction.",
  },
  {
    title: "Display flashes random codes",
    description: "We reset and diagnose control board errors.",
  },
  {
    title: "Oven gets too hot outside",
    description: "We check vents and interior shielding.",
  },
  {
    title: "Interior light flickers",
    description: "Could be a loose bulb or electrical short.",
  },
  {
    title: "Microwave won’t stop beeping",
    description: "Control error — we recalibrate or replace logic board.",
  },
  {
    title: "Heats unevenly",
    description: "Stirrer fan or sensor may be failing.",
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
  "Skilled with microwave sensors, fans, and door switches",
  "We show up ready to solve your issue",
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
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
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
    question: "Do you repair microwaves in Glen Cairn and Morgan’s Grant?",
    answer: "Yes — we provide repair service across Kanata.",
  },
  {
    question: "My microwave isn’t heating — can that be fixed?",
    answer: "Yes — usually a magnetron, fuse, or door switch issue.",
  },
  {
    question: "Do you repair built-in microwaves?",
    answer: "Yes — including drawer and over-the-range models.",
  },
  {
    question: "Can you replace a broken turntable motor?",
    answer: "Absolutely — we carry those parts.",
  },
  {
    question: "Do you offer installation service?",
    answer: "Yes — for over-the-range and built-in models.",
  },
];

const services = [
  { label: "Washer Repair Kanata", href: "/washer-repair/kanata" },
  { label: "Dryer Repair Kanata", href: "/dryer-repair/kanata" },
  { label: "Fridge Repair Kanata", href: "/fridge-repair/kanata" },
  { label: "Freezer Repair Kanata", href: "/freezer-repair/kanata" },
  { label: "Oven Repair Kanata", href: "/oven-repair/kanata" },
  { label: "Cooktop Repair Kanata", href: "/cooktop-repair/kanata" },
  { label: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
  { label: "Appliance Installation", href: "/appliance-installation/dishwasher" },
];

export default function MicrowaveRepairKanataPage() {
  return (
    <>
      <ServiceHero
        title="Reliable Microwave Repair in Kanata"
        description="When your microwave stops heating or sparks inside, it's time to call the experts. We provide trusted microwave repair services throughout Kanata — fast, safe, and affordable."
        icon={<FaWaveSquare className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <>
            <p className="text-lg text-gray-200 mb-6">
              We service LG, Samsung, Whirlpool, GE, and Maytag microwaves.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Get more local info on our{" "}
              <Link href="/kanata" className="font-semibold text-white underline hover:text-gray-200">
                Local Kanata page
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

      {/* Microwave Installation CTA */}
      <InstallationCTASection
        applianceName="Microwave"
        description="Got a new microwave? We also provide microwave installation in Kanata with same-day service available in most areas."
        href="/appliance-installation/microwave"
      />

      <BenefitsSection applianceName="Microwave" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="Microwaves often fail due to a single component like the magnetron or door switch. We'll help you decide when it's smarter to repair than replace — and give you an honest estimate either way." />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area: Kanata and Nearby"
        description="We provide appliance repair services across the entire Kanata area, including:"
        neighborhoods={serviceAreas.filter(area => area !== "Surrounding neighbourhoods")}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name.replace("Microwave Repair ", ""),
          slug: area.href.replace("/microwave-repair/", "")
        }))}
        applianceType="microwave"
        nearbyAreasLabel="Our Kanata microwave repair services also extend to:"
        surroundingLabel={serviceAreas.includes("Surrounding neighbourhoods") ? "Surrounding neighbourhoods" : "and surrounding neighbourhoods"}
        footerText={
          <p className="text-lg text-gray-700">
            👉 For all locations we cover, check our{" "}
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
        heading="Explore Kanata While We Fix Your Microwave"
        description="A broken microwave doesn't have to ruin your day — while we repair it, you can check out:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Microwave" faqs={faqs} />

      <CTASection
        heading="Book Your Microwave Repair in Kanata"
        description="Need your microwave up and running again? Let's book your service."
        buttonText="Book Online Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={services}
        heading="Also Need Help With…"
        description="We fix more than microwaves — here are our other services in Kanata:"
        applianceName="Microwave"
      />
    </>
  );
}
