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
  title: "Arnprior Dryer Service – Local, Prompt Repairs | Fixer",
  description: "Reliable dryer repair in Arnprior. Same-day service in many neighbourhoods, transparent pricing, and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Dryer won't run",
    description: "Older Arnprior homes often have blown fuses or worn power cords. We'll test and repair the problem.",
  },
  {
    title: "Clothes not drying",
    description: "A failed heating element or clogged vent cuts efficiency. We'll restore proper drying.",
  },
  {
    title: "Grinding or banging noises",
    description: "Damaged bearings or loose rollers are common. We'll repair the noise source.",
  },
  {
    title: "Drum won't turn",
    description: "A snapped belt or bad motor can be the reason. We'll handle both.",
  },
  {
    title: "Takes forever to finish",
    description: "Blocked ducts or bad sensors waste energy. We'll clean and adjust for better airflow.",
  },
  {
    title: "Dryer overheats and shuts off",
    description: "Faulty thermostats or lint buildup often cause overheating. We'll correct both.",
  },
  {
    title: "Buttons unresponsive",
    description: "Control board or panel wear can cause this. We'll repair or replace as needed.",
  },
];

const whyChooseUs = [
  "Trusted local technicians with years of repair expertise",
  "Same-day appointments possible in Arnprior and nearby towns",
  "Honest service with no hidden fees",
  "Fully equipped for most repairs on the first visit",
  "90-day warranty on all labour provided",
];

const neighborhoods = [
  "Downtown Arnprior",
  "Braeside",
  "McNab",
  "White Lake",
  "Sand Point",
];

const nearbyAreas = [
  { name: "Dryer Repair Kanata", slug: "kanata" },
  { name: "Dryer Repair Stittsville", slug: "stittsville" },
  { name: "Dryer Repair Nepean", slug: "nepean" },
  { name: "Dryer Repair Orleans", slug: "orleans" },
  { name: "Dryer Repair Vanier", slug: "vanier" },
  { name: "Dryer Repair Barrhaven", slug: "barrhaven" },
  { name: "Dryer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dryer Repair Carleton Place", slug: "carleton-place" },
];

const arnpriorAttractions = [
  "Walk the shoreline at Robert Simpson Park.",
  "Explore Gillies Grove trails and nature.",
  "Browse stores and grab a coffee downtown.",
];

const faqs = [
  {
    question: "Do you serve homes outside Arnprior town limits?",
    answer: "Yes — including White Lake, Braeside, and surrounding areas.",
  },
  {
    question: "Why does my dryer shut off mid-cycle?",
    answer: "It could be overheating sensors, blocked vents, or a failing motor.",
  },
  {
    question: "Do you handle dryer installations?",
    answer: "Yes — we provide installation in Arnprior using your existing power lines.",
  },
  {
    question: "What payment options do you accept?",
    answer: "We accept credit cards, debit, and e-transfer.",
  },
  {
    question: "Do you offer a warranty on repairs?",
    answer: "Yes — all dryer work comes with a 90-day labour warranty.",
  },
];

const relatedServices = [
  { name: "Washer Repair Arnprior", href: "/washer-repair/arnprior" },
  { name: "Dishwasher Repair Arnprior", href: "/dishwasher-repair/arnprior" },
  { name: "Fridge Repair Arnprior", href: "/fridge-repair/arnprior" },
  { name: "Freezer Repair Arnprior", href: "/freezer-repair/arnprior" },
  { name: "Oven Repair Arnprior", href: "/oven-repair/arnprior" },
  { name: "Cooktop Repair Arnprior", href: "/cooktop-repair/arnprior" },
  { name: "Microwave Repair Arnprior", href: "/microwave-repair/arnprior" },
  { name: "Dryer Installation Arnprior", href: "/appliance-installation/dryer" },
];

export default function DryerRepairArnpriorPage() {
  return (
    <>
      <ServiceHero
        title="Reliable Dryer Repair in Arnprior"
        description="A dryer that won't spin or leaves clothes damp is more than a hassle. Fixer Appliance Repair brings Arnprior residents quick solutions with local technicians who know the area. Many jobs can be completed in a single visit. We work on most major brands, including Frigidaire, Whirlpool, Samsung, GE, and LG."
        icon={<FaWind className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <p className="text-lg mb-8">
            👉 For all appliance services in your area, check our{" "}
            <Link href="/arnprior" className="font-semibold hover:underline">
              Arnprior appliance repair page
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
        description="Got a new dryer? We also provide dryer installation in Arnprior with same-day service available in most areas."
        href="/appliance-installation/dryer"
      />

      <BenefitsSection applianceName="Dryer" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="Wondering if your dryer is still worth fixing? Read our dryer repair vs. replacement guide to weigh your options before you buy a new one." />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Arnprior area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="dryer"
        nearbyAreasLabel="We also offer dryer repairs for nearby areas including:"
        surroundingLabel="and surrounding rural neighbourhoods"
      />

      {/* Enjoy Arnprior While We Service Your Dryer */}
      <ThingsToDoSection
        attractions={arnpriorAttractions}
        heading="Enjoy Arnprior While We Service Your Dryer"
        description="Waiting doesn't have to be boring:"
        linkText="Ottawa Events Calendar"
      />

      <FAQSection applianceName="Dryer" faqs={faqs} />

      {/* Contact CTA */}
      <CTASection 
        heading="Schedule Your Dryer Repair in Arnprior"
        description="Dryer not working right? Call Fixer Appliance Repair for quick service:"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With..."
        description="We do more than just dryer repair — check out our other Ottawa services:"
        applianceName="Dryer"
      />
    </>
  );
}

