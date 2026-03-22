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
import ServiceAreaSection from "@/components/ServiceAreaSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";

export const metadata: Metadata = {
  title: "Microwave Repair in Vanier – Local, Reliable Experts | Fixer",
  description:
    "Professional microwave repair in Vanier, including Overbrook and Beechwood Village. We fix heating, power, and control issues — with clear pricing and a 90-day warranty.",
  keywords:
    "microwave repair Vanier, microwave service Vanier, microwave not heating Vanier, Fixer Appliance Repair Vanier",
};

const commonIssues = [
  {
    title: "Microwave not turning on",
    description:
      "In older Vanier homes, worn wiring or bad outlets often cause this. We’ll restore safe power.",
  },
  {
    title: "No heat but lights and fan work",
    description:
      "Usually a magnetron or high-voltage issue. We’ll test and replace the part.",
  },
  {
    title: "Microwave makes buzzing or humming",
    description:
      "Loose transformers or worn capacitors often cause unusual noises. We’ll track and repair them.",
  },
  {
    title: "Touchpad not working",
    description:
      "Aged control panels often fail. We’ll repair or swap the faulty board.",
  },
  {
    title: "Interior light flickering",
    description:
      "Loose sockets or failing bulbs are frequent. We’ll handle it.",
  },
  {
    title: "Microwave shuts off randomly",
    description:
      "Sensors or control boards sometimes cut power mid-cycle. We’ll fix it fast.",
  },
];

const highlights = [
  {
    title: "Richelieu Park",
    description: "Enjoy a peaceful stroll through the mature forest trails.",
  },
  {
    title: "Vanier Museopark",
    description: "Explore local heritage and maple syrup traditions.",
  },
  {
    title: "Beechwood Avenue",
    description: "Relax at neighbourhood cafés and independent shops.",
  },
];

const whyChooseUs = [
  "Skilled Vanier microwave technicians with local expertise",
  "Straightforward pricing before we begin",
  "Same-day and next-day service availability",
  "90-day warranty for peace of mind",
];

const serviceAreas = [
  "Overbrook",
  "Beechwood Village",
  "Cardinal Glen",
  "Notre Dame des Champs",
  "Surrounding neighbourhoods",
];

const nearbyAreas = [
  { name: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { name: "Microwave Repair Orleans", href: "/microwave-repair/orleans" },
  { name: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { name: "Microwave Repair Mississippi Mills", href: "/microwave-repair/mississippi-mills" },
  { name: "Microwave Repair Arnprior", href: "/microwave-repair/arnprior" },
  { name: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you repair microwaves in Vanier apartments and homes?",
    answer: "Yes — all housing types.",
  },
  {
    question: "Why does my microwave keep shutting off?",
    answer: "Often overheating sensors or control board issues.",
  },
  {
    question: "Do you install microwaves?",
    answer: "Yes — with current electrical hookups.",
  },
  {
    question: "Do you work on all brands?",
    answer: "Yes — Whirlpool, LG, Samsung, GE, Panasonic.",
  },
  {
    question: "Do you provide warranty coverage?",
    answer: "Yes — every job comes with a 90-day labour warranty.",
  },
];

const services = [
  { label: "Washer Repair Vanier", href: "/washer-repair/vanier" },
  { label: "Dryer Repair Vanier", href: "/dryer-repair/vanier" },
  { label: "Fridge Repair Vanier", href: "/fridge-repair/vanier" },
  { label: "Freezer Repair Vanier", href: "/freezer-repair/vanier" },
  { label: "Oven Repair Vanier", href: "/oven-repair/vanier" },
  { label: "Cooktop Repair Vanier", href: "/cooktop-repair/vanier" },
  { label: "Microwave Repair Vanier", href: "/microwave-repair/vanier" },
  { label: "Appliance Installation", href: "/appliance-installation/dishwasher" },
];

export default function MicrowaveRepairVanierPage() {
  return (
    <>
      <ServiceHero
        title="Reliable Microwave Repair in Vanier"
        description="From Beechwood Village to Overbrook, our Vanier microwave repair team handles all issues — from heating failures to control board problems."
        icon={<FaWaveSquare className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <>
            <p className="text-lg text-gray-200 mb-6">
              We service LG, Samsung, Whirlpool, GE, and Maytag microwaves. Same-day and next-day appointments available.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Learn more about the community on our{" "}
              <Link href="/vanier" className="font-semibold text-white underline hover:text-gray-200">
                Local Vanier page
              </Link>
              .
            </p>
          </>
        }
        phoneNumber="613-413-6969"
        phoneText="Call us"
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Microwave Issues We Fix in Vanier" />

      <InstallationCTASection
        applianceName="Microwave"
        description="Got a new microwave? We also provide microwave installation in Vanier with same-day service available in most areas."
        href="/appliance-installation/microwave"
      />

      <BenefitsSection applianceName="Microwave" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="Microwaves often fail due to a single component like the magnetron or door switch. We'll help you decide when it's smarter to repair than replace — and give you an honest estimate either way." />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Vanier area, including:"
        neighborhoods={serviceAreas.filter(area => area !== "Surrounding neighbourhoods")}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name.replace("Microwave Repair ", ""),
          slug: area.href.replace("/microwave-repair/", "")
        }))}
        applianceType="microwave"
        nearbyAreasLabel="We also repair microwaves in:"
        surroundingLabel={serviceAreas.includes("Surrounding neighbourhoods") ? "Surrounding neighbourhoods" : "and surrounding neighbourhoods"}
        footerText={
          <p className="text-lg text-gray-700">
            👉 For full details, see our{" "}
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
        heading="Discover Vanier While We Work on Your Microwave"
        description="Use the time to explore:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Microwave" faqs={faqs} />

      <CTASection
        heading="Schedule Your Microwave Repair in Vanier"
        description="Need your microwave fixed fast? Reach out now to schedule service with Fixer Appliance Repair."
        buttonText="Book Online Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={services}
        heading="Also Need Help With…"
        description="Microwaves aren't all we repair — here are our other services in Vanier:"
        applianceName="Microwave"
      />
    </>
  );
}
