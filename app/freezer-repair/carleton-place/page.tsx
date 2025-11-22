import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import FAQSection from "@/components/FAQSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";

export const metadata: Metadata = {
  title: "Freezer Repair Carleton Place – Upright & Chest Freezer Service | Fixer",
  description: "Fixer Appliance Repair offers trusted freezer repair in Carleton Place. From frost buildup and clicking noises to power issues and leaks, we fix Whirlpool, Samsung, GE, LG & more. Same-day service available with a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Freezer not powering on",
    description: "In Carleton Place, power surges or bad control boards often cause a complete shutdown. We'll bring it back to life.",
  },
  {
    title: "Food thawing too quickly",
    description: "A faulty thermostat or low refrigerant often causes unstable temps. We'll restore proper freezing.",
  },
  {
    title: "Frost covering drawers",
    description: "Broken defrost sensors or air leaks create ice buildup. We'll repair seals and clear frost.",
  },
  {
    title: "Freezer door won't close tight",
    description: "Damaged hinges or gaskets keep cold air from staying in. We'll fix them quickly.",
  },
  {
    title: "Clicking noises",
    description: "Often a relay struggling to start the compressor. We'll diagnose and replace it.",
  },
  {
    title: "Plastic bins cracking",
    description: "We'll replace worn or broken drawers so your freezer looks and works like new.",
  },
];

const benefits = [
  "Local Carleton Place technicians experienced with all major freezer brands",
  "Transparent pricing and no upselling",
  "Same-day and next-day booking options",
  "Every repair or install covered by a 90-day guarantee",
];

const serviceAreas = [
  "Carleton Place West",
  "Carleton Place East",
  "Riverside Park",
  "Mississippi Quays",
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
];

const faqs = [
  {
    question: "Do you offer same-day freezer service in Carleton Place?",
    answer: "When possible, yes.",
  },
  {
    question: "Why is my freezer making clicking noises?",
    answer: "Often a relay, compressor, or fan problem.",
  },
  {
    question: "Do you install new freezers?",
    answer: "Yes — with existing power supply.",
  },
  {
    question: "Do you service nearby areas?",
    answer: "Yes — Beckwith, Franktown, and more.",
  },
  {
    question: "Do you guarantee your work?",
    answer: "Yes — 90-day warranty included.",
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

export default function FreezerRepairCarletonPlacePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"><FaSnowflake className="text-[30px] mb-2 inline-block" /> Trusted Freezer Repair in Carleton Place</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            A broken freezer can mean spoiled food and frustration. Fixer Appliance Repair helps Carleton Place residents with fast diagnostics and dependable repairs, covering leaks, electrical faults, and cooling problems.
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
              We work with brands like GE, Maytag, Samsung, Whirlpool, and LG.
            </p>
          </div>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} heading="Common Freezer Issues We Fix in Carleton Place" />

      {/* Installation Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Freezer Installation in Carleton Place</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                Need a freezer upgrade in Carleton Place?
              </p>
              <p className="text-center">
                First, see our repair vs. replace guide — it breaks down costs, lifespan, and common failures.
              </p>
              <p className="text-center">
                For new purchases, we provide freezer installation in Carleton Place. We'll connect and test it with your existing electrical supply.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ No new wiring or plumbing included.
              </p>
              <div className="text-center mt-6">
                <Link href="/appliance-installation" className="btn-primary">
                  Learn More About Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection applianceName="Freezer" benefits={benefits} />

      <CTASection />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Carleton Place area, including:"
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

      {/* Discover Carleton Place */}
      <ThingsToDoSection
        attractions={[
          { name: "Riverside Park", description: "Stroll along the Mississippi River" },
          { name: "Downtown Carleton Place", description: "Shops and dining in the heart of town" },
          { name: "Heritage Museum", description: "Local heritage on display" },
        ]}
        heading="Explore the Town While We Repair Your Freezer"
        description="Turn repair time into an outing:"
        
        linkText="See what's going on in Carleton Place"
      />

      {/* FAQ */}
      <FAQSection applianceName="Freezer" faqs={faqs} />

      {/* Schedule Service */}
      <CTASection 
        heading="Schedule Your Freezer Repair in Carleton Place"
        description="Don't let your food thaw — text or call Fixer Appliance Repair to arrange service:"
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
