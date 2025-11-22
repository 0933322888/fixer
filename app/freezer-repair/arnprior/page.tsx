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
  title: "Freezer Repair Arnprior – Upright & Chest Freezer Service | Fixer",
  description: "Fixer Appliance Repair provides trusted freezer repair in Arnprior. From frost buildup and leaks to noisy compressors and error codes, we fix Whirlpool, Samsung, GE, LG & more. Same-day service available with a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Freezer won't hold temperature",
    description: "Arnprior residents often notice soft ice cream or thawing meat. We'll test sensors, fans, and the sealed system to fix it.",
  },
  {
    title: "Heavy frost buildup",
    description: "Failed heaters or clogged drains lead to icy walls. We'll repair and defrost your unit.",
  },
  {
    title: "Water inside the unit",
    description: "Pooling water is usually a blocked drain tube. We'll clean and restore proper flow.",
  },
  {
    title: "Freezer constantly running",
    description: "When it never shuts off, dirty coils or bad thermostats are often the cause. We'll correct both.",
  },
  {
    title: "Odd humming or rattling",
    description: "Motors and fans sometimes get noisy before failing. We'll replace them before a full breakdown.",
  },
  {
    title: "Error codes flashing",
    description: "Digital freezers display codes when sensors fail. We'll interpret and repair them.",
  },
];

const benefits = [
  "Experienced Arnprior freezer specialists with 15+ years in the trade",
  "Friendly, professional service every time",
  "Clear pricing explained before work begins",
  "90-day warranty included on all labour",
];

const serviceAreas = [
  "Downtown Arnprior",
  "Braeside",
  "McNab",
  "White Lake",
  "Sand Point",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/freezer-repair/kanata" },
  { name: "Stittsville", slug: "/freezer-repair/stittsville" },
  { name: "Nepean", slug: "/freezer-repair/nepean" },
  { name: "Orleans", slug: "/freezer-repair/orleans" },
  { name: "Vanier", slug: "/freezer-repair/vanier" },
  { name: "Barrhaven", slug: "/freezer-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/freezer-repair/mississippi-mills" },
  { name: "Carleton Place", slug: "/freezer-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you handle freezer repairs in Arnprior?",
    answer: "Yes — and in nearby Braeside and White Lake.",
  },
  {
    question: "Why is water pooling in my freezer?",
    answer: "Blocked drain or defrost overflow.",
  },
  {
    question: "Do you install freezers?",
    answer: "Yes — with current electrical lines.",
  },
  {
    question: "Do you repair older and newer models?",
    answer: "Yes — all brands supported.",
  },
  {
    question: "Do you provide warranty coverage?",
    answer: "Yes — 90-day labour warranty.",
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

export default function FreezerRepairArnpriorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"><FaSnowflake className="text-[30px] mb-2 inline-block" /> Local Freezer Repair Specialists in Arnprior</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether your freezer is too warm, cycling constantly, or making loud buzzing noises, Fixer Appliance Repair offers professional service in Arnprior homes and cottages.
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
              We service major models including Whirlpool, Samsung, GE, LG, and Frigidaire.
            </p>
          </div>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} heading="Common Freezer Issues We Fix in Arnprior" />

      {/* Freezer Installation CTA */}
      <InstallationCTASection
        applianceName="Freezer"
        description="Got a new freezer? We also provide freezer installation in Arnprior with same-day service available in most areas."
        href="/appliance-installation"
      />

      <BenefitsSection applianceName="Freezer" benefits={benefits} />

      <CTASection />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Arnprior area, including:"
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

      {/* Discover Arnprior */}
      <ThingsToDoSection
        attractions={[
          { name: "Robert Simpson Park", description: "Peaceful park with a beach" },
          { name: "Gillies Grove", description: "Trails through old-growth trees" },
          { name: "Downtown Arnprior", description: "Cafés and local shops" },
        ]}
        heading="Explore Arnprior While We Repair Your Freezer"
        description="Here's how to spend the time:"
        
        linkText="See what's on in Arnprior"
      />

      {/* FAQ */}
      <FAQSection applianceName="Freezer" faqs={faqs} />

      {/* Schedule Service */}
      <CTASection 
        heading="Schedule Your Freezer Repair in Arnprior"
        description="Freezer acting up? Contact Fixer Appliance Repair today for fast, reliable help:"
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
