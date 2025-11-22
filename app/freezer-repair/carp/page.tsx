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
  title: "Freezer Repair Carp – Reliable Upright & Chest Freezer Service | Fixer",
  description: "Fixer Appliance Repair provides fast freezer repair in Carp. From frost buildup to compressor failure, we service Whirlpool, GE, Samsung & more — with honest pricing, rural-friendly service, and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Freezer not turning on",
    description: "We test the power cord, control board, and fuse.",
  },
  {
    title: "Frost everywhere inside",
    description: "Failed door gasket or stuck defrost system.",
  },
  {
    title: "Water on the floor",
    description: "Defrost drain could be blocked — we clean it thoroughly.",
  },
  {
    title: "Buzzing or loud humming",
    description: "Usually linked to motor or compressor wear.",
  },
  {
    title: "Lights blinking",
    description: "We diagnose the control panel or internal switch.",
  },
  {
    title: "Compressor too hot",
    description: "We test overload relays and fan operation.",
  },
  {
    title: "No ice production",
    description: "We inspect water lines and inlet valves.",
  },
  {
    title: "Error message on screen",
    description: "We reset and repair electronic errors.",
  },
  {
    title: "Smells like burning",
    description: "Could indicate electrical or insulation failure.",
  },
  {
    title: "Interior parts cracked or loose",
    description: "We replace or secure drawer tracks, shelves, and more.",
  },
];

const benefits = [
  "We know how important your freezer is — especially in rural homes",
  "Quick diagnosis and clear explanation of the problem",
  "No extra fees for longer drive times",
  "Courteous and tidy repairs every time",
  "We're committed to fixing it right the first time",
];

const serviceAreas = [
  "Village of Carp",
  "Huntley",
  "Corkery",
  "Upper Dwyer Hill",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/freezer-repair/kanata" },
  { name: "Stittsville", slug: "/freezer-repair/stittsville" },
  { name: "Nepean", slug: "/freezer-repair/nepean" },
  { name: "Orleans", slug: "/freezer-repair/orleans" },
  { name: "Vanier", slug: "/freezer-repair/vanier" },
  { name: "Barrhaven", slug: "/freezer-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/freezer-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/freezer-repair/arnprior" },
  { name: "Carleton Place", slug: "/freezer-repair/carleton-place" },
];

const faqs = [
  {
    question: "Can you fix freezers in Carp Village and Kinburn?",
    answer: "Yes — we work across Carp and nearby communities.",
  },
  {
    question: "Do you handle older freezers?",
    answer: "Yes — we repair many models from 10+ years ago.",
  },
  {
    question: "What causes sudden freezer failure?",
    answer: "Often thermostat, control board, or compressor issues.",
  },
  {
    question: "Can you bring parts to Carp?",
    answer: "Yes — we carry parts for popular brands and can order if needed.",
  },
  {
    question: "Do you offer freezer installation?",
    answer: "Yes — for upright and chest units.",
  },
];

const relatedServices = [
  { name: "Washer Repair in Ottawa", href: "/washer-repair" },
  { name: "Dryer Repair in Ottawa", href: "/dryer-repair" },
  { name: "Dishwasher Repair in Ottawa", href: "/dishwasher-repair" },
  { name: "Fridge Repair in Ottawa", href: "/fridge-repair" },
  { name: "Oven Repair in Ottawa", href: "/oven-repair" },
  { name: "Freezer Installation in Ottawa", href: "/appliance-installation" },
];

export default function FreezerRepairCarpPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"><FaSnowflake className="text-[30px] mb-2 inline-block" /> Dependable Freezer Repair in Carp</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            A broken freezer in Carp can mean wasted food and stress. Whether it's a chest unit or an upright, Fixer Appliance Repair provides fast, lasting solutions — with honest, rural-friendly service.
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
              We handle GE, Whirlpool, Samsung, LG, and Maytag.
            </p>
          </div>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} />

      {/* Freezer Installation CTA */}
      <InstallationCTASection
        applianceName="Freezer"
        description="Got a new freezer? We also provide freezer installation in Carp with same-day service available in most areas."
        href="/appliance-installation"
      />

      <BenefitsSection applianceName="Freezer" benefits={benefits} />

      <CTASection />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area: Carp and Nearby"
        description="We provide appliance repair services across the entire Carp area, including:"
        neighborhoods={serviceAreas}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name,
          slug: area.slug.replace("/freezer-repair/", "")
        }))}
        applianceType="freezer"
        nearbyAreasLabel="We also provide freezer repair services in:"
        footerText={
          <p className="text-lg text-gray-700">
            For full coverage, see our{" "}
            <Link href="/freezer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Freezer Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Explore Carp */}
      <ThingsToDoSection
        attractions={[
          { name: "Carp Farmers' Market", description: "One of the best in Ontario" },
          { name: "Diefenbunker Museum", description: "Unique and fascinating" },
          { name: "Rural Art Studios", description: "Seasonal markets" },
          { name: "Carp Ridge EcoWellness", description: "Nature walks and spa" },
        ]}
        heading="Explore Carp While We Fix Your Freezer"
        description="Carp is full of hidden gems. While we repair your freezer, explore:"
        
        linkText="See current happenings here: Events in Carp"
      />

      {/* FAQ */}
      <FAQSection applianceName="Freezer" faqs={faqs} />

      {/* Schedule Service */}
      <CTASection
        heading="Book Your Freezer Repair in Carp"
        description="Call or text us today — we service both upright and chest freezers across Carp."
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With..."
        description="We do more than just freezer repair — check out our other Ottawa services:"
        applianceName="Freezer"
      />
    </>
  );
}
