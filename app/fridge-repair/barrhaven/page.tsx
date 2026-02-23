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
  title: "Fridge Repair Barrhaven – Fast, Reliable Local Service | Fixer",
  description: "Fixer Appliance Repair offers expert fridge repair in Barrhaven. From cooling issues to noisy fans and ice maker leaks, we service Whirlpool, Samsung, LG & more — with same-day availability and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Fridge not cooling properly",
    description: "In Barrhaven's newer townhomes, airflow blockages or thermostat faults are common. We'll restore the right temperature.",
  },
  {
    title: "Ice maker overflowing",
    description: "Leaky valves or frozen lines can flood the bin. We'll repair the ice system quickly.",
  },
  {
    title: "Fridge running too loud",
    description: "Buzzing or rattling often comes from worn condenser fans. We'll quiet it down with the right repair.",
  },
  {
    title: "Water inside the crisper drawers",
    description: "Usually a clogged defrost drain. We'll clear it so produce stays fresh and dry.",
  },
  {
    title: "Fridge shutting off randomly",
    description: "Control board issues or faulty wiring sometimes cut power. We'll trace the fault and fix it.",
  },
];

const benefits = [
  "Local Barrhaven team with deep fridge repair knowledge",
  "Professional service and clear communication",
  "90-day labour warranty for peace of mind",
  "Same-day and next-day appointments offered",
];

const serviceAreas = [
  "Chapman Mills",
  "Stonebridge",
  "Longfields",
  "Half Moon Bay",
  "Knollsbrook",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/fridge-repair/kanata" },
  { name: "Stittsville", slug: "/fridge-repair/stittsville" },
  { name: "Nepean", slug: "/fridge-repair/nepean" },
  { name: "Orleans", slug: "/fridge-repair/orleans" },
  { name: "Vanier", slug: "/fridge-repair/vanier" },
  { name: "Mississippi Mills", slug: "/fridge-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/fridge-repair/arnprior" },
  { name: "Carleton Place", slug: "/fridge-repair/carleton-place" },
];

const faqs = [
  {
    question: "Can I book a same-day fridge repair in Barrhaven?",
    answer: "Yes — depending on our schedule.",
  },
  {
    question: "Why is my fridge running constantly?",
    answer: "It may be dirty coils, a bad sensor, or refrigerant issues.",
  },
  {
    question: "Do you provide fridge installation?",
    answer: "Yes — installation using existing hookups.",
  },
  {
    question: "Do you cover nearby areas?",
    answer: "Yes — including Stonebridge and Half Moon Bay.",
  },
  {
    question: "Do you offer upfront pricing?",
    answer: "Yes — always before work starts.",
  },
];

export default function FridgeRepairBarrhavenPage() {
  return (
    <>
      <ServiceHero
        title="Fridge Repair in Barrhaven"
        description="If your fridge in Barrhaven is leaking, humming loudly, or simply not cooling, Fixer Appliance Repair can help. We deliver quick local service with a 90-day workmanship warranty on every job."
        icon={<FaSnowflake className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <p className="text-lg text-gray-200 mb-8">
            Brands we repair include Samsung, LG, Whirlpool, GE, and Maytag.
          </p>
        }
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Fridge Issues We Fix in Barrhaven" />

      {/* Installation Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Fridge Installation in Barrhaven</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                Upgrading to a new fridge in Barrhaven?
              </p>
              <p className="text-center">
                Our repair vs. replace guide will help you decide which option makes the most sense.
              </p>
              <p className="text-center">
                If you already purchased one, we provide fridge installation in Barrhaven. We'll connect and test it using your existing water and power supply.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ No plumbing or high-voltage work included.
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
        description="Upgrading to a new unit? We also offer fridge installation in Barrhaven — fast, safe, and fully insured."
        href="/appliance-installation/fridge"
      />

      <CTASection />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Barrhaven area, including:"
        neighborhoods={serviceAreas}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name,
          slug: area.slug.replace("/fridge-repair/", "")
        }))}
        applianceType="fridge"
        nearbyAreasLabel="We also provide fridge repair services in:"
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

      {/* Discover Barrhaven */}
      <ThingsToDoSection
        attractions={[
          { name: "Walter Baker Centre", description: "Fun for the family" },
          { name: "Chapman Mills Conservation Area", description: "Peaceful walking paths" },
          { name: "Marketplace Barrhaven", description: "Shops and restaurants" },
        ]}
        heading="Discover Barrhaven While We Repair Your Fridge"
        description="Instead of waiting, check out:"
        
        linkText="See what's on in Barrhaven"
      />

      {/* FAQ */}
      <FAQSection applianceName="Fridge" faqs={faqs} />

      {/* Schedule Service */}
      <CTASection 
        heading="Schedule Your Fridge Repair in Barrhaven"
        description="We're ready to help — schedule your fridge repair with Fixer Appliance Repair today:"
        />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Barrhaven", href: "/washer-repair/barrhaven" },
          { name: "Dryer Repair Barrhaven", href: "/dryer-repair/barrhaven" },
          { name: "Dishwasher Repair Barrhaven", href: "/dishwasher-repair/barrhaven" },
          { name: "Oven Repair Barrhaven", href: "/oven-repair/barrhaven" },
          { name: "Fridge Installation Barrhaven", href: "/fridge-installation" },
        ]}
        heading="Also Need Help With…"
        description="Beyond fridge repair, we also provide these services in Barrhaven:"
        applianceName="Fridge"
      />

    </>
  );
}
