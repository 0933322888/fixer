import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
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
  title: "Cooktop Repair in Carleton Place - Fast, Local Service | Fixer",
  description:
    "Expert cooktop repair in Carleton Place, from Riverside Park to Mississippi Quays. Same or next-day service, honest pricing, and a 90-day warranty on all work.",
};

const commonIssues = [
  {
    title: "Cooktop won't start",
    description:
      "Power supply problems or faulty control boards often keep the unit off. We'll track it down.",
  },
  {
    title: "Burner cycling too often",
    description: "A worn infinite switch may cause burners to turn on and off randomly. We'll replace it.",
  },
  {
    title: "Glass top cracked from heavy pans",
    description: "We'll install a brand-new glass surface safely.",
  },
  {
    title: "Cooktop smells electrical",
    description: "Signs of wiring damage or failing insulation. We'll inspect and repair to prevent hazards.",
  },
  {
    title: "Cooktop won't turn off",
    description: "A stuck relay or switch can keep heat flowing. We'll fix it fast.",
  },
  {
    title: "No heat sounds when on",
    description: "If burners stay silent, it may be disconnected wiring. We'll reconnect and restore heating.",
  },
];

const whyChooseUs = [
  "Local Carleton Place team with experience across all major cooktop brands",
  "Same-day and next-day service options",
  "Honest pricing without upselling",
  "90-day warranty included on labour",
];

const serviceAreas = ["Carleton Place West", "Carleton Place East", "Riverside Park", "Mississippi Quays"];

const nearbyAreas = [
  { name: "Kanata", href: "/cooktop-repair/kanata" },
  { name: "Stittsville", href: "/cooktop-repair/stittsville" },
  { name: "Nepean", href: "/cooktop-repair/nepean" },
  { name: "Orleans", href: "/cooktop-repair/orleans" },
  { name: "Vanier", href: "/cooktop-repair/vanier" },
  { name: "Barrhaven", href: "/cooktop-repair/barrhaven" },
  { name: "Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
  { name: "Arnprior", href: "/cooktop-repair/arnprior" },
];

const highlights = [
  { title: "Riverside Park", description: "Scenic riverside paths." },
  { title: "Downtown Carleton Place", description: "Shopping and restaurants to enjoy." },
  { title: "Beckwith Heritage Museum", description: "History and culture in one stop." },
];

const faqs = [
  {
    question: "Do you offer same-day cooktop repair in Carleton Place?",
    answer: "When possible, yes.",
  },
  {
    question: "Why is my cooktop glass cracked?",
    answer: "Usually from dropped pans — we replace glass tops.",
  },
  {
    question: "Do you install new cooktops?",
    answer: "Yes — using existing hookups.",
  },
  {
    question: "Do you also cover nearby areas?",
    answer: "Yes — Beckwith, Franktown, and others.",
  },
  {
    question: "Is the repair under warranty?",
    answer: "Yes — all work has a 90-day warranty.",
  },
];

const otherServices = [
  { name: "Washer Repair Carleton Place", href: "/washer-repair/carleton-place" },
  { name: "Dryer Repair Carleton Place", href: "/dryer-repair/carleton-place" },
  { name: "Dishwasher Repair Carleton Place", href: "/dishwasher-repair/carleton-place" },
  { name: "Fridge Repair Carleton Place", href: "/fridge-repair/carleton-place" },
  { name: "Freezer Repair Carleton Place", href: "/freezer-repair/carleton-place" },
  { name: "Oven Repair Carleton Place", href: "/oven-repair/carleton-place" },
  { name: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
  { name: "Cooktop Installation Carleton Place", href: "/appliance-installation/cooktop" },
];

export default function CooktopRepairCarletonPlacePage() {
  return (
    <>
      <ServiceHero
        title="Reliable Cooktop Repair in Carleton Place"
        description="Cooktop not heating properly or sparking? Fixer Appliance Repair offers quick, professional service for families throughout Carleton Place. We service LG, Samsung, Whirlpool, GE, Maytag, and more."
        icon={<FaFire className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <p className="text-lg text-gray-100">
            Discover more about the community on our{" "}
            <Link
              href="/carleton-place"
              className="font-semibold text-white underline-offset-4 hover:underline"
            >
              Local Carleton Place page
            </Link>
            .
          </p>
        }
        useSectionPadding={true}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-12 text-center">
              Common Cooktop Issues We Fix in Carleton Place
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {commonIssues.map((issue) => (
                <div
                  key={issue.title}
                  className="rounded-lg border border-gray-200 p-6 transition-colors hover:border-primary-500"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{issue.title}</h3>
                  <p className="text-sm text-gray-600">{issue.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection 
        heading="Why Choose Us"
        benefits={whyChooseUs}
        applianceName="Cooktop"
      />

      <RepairOrReplaceSection description="Replacing a cooktop can be costly. If it is still under 10 to 12 years old, our guide can help you decide if it is worth saving." />

      <InstallationCTASection
        applianceName="Cooktop"
        description="Upgrading to a new unit? We also offer cooktop installation in Carleton Place — fast, safe, and fully insured."
        href="/appliance-installation/cooktop"
      />

      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Carleton Place area, including:"
        neighborhoods={serviceAreas}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name,
          slug: area.href.replace("/cooktop-repair/", "")
        }))}
        applianceType="cooktop"
        nearbyAreasLabel="We also serve:"
        footerText={
          <p className="text-lg text-gray-700">
            For a full overview of our services, check the{" "}
            <Link href="/cooktop-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Cooktop Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      <ThingsToDoSection
        attractions={highlights}
        heading="Take a Break in Carleton Place While We Fix Your Cooktop"
        description="Make the most of your wait with these places:"
        linkText="See events in Carleton Place"
      />

      <FAQSection applianceName="Cooktop" faqs={faqs} />

      <CTASection 
        heading="Schedule Your Cooktop Repair in Carleton Place"
        description="Burners acting up? Don't wait — text or call Fixer Appliance Repair to book service:"
        buttonText="Book Service Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={otherServices}
        heading="Also Need Help With..."
        description="Cooktop issues aren't the only thing we handle — here are more services in Carleton Place:"
        applianceName="Cooktop"
      />
    </>
  );
}
