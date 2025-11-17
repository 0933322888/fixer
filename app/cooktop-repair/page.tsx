import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import CTASection from "@/components/CTASection";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cooktop Repair Ottawa – Fast Cooktop Service | Fixer",
  description:
    "Fixer Appliance Repair provides expert cooktop repair in Ottawa. From cracked glass and faulty burners to wiring issues and error codes, we service Whirlpool, GE, Samsung, LG & more. Same-day service, clear pricing, 90-day warranty.",
};

const commonProblems = [
  {
    title: "Burner won't turn on",
    description: "We check the heating element, switch, and wiring.",
  },
  {
    title: "Burner gets too hot",
    description: "A faulty infinite switch might be stuck - we replace it.",
  },
  {
    title: "Cooktop cracked",
    description: "We install new glass or ceramic surfaces.",
  },
  {
    title: "Cooktop won't power on",
    description: "We check the breaker, fuse, and power wiring.",
  },
  {
    title: "One burner works, others don't",
    description: "Multiple switch or board failures - we test and repair all.",
  },
  {
    title: "Control knob broken",
    description: "We replace cracked or stripped knobs.",
  },
  {
    title: "Indicator light stays on",
    description: "Faulty light switch or control needs replacing.",
  },
  {
    title: "Cooktop trips breaker",
    description: "We check for short circuits in elements or wiring.",
  },
  {
    title: "Cooking surface stained or scorched",
    description: "We clean or polish if cosmetic; replace if needed.",
  },
  {
    title: "Cooktop hums or buzzes",
    description: "Could be loose wiring or an electrical fault - we investigate safely.",
  },
  {
    title: "Burner heats unevenly",
    description: "We inspect and replace partially damaged coil elements.",
  },
  {
    title: "Knob won't turn or clicks",
    description: "A jammed or stripped control shaft may need service.",
  },
  {
    title: "Burner light doesn't come on",
    description: "Often a small switch behind the panel - we test and repair.",
  },
  {
    title: "Ceramic top discoloration",
    description: "Mineral deposits or overheating - we clean or resurface.",
  },
  {
    title: "Electronic control unresponsive",
    description: "We test the circuit board or control module.",
  },
  {
    title: "Cooktop beeps or flashes codes",
    description: "Diagnostic mode may be stuck - we reset and resolve the issue.",
  },
  {
    title: "One side completely dead",
    description: "We check internal wiring and relay boards.",
  },
  {
    title: "Burners cycle off too fast",
    description: "Misreading temperature sensors - we recalibrate or replace.",
  },
  {
    title: "Cracks near heating zone",
    description: "We recommend full top replacement for safety.",
  },
  {
    title: "Strong odor when cooking",
    description: "May be trapped grease or heat-damaged insulation - we inspect thoroughly.",
  },
];

const whyChooseUs = [
  "We repair all types of electric cooktops - smooth-top, coil, induction.",
  "Fast diagnosis and efficient repairs.",
  "Clear rates and no last-minute add-ons.",
  "Neat, tidy, and respectful in your kitchen.",
  "Most fixes completed on the first visit.",
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
  { name: "Electrolux", href: "?" },
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
    question: "Do you repair both glass and coil cooktops?",
    answer: "Yes - we service radiant, coil, and ceramic models.",
  },
  {
    question: "My cooktop won't turn on - can you help?",
    answer: "Absolutely - we check burners, wiring, switches, and controls.",
  },
  {
    question: "What if one burner works and others don't?",
    answer: "That's usually a switch or element issue - we can fix it.",
  },
  {
    question: "Do you service induction cooktops?",
    answer: "Yes - we repair select induction models. Ask us about yours.",
  },
  {
    question: "Can cracked glass tops be repaired?",
    answer: "The glass must be replaced - we can help with parts and installation.",
  },
  {
    question: "How much does cooktop repair cost?",
    answer: "Between $140 and $270 on average.",
  },
  {
    question: "Do you install replacement cooktops?",
    answer: "Yes - we offer safe and clean installations.",
  },
  {
    question: "Do you test for overheating issues?",
    answer: "Yes - we test thermal sensors and power levels post-repair.",
  },
  {
    question: "What brands do you work with?",
    answer: "GE, Whirlpool, Frigidaire, Samsung, LG, and more.",
  },
  {
    question: "Is your work covered by warranty?",
    answer: "Yes - 90 days on parts and labor.",
  },
];

