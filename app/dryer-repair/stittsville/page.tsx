import { Metadata } from "next";
import Link from "next/link";
import { FaWind, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Dryer Repair Stittsville – Local, Reliable Experts | Fixer",
  description: "Fixer provides trusted dryer repair in Stittsville. We fix heating, noise, and power issues for Whirlpool, LG, Samsung & more — with same-day service and warranty.",
};

const commonIssues = [
  {
    title: "Dryer runs but doesn't heat",
    description: "Faulty elements or thermostats are usually to blame.",
  },
  {
    title: "Dryer won't start at all",
    description: "We check door switches, fuses, and circuit boards.",
  },
  {
    title: "Dryer shuts off mid-cycle",
    description: "Often caused by overheating or motor issues.",
  },
  {
    title: "Dryer takes multiple cycles",
    description: "Clogged ducts or failing moisture sensors can extend drying time.",
  },
  {
    title: "Loud thumping noise",
    description: "Usually a sign of worn drum supports or broken rollers.",
  },
  {
    title: "Dryer smells smoky",
    description: "Could indicate burning lint or electrical issues — we clean and inspect.",
  },
  {
    title: "Drum turns slowly",
    description: "Could be a belt tension issue or motor fatigue.",
  },
  {
    title: "Clothes are too hot to touch",
    description: "May be a stuck thermostat or shorted relay.",
  },
  {
    title: "Dryer door won't close",
    description: "A latch or hinge may need adjusting or replacing.",
  },
  {
    title: "Dryer keeps running after cycle ends",
    description: "Faulty control board or stuck relay — we'll replace if needed.",
  },
];

const whyChooseUs = [
  "Local team, fast response in Stittsville",
  "Skilled in troubleshooting common dryer faults",
  "Clean and efficient repair with same-day options",
  "Honest service with no hidden fees",
  "Respectful of your home and time",
];

const neighborhoods = [
  "Crossing Bridge",
  "Jackson Trails",
  "Bryanston Gate",
  "West Ridge",
  "Timbermere",
  "Fairwinds",
];

const nearbyAreas = [
  { name: "Dryer Repair Kanata", slug: "kanata" },
  { name: "Dryer Repair Nepean", slug: "nepean" },
  { name: "Dryer Repair Orleans", slug: "orleans" },
  { name: "Dryer Repair Vanier", slug: "vanier" },
  { name: "Dryer Repair Barrhaven", slug: "barrhaven" },
  { name: "Dryer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dryer Repair Arnprior", slug: "arnprior" },
  { name: "Dryer Repair Carleton Place", slug: "carleton-place" },
];

const stittsvilleAttractions = [
  "Amberwood Village Trails – shady paths for a walk",
  "Quitters Coffee – friendly atmosphere and great brews",
  "Village Square Park – perfect for a short break outdoors",
];

const faqs = [
  {
    question: "Is dryer repair available in Jackson Trails and Timbermere?",
    answer: "Definitely — we serve all neighborhoods across Stittsville.",
  },
  {
    question: "Can you repair dryers that make loud noises?",
    answer: "Yes — noise often points to worn rollers, bearings, or belts.",
  },
  {
    question: "Do you service compact dryer models?",
    answer: "We do — especially in townhomes and condos.",
  },
  {
    question: "Which brands do you usually see in Stittsville?",
    answer: "Whirlpool, LG, Samsung, and Maytag are common in the area.",
  },
  {
    question: "What if I need the dryer repaired fast?",
    answer: "Call early and ask for priority scheduling — we'll do our best.",
  },
];

const relatedServices = [
  { name: "Washer Repair Stittsville", href: "/washer-repair/stittsville" },
  { name: "Dishwasher Repair Stittsville", href: "/dishwasher-repair/stittsville" },
  { name: "Fridge Repair Stittsville", href: "/fridge-repair/stittsville" },
  { name: "Freezer Repair Stittsville", href: "/freezer-repair/stittsville" },
  { name: "Oven Repair Stittsville", href: "/oven-repair/stittsville" },
  { name: "Cooktop Repair Stittsville", href: "/cooktop-repair/stittsville" },
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Dryer Installation Stittsville", href: "/appliance-installation/dryer" },
];

export default function DryerRepairStittsvillePage() {
  return (
    <>
      <ServiceHero
        title="Reliable Dryer Repair Experts in Stittsville"
        description="From a drum that won't spin to sensors that won't detect dryness, Fixer Appliance Repair helps Stittsville homeowners keep laundry day stress-free. Our team knows the area and provides fast, honest solutions. We repair LG, Whirlpool, GE, Maytag, Samsung, and Frigidaire dryers."
        icon={<FaWind className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <p className="text-lg mb-8">
            👉 For all appliance services in your area, check our{" "}
            <Link href="/stittsville" className="font-semibold hover:underline">
              Stittsville appliance repair page
            </Link>
            .
          </p>
        }
        useSectionPadding={true}
      />

      <CommonIssuesSection issues={commonIssues} />

      {/* Dryer Installation CTA */}
      <InstallationCTASection
        applianceName="Dryer"
        description="Got a new dryer? We also provide dryer installation in Stittsville with same-day service available in most areas."
        href="/appliance-installation/dryer"
      />

      <BenefitsSection applianceName="Dryer" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="Wondering if your dryer is still worth fixing? Read our dryer repair vs. replacement guide to weigh your options before you buy a new one." />

      {/* Service Area: Stittsville and Nearby */}
      <ServiceAreaSection
        title="Service Area: Stittsville and Nearby"
        description="We provide appliance repair services across the entire Stittsville area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="dryer"
        nearbyAreasLabel="We also provide dryer repair services for homes in:"
      />

      {/* Things To Do */}
      <ThingsToDoSection
        attractions={stittsvilleAttractions}
        heading="Enjoy Stittsville as We Service Your Dryer"
        description="No need to just wait at home — discover what's nearby:"
        linkText="Events in Stittsville"
      />

      {/* FAQs */}
      <FAQSection applianceName="Dryer" faqs={faqs} />

      {/* Book Your Dryer Repair in Stittsville */}
      <CTASection 
        heading="Book Your Dryer Repair in Stittsville"
        description="Let's get that dryer spinning again — reach out today."
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With…"
        description="Looking for more than dryer service? Here's what else we offer in Stittsville:"
        applianceName="Dryer"
      />
    </>
  );
}

