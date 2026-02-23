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
  title: "Fridge Repair Carleton Place – Trusted Local Service | Fixer",
  description: "Fixer Appliance Repair provides expert fridge repair in Carleton Place. From cooling failures to leaks and ice maker issues, we service Whirlpool, Samsung, LG & more — with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Fridge not cooling",
    description: "Could be due to a failed compressor, thermostat, or fan motor. We'll test and fix it fast.",
  },
  {
    title: "Water leaking",
    description: "Blocked defrost drain or cracked water line are common causes.",
  },
  {
    title: "Strange noises",
    description: "Buzzing, clicking, or humming may come from fans or compressor.",
  },
  {
    title: "Ice maker not working",
    description: "We check water lines, valves, and sensors.",
  },
  {
    title: "Display not working",
    description: "We inspect and replace faulty control boards or wiring.",
  },
];

const benefits = [
  "Experienced Carleton Place fridge specialists",
  "Clear, upfront pricing on every job",
  "Same-day and next-day scheduling available",
  "Repairs covered by a 90-day warranty",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/fridge-repair/kanata" },
  { name: "Stittsville", slug: "/fridge-repair/stittsville" },
  { name: "Nepean", slug: "/fridge-repair/nepean" },
  { name: "Orleans", slug: "/fridge-repair/orleans" },
  { name: "Vanier", slug: "/fridge-repair/vanier" },
  { name: "Barrhaven", slug: "/fridge-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/fridge-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/fridge-repair/arnprior" },
];

const faqs = [
  {
    question: "Do you repair fridges in Carleton Place?",
    answer: "Yes — we serve all of Carleton Place and surrounding areas.",
  },
  {
    question: "Why is my fridge not cooling?",
    answer: "Common causes include compressor failure, thermostat issues, or blocked airflow.",
  },
  {
    question: "Do you install new fridges?",
    answer: "Yes — installation with current hookups only.",
  },
  {
    question: "Do you service all brands?",
    answer: "Yes — all major designs and brands.",
  },
  {
    question: "Do you provide a warranty?",
    answer: "Yes — 90-day labour warranty on all work.",
  },
];

export default function FridgeRepairCarletonPlacePage() {
  return (
    <>
      <ServiceHero
        title="Fridge Repair in Carleton Place"
        description="Fast, reliable fridge repair services in Carleton Place. Our experienced technicians provide same-day service with honest quotes and quality workmanship."
        icon={<FaSnowflake className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <p className="text-lg text-gray-200 mb-8">
            We service all major brands including Whirlpool, Samsung, LG, GE, and Maytag.
          </p>
        }
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Fridge Issues We Fix in Carleton Place" />

      {/* Installation Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Fridge Installation in Carleton Place</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                We also provide professional fridge installation services in Carleton Place.
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
        description="Upgrading to a new unit? We also offer fridge installation in Carleton Place — fast, safe, and fully insured."
        href="/appliance-installation/fridge"
      />

      <CTASection />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services in Carleton Place and surrounding areas."
        neighborhoods={[]}
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

      {/* FAQ */}
      <FAQSection applianceName="Fridge" faqs={faqs} />

      {/* Schedule Service */}
      <CTASection 
        heading="Schedule Your Fridge Repair in Carleton Place"
        description="Contact Fixer Appliance Repair for quick, professional service:"
        />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Carleton Place", href: "/washer-repair/carleton-place" },
          { name: "Dryer Repair Carleton Place", href: "/dryer-repair/carleton-place" },
          { name: "Dishwasher Repair Carleton Place", href: "/dishwasher-repair/carleton-place" },
          { name: "Oven Repair Carleton Place", href: "/oven-repair/carleton-place" },
          { name: "Fridge Installation Carleton Place", href: "/fridge-installation" },
        ]}
        heading="Also Need Help With…"
        description="We handle more than just fridges — here are our other services in Carleton Place:"
        applianceName="Fridge"
      />

    </>
  );
}
