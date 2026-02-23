import { Metadata } from "next";
import Link from "next/link";
import { FaUtensils, FaMapMarkerAlt } from "react-icons/fa";
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
  title: "Dishwasher Repair Vanier – Fast, Reliable Local Service | Fixer",
  description: "Fixer provides expert dishwasher repair in Vanier. We fix leaks, draining issues & error codes for Whirlpool, Bosch, LG & more — with same-day service & warranty.",
};

const commonIssues = [
  {
    title: "Dishwasher won't power up",
    description: "In older Vanier homes, breakers, latches, or aging control boards are often the cause. We'll test each and repair.",
  },
  {
    title: "Not draining properly",
    description: "Food clogs in the filter or drain pump cause standing water. We'll clear them quickly.",
  },
  {
    title: "Loud rattling or buzzing",
    description: "Loose parts or bad motors are common in older dishwashers. We'll replace what's failing.",
  },
  {
    title: "Leaking water on the floor",
    description: "Hoses, seals, or valves often cause puddles. We'll repair the leak before it spreads.",
  },
  {
    title: "Dirty or spotty dishes",
    description: "Weak spray arms or detergent issues cause poor results. We'll fix it so dishes come out spotless.",
  },
  {
    title: "Error lights flashing",
    description: "Codes like E24 or UE often point to pump problems. We'll identify and repair the issue for Bosch, LG, or Whirlpool.",
  },
];

const whyChooseUs = [
  "Experienced Vanier dishwasher repair and installation pros",
  "Honest, clear pricing before work starts",
  "Same-day and next-day availability",
  "Every job backed by a 90-day warranty",
];

const neighborhoods = [
  "Overbrook",
  "Beechwood Village",
  "Cardinal Glen",
  "Notre Dame des Champs",
];

const nearbyAreas = [
  { name: "Dishwasher Repair Kanata", slug: "kanata" },
  { name: "Dishwasher Repair Stittsville", slug: "stittsville" },
  { name: "Dishwasher Repair Nepean", slug: "nepean" },
  { name: "Dishwasher Repair Orleans", slug: "orleans" },
  { name: "Dishwasher Repair Barrhaven", slug: "barrhaven" },
  { name: "Dishwasher Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dishwasher Repair Arnprior", slug: "arnprior" },
  { name: "Dishwasher Repair Carleton Place", slug: "carleton-place" },
];

const vanierAttractions = [
  "Richelieu Park – great for a short walk.",
  "Vanier Museopark – heritage and exhibits.",
  "Beechwood Avenue – food and boutiques.",
];

const faqs = [
  {
    question: "Do you service dishwashers in Vanier apartments and homes?",
    answer: "Yes — we work in both houses and multi-unit buildings.",
  },
  {
    question: "Why is my dishwasher leaking water on the floor?",
    answer: "It could be a worn door gasket, faulty pump, or loose hose connection.",
  },
  {
    question: "Do you provide dishwasher installation in Vanier?",
    answer: "Yes — we'll install it using your existing hookups.",
  },
  {
    question: "Do you work on all brands?",
    answer: "Yes — from Whirlpool and Maytag to Bosch and LG.",
  },
  {
    question: "What kind of warranty do you offer?",
    answer: "Every dishwasher repair or install comes with a 90-day labour warranty.",
  },
];

const relatedServices = [
  { name: "Washer Repair Vanier", href: "/washer-repair/vanier" },
  { name: "Dryer Repair Vanier", href: "/dryer-repair/vanier" },
  { name: "Fridge Repair Vanier", href: "/fridge-repair/vanier" },
  { name: "Freezer Repair Vanier", href: "/freezer-repair/vanier" },
  { name: "Oven Repair Vanier", href: "/oven-repair/vanier" },
  { name: "Cooktop Repair Vanier", href: "/cooktop-repair/vanier" },
  { name: "Microwave Repair Vanier", href: "/microwave-repair/vanier" },
  { name: "Dishwasher Installation Vanier", href: "/appliance-installation/dishwasher" },
];

export default function DishwasherRepairVanierPage() {
  return (
    <>
      <ServiceHero
        title={
          <>
            Dishwasher Repair Vanier
            <br /> Fast, Reliable Local Service
          </>
        }
        description="Vanier residents know the hassle of a dishwasher that won't drain or keeps flashing error codes. Fixer Appliance Repair delivers quick, transparent service with a 90-day workmanship guarantee."
        icon={<FaUtensils className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <>
            <p className="text-lg mb-6">
              We repair brands such as Whirlpool, LG, Bosch, Samsung, and GE.
            </p>
            <p className="text-lg mb-8">
              👉 For all appliance services nearby, see our{" "}
              <Link href="/vanier" className="font-semibold hover:underline">
                Local Vanier page
              </Link>
              .
            </p>
          </>
        }
        useSectionPadding={true}
      />

      {/* Common Dishwasher Issues */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Dishwasher Issues We Fix in Vanier</h2>
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

      {/* Installation Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-6">Dishwasher Installation in Vanier</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Looking at dishwasher replacement in Vanier?</strong> Before making the purchase, review our{" "}
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                  repair vs. replace guide
                </Link>
                {" "}— it helps you decide wisely.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                If you've bought a new one, we provide dishwasher installation in Vanier. We'll hook it up and test it with your existing hookups.
              </p>
              <p className="text-gray-700 mb-6">
                👉 We don't run new plumbing or high-voltage lines.
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
        description="Upgrading to a new unit? We also offer dishwasher installation in Vanier — fast, safe, and fully insured."
        href="/appliance-installation/dishwasher"
      />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Vanier area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="dishwasher"
        nearbyAreasLabel="We also provide dishwasher repair in:"
        footerText={
          <p className="text-lg text-gray-700">
            For full coverage, visit our{" "}
            <Link href="/dishwasher-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Dishwasher Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Things to Do in Vanier */}
      <ThingsToDoSection
        attractions={vanierAttractions}
        heading="Things to Do in Vanier While We Fix Your Dishwasher"
        description="Here are a few ideas:"
        
        linkText="Ottawa Events Calendar"
      />

      <FAQSection applianceName="Dishwasher" faqs={faqs} />

      {/* Contact CTA */}
      <CTASection 
        heading="Schedule Your Dishwasher Repair in Vanier"
        description="Ready to get your dishwasher fixed? Reach out now to Fixer Appliance Repair:"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With..."
        description="We do more than just dishwasher repair — check out our other Ottawa services:"
        applianceName="Dishwasher"
      />
    </>
  );
}
