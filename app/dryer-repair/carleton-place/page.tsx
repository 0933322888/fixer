import { Metadata } from "next";
import Link from "next/link";
import { FaWind, FaMapMarkerAlt } from "react-icons/fa";
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
  title: "Carleton Place Dryer Repair – Friendly, Trusted Technicians | Fixer",
  description: "Dependable dryer repair in Carleton Place. Local family-run service with clear rates, same-day availability, and a 90-day workmanship guarantee.",
};

const commonIssues = [
  {
    title: "Dryer won't start",
    description: "Commonly caused by power supply problems, bad fuses, or a faulty door switch. We'll pinpoint it quickly.",
  },
  {
    title: "No heat or weak heat",
    description: "Heating coils and thermal fuses often fail with age. We'll test and replace them.",
  },
  {
    title: "Squeaking or squealing noises",
    description: "Usually worn rollers or an idler pulley under strain. We'll quiet things down.",
  },
  {
    title: "Drum won't rotate",
    description: "A broken belt or seized motor can stop the drum. We'll restore motion.",
  },
  {
    title: "Cycle too long",
    description: "Moisture sensors or clogged vents are often the cause. We'll make drying time normal again.",
  },
  {
    title: "Dryer stops suddenly",
    description: "Overheating triggers auto-shutoff. We'll find and fix the reason.",
  },
  {
    title: "Door latch broken",
    description: "We'll replace latches or hinges so the door closes tight.",
  },
];

const whyChooseUs = [
  "Experienced team serving Carleton Place for over 15 years",
  "Same-day bookings offered in many nearby areas",
  "Honest service with no hidden fees",
  "Technicians carry common parts to finish most jobs right away",
  "90-day workmanship warranty included",
];

const neighborhoods = [
  "Carleton Place West",
  "Carleton Place East",
  "Riverside Park",
  "Mississippi Quays",
];

const nearbyAreas = [
  { name: "Dryer Repair Kanata", slug: "kanata" },
  { name: "Dryer Repair Stittsville", slug: "stittsville" },
  { name: "Dryer Repair Nepean", slug: "nepean" },
  { name: "Dryer Repair Orleans", slug: "orleans" },
  { name: "Dryer Repair Vanier", slug: "vanier" },
  { name: "Dryer Repair Barrhaven", slug: "barrhaven" },
  { name: "Dryer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dryer Repair Arnprior", slug: "arnprior" },
];

const carletonPlaceAttractions = [
  "Riverside Park – relaxing trails and riverside views.",
  "Downtown Carleton Place – shops and cozy restaurants.",
  "Heritage Museum – a look into the town's past.",
];

const faqs = [
  {
    question: "Do you provide same-day dryer service in Carleton Place?",
    answer: "When possible, yes — call to check today's schedule.",
  },
  {
    question: "Why is my dryer making loud squealing or thumping sounds?",
    answer: "This often points to worn rollers, belts, or idler pulleys.",
  },
  {
    question: "Do you repair all dryer brands?",
    answer: "Yes — including Whirlpool, Samsung, LG, GE, and others.",
  },
  {
    question: "Do you also install dryers?",
    answer: "Yes — we install dryers across Carleton Place using existing hookups.",
  },
  {
    question: "Is the work covered by warranty?",
    answer: "Yes — every repair and install is backed by our 90-day labour warranty.",
  },
];

const relatedServices = [
  { name: "Washer Repair Carleton Place", href: "/washer-repair/carleton-place" },
  { name: "Dishwasher Repair Carleton Place", href: "/dishwasher-repair/carleton-place" },
  { name: "Fridge Repair Carleton Place", href: "/fridge-repair/carleton-place" },
  { name: "Freezer Repair Carleton Place", href: "/freezer-repair/carleton-place" },
  { name: "Oven Repair Carleton Place", href: "/oven-repair/carleton-place" },
  { name: "Cooktop Repair Carleton Place", href: "/cooktop-repair/carleton-place" },
  { name: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
  { name: "Dryer Installation Carleton Place", href: "/appliance-installation/dryer" },
];

export default function DryerRepairCarletonPlacePage() {
  return (
    <>
      <ServiceHero
        title="Trusted Dryer Repair in Carleton Place"
        description="If your Carleton Place dryer is overheating, refusing to start, or shutting down mid-cycle, Fixer Appliance Repair is here to help. Our skilled technicians provide fast, dependable repairs, backed by transparent pricing and a 90-day workmanship warranty. We handle leading models from GE, Samsung, Whirlpool, LG, and Maytag."
        icon={<FaWind className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <p className="text-lg mb-8">
            👉 For all appliance services in your area, check our{" "}
            <Link href="/carleton-place" className="font-semibold hover:underline">
              Carleton Place appliance repair page
            </Link>
            .
          </p>
        }
        useSectionPadding={true}
      />

      {/* Common Dryer Problems */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Dryer Problems We Fix</h2>
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

      {/* Dryer Installation CTA */}
      <InstallationCTASection
        applianceName="Dryer"
        description="Got a new dryer? We also provide dryer installation in Carleton Place with same-day service available in most areas."
        href="/appliance-installation/dryer"
      />

      <BenefitsSection applianceName="Dryer" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="Wondering if your dryer is still worth fixing? Read our dryer repair vs. replacement guide to weigh your options before you buy a new one." />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Carleton Place area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="dryer"
        nearbyAreasLabel="We also work with customers from:"
      />

      {/* Enjoy Carleton Place While We Repair Your Dryer */}
      <ThingsToDoSection
        attractions={carletonPlaceAttractions}
        heading="Enjoy Carleton Place While We Repair Your Dryer"
        description="Waiting for your dryer to be fixed? Try these spots:"
        linkText="Ottawa Events Calendar"
      />

      <FAQSection applianceName="Dryer" faqs={faqs} />

      {/* Contact CTA */}
      <CTASection 
        heading="Schedule Your Dryer Repair in Carleton Place"
        description="Don't let laundry pile up — book your dryer service now with Fixer Appliance Repair:"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With…"
        description="Dryer issues aren't the only thing we fix — here are more services in Carleton Place:"
        applianceName="Dryer"
      />
    </>
  );
}

