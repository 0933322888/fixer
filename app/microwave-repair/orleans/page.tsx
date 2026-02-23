import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import FAQSection from "@/components/FAQSection";
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
import ServiceAreaSection from "@/components/ServiceAreaSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Microwave Repair in Orleans – Fast, Local Service | Fixer",
  description:
    "Expert microwave repair in Orleans, serving Fallingbrook, Avalon, and Chapel Hill. We fix heating, control, and power issues on all brands — with upfront pricing and a 90-day warranty.",
  keywords:
    "microwave repair Orleans, microwave service Orleans, microwave not heating Orleans, Fixer Appliance Repair Orleans",
};

const commonIssues = [
  {
    title: "Microwave won’t power on",
    description:
      "In Orleans homes, this is often a blown fuse or faulty door switch. We’ll test and restore power safely.",
  },
  {
    title: "Heats unevenly",
    description:
      "If your leftovers come out hot on one side and cold on the other, the stirrer fan or sensor may be failing.",
  },
  {
    title: "Touchpad unresponsive",
    description:
      "Moisture or worn panels often stop buttons from working. We’ll repair or replace the controls.",
  },
  {
    title: "Strange smell while cooking",
    description:
      "Food residue or burned wiring can create odors. We’ll inspect and clean it properly.",
  },
  {
    title: "Microwave keeps beeping",
    description:
      "Control errors often trigger endless beeping. We’ll recalibrate or replace the logic board.",
  },
  {
    title: "Display flashing codes",
    description:
      "Samsung and LG models sometimes show random codes. We’ll decode and repair them.",
  },
];

const highlights = [
  {
    title: "Petrie Island",
    description: "Relax on riverside trails and beaches while we repair your microwave.",
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
  "Local Orleans microwave repair and installation experts",
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
  { name: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { name: "Microwave Repair Vanier", href: "/microwave-repair/vanier" },
  { name: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { name: "Microwave Repair Mississippi Mills", href: "/microwave-repair/mississippi-mills" },
  { name: "Microwave Repair Arnprior", href: "/microwave-repair/arnprior" },
  { name: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
];

const faqs = [
  {
    question: "Can I get same-day microwave repair in Orleans?",
    answer: "Often yes — depending on our schedule.",
  },
  {
    question: "Why is my microwave not heating food?",
    answer: "Usually a magnetron, capacitor, or diode issue.",
  },
  {
    question: "Do you install over-the-range microwaves?",
    answer: "Yes — with existing hookups.",
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
  { label: "Microwave Repair Orleans", href: "/microwave-repair/orleans" },
  { label: "Appliance Installation", href: "/appliance-installation/dishwasher" },
];

export default function MicrowaveRepairOrleansPage() {
  return (
    <>
      <ServiceHero
        title="Dependable Microwave Repair in Orleans"
        description="From Fallingbrook to Chapel Hill, our Orleans technicians repair microwaves that won't heat, spark inside, or display error codes. Affordable and local service, done right."
        icon={<FaWaveSquare className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <>
            <p className="text-lg text-gray-200 mb-6">
              We service LG, Samsung, Whirlpool, GE, and Maytag microwaves with same-day or next-day appointments when available.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Discover more about the community on our{" "}
              <Link href="/orleans" className="font-semibold text-white underline hover:text-gray-200">
                Local Orleans page
              </Link>
              .
            </p>
          </>
        }
        phoneNumber="613-413-6969"
        phoneText="Call us"
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Microwave Issues We Fix in Orleans" />

      {/* Installation Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Microwave Installation in Orleans</h2>
            <p className="text-lg text-gray-700 mb-4">
              Looking for microwave installation in Orleans? Before replacing your unit, check our{" "}
              <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                repair vs. replace guide
              </Link>{" "}
              — it helps you make the right choice.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              For new purchases, we handle microwave installation in Orleans. We’ll connect and test it using your existing hookups.
            </p>
            <p className="text-gray-700 mb-6">
              👉 No new electrical circuits or cabinetry modifications are included.
            </p>
            <Link href="/appliance-installation/microwave" className="btn-primary inline-flex items-center justify-center">
              Learn more about Installation
            </Link>
          </div>
        </div>
      </section>

      <BenefitsSection applianceName="Microwave" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="Microwaves often fail due to a single component like the magnetron or door switch. We'll help you decide when it's smarter to repair than replace — and give you an honest estimate either way." />

      <InstallationCTASection
        applianceName="Microwave"
        description="Upgrading to a new unit? We also offer microwave installation in Orleans — fast, safe, and fully insured."
        href="/appliance-installation/microwave"
      />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Orleans area, including:"
        neighborhoods={serviceAreas.filter(area => area !== "Surrounding neighbourhoods")}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name.replace("Microwave Repair ", ""),
          slug: area.href.replace("/microwave-repair/", "")
        }))}
        applianceType="microwave"
        nearbyAreasLabel="We also serve:"
        surroundingLabel={serviceAreas.includes("Surrounding neighbourhoods") ? "Surrounding neighbourhoods" : "and surrounding neighbourhoods"}
        footerText={
          <p className="text-lg text-gray-700">
            👉 For complete coverage, visit our{" "}
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
        heading="Discover Orleans While We Work on Your Microwave"
        description="Turn repair time into a mini outing:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Microwave" faqs={faqs} />

      <CTASection
        heading="Schedule Your Microwave Repair in Orleans"
        description="Microwave not heating? Call Fixer Appliance Repair today to book quick service."
        buttonText="Book Online Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={services}
        heading="Also Need Help With…"
        description="Our expertise goes beyond microwaves — here's what else we do in Orleans:"
        applianceName="Microwave"
      />
    </>
  );
}
