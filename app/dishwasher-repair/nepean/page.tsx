import { Metadata } from "next";
import Link from "next/link";
import { FaUtensils, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import FAQSection from "@/components/FAQSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";

export const metadata: Metadata = {
  title: "Dishwasher Repair Nepean – Fast, Reliable Local Service | Fixer",
  description: "Fixer offers expert dishwasher repair in Nepean. We fix leaks, draining issues & control faults for Bosch, LG, Whirlpool & more — with same-day service & warranty.",
};

const commonIssues = [
  {
    title: "Dishwasher won't start",
    description: "Power issue or latch fault — we diagnose fast.",
  },
  {
    title: "Water doesn't heat up",
    description: "Faulty heating element or temperature sensor.",
  },
  {
    title: "Dishwasher runs forever",
    description: "Thermostat or timer board may be stuck.",
  },
  {
    title: "Rinse aid not dispensing",
    description: "We clean or replace the dispenser unit.",
  },
  {
    title: "Drains but still wet inside",
    description: "Fan dry system or sensor needs inspection.",
  },
  {
    title: "Dishwasher makes squealing noise",
    description: "Motor bearings or stuck impellers — we'll fix it.",
  },
  {
    title: "Controls flash random lights",
    description: "We read diagnostic modes and restore normal function.",
  },
  {
    title: "Filter keeps clogging",
    description: "Debris in system — we clean and teach maintenance.",
  },
  {
    title: "Upper rack falls down",
    description: "We repair support wheels and rails.",
  },
  {
    title: "Water fills but never sprays",
    description: "Circulation pump or spray arm may be jammed.",
  },
];

const whyChooseUs = [
  "Fast, respectful repairs from local techs",
  "Trusted by Nepean homeowners and renters",
  "Same-day visits and flexible scheduling",
  "We explain the issue in plain language",
  "You approve all work before we begin",
];

const neighborhoods = [
  "Barrhaven East",
  "Centrepointe",
  "Merivale Gardens",
  "Manordale",
  "Tanglewood",
  "Fallowfield",
];

const nearbyAreas = [
  { name: "Dishwasher Repair Kanata", slug: "kanata" },
  { name: "Dishwasher Repair Stittsville", slug: "stittsville" },
  { name: "Dishwasher Repair Orleans", slug: "orleans" },
  { name: "Dishwasher Repair Vanier", slug: "vanier" },
  { name: "Dishwasher Repair Barrhaven", slug: "barrhaven" },
  { name: "Dishwasher Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dishwasher Repair Arnprior", slug: "arnprior" },
  { name: "Dishwasher Repair Carleton Place", slug: "carleton-place" },
];

const nepeanAttractions = [
  "Andrew Haydon Park – peaceful greenery and waterfront trails",
  "Bruce Pit – outdoor fun for families and dogs alike",
  "Merivale Mall – shopping made simple",
  "Art Is In Bakery – a trendy spot for fresh-baked treats",
];

const faqs = [
  {
    question: "Do you service dishwashers in Centrepointe and Craig Henry?",
    answer: "Of course! We regularly visit homes in Centrepointe, Craig Henry, and throughout Nepean.",
  },
  {
    question: "What's the typical repair window in Nepean?",
    answer: "Most repairs are completed within 1–2 days after booking.",
  },
  {
    question: "Do you repair built-in dishwashers?",
    answer: "Yes — we specialize in both built-in and freestanding models.",
  },
  {
    question: "What brands are common in Nepean homes?",
    answer: "We see a lot of LG, Bosch, Frigidaire, and Whirlpool units in this area.",
  },
  {
    question: "Can you recommend replacement units if needed?",
    answer: "Yes — we'll guide you on affordable, reliable options and can install them too.",
  },
];

const relatedServices = [
  { name: "Washer Repair Nepean", href: "/washer-repair/nepean" },
  { name: "Dryer Repair Nepean", href: "/dryer-repair/nepean" },
  { name: "Fridge Repair Nepean", href: "/fridge-repair/nepean" },
  { name: "Freezer Repair Nepean", href: "/freezer-repair/nepean" },
  { name: "Oven Repair Nepean", href: "/oven-repair/nepean" },
  { name: "Cooktop Repair Nepean", href: "/cooktop-repair/nepean" },
  { name: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { name: "Dishwasher Installation Nepean", href: "/appliance-installation/dishwasher" },
];

export default function DishwasherRepairNepeanPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaUtensils className="text-[30px] mb-2 inline-block" /> Dishwasher Not Draining? We Fix It in Nepean</h1>
            <p className="text-xl leading-relaxed mb-8">
              Leaking door seals, faulty control panels, or constant draining problems — whatever the issue, Fixer Appliance Repair delivers expert dishwasher repair in Nepean.
            </p>
            <p className="text-lg mb-6">
              We fix all popular models, including Bosch, Whirlpool, GE, LG, Maytag, and Samsung.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your neighborhood, see our{" "}
              <Link href="/nepean" className="font-semibold hover:underline">
                Local Nepean page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} />

      {/* Installation Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-6">Installation Services</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Looking at a new dishwasher in Nepean?</strong> Before replacing, read our{" "}
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                  repair vs. replace guide
                </Link>
                {" "}— it compares repair costs vs. new purchase value.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                If you've already bought one, we provide dishwasher installation in Nepean. We'll connect and test it with the current hookups.
              </p>
              <p className="text-gray-700 mb-6">
                👉 Please note: we don't create new plumbing or electrical wiring.
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

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area: Nepean and Nearby"
        description="We provide appliance repair services across the entire Nepean area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="dishwasher"
        nearbyAreasLabel="Our reach extends to:"
        footerText={
          <p className="text-lg text-gray-700">
            For Ottawa-wide service, check our{" "}
            <Link href="/dishwasher-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Dishwasher Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Things to Do in Nepean */}
      <ThingsToDoSection
        attractions={nepeanAttractions}
        heading="Take a Break in Nepean While We Service Your Dishwasher"
        description="Use the repair time to enjoy the neighborhood:"
        
        linkText="Events in Nepean"
      />

      {/* FAQ */}
      <FAQSection applianceName="Dishwasher" faqs={faqs} />

      {/* Contact CTA */}
      <CTASection 
        heading="Book Your Dishwasher Repair in Nepean"
        description="Live in Nepean? We've got you covered. Reach out now to schedule fast dishwasher repair with a local pro."
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With…"
        description="We handle more than dishwashers — here are our other services in Nepean:"
        applianceName="Dishwasher"
      />
    </>
  );
}
