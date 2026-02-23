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
  title: "Cooktop Repair Kanata - Fast, Reliable Cooktop Service | Fixer",
  description:
    "Fixer Appliance Repair provides trusted cooktop repair in Kanata. From cracked glass and faulty burners to wiring issues and touch control failures, we service Whirlpool, Samsung, LG, GE & more. Same-day appointments, clear pricing, 90-day warranty.",
};

const commonIssues = [
  {
    title: "Cooktop not heating evenly",
    description: "Element or sensor could be faulty — we replace and recalibrate.",
  },
  {
    title: "No power to cooktop",
    description: "We test power supply, fuses, and connections.",
  },
  {
    title: "Burner cycles on and off",
    description: "This is often a failing infinite switch.",
  },
  {
    title: "Touch controls not responding",
    description: "Could be moisture damage or failed interface board.",
  },
  {
    title: "Hot surface light won't go off",
    description: "Sensor or indicator relay is likely stuck.",
  },
  {
    title: "Glass top cracked from pan",
    description: "We safely remove and install a new surface.",
  },
  {
    title: "Smells like burning",
    description: "We check wiring, element insulation, or spilled food inside.",
  },
  {
    title: "Circuit trips when in use",
    description: "We locate shorted elements or overloaded wiring.",
  },
  {
    title: "Cooktop won't turn off",
    description: "Faulty relay or stuck switch needs replacement.",
  },
  {
    title: "No sound from elements when on",
    description: "Indicates disconnected power or dead element.",
  },
];

const whyChooseUs = [
  "Experience with both built-in and freestanding units",
  "We keep common cooktop parts in stock",
  "You'll always know what to expect",
  "Friendly and honest service, every time",
  "Trusted by many local families",
];

const serviceAreas = [
  "Morgan's Grant",
  "Beaverbrook",
  "Katimavik-Hazeldean",
  "Glen Cairn",
  "Bridlewood",
  "Kanata Lakes",
  "Emerald Meadows",
];

const nearbyAreas = [
  { name: "Cooktop Repair Stittsville", href: "/cooktop-repair/stittsville" },
  { name: "Cooktop Repair Nepean", href: "/cooktop-repair/nepean" },
  { name: "Cooktop Repair Orleans", href: "/cooktop-repair/orleans" },
  { name: "Cooktop Repair Vanier", href: "/cooktop-repair/vanier" },
  { name: "Cooktop Repair Barrhaven", href: "/cooktop-repair/barrhaven" },
  { name: "Cooktop Repair Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
  { name: "Cooktop Repair Arnprior", href: "/cooktop-repair/arnprior" },
  { name: "Cooktop Repair Carleton Place", href: "/cooktop-repair/carleton-place" },
];

const highlights = [
  { title: "South March Highlands", description: "Scenic forest trails for walking or mountain biking." },
  { title: "Walter Baker Park", description: "Ideal for a short walk or picnic." },
  { title: "Kanata Centrum", description: "Plenty of shops, coffee, and dining." },
  { title: "Canadian Tire Centre", description: "Concerts, hockey, and more." },
];

const faqs = [
  {
    question: "Do you repair cooktops in Kanata Lakes and Bridlewood?",
    answer: "Yes — we offer cooktop repair across Kanata.",
  },
  {
    question: "Do you fix cracked glass tops?",
    answer: "Yes — we replace damaged glass surfaces.",
  },
  {
    question: "Can you repair cooktops with power issues?",
    answer: "Yes — we check switches, wiring, and fuses.",
  },
  {
    question: "Do you install new cooktops?",
    answer: "Yes — installation is available upon request.",
  },
  {
    question: "What brands do you see most often in Kanata?",
    answer: "Whirlpool, GE, Samsung, LG, and Frigidaire.",
  },
];

const otherServices = [
  { name: "Washer Repair Kanata", href: "/washer-repair/kanata" },
  { name: "Dryer Repair Kanata", href: "/dryer-repair/kanata" },
  { name: "Fridge Repair Kanata", href: "/fridge-repair/kanata" },
  { name: "Freezer Repair Kanata", href: "/freezer-repair/kanata" },
  { name: "Oven Repair Kanata", href: "/oven-repair/kanata" },
  { name: "Cooktop Repair Kanata", href: "/cooktop-repair/kanata" },
  { name: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
  { name: "Appliance Installation", href: "/appliance-installation/dishwasher" },
];

export default function CooktopRepairKanataPage() {
  return (
    <>
      <ServiceHero
        title="Cooktop Repair Services in Kanata"
        description="Cooktop not turning on? Based in Kanata, Fixer Appliance Repair offers professional troubleshooting and repair to get you cooking again without stress or delays. We repair all major electric cooktop brands, including LG, Samsung, Whirlpool, GE, and Maytag."
        icon={<FaFire className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <p className="text-lg text-gray-100">
            👉 Learn more about the community on our{" "}
            <Link href="/kanata" className="font-semibold text-white underline-offset-4 hover:underline">
              Local Kanata page
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
        description="Upgrading to a new unit? We also offer cooktop installation in Kanata — fast, safe, and fully insured."
        href="/appliance-installation/cooktop"
      />

      <ServiceAreaSection
        title="Service Area: Kanata and Nearby"
        description="We provide appliance repair services across the entire Kanata area, including:"
        neighborhoods={serviceAreas}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name.replace("Cooktop Repair ", ""),
          slug: area.href.replace("/cooktop-repair/", "")
        }))}
        applianceType="cooktop"
        nearbyAreasLabel="We also service:"
        footerText={
          <p className="text-lg text-gray-700">
            👉 Looking beyond Kanata? Visit our{" "}
            <Link href="/cooktop-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Cooktop Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Things to Do */}
      <ThingsToDoSection
        attractions={highlights.map(item => `${item.title} – ${item.description}`)}
        heading="Explore Kanata While We Fix Your Cooktop"
        description="Your cooktop repair is underway — why not enjoy Kanata while you wait?"
        
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Cooktop" faqs={faqs} />

      <CTASection 
        heading="Book Your Cooktop Repair in Kanata"
        description="Fast and reliable cooktop repair is just a call away."
        />

      {/* Related Services */}
      <RelatedServicesSection
        services={otherServices}
        heading="Also Need Help With..."
        description="We fix more than just cooktops — here are our other services in Kanata:"
        applianceName="Cooktop"
      />
    </>
  );
}