const thingsToDo = [
  {
    title: "China Town (Somerset W.)",
    description: "Explore dumplings, noodles, and bubble tea.",
  },
  {
    title: "Plant Recreation Centre",
    description: "Swim, lift, or take a fitness class.",
  },
  {
    title: "Parliament Hill lawn",
    description: "Iconic picnic spot with great photo ops.",
  },
  {
    title: "The Ministry of Coffee (Wellington St.)",
    description: "Hip cafe with local roasts.",
  },
];

const otherServices = [
  { name: "Washer Repair Ottawa", href: "/washer-repair" },
  { name: "Dryer Repair Ottawa", href: "/dryer-repair" },
  { name: "Dishwasher Repair Ottawa", href: "/dishwasher-repair" },
  { name: "Fridge Repair Ottawa", href: "/fridge-repair" },
  { name: "Freezer Repair Ottawa", href: "/freezer-repair" },
  { name: "Oven Repair Ottawa", href: "/oven-repair" },
  { name: "Microwave Repair Ottawa", href: "/microwave-repair" },
  { name: "Cooktop Installation Ottawa", href: "/cooktop-installation" },
];

export default function CooktopRepairPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white">
              Cooktop Repair in Ottawa
              <br /> Smooth Heating Starts Here
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              When your cooktop won't heat or certain burners stop working, we are here to help. Fixer
              Appliance Repair handles electric cooktop repairs in Ottawa with same-day availability.
            </p>
            <p className="text-xl text-gray-100 mb-8">
              We work with LG, Samsung, Whirlpool, GE, Maytag, Frigidaire, and others.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                Book Online
              </Link>
              <a
                href="tel:613-413-6969"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-500"
              >
                Call us
              </a>
            </div>
          </div>
        </div>
      </section>

      <CommonIssuesSection issues={commonProblems} />


      <BenefitsSection applianceName="Cooktop" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="Replacing a cooktop can be costly. If it is still under 10 to 12 years old, our guide can help you decide if it is worth saving." />

      <InstallationCTASection
        applianceName="Cooktop"
        description="We safely install electric cooktops in Ottawa kitchens, including drop-in models and custom countertop cuts."
        href="/cooktop-installation"
        heading="Installation Services"
      />

      {/* Brands We Repair */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8"> <Link href="/brands" className="text-primary-600 hover:text-primary-700 font-semibold">Brands We Repair</Link></h2>
            <p className="text-center text-gray-700 mb-8">
              We repair cooktops from these well-known brands:
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
              Do not see your cooktop brand here? Just give us a call - we are happy to help.
            </p>
          </div>
        </div>
      </section>


      {/* Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">We Serve These Areas</h2>
            <p className="text-center text-gray-700 mb-8">
              Need electric cooktop repair in Ottawa? We serve the following communities:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {serviceAreas.map((area, index) => {
                const slug = area.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link
                    key={index}
                    href={`/cooktop-repair/${slug}`}
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

      <FAQSection applianceName="Cooktop" faqs={faqs} />

      <ThingsToDoSection
        attractions={thingsToDo}
        heading="Things to Do in Ottawa While We Repair Your Cooktop"
        description="While your cooktop is being handled, you can enjoy some of Ottawa's best casual escapes:"
      />

      <CTASection
        heading="Book Your Cooktop Repair in Ottawa"
        description="Need your cooktop working again ASAP? Let Fixer handle it. Contact us by phone, text, or book online - Ottawa's friendly appliance pros are here for you."
      />

      <RelatedServicesSection services={otherServices} applianceName="cooktop" />
    </>
  );
}
