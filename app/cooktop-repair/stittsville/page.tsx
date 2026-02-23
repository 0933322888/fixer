import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import FAQSection from "@/components/FAQSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import BenefitsSection from "@/components/BenefitsSection";
import ServiceHero from "@/components/ServiceHero";
export const metadata: Metadata = {
  title: "Cooktop Repair Stittsville - Fast, Reliable Cooktop Service | Fixer",
  description:
    "Fixer Appliance Repair offers trusted cooktop repair in Stittsville. From cracked glass and faulty burners to wiring issues and error codes, we service Whirlpool, Samsung, LG, GE & more. Same-day service, clear pricing, 90-day warranty.",
};

const commonIssues = [
  {
    title: "Cooktop beeps randomly",
    description: "Sensor faults or interface issues — we replace or reset.",
  },
  {
    title: "One side not working",
    description: "Could be wiring or relay board failure — we test all zones.",
  },
  {
    title: "Buttons stick or don't press",
    description: "We repair or replace the touchpad layer.",
  },
  {
    title: "Cooktop smells strange",
    description: "Burned residue or overheating — we investigate and clean.",
  },
  {
    title: "Heating too slowly",
    description: "Weak elements or low voltage — we test performance.",
  },
  {
    title: "Surface cracked near edge",
    description: "We recommend replacing the entire top for safety.",
  },
  {
    title: "Burners stay hot after shutoff",
    description: "Malfunctioning switch or sensor needs replacement.",
  },
  {
    title: "Cooktop flashes error when turning on",
    description: "We decode and clear error, fixing the cause.",
  },
  {
    title: "No display at all",
    description: "Main control board might need replacing.",
  },
  {
    title: "Indicator light not working",
    description: "Could be a burned-out bulb or sensor wire issue.",
  },
];

const whyChooseUs = [
  "Focused on precision and safety",
  "Great with tricky wiring and cooktop calibration",
  "We show up when we say we will",
  "Simple pricing and no confusion",
  "Helpful advice if replacement is needed",
];

const serviceAreas = [
  "Crossing Bridge",
  "Jackson Trails",
  "Bryanston Gate",
  "West Ridge",
  "Timbermere",
  "Fairwinds",
];

const nearbyAreas = [
  { name: "Cooktop Repair Kanata", href: "/cooktop-repair/kanata" },
  { name: "Cooktop Repair Nepean", href: "/cooktop-repair/nepean" },
  { name: "Cooktop Repair Orleans", href: "/cooktop-repair/orleans" },
  { name: "Cooktop Repair Vanier", href: "/cooktop-repair/vanier" },
  { name: "Cooktop Repair Barrhaven", href: "/cooktop-repair/barrhaven" },
  { name: "Cooktop Repair Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
  { name: "Cooktop Repair Arnprior", href: "/cooktop-repair/arnprior" },
  { name: "Cooktop Repair Carleton Place", href: "/cooktop-repair/carleton-place" },
];

const highlights = [
  { title: "Amberwood Village Trails", description: "Lovely forested walkways." },
  { title: "Quitters Coffee", description: "Great stop for coffee lovers." },
  { title: "Village Square Park", description: "A welcoming outdoor space." },
];

const faqs = [
  {
    question: "Do you repair cooktops in Timbermere and Jackson Trails?",
    answer: "Yes — we frequently visit those neighborhoods.",
  },
  {
    question: "Can you fix unresponsive controls?",
    answer: "Yes — it may be a faulty touch panel or switch.",
  },
  {
    question: "Do you stock cooktop parts?",
    answer: "Yes — for most common brands.",
  },
  {
    question: "Do you remove old cooktops before installing a new one?",
    answer: "Yes — we handle the full process.",
  },
  {
    question: "How long does a repair usually take?",
    answer: "Most are completed in under 90 minutes.",
  },
];

const otherServices = [
  { name: "Washer Repair Stittsville", href: "/washer-repair/stittsville" },
  { name: "Dryer Repair Stittsville", href: "/dryer-repair/stittsville" },
  { name: "Dishwasher Repair Stittsville", href: "/dishwasher-repair/stittsville" },
  { name: "Fridge Repair Stittsville", href: "/fridge-repair/stittsville" },
  { name: "Freezer Repair Stittsville", href: "/freezer-repair/stittsville" },
  { name: "Oven Repair Stittsville", href: "/oven-repair/stittsville" },
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Cooktop Installation Stittsville", href: "/appliance-installation/cooktop" },
];

export default function CooktopRepairStittsvillePage() {
  return (
    <>
      <ServiceHero
        title="Cooktop Not Heating? Stittsville Experts Can Help"
        description="Cooktop acting up in your Stittsville kitchen? From flickering burners to cracked tops, our skilled technicians are nearby and ready to help — same-day service available. We service all major brands including LG, Samsung, Whirlpool, GE, and Maytag."
        icon={<FaFire className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <p className="text-lg text-gray-100">
            👉 Learn more about the area on our{" "}
            <Link
              href="/stittsville"
              className="font-semibold text-white underline-offset-4 hover:underline"
            >
              Local Stittsville page
            </Link>
            .
          </p>
        }
        useSectionPadding={true}
      />

      <CommonIssuesSection issues={commonIssues} />

      <BenefitsSection 
        heading="Why choose us"
        benefits={whyChooseUs}
        applianceName="Cooktop"
      />

      <RepairOrReplaceSection description="Replacing a cooktop can be costly. If it is still under 10 to 12 years old, our guide can help you decide if it is worth saving." />

      <InstallationCTASection
        applianceName="Cooktop"
        description="Upgrading to a new unit? We also offer cooktop installation in Stittsville — fast, safe, and fully insured."
        href="/appliance-installation/cooktop"
      />

      <ServiceAreaSection
        title="Service Area: Stittsville and Nearby"
        description="We provide appliance repair services across the entire Stittsville area, including:"
        neighborhoods={serviceAreas}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name.replace("Cooktop Repair ", ""),
          slug: area.href.replace("/cooktop-repair/", "")
        }))}
        applianceType="cooktop"
        nearbyAreasLabel="We also help nearby residents in:"
        footerText={
          <p className="text-lg text-gray-700">
            👉 For full coverage of the Ottawa region, visit our{" "}
            <Link href="/cooktop-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Cooktop Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />


      {/* Things To Do */}
      <ThingsToDoSection
        attractions={highlights}
        heading="Explore the Community While We Fix Your Cooktop"
        description="Step away for a bit and enjoy Stittsville's charm:"
        linkText="Events in Stittsville"
      />

      <FAQSection applianceName="Cooktop" faqs={faqs} />

      <CTASection 
        heading="Book Your Cooktop Repair in Stittsville"
        description="Let's get your cooktop working again — book now:"
        />

      {/* Related Services */}
      <RelatedServicesSection
        services={otherServices}
        heading="Also Need Help With..."
        description="Need more than cooktop repair? Here's what else we service in Stittsville:"
        applianceName="Cooktop"
      />
    </>
  );
}
