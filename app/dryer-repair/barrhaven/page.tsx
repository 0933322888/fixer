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
  title: "Dryer Repair in Barrhaven – Local Technicians You Can Trust | Fixer",
  description: "Trusted dryer repair for Barrhaven homes. Same-day appointments in many areas, upfront rates, and a 90-day labour warranty.",
};

const commonIssues = [
  {
    title: "Dryer won't switch on",
    description: "In Barrhaven's newer townhomes, tripped breakers or bad switches are common. We'll find the cause quickly.",
  },
  {
    title: "No heat",
    description: "A failed element or bad thermostat means cold clothes. We'll replace what's broken.",
  },
  {
    title: "Loud rattling",
    description: "Bad rollers or a loose blower wheel can make dryers noisy. We'll quiet it down.",
  },
  {
    title: "Drum stuck still",
    description: "Belts wear out or motors seize up. We'll restore movement.",
  },
  {
    title: "Takes too long to dry",
    description: "Moisture sensors or clogged vents reduce efficiency. We'll recalibrate or clear airflow.",
  },
  {
    title: "Stops before the cycle ends",
    description: "Overheating from lint buildup often causes this. We'll deep-clean and reset safety systems.",
  },
  {
    title: "Door won't latch",
    description: "A simple part replacement gets your dryer sealing again.",
  },
];

const whyChooseUs = [
  "Over a decade of proven appliance repair experience",
  "Same-day service available in many Barrhaven areas",
  "Honest pricing with no hidden fees",
  "Professional, friendly team focused on customer satisfaction",
  "Repairs backed by a 90-day labour warranty",
];

const neighborhoods = [
  "Chapman Mills",
  "Stonebridge",
  "Longfields",
  "Half Moon Bay",
  "Knollsbrook",
];

const nearbyAreas = [
  { name: "Dryer Repair Kanata", slug: "kanata" },
  { name: "Dryer Repair Stittsville", slug: "stittsville" },
  { name: "Dryer Repair Nepean", slug: "nepean" },
  { name: "Dryer Repair Orleans", slug: "orleans" },
  { name: "Dryer Repair Vanier", slug: "vanier" },
  { name: "Dryer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dryer Repair Arnprior", slug: "arnprior" },
  { name: "Dryer Repair Carleton Place", slug: "carleton-place" },
];

const barrhavenAttractions = [
  "Walter Baker Centre – indoor pool and gym.",
  "Chapman Mills trails – walk along the Rideau River.",
  "Marketplace Barrhaven – food and shops in one place.",
];

const faqs = [
  {
    question: "Can I book a same-day dryer repair in Barrhaven?",
    answer: "Often yes — especially if you call early in the day.",
  },
  {
    question: "Why does my dryer smell like something is burning?",
    answer: "Lint buildup or wiring issues could be the cause — we'll inspect it safely.",
  },
  {
    question: "Do you repair energy-efficient dryers?",
    answer: "Yes — our technicians are trained on high-efficiency models.",
  },
  {
    question: "Do you provide dryer installation?",
    answer: "Yes — we install dryers in Barrhaven using existing hookups.",
  },
  {
    question: "Do you service nearby communities?",
    answer: "Yes — including Stonebridge, Half Moon Bay, and Chapman Mills.",
  },
];

const relatedServices = [
  { name: "Washer Repair Barrhaven", href: "/washer-repair/barrhaven" },
  { name: "Dryer Repair Barrhaven", href: "/dryer-repair/barrhaven" },
  { name: "Fridge Repair Barrhaven", href: "/fridge-repair/barrhaven" },
  { name: "Freezer Repair Barrhaven", href: "/freezer-repair/barrhaven" },
  { name: "Oven Repair Barrhaven", href: "/oven-repair/barrhaven" },
  { name: "Cooktop Repair Barrhaven", href: "/cooktop-repair/barrhaven" },
  { name: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { name: "Appliance Installation", href: "/appliance-installation/dishwasher" },
];

export default function DryerRepairBarrhavenPage() {
  return (
    <>
      <ServiceHero
        title="Professional Dryer Repair in Barrhaven"
        description="Laundry piling up because the dryer won't heat properly? Fixer Appliance Repair offers Barrhaven homeowners prompt, professional dryer service. From noisy bearings to electrical issues, our team delivers clear quotes, same-day availability in many areas, and a 90-day warranty on all work. We repair dryers from Samsung, LG, Whirlpool, GE, and Maytag."
        icon={<FaWind className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <p className="text-lg mb-8">
            👉 For all appliance help in your area, check our{" "}
            <Link href="/barrhaven" className="font-semibold hover:underline">
              Barrhaven appliance repair page
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
        description="Got a new dryer? We also provide dryer installation in Barrhaven with same-day service available in most areas."
        href="/appliance-installation/dryer"
      />

      <BenefitsSection applianceName="Dryer" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="Wondering if your dryer is still worth fixing? Read our dryer repair vs. replacement guide to weigh your options before you buy a new one." />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Barrhaven area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="dryer"
        nearbyAreasLabel="We also serve households in:"
        footerText={
          <p className="text-lg text-gray-700">
            👉 Looking for city-wide service? Explore our{" "}
            <Link href="/dryer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Dryer Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Enjoy Barrhaven While We Repair Your Dryer */}
      <ThingsToDoSection
        attractions={barrhavenAttractions}
        heading="Enjoy Barrhaven While We Repair Your Dryer"
        description="Here are a few ideas nearby:"
        linkText="Ottawa Events Calendar"
      />

      <FAQSection applianceName="Dryer" faqs={faqs} />

      {/* Contact CTA */}
      <CTASection 
        heading="Schedule Your Dryer Repair in Barrhaven"
        description="Book your dryer repair with Fixer Appliance Repair today — we're here to help:"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With…"
        description="Beyond dryer repair, we also offer these services in Barrhaven:"
        applianceName="Dryer"
      />
    </>
  );
}

