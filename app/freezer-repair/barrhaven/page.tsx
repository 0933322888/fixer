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
  title: "Freezer Repair Barrhaven – Upright & Chest Freezers Fixed Fast | Fixer",
  description: "Fixer Appliance Repair offers freezer repair in Barrhaven. From frost buildup and leaks to noisy compressors and uneven cooling, we service Whirlpool, LG, Samsung, GE & more. Same-day local service with a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Freezer not cold enough",
    description: "In Barrhaven townhomes, airflow issues or weak compressors often cause warm spots. We'll restore freezing quickly.",
  },
  {
    title: "Ice buildup on shelves",
    description: "Door gaskets leaking air often create frost. We'll reseal the door to keep frost out.",
  },
  {
    title: "Freezer leaking water",
    description: "Blocked defrost drains push water onto floors. We'll clear them and prevent damage.",
  },
  {
    title: "Unit runs too loud",
    description: "Fans, bearings, or compressors sometimes roar when failing. We'll silence the noise.",
  },
  {
    title: "Food freezing unevenly",
    description: "Sensors or fans may be misreading temperatures. We'll adjust or replace them.",
  },
  {
    title: "Door switch not working",
    description: "If the light stays off or the fan won't stop, the switch may be bad. We'll test and replace it.",
  },
];

const benefits = [
  "Local Barrhaven team with deep freezer repair knowledge",
  "Same-day and next-day service slots available",
  "90-day warranty on all jobs",
  "Professional, reliable service with clear communication",
];

const serviceAreas = [
  "Chapman Mills",
  "Stonebridge",
  "Longfields",
  "Half Moon Bay",
  "Knollsbrook",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/freezer-repair/kanata" },
  { name: "Stittsville", slug: "/freezer-repair/stittsville" },
  { name: "Nepean", slug: "/freezer-repair/nepean" },
  { name: "Orleans", slug: "/freezer-repair/orleans" },
  { name: "Vanier", slug: "/freezer-repair/vanier" },
  { name: "Mississippi Mills", slug: "/freezer-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/freezer-repair/arnprior" },
  { name: "Carleton Place", slug: "/freezer-repair/carleton-place" },
];

const faqs = [
  {
    question: "Can I book same-day freezer repair in Barrhaven?",
    answer: "Yes — subject to schedule.",
  },
  {
    question: "Why does my freezer run constantly?",
    answer: "Dirty coils, bad sensors, or refrigerant issues.",
  },
  {
    question: "Do you provide freezer installation?",
    answer: "Yes — with existing hookups.",
  },
  {
    question: "Do you serve nearby areas?",
    answer: "Yes — Stonebridge, Half Moon Bay, Chapman Mills.",
  },
  {
    question: "Do you provide upfront pricing?",
    answer: "Yes — always before work.",
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

export default function FreezerRepairBarrhavenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"><FaSnowflake className="text-[30px] mb-2 inline-block" /> Fast Freezer Repair for Barrhaven Families</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            From faulty seals to units that over-freeze, Fixer Appliance Repair provides quick, professional freezer repair in Barrhaven. Same-day visits are available in many neighbourhoods, backed by a 90-day warranty.
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
              Brands we repair include LG, Samsung, Whirlpool, GE, and Maytag.
            </p>
          </div>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} heading="Common Freezer Issues We Fix in Barrhaven" />

      {/* Installation Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Freezer Installation in Barrhaven</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                Upgrading your freezer in Barrhaven?
              </p>
              <p className="text-center">
                Check our repair vs. replace guide — it explains costs and expected lifespan.
              </p>
              <p className="text-center">
                For new appliances, we provide freezer installation in Barrhaven. We'll set it up and test it with your existing power connections.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ We don't install new circuits or plumbing.
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
        description="We provide appliance repair services across the entire Barrhaven area, including:"
        neighborhoods={serviceAreas}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name,
          slug: area.slug.replace("/freezer-repair/", "")
        }))}
        applianceType="freezer"
        nearbyAreasLabel="We also provide freezer repair services in:"
        footerText={
          <p className="text-lg text-gray-700">
            For complete coverage, see our{" "}
            <Link href="/freezer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Freezer Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Discover Barrhaven */}
      <ThingsToDoSection
        attractions={[
          { name: "Walter Baker Centre", description: "Pool, skating, and more" },
          { name: "Chapman Mills", description: "Relaxing riverfront paths" },
          { name: "Marketplace Barrhaven", description: "Shop and grab a bite" },
        ]}
        heading="Explore Barrhaven While We Fix Your Freezer"
        description="Why not take a quick outing?"
        
        linkText="See upcoming events in Barrhaven"
      />

      {/* FAQ */}
      <FAQSection applianceName="Freezer" faqs={faqs} />

      {/* Schedule Service */}
      <CTASection 
        heading="Schedule Your Freezer Repair in Barrhaven"
        description="We're here to help — book your freezer repair appointment today:"
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
