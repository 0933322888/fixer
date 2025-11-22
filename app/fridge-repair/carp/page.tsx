import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import FAQSection from "@/components/FAQSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import ServiceAreaSection from "@/components/ServiceAreaSection";

export const metadata: Metadata = {
  title: "Fridge Repair Carp – Reliable Service for Homes & Cottages | Fixer",
  description: "Fixer provides expert fridge repair in Carp. We fix cooling, leaks & noise issues for Whirlpool, Samsung, GE & more — with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Fridge not running at all",
    description: "We test start relay, overload protector, and power.",
  },
  {
    title: "Runs too often",
    description: "Could be dirty coils or stuck thermostat.",
  },
  {
    title: "Clicking noise from back",
    description: "Compressor or relay failure may be to blame.",
  },
  {
    title: "Door won't seal properly",
    description: "We adjust hinges or replace the gasket.",
  },
  {
    title: "Ice buildup in freezer",
    description: "Faulty defrost heater or blocked vents.",
  },
  {
    title: "Water filter not working",
    description: "We replace filters and check connections.",
  },
  {
    title: "Display flickers",
    description: "We inspect wiring and boards.",
  },
  {
    title: "Milk spoiling quickly",
    description: "Fluctuating temps from failing sensors.",
  },
  {
    title: "Shelves keep breaking",
    description: "We order and install replacements.",
  },
  {
    title: "Control board beeping",
    description: "We diagnose the alert and silence it.",
  },
];

const benefits = [
  "Experienced with both modern and older models",
  "Efficient diagnostics and reliable solutions",
  "Friendly technicians who respect rural households",
  "Clean work and proper disposal of old parts",
  "Flexible scheduling options",
];

const serviceAreas = [
  "Village of Carp",
  "Huntley",
  "Corkery",
  "Upper Dwyer Hill",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/fridge-repair/kanata" },
  { name: "Stittsville", slug: "/fridge-repair/stittsville" },
  { name: "Nepean", slug: "/fridge-repair/nepean" },
  { name: "Orleans", slug: "/fridge-repair/orleans" },
  { name: "Vanier", slug: "/fridge-repair/vanier" },
  { name: "Barrhaven", slug: "/fridge-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/fridge-repair/mississippi-mills" },
  { name: "Carleton Place", slug: "/fridge-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you repair fridges in Kinburn and Huntley?",
    answer: "Yes — we cover Carp and nearby areas.",
  },
  {
    question: "Do you work with built-in or panel-ready fridges?",
    answer: "We do — including premium brands.",
  },
  {
    question: "Is it worth fixing a 10-year-old fridge?",
    answer: "Often yes — we'll assess and give you honest advice.",
    link: "/blog/repair-vs-replace-appliance",
  },
  {
    question: "How quickly can you get to Carp?",
    answer: "Usually within 1–2 business days, sometimes sooner.",
  },
  {
    question: "Do you install new fridges?",
    answer: "Yes — we offer full installation services.",
  },
];

export default function FridgeRepairCarpPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"><FaSnowflake className="text-[30px] mb-2 inline-block" /> Fridge Repair Services for Carp Homes & Cottages</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            A faulty refrigerator in Carp — whether it's frosting up, leaking, or running non-stop — can ruin more than groceries. Fixer Appliance Repair provides dependable rural fridge service with clear, upfront pricing.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Book Service Now
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              We repair brands like GE, Maytag, Whirlpool, Samsung, and LG.
            </p>
          </div>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} />

      {/* Fridge Installation CTA */}
      <InstallationCTASection
        applianceName="Fridge"
        description="Got a new fridge? We also provide fridge installation in Carp with same-day service available in most areas."
        href="/appliance-installation"
      />

      <BenefitsSection applianceName="Fridge" benefits={benefits} />

      <CTASection />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area: Carp and Nearby"
        description="We provide appliance repair services across the entire Carp area, including:"
        neighborhoods={serviceAreas}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name,
          slug: area.slug.replace("/fridge-repair/", "")
        }))}
        applianceType="fridge"
        nearbyAreasLabel="We also provide fridge repair services in:"
        footerText={
          <p className="text-lg text-gray-700">
            For complete coverage, see our{" "}
            <Link href="/fridge-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Fridge Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Discover Carp */}
      <ThingsToDoSection
        attractions={[
          { name: "Carp Farmers' Market", description: "One of the best in Ontario" },
          { name: "Diefenbunker Museum", description: "Unique and fascinating" },
          { name: "Rural Art Studios", description: "Seasonal markets" },
          { name: "Carp Ridge Centre", description: "Nature walks and spa" },
        ]}
        heading="Explore Carp While We Fix Your Fridge"
        description="Carp has a warm small-town charm perfect for a quiet outing. While we fix your fridge, check out:"
        
        linkText="Check out what's happening now: Events in Carp"
      />

      {/* FAQ */}
      <FAQSection applianceName="Fridge" faqs={faqs} />

      {/* Schedule Service */}
      <CTASection 
        heading="Book Your Fridge Repair in Carp"
        description="We service all of Carp and surrounding farms — book now and keep your fridge cool."
        
        />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Carp", href: "/washer-repair/carp" },
          { name: "Dryer Repair Carp", href: "/dryer-repair/carp" },
          { name: "Dishwasher Repair Carp", href: "/dishwasher-repair/carp" },
          { name: "Oven Repair Carp", href: "/oven-repair/carp" },
          { name: "Fridge Installation Carp", href: "/fridge-installation" },
        ]}
        heading="Also Need Help With…"
        description="Fridge repair is only part of what we do — here are our other services in Carp:"
        applianceName="Fridge"
      />

    </>
  );
}
