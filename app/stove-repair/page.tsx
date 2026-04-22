import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
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
  title: "Stove Repair in Ottawa – Electric Ranges & Cooktops | Fixer",
  description:
    "Expert electric stove and range repair in Ottawa — surface elements, ovens, controls, and safety issues. We service Samsung, LG, Whirlpool, GE, and more. Same-day service, 90-day warranty.",
  keywords:
    "stove repair Ottawa, electric range repair Ottawa, stove not heating Ottawa, oven range repair, Fixer Appliance Repair",
};

const commonIssues = [
  {
    title: "Burner won’t heat",
    description: "Bad surface element, infinite switch, or wiring — we test and replace.",
  },
  {
    title: "Oven won’t heat (same unit)",
    description: "Bake or broil element, sensor, or control board — we fix freestanding ranges.",
  },
  {
    title: "One burner always on high",
    description: "Faulty switch or shorted control — we replace the defective part.",
  },
  {
    title: "Display or touch panel dead",
    description: "Control board or membrane failures — we diagnose and repair.",
  },
  {
    title: "Stove trips breaker",
    description: "Ground fault or shorted element — we locate and repair safely.",
  },
  {
    title: "Oven door won’t close",
    description: "Hinge, latch, or seal issues — we adjust or replace parts.",
  },
  {
    title: "Self-clean won’t start or finish",
    description: "Latch, temperature sensor, or board — we get self-clean working again.",
  },
  {
    title: "Error code on display",
    description: "We decode manufacturer codes and fix the underlying fault.",
  },
  {
    title: "Clock or timer not working",
    description: "Control panel or board — we repair or replace as needed.",
  },
  {
    title: "Hot surface light stays on",
    description: "Faulty sensor or indicator circuit — we replace the right part.",
  },
  {
    title: "Oven light won’t turn on",
    description: "Bulb, socket, or door switch — quick fixes we handle often.",
  },
  {
    title: "Uneven baking",
    description: "Element, fan, or sensor problems on the oven portion.",
  },
  {
    title: "Glass cooktop cracked",
    description: "We assess safety and replace cooktops when replacement is the right call.",
  },
  {
    title: "Stove sparks at burner",
    description: "Loose connections or failed receptacle — we repair before it worsens.",
  },
];

const whyChooseUs = [
  "We repair freestanding electric ranges and slide-ins",
  "Fast turnaround on common burner and oven faults",
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
    question: "Do you repair electric stoves only?",
    answer: "Yes — we specialize in electric ranges and cooktop-related faults on those units.",
  },
  {
    question: "My stove top works but the oven doesn’t — can you fix that?",
    answer: "Yes — we service the oven portion of freestanding and slide-in ranges.",
  },
  {
    question: "How much does stove repair cost?",
    answer: "Many repairs fall in the $130–$280 range depending on parts and labor — we quote after diagnosis.",
  },
  {
    question: "Do you carry common stove parts?",
    answer: "We stock many elements and switches; others can be ordered quickly.",
  },
  {
    question: "Do you install new stoves or ranges?",
    answer: "Yes — we can help with professional installation. See our installation page for details.",
  },
  {
    question: "How long does a stove repair take?",
    answer: "Often under 90 minutes when parts are available on the first visit.",
  },
  {
    question: "Is repair worth it or should I replace the stove?",
    answer: "We’ll help you weigh age, repair cost, and condition — honest advice every time.",
    link: "/blog/repair-vs-replace-appliance",
  },
  {
    question: "Do you warranty stove repairs?",
    answer: "Yes — our standard 90-day coverage applies to parts and labor.",
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
  { label: "Microwave Repair Ottawa", href: "/microwave-repair" },
  { label: "Oven Installation Ottawa", href: "/appliance-installation/oven" },
];

export default function StoveRepairPage() {
  return (
    <>
      <ServiceHero
        title={
          <>
            Stove Repair in Ottawa
            <br /> Ranges Back to Full Heat
          </>
        }
        description="Burners weak, oven cold, or controls acting up? Fixer Appliance Repair offers expert electric stove and range repair in Ottawa — cooktop and oven in one visit when you need both."
        icon={<FaFire className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <p className="text-lg text-gray-200 mb-8">
            We work on LG, Samsung, Whirlpool, GE, Maytag, Frigidaire, and more. Same-day service available with a 90-day warranty.
          </p>
        }
        useSectionPadding={true}
        imageSrc="/images/Stove 2.png"
        imageAlt="Stove and range repair service in Ottawa"
        imageSrcRight="/images/Stove1.png"
        imageAltRight="Stove repair Ottawa"
      />

      <CommonIssuesSection issues={commonIssues} />

      <BenefitsSection
        applianceName="Stove"
        benefits={whyChooseUs}
        imageSrc="/images/Stove.png"
        imageAlt="Stove repair in Ottawa"
      />

      <RepairOrReplaceSection description="Stoves often fail one element or control at a time while the rest of the unit is fine. We'll help you decide when a repair is the smart call versus replacement — with clear numbers and no pressure." />

      <InstallationCTASection
        applianceName="Range"
        description="Got a new electric range or stove? We also provide oven and range installation in Ottawa with same-day service available in most areas."
        href="/appliance-installation/oven"
      />

      {/* Brands We Repair */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8"> <Link href="/brands" className="text-primary-600 hover:text-primary-700 font-semibold">Brands We Repair</Link></h2>
            <p className="text-center text-gray-700 mb-8">
              We service electric stoves and ranges from leading brands — freestanding and slide-in models.
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
              Even less common brands? We&apos;ve seen them. Reach out with your model number.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">We Repair Stoves Across Ottawa</h2>
            <p className="text-center text-gray-700 mb-8">
              We proudly repair stoves across all Ottawa neighborhoods, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {serviceAreas.map((area, index) => {
                const slug = area.toLowerCase().replace(/\s+/g, "-");
                return (
                  <Link
                    key={index}
                    href={`/stove-repair/${slug}`}
                    className="text-center p-3 bg-white rounded-lg shadow-sm hover:bg-primary-50 hover:shadow-md transition-all"
                  >
                    <p className="text-gray-900 font-medium hover:text-primary-700">{area}</p>
                  </Link>
                );
              })}
            </div>
            <p className="text-center text-gray-700">
              If you don&apos;t see your area listed — feel free to ask. Chances are, we&apos;re already nearby.
            </p>
          </div>
        </div>
      </section>

      <FAQSection applianceName="Stove" faqs={faqs} />

      <ThingsToDoSection
        attractions={[
          { name: "Westboro Village", description: "Browse local shops, bakeries, and wellness spots" },
          { name: "Remic Rapids Park", description: "Riverside art installations and bike paths" },
          { name: "Stella Luna Gelato Café", description: "Award-winning and worth it" },
          { name: "Ottawa Tool Library", description: "Rent tools or explore creative workshops" },
        ]}
        heading="Things to Do in Ottawa While We Repair Your Stove"
        description="Most stove repairs wrap up quickly — treat yourself to something nearby while we work."
      />

      <CTASection
        heading="Book Your Stove Repair in Ottawa"
        description="Get burners and oven back in sync — book stove repair with Fixer today — fast, affordable, and done right across Ottawa."
      />

      <RelatedServicesSection services={services} applianceName="stove" />
    </>
  );
}
