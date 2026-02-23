import { Metadata } from "next";
import Link from "next/link";
import { FaTshirt, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Barrhaven Washer Repair – Trusted Local Experts | Fixer",
  description: "Fast, efficient washer repair in Barrhaven. Same-day visits in many areas, no hidden fees, and a 90-day workmanship warranty. Call now for service.",
};

const commonIssues = [
  {
    title: "Washer won't start up?",
    description: "In Barrhaven's newer developments, this can follow a power surge or tripped breaker. If not, it may be a faulty control or latch. We'll identify and resolve the problem.",
  },
  {
    title: "Not draining fully?",
    description: "Drainage problems are often due to blocked pumps or hoses in basement setups. We'll clear them and restore proper flow.",
  },
  {
    title: "Noisy washer during spin?",
    description: "Shaking or squeaking often comes from worn shocks or loose parts. We'll balance your washer so it runs smoothly.",
  },
  {
    title: "Door won't unlock?",
    description: "Front-load machines in Barrhaven townhouses sometimes stick due to sensor glitches. We'll release the door and fix the lock issue.",
  },
  {
    title: "Water leaks?",
    description: "Loose hose fittings or worn gaskets are common leak sources. We'll find and repair the issue quickly.",
  },
  {
    title: "Error codes displayed?",
    description: "Flashing washer codes can be confusing. We'll translate and repair — whether it's Samsung, Whirlpool, or GE.",
  },
];

const whyChooseUs = [
  "Trusted washer repair pros serving Barrhaven homes",
  "Flexible scheduling, including many same-day slots",
  "Honest service with no hidden fees",
  "90-day guarantee on all labour performed",
];

const neighborhoods = [
  "Chapman Mills",
  "Stonebridge",
  "Longfields",
  "Half Moon Bay",
  "Knollsbrook",
];

const nearbyAreas = [
  { name: "Washer Repair Kanata", slug: "kanata" },
  { name: "Washer Repair Stittsville", slug: "stittsville" },
  { name: "Washer Repair Nepean", slug: "nepean" },
  { name: "Washer Repair Orleans", slug: "orleans" },
  { name: "Washer Repair Vanier", slug: "vanier" },
  { name: "Washer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Washer Repair Arnprior", slug: "arnprior" },
  { name: "Washer Repair Carleton Place", slug: "carleton-place" },
];

const barrhavenAttractions = [
  "Walter Baker Sports Centre – recreation and swimming.",
  "Chapman Mills Conservation Area – scenic river trails.",
  "Marketplace Barrhaven – shopping and dining hub.",
];

const faqs = [
  {
    question: "Can I get same-day washer service in Barrhaven?",
    answer: "Often yes — we can confirm availability when you call.",
  },
  {
    question: "Do you repair energy-efficient washers?",
    answer: "Yes — our technicians are trained on both standard and high-efficiency models.",
  },
  {
    question: "Do you service nearby areas outside Barrhaven?",
    answer: "Yes — including Stonebridge, Half Moon Bay, and surrounding communities.",
  },
];

const relatedServices = [
  { name: "Dryer Repair Barrhaven", href: "/dryer-repair/barrhaven" },
  { name: "Dishwasher Repair Barrhaven", href: "/dishwasher-repair/barrhaven" },
  { name: "Fridge Repair Barrhaven", href: "/fridge-repair/barrhaven" },
  { name: "Freezer Repair Barrhaven", href: "/freezer-repair/barrhaven" },
  { name: "Oven Repair Barrhaven", href: "/oven-repair/barrhaven" },
  { name: "Cooktop Repair Barrhaven", href: "/cooktop-repair/barrhaven" },
  { name: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { name: "Washer Installation Barrhaven", href: "/appliance-installation/washer" },
];

export default function WasherRepairBarrhavenPage() {
  return (
    <>
      <ServiceHero
        title="Washer Repair Services in Barrhaven"
        description="If your washer stops mid-cycle, makes unusual noises, or leaks water, our Barrhaven repair team is ready to help. We service all makes and models, offering clear pricing, same-day availability in many neighbourhoods, and a 90-day workmanship guarantee on every repair."
        icon={<FaTshirt className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <p className="text-lg mb-8">
            👉 For all appliance services in your area, check our{" "}
            <Link href="/service-areas/barrhaven" className="font-semibold hover:underline">
              Barrhaven appliance repair page
            </Link>
            .
          </p>
        }
        useSectionPadding={true}
      />

      {/* Common Washer Issues */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Washer Issues We Fix in Barrhaven</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {commonIssues.map((issue, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{issue.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{issue.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Washer Installation CTA */}
      <InstallationCTASection
        applianceName="Washer"
        description="Got a new washer? We also provide washer installation in Barrhaven with same-day service available in most areas."
        href="/appliance-installation/washer"
      />

      <BenefitsSection applianceName="Washer" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="Not sure if it's time to fix or replace your washing machine? Check out our repair vs. replace guide for washers to make a smart decision based on cost, age, and reliability." />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Barrhaven area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="washer"
        nearbyAreasLabel="We also serve:"
        footerText={
          <p className="text-lg text-gray-700">
            👉 Need washer help across Ottawa? Learn more about our{" "}
            <Link href="/washer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              washer repair in Ottawa
            </Link>
            .
          </p>
        }
      />

      {/* Things to Do */}
      <ThingsToDoSection
        attractions={barrhavenAttractions}
        heading="Explore Barrhaven While We Fix Your Washer"
        description="While we handle the repair, you could:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Washer" faqs={faqs} />

      {/* Contact CTA */}
      <CTASection 
        heading="Need Washer Repair in Barrhaven?"
        description="Fast service, clear pricing, and a 90-day guarantee — get in touch today!"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With…"
        description="Beyond washer repair, we also provide these services in Barrhaven:"
        applianceName="Washer"
      />
    </>
  );
}
