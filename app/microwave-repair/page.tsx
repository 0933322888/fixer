import { Metadata } from "next";
import Link from "next/link";
import { FaWaveSquare } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import CTASection from "@/components/CTASection";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Microwave Repair in Ottawa – Fast Fixes for All Brands | Fixer",
  description:
    "Expert microwave repair in Ottawa — built-in, countertop, and over-the-range models. We service Samsung, LG, Whirlpool, GE, and more. Same-day service, 90-day warranty.",
  keywords:
    "microwave repair Ottawa, microwave service Ottawa, built-in microwave repair, over the range microwave repair, Fixer Appliance Repair",
};

const commonIssues = [
  {
    title: "Microwave not heating",
    description:
      "Likely a failed magnetron, capacitor, or diode — we test and replace them.",
  },
  {
    title: "Turntable not spinning",
    description:
      "Could be a worn motor or a broken coupler — we replace it.",
  },
  {
    title: "Microwave sparks inside",
    description: "Often caused by a damaged waveguide cover or metal debris.",
  },
  {
    title: "Stops mid-cycle",
    description: "Thermal fuse, control board, or door switch failure is common.",
  },
  {
    title: "Display not working",
    description:
      "We replace control panels, touchpads, or faulty wiring.",
  },
  {
    title: "Microwave door won’t close",
    description: "Broken latch or alignment issue — we adjust or replace it.",
  },
  {
    title: "Strange humming sound",
    description:
      "Indicates high-voltage component stress — we diagnose safely.",
  },
  {
    title: "Burning smell",
    description:
      "Could be wiring, food debris, or overheated parts — we clean and repair.",
  },
  {
    title: "Buttons not responding",
    description: "Control board or keypad membrane needs service.",
  },
  {
    title: "Microwave light not working",
    description: "We replace internal bulbs or switches.",
  },
  {
    title: "Microwave trips breaker",
    description: "Shorted components or grounding faults — we fix them.",
  },
  {
    title: "Microwave door stuck closed",
    description: "Latch or lock assembly failure — we unlock and replace.",
  },
  {
    title: "Arcing or popping noise",
    description:
      "Faulty stirrer fan or metal contamination inside.",
  },
  {
    title: "Microwave runs with door open",
    description: "Major safety risk — we replace faulty switches immediately.",
  },
  {
    title: "Interior paint peeling",
    description:
      "We clean, treat rust, and recoat where needed.",
  },
];

const whyChooseUs = [
  "We repair countertop, built-in, and OTR microwaves",
  "Fast turnaround on common issues",
  "Clear communication and dependable work",
  "We respect your space and schedule",
  "No pressure — just straightforward service",
];

const brands = [
  { name: "Bosch", href: "/brands/bosch" },
  { name: "Frigidaire", href: "/brands/frigidaire" },
  { name: "GE", href: "/brands/ge" },
  { name: "Kenmore", href: "/brands/kenmore" },
  { name: "LG", href: "/brands/lg" },
  { name: "Maytag", href: "/brands/maytag" },
  { name: "Panasonic", href: "/brands/panasonic" },
  { name: "Samsung", href: "/brands/samsung" },
  { name: "Whirlpool", href: "/brands/whirlpool" },
  { name: "KitchenAid", href: "/brands/kitchenaid" },
];

const serviceAreas = [
  "Kanata",
  "Stittsville",
  "Nepean",
  "Orleans",
  "Vanier",
  "Barrhaven",
  "Carp",
  "Arnprior",
  "Carleton Place",
  "Mississippi Mills",
];

const faqs = [
  {
    question: "Do you repair over-the-range microwaves?",
    answer: "Yes — we service built-in and over-the-range models.",
  },
  {
    question: "My microwave isn’t heating — can it be fixed?",
    answer: "Yes — usually it’s a magnetron or door switch issue.",
  },
  {
    question: "Do you repair drawer microwaves?",
    answer: "We handle select models — contact us with the brand.",
  },
  {
    question: "Can you replace a microwave turntable motor?",
    answer: "Absolutely — it’s a common repair we perform.",
  },
  {
    question: "How much does microwave repair cost?",
    answer: "Usually $100–$200 depending on parts and labor.",
  },
  {
    question: "Do you install new microwaves?",
    answer: "Yes — we uninstall and install most electric models.",
  },
  {
    question: "How long does a microwave repair take?",
    answer: "Usually under an hour if parts are on hand.",
  },
  {
    question: "What if the buttons or display don’t work?",
    answer: "We diagnose and fix control panel issues too.",
  },
  {
    question: "Is repair worth it or should I buy new?",
    answer: "We'll help you decide based on age, cost, and usage.",
    link: "/blog/repair-vs-replace-appliance",
  },
  {
    question: "Do you warranty microwave repairs?",
    answer: "Yes — our standard 90-day coverage applies.",
  },
];

