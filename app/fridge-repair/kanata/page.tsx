import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import FAQSection from "@/components/FAQSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Fridge Repair Kanata – Fast, Reliable Local Experts | Fixer",
  description: "Fixer provides trusted fridge repair in Kanata. We fix cooling, leaks & noise issues for Whirlpool, LG, Samsung & more — with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Fridge not cold enough",
    description: "We check compressor, fans, and settings.",
  },
  {
    title: "Fridge makes buzzing sound",
    description: "Motor or evaporator fan might be worn.",
  },
  {
    title: "Freezer frosting over",
    description: "Likely defrost timer or gasket failure.",
  },
  {
    title: "Ice dispenser jammed",
    description: "We clear and adjust auger or chute.",
  },
  {
    title: "Fridge light stays on",
    description: "Door switch may need replacing.",
  },
  {
    title: "Door doesn't close easily",
    description: "Misaligned hinges or worn gaskets are common.",
  },
  {
    title: "Fridge smells bad",
    description: "Blocked drain line or food residue — we clean thoroughly.",
  },
  {
    title: "Food spoils too fast",
    description: "Unstable temperature — we test sensors.",
  },
  {
    title: "Water under crisper drawers",
    description: "Blocked defrost drain likely — we clear it.",
  },
  {
    title: "Touch controls unresponsive",
    description: "Control panel or wiring may need repair.",
  },
];

const benefits = [
  "Prompt and knowledgeable service for all fridge types",
  "We carry parts to speed up your repair",
  "Friendly team with years of appliance experience",
  "Clear quotes and honest recommendations",
  "We protect your floors and respect your time",
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
  { name: "Stittsville", slug: "/fridge-repair/stittsville" },
  { name: "Nepean", slug: "/fridge-repair/nepean" },
  { name: "Orleans", slug: "/fridge-repair/orleans" },
  { name: "Vanier", slug: "/fridge-repair/vanier" },
  { name: "Barrhaven", slug: "/fridge-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/fridge-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/fridge-repair/arnprior" },
  { name: "Carleton Place", slug: "/fridge-repair/carleton-place" },
];

const faqs = [
  {
    question: "Can you fix fridges in Glen Cairn and South March?",
    answer: "Yes — we serve all Kanata neighborhoods.",
  },
  {
    question: "Do you handle French-door refrigerator repairs?",
    answer: "Yes — including models from Samsung, LG, and GE.",
  },
  {
    question: "My fridge makes loud humming noises — is that fixable?",
    answer: "Yes — it may be the fan, compressor, or evaporator.",
  },
  {
    question: "Do you offer emergency fridge service?",
    answer: "Yes — especially when cooling fails suddenly.",
  },
  {
    question: "Do you stock parts for Whirlpool and Frigidaire?",
    answer: "Yes — we carry common parts and can order rare ones.",
  },
];

export default function FridgeRepairKanataPage() {
  return (
    <>
      <ServiceHero
        title="Kanata's Go-To Technicians for Fridge Repair"
        description="Fridge running too warm? Ice maker clogged? Fixer Appliance Repair offers trusted refrigerator repairs in Kanata, from thermostat failures to broken door seals."
        icon={<FaSnowflake className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <p className="text-lg text-gray-200 mb-8">
            We work with Whirlpool, LG, Samsung, GE, Maytag, and Frigidaire.
          </p>
        }
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} />

      {/* Installation Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Fridge Installation in Kanata</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                Replacing your fridge in Kanata?
              </p>
              <p className="text-center">
                Before buying, check our repair vs. replace guide — it explains costs, lifespan, and common failures.
              </p>
              <p className="text-center">
                If you've already purchased a new fridge, we provide installation in Kanata. We'll set it up, level it, and test cooling using your existing water and electrical hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ Note: we don't add new plumbing lines or high-voltage wiring.
              </p>
              <div className="text-center mt-6">
                <Link href="/fridge-installation" className="btn-primary">
                  Learn More About Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection applianceName="Fridge" benefits={benefits} />

      <RepairOrReplaceSection description="Refrigerators are expensive to replace — and many common issues are easy to fix. If your fridge is less than 12 years old, check our repair vs replace comparison to make a smart decision based on cost, age, and reliability." />

      <InstallationCTASection
        applianceName="Fridge"
        description="Upgrading to a new unit? We also offer fridge installation in Kanata — fast, safe, and fully insured."
        href="/appliance-installation/fridge"
      />

      <CTASection />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area: Kanata and Nearby"
        description="We provide appliance repair services across the entire Kanata area, including:"
        neighborhoods={serviceAreas}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name,
          slug: area.slug.replace("/fridge-repair/", "")
        }))}
        applianceType="fridge"
        nearbyAreasLabel="We also handle fridge repairs in:"
        footerText={
          <p className="text-lg text-gray-700">
            For full coverage, see our{" "}
            <Link href="/fridge-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Fridge Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Things to Do */}
      <ThingsToDoSection
        attractions={[
          "South March Highlands – scenic forest trails for walking or biking",
          "Walter Baker Park – open green spaces for a family break",
          "Kanata Centrum – shopping, coffee, and local dining",
          "Canadian Tire Centre – hockey, shows, and live concerts",
        ]}
        heading="Explore Kanata While We Fix Your Fridge"
        description="While our technician is taking care of your fridge, you don't need to waste the day — Kanata has plenty to see:"
        
        linkText="Ottawa Tourism Events"
      />

      {/* FAQ */}
      <FAQSection applianceName="Fridge" faqs={faqs} />

      {/* Schedule Service */}
      <CTASection 
        heading="Book Your Fridge Repair in Kanata"
        description="Don't let spoiled food ruin your day — we offer fast fridge repair across Kanata."
        
        />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Kanata", href: "/washer-repair/kanata" },
          { name: "Dryer Repair Kanata", href: "/dryer-repair/kanata" },
          { name: "Dishwasher Repair Kanata", href: "/dishwasher-repair/kanata" },
          { name: "Oven Repair Kanata", href: "/oven-repair/kanata" },
          { name: "Fridge Installation Kanata", href: "/fridge-installation" },
        ]}
        heading="Also Need Help With…"
        description="We repair more than just fridges — here are our other services in Kanata:"
        applianceName="Fridge"
      />

    </>
  );
}
