import { Metadata } from "next";
import Link from "next/link";
import { FaUtensils, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import FAQSection from "@/components/FAQSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Dishwasher Repair Stittsville – Local Experts You Can Trust | Fixer",
  description: "Fixer offers fast dishwasher repair in Stittsville. We fix leaks, draining issues & error codes for Whirlpool, Samsung, LG & more — with a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Dishwasher hums but won't start",
    description: "Likely a jammed motor or relay fault.",
  },
  {
    title: "Door won't stay shut",
    description: "Worn latch or misaligned strike — we replace and align.",
  },
  {
    title: "Cycle gets stuck halfway",
    description: "Sensor issues or bad logic board.",
  },
  {
    title: "Leaks during drain cycle",
    description: "Could be a cracked hose or faulty seal.",
  },
  {
    title: "Dishes don't dry",
    description: "We test and replace faulty heating elements.",
  },
  {
    title: "Smells bad after running",
    description: "Bacteria buildup in filters or drain line — we clean it.",
  },
  {
    title: "Touch buttons don't work",
    description: "Touchpad or control board likely needs service.",
  },
  {
    title: "Upper rack not cleaning",
    description: "We fix weak spray pressure or clogged arms.",
  },
  {
    title: "Loud clicking sounds",
    description: "We check solenoid valves and drive motors.",
  },
  {
    title: "Water backing up into tub",
    description: "We inspect the check valve and drain path.",
  },
];

const whyChooseUs = [
  "Prompt service across all of Stittsville",
  "Skilled with new and older dishwasher models",
  "Accurate troubleshooting and honest advice",
  "No pressure, no unnecessary parts",
  "Friendly help, always on time",
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
  { name: "Dishwasher Repair Kanata", slug: "kanata" },
  { name: "Dishwasher Repair Nepean", slug: "nepean" },
  { name: "Dishwasher Repair Orleans", slug: "orleans" },
  { name: "Dishwasher Repair Vanier", slug: "vanier" },
  { name: "Dishwasher Repair Barrhaven", slug: "barrhaven" },
  { name: "Dishwasher Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dishwasher Repair Arnprior", slug: "arnprior" },
  { name: "Dishwasher Repair Carleton Place", slug: "carleton-place" },
];

const stittsvilleAttractions = [
  "Amberwood Village Trails – nature walks right in town",
  "Quitters Coffee – beloved spot for locals",
  "Village Square Park – easy to reach and relaxing",
];

const faqs = [
  {
    question: "Do you fix dishwashers in Jackson Trails and Timbermere?",
    answer: "Yes — we often repair appliances in Jackson Trails, Timbermere, and the rest of Stittsville.",
  },
  {
    question: "How quickly can I book an appointment in Stittsville?",
    answer: "Usually within 48 hours. Emergency slots may be available.",
  },
  {
    question: "Can you fix dishwashers that don't drain or start?",
    answer: "Yes — we troubleshoot power, drain, and control board issues.",
  },
  {
    question: "What brands do you work with?",
    answer: "We repair most major dishwasher brands including Samsung, GE, and Whirlpool.",
  },
  {
    question: "Do you remove old units before installing a new one?",
    answer: "Yes — our techs will safely uninstall and install your new dishwasher.",
  },
];

const relatedServices = [
  { name: "Washer Repair Stittsville", href: "/washer-repair/stittsville" },
  { name: "Dryer Repair Stittsville", href: "/dryer-repair/stittsville" },
  { name: "Fridge Repair Stittsville", href: "/fridge-repair/stittsville" },
  { name: "Freezer Repair Stittsville", href: "/freezer-repair/stittsville" },
  { name: "Oven Repair Stittsville", href: "/oven-repair/stittsville" },
  { name: "Cooktop Repair Stittsville", href: "/cooktop-repair/stittsville" },
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Dishwasher Installation Stittsville", href: "/appliance-installation/dishwasher" },
];

export default function DishwasherRepairStittsvillePage() {
  return (
    <>
      <ServiceHero
        title="Stittsville's Local Dishwasher Repair Specialists"
        description="If your dishwasher stops mid-cycle, won't drain, or leaves residue, Fixer Appliance Repair has you covered in Stittsville. We pride ourselves on friendly, no-pressure service."
        icon={<FaUtensils className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <>
            <p className="text-lg mb-6">
              We service Whirlpool, Maytag, Samsung, GE, Bosch, LG, and more.
            </p>
            <p className="text-lg mb-8">
              👉 For all appliance services nearby, see our{" "}
              <Link href="/stittsville" className="font-semibold hover:underline">
                Local Stittsville page
              </Link>
              .
            </p>
          </>
        }
        useSectionPadding={true}
      />

      <CommonIssuesSection issues={commonIssues} />

      {/* Installation Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-6">Installation Services</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Replacing a dishwasher in Stittsville?</strong> First, see our{" "}
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                  repair vs. replace guide
                </Link>
                {" "}— it shows when repair may be more cost-effective.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                For new units, we provide dishwasher installation in Stittsville. We'll hook it up to the existing water and power supply, test for leaks, and ensure it runs smoothly.
              </p>
              <p className="text-gray-700 mb-6">
                👉 We don't add plumbing or high-voltage wiring.
              </p>
              <div className="text-center">
                <Link href="/appliance-installation/dishwasher" className="btn-primary">
                  Learn more about Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection applianceName="Dishwasher" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="When your dishwasher breaks down, it's tempting to shop for a new one — but repairs are often quick and cost-effective. See how to tell when it's worth fixing." />

      <InstallationCTASection
        applianceName="Dishwasher"
        description="Upgrading to a new unit? We also offer dishwasher installation in Stittsville — fast, safe, and fully insured."
        href="/appliance-installation/dishwasher"
      />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area: Stittsville and Nearby"
        description="We provide appliance repair services across the entire Stittsville area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="dishwasher"
        nearbyAreasLabel="Just outside Stittsville? We also visit:"
        footerText={
          <p className="text-lg text-gray-700">
            For city-wide service, visit our{" "}
            <Link href="/dishwasher-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Dishwasher Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Things to Do in Stittsville */}
      <ThingsToDoSection
        attractions={stittsvilleAttractions}
        heading="Things to Do in Stittsville While We Repair Your Dishwasher"
        description="Use the time to explore the neighborhood a bit:"
        
        linkText="Events in Stittsville"
      />

      {/* FAQ */}
      <FAQSection applianceName="Dishwasher" faqs={faqs} />

      {/* Contact CTA */}
      <CTASection 
        heading="Book Your Dishwasher Repair in Stittsville"
        description="Don't let the dishes pile up — contact Fixer now for friendly, local service in Stittsville."
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With…"
        description="Looking beyond dishwashers? Here's what else we service in Stittsville:"
        applianceName="Dishwasher"
      />
    </>
  );
}