const services = [
  { label: "Washer Repair Ottawa", href: "/washer-repair" },
  { label: "Dryer Repair Ottawa", href: "/dryer-repair" },
  { label: "Dishwasher Repair Ottawa", href: "/dishwasher-repair" },
  { label: "Fridge Repair Ottawa", href: "/fridge-repair" },
  { label: "Freezer Repair Ottawa", href: "/freezer-repair" },
  { label: "Oven Repair Ottawa", href: "/oven-repair" },
  { label: "Cooktop Repair Ottawa", href: "/cooktop-repair" },
  { label: "Microwave Installation Ottawa", href: "/appliance-installation/oven" },
];

export default function MicrowaveRepairPage() {
  return (
    <>
      <ServiceHero
        title={
          <>
            Microwave Repair in Ottawa
            <br /> Fast Fixes, No Sparks
          </>
        }
        description="Microwave won't start, heat, or spin? Fixer Appliance Repair offers expert microwave repair in Ottawa — built-ins and over-the-range models included."
        icon={<FaWaveSquare className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <p className="text-lg text-gray-200 mb-8">
            We work on LG, Samsung, Whirlpool, GE, Maytag, Frigidaire, and more. Same-day service available with a 90-day warranty.
          </p>
        }
        useSectionPadding={true}
        imageSrc="/images/Microwave.png"
        imageAlt="Microwave repair service in Ottawa"
        imageSrcRight="/images/microwave_5.jpg"
        imageAltRight="Microwave repair Ottawa"
      />

      <CommonIssuesSection issues={commonIssues} />

      <BenefitsSection
        applianceName="Microwave"
        benefits={whyChooseUs}
        imageSrc="/images/Microwave 1.png"
        imageAlt="Microwave repair in Ottawa"
      />

      <RepairOrReplaceSection description="Microwaves often fail due to a single component like the magnetron or door switch. We'll help you decide when it's smarter to repair than replace — and give you an honest estimate either way." />

      <InstallationCTASection
        applianceName="Microwave"
        description="Got a new microwave? We also provide microwave installation in Ottawa with same-day service available in most areas."
        href="/appliance-installation/microwave"
      />

      {/* Brands We Repair */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8"> <Link href="/brands" className="text-primary-600 hover:text-primary-700 font-semibold">Brands We Repair</Link></h2>
            <p className="text-center text-gray-700 mb-8">
              We service countertop and built-in microwaves from leading and specialty brands.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {brands.map((brand, index) => (
                <Link
                  key={index}
                  href={brand.href}
                  className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors"
                >
                  <p className="font-semibold text-gray-900 hover:text-primary-700">{brand.name}</p>
                </Link>
              ))}
            </div>
            <p className="text-center text-gray-700">
              Even less common brands? We've seen them. Reach out with your model number.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">We Repair Microwaves Across Ottawa</h2>
            <p className="text-center text-gray-700 mb-8">
              We proudly repair microwaves across all Ottawa neighborhoods, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {serviceAreas.map((area, index) => {
                const slug = area.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link
                    key={index}
                    href={`/microwave-repair/${slug}`}
                    className="text-center p-3 bg-white rounded-lg shadow-sm hover:bg-primary-50 hover:shadow-md transition-all"
                  >
                    <p className="text-gray-900 font-medium hover:text-primary-700">{area}</p>
                  </Link>
                );
              })}
            </div>
            <p className="text-center text-gray-700">
              If you don't see your area listed — feel free to ask. Chances are, we're already nearby.
            </p>
          </div>
        </div>
      </section>

      <FAQSection applianceName="Microwave" faqs={faqs} />

      <ThingsToDoSection
        attractions={[
          { name: "Westboro Village", description: "Browse local shops, bakeries, and wellness spots" },
          { name: "Remic Rapids Park", description: "Riverside art installations and bike paths" },
          { name: "Stella Luna Gelato Café", description: "Award-winning and worth it" },
          { name: "Ottawa Tool Library", description: "Rent tools or explore creative workshops" },
        ]}
        heading="Things to Do in Ottawa While We Repair Your Microwave"
        description="Microwave repairs don't take long — but you still deserve a little break."
      />

      <CTASection
        heading="Book Your Microwave Repair in Ottawa"
        description="No more cold leftovers! Book your microwave repair with Fixer today — fast, affordable, and done right across Ottawa."
      />

      <RelatedServicesSection services={services} applianceName="microwave" />
    </>
  );
}

