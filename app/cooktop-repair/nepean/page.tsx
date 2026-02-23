import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import CTASection from "@/components/CTASection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import FAQSection from "@/components/FAQSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import BenefitsSection from "@/components/BenefitsSection";
import ServiceHero from "@/components/ServiceHero";
export const metadata: Metadata = {
  title: "Cooktop Repair Nepean - Fast & Safe Cooktop Service | Fixer",
  description:
    "Fixer Appliance Repair provides expert cooktop repair in Nepean. From cracked glass and faulty burners to wiring issues and error codes, we service Whirlpool, Samsung, LG, GE & more. Same-day service, upfront pricing, 90-day warranty.",
};

const commonIssues = [
  {
    title: "Cooktop stopped working after cleaning",
    description: "Moisture in touch controls — we dry and test safely.",
  },
  {
    title: "One burner always stays cold",
    description: "Element or switch failure — we replace it quickly.",
  },
  {
    title: "Touch screen doesn't respond",
    description: "We inspect and replace the faulty touch module.",
  },
  {
    title: "Burner heats unevenly",
    description: "Internal damage or worn connections — we repair or replace.",
  },
  {
    title: "Popping sounds when on",
    description: "We check wiring for shorts or grounding faults.",
  },
  {
    title: "Hot light stays on forever",
    description: "Likely a sensor stuck in closed position.",
  },
  {
    title: "Glass top lifted or warped",
    description: "Mounting clips or adhesive failure — we remount securely.",
  },
  {
    title: "Cooktop not level with counter",
    description: "We refit mounting hardware or spacers.",
  },
  {
    title: "Breaker trips when using two burners",
    description: "Load imbalance or wiring issue — we balance and fix.",
  },
  {
    title: "Strange hum or buzz from surface",
    description: "Loose element or relay coil — we secure and test.",
  },
];

const whyChooseUs = [
  "Deep experience with brands from Whirlpool to Bosch",
  "Courteous service with quick turnaround",
  "No vague quotes — you get the full picture",
  "Flexible scheduling to work around your day",
  "We value your time and your kitchen",
];

const serviceAreas = [
  "Barrhaven East",
  "Centrepointe",
  "Merivale Gardens",
  "Manordale",
  "Tanglewood",
  "Fallowfield",
];

const nearbyAreas = [
  { name: "Kanata", href: "/cooktop-repair/kanata" },
  { name: "Stittsville", href: "/cooktop-repair/stittsville" },
  { name: "Orleans", href: "/cooktop-repair/orleans" },
  { name: "Vanier", href: "/cooktop-repair/vanier" },
  { name: "Barrhaven", href: "/cooktop-repair/barrhaven" },
  { name: "Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
  { name: "Arnprior", href: "/cooktop-repair/arnprior" },
  { name: "Carleton Place", href: "/cooktop-repair/carleton-place" },
];

const highlights = [
  { title: "Andrew Haydon Park", description: "Great views and walking paths." },
  { title: "Bruce Pit", description: "Beloved by families and dog owners." },
  { title: "Merivale Mall", description: "Shop or snack while we work." },
  { title: "Art Is In Bakery", description: "Creative baked goods and coffee." },
];

const faqs = [
  {
    question: "Do you work in Craig Henry and Tanglewood?",
    answer: "Yes — we repair cooktops across Nepean.",
  },
  {
    question: "Is it safe to repair a glass cooktop?",
    answer: "Yes — we follow safety standards for all repairs.",
  },
  {
    question: "Do you offer evening appointments?",
    answer: "Availability may vary — please contact us.",
  },
  {
    question: "What if I smell burning plastic from my cooktop?",
    answer: "Unplug it and call us — it may be wiring or insulation damage.",
  },
  {
    question: "Do you repair induction cooktops?",
    answer: "Yes — we service select models.",
  },
];

const otherServices = [
  { name: "Washer Repair Nepean", href: "/washer-repair/nepean" },
  { name: "Dryer Repair Nepean", href: "/dryer-repair/nepean" },
  { name: "Dishwasher Repair Nepean", href: "/dishwasher-repair/nepean" },
  { name: "Fridge Repair Nepean", href: "/fridge-repair/nepean" },
  { name: "Freezer Repair Nepean", href: "/freezer-repair/nepean" },
  { name: "Oven Repair Nepean", href: "/oven-repair/nepean" },
  { name: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { name: "Cooktop Installation Nepean", href: "/appliance-installation/cooktop" },
];

export default function CooktopRepairNepeanPage() {
  return (
    <>
      <ServiceHero
        title="Nepean Cooktop Repair – Safe & Professional"
        description="Need help with a misbehaving cooktop in Nepean? Whether it's a cracked glass top or burners that won't respond, Fixer Appliance Repair is your go-to for expert, safe, and local service. We repair brands like LG, Samsung, Whirlpool, GE, and Maytag."
        icon={<FaFire className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <p className="text-lg text-gray-100">
            👉 Discover local details on our{" "}
            <Link href="/nepean" className="font-semibold text-white underline-offset-4 hover:underline">
              Local Nepean page
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
        description="Upgrading to a new unit? We also offer cooktop installation in Nepean — fast, safe, and fully insured."
        href="/appliance-installation/cooktop"
      />

      <ServiceAreaSection
        title="Service Area: Nepean and Nearby"
        description="We provide appliance repair services across the entire Nepean area, including:"
        neighborhoods={serviceAreas}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name.replace("Cooktop Repair ", ""),
          slug: area.href.replace("/cooktop-repair/", "")
        }))}
        applianceType="cooktop"
        nearbyAreasLabel="We also serve:"
        footerText={
          <p className="text-lg text-gray-700">
            👉 Find all areas we serve on our{" "}
            <Link href="/cooktop-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Cooktop Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      <ThingsToDoSection
        attractions={highlights}
        heading="Enjoy Your Time in Nepean While We Repair the Cooktop"
        description="Don't just wait — explore a little:"
        linkText="Events in Nepean"
      />

      <FAQSection applianceName="Cooktop" faqs={faqs} />

      <CTASection 
        heading="Book Your Cooktop Repair in Nepean"
        description="Serving Nepean kitchens daily — schedule your service now."
        />

      {/* Related Services */}
      <RelatedServicesSection
        services={otherServices}
        heading="Also Need Help With..."
        description="We handle more than cooktops — here are our other services in Nepean:"
        applianceName="Cooktop"
      />
    </>
  );
}
