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
  title: "Fridge Repair Stittsville – Fast, Local Service You Can Trust | Fixer",
  description: "Fixer provides expert fridge repair in Stittsville. We fix cooling, leaks & noise issues for Samsung, Whirlpool, LG & more — with same-day service and warranty.",
};

const commonIssues = [
  {
    title: "Fridge warm, freezer cold",
    description: "Airflow blockage or damper issue — we restore balance.",
  },
  {
    title: "Humming all the time",
    description: "May be a noisy compressor or fan motor.",
  },
  {
    title: "Leaking from front",
    description: "Check door gasket and condensation tray.",
  },
  {
    title: "Freezer burns food",
    description: "Bad door seal or overcooling — we fix both.",
  },
  {
    title: "Lights out inside",
    description: "Could be bulb, socket, or switch.",
  },
  {
    title: "Water dispenser leaking",
    description: "We replace valve or tighten connections.",
  },
  {
    title: "Ice cubes too small",
    description: "Could be water pressure or valve issue.",
  },
  {
    title: "No display on screen",
    description: "We repair digital panels and boards.",
  },
  {
    title: "Fridge keeps beeping",
    description: "Temperature or door alarms — we resolve both.",
  },
  {
    title: "Fridge smells sour",
    description: "Deep clean and sanitize — plus check for drainage issues.",
  },
];

const benefits = [
  "Skilled in resolving common and complex fridge issues",
  "Fast, courteous service with attention to detail",
  "No unnecessary upsells — just what you need",
  "Straightforward, flat-rate pricing",
  "We take pride in being dependable and clean",
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
  { name: "Kanata", slug: "/fridge-repair/kanata" },
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
    question: "Do you fix fridges in Jackson Trails and Timbermere?",
    answer: "Yes — we regularly work in those neighborhoods.",
  },
  {
    question: "My fridge leaks water — can you help?",
    answer: "Yes — leaks may come from clogged drains or faulty valves.",
  },
  {
    question: "Do you repair both fridge and freezer sections?",
    answer: "Yes — we handle all compartments.",
  },
  {
    question: "How long do repairs take in Stittsville?",
    answer: "Most visits last about 1–2 hours.",
  },
  {
    question: "What brands do you repair most?",
    answer: "Samsung, LG, Whirlpool, GE, and more.",
  },
];

export default function FridgeRepairStittsvillePage() {
  return (
    <>
      <ServiceHero
        title="We Keep Stittsville's Fridges Running Smoothly"
        description="Struggling with a fridge that hums loudly, leaks, or can't hold the right temperature? Fixer Appliance Repair keeps Stittsville kitchens running with skilled local service."
        icon={<FaSnowflake className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <p className="text-lg text-gray-200 mb-8">
            We handle leading brands including Frigidaire, Whirlpool, GE, Samsung, LG, and Maytag.
          </p>
        }
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} />

      {/* Fridge Installation CTA */}
      <InstallationCTASection
        applianceName="Fridge"
        description="Got a new fridge? We also provide fridge installation in Stittsville with same-day service available in most areas."
        href="/appliance-installation"
      />

      <BenefitsSection applianceName="Fridge" benefits={benefits} />

      <RepairOrReplaceSection description="Refrigerators are expensive to replace — and many common issues are easy to fix. If your fridge is less than 12 years old, check our repair vs replace comparison to make a smart decision based on cost, age, and reliability." />

      <InstallationCTASection
        applianceName="Fridge"
        description="Upgrading to a new unit? We also offer fridge installation in Stittsville — fast, safe, and fully insured."
        href="/appliance-installation/fridge"
      />

      <CTASection />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area: Stittsville and Nearby"
        description="We provide appliance repair services across the entire Stittsville area, including:"
        neighborhoods={serviceAreas}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name,
          slug: area.slug.replace("/fridge-repair/", "")
        }))}
        applianceType="fridge"
        nearbyAreasLabel="We also provide fridge repair services in:"
        footerText={
          <p className="text-lg text-gray-700">
            For full coverage, visit our{" "}
            <Link href="/fridge-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Fridge Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Discover Stittsville */}
      <ThingsToDoSection
        attractions={[
          { name: "Amberwood Village Trails", description: "Peaceful greenery all around" },
          { name: "Quitters Coffee", description: "Sip something warm (or cold!)" },
          { name: "Village Square Park", description: "Take a seat and unwind" },
        ]}
        heading="Relax in Stittsville While We Handle Your Fridge Repair"
        description="Step outside and enjoy the area while we work:"
        linkText="Stay updated on local fun: Events in Stittsville"
      />

      {/* FAQ */}
      <FAQSection applianceName="Fridge" faqs={faqs} />

      {/* Schedule Service */}
      <CTASection 
        heading="Book Your Fridge Repair in Stittsville"
        description="Fixer provides trusted fridge repair right here in Stittsville — schedule today."
        
        />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Stittsville", href: "/washer-repair/stittsville" },
          { name: "Dryer Repair Stittsville", href: "/dryer-repair/stittsville" },
          { name: "Dishwasher Repair Stittsville", href: "/dishwasher-repair/stittsville" },
          { name: "Oven Repair Stittsville", href: "/oven-repair/stittsville" },
          { name: "Fridge Installation Stittsville", href: "/fridge-installation" },
        ]}
        heading="Also Need Help With…"
        description="Need more than fridge repair? Here's what else we offer in Stittsville:"
        applianceName="Fridge"
      />

    </>
  );
}
