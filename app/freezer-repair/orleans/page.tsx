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
  title: "Freezer Repair Orleans – Fast, Reliable Upright & Chest Freezer Service | Fixer",
  description: "Fixer Appliance Repair provides expert freezer repair in Orleans. From frost buildup to leaks and noisy compressors, we service Samsung, Whirlpool, LG & more — with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Freezer not freezing properly",
    description: "In Orleans homes, this is often due to weak compressors, thermostat faults, or low refrigerant. We'll restore safe freezing temperatures.",
  },
  {
    title: "Frost building up on walls",
    description: "When defrost heaters or door gaskets fail, frost takes over. We'll repair the system and prevent ice overload.",
  },
  {
    title: "Water leaking inside drawers",
    description: "Blocked drains or defrost overflow are common. We'll clear the drain and stop leaks.",
  },
  {
    title: "Freezer running all the time",
    description: "Dirty coils or broken sensors force the unit to run non-stop. We'll fix it and cut your hydro bills.",
  },
  {
    title: "Unusual buzzing noises",
    description: "Relays and compressors often buzz before failing. We'll replace them before a total breakdown.",
  },
  {
    title: "Control panel flashing codes",
    description: "Samsung, LG, and Whirlpool freezers show error codes when parts fail. We'll decode and repair the problem.",
  },
];

const benefits = [
  "Local Orleans freezer repair and installation pros",
  "Same-day and next-day availability",
  "90-day labour warranty on all work",
  "Clear, upfront pricing with no surprises",
];

const serviceAreas = [
  "Fallingbrook",
  "Avalon",
  "Queenswood Heights",
  "Chapel Hill",
  "Convent Glen",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/freezer-repair/kanata" },
  { name: "Stittsville", slug: "/freezer-repair/stittsville" },
  { name: "Nepean", slug: "/freezer-repair/nepean" },
  { name: "Vanier", slug: "/freezer-repair/vanier" },
  { name: "Barrhaven", slug: "/freezer-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/freezer-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/freezer-repair/arnprior" },
  { name: "Carleton Place", slug: "/freezer-repair/carleton-place" },
];

const faqs = [
  {
    question: "Can I get same-day freezer repair in Orleans?",
    answer: "Often yes — call early.",
  },
  {
    question: "Why is my freezer not cold enough?",
    answer: "It may be refrigerant flow, thermostat, or a sealed system issue.",
  },
  {
    question: "Do you install freezers?",
    answer: "Yes — with existing hookups.",
  },
  {
    question: "Do you service nearby areas?",
    answer: "Yes — including Chapel Hill, Avalon, and Fallingbrook.",
  },
  {
    question: "Do you offer a warranty?",
    answer: "Yes — 90 days on all labour.",
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

export default function FreezerRepairOrleansPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"><FaSnowflake className="text-[30px] mb-2 inline-block" /> Reliable Freezer Repair in Orleans</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Freezer frosting up, leaking water, or not keeping food cold? Fixer Appliance Repair provides fast, local service in Orleans with clear pricing and a 90-day guarantee. We repair all major freezer brands, including Samsung, Whirlpool, LG, GE, and Maytag.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Book Service Now
          </Link>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} heading="Common Freezer Issues We Fix in Orleans" />

      {/* Installation Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Freezer Installation in Orleans</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                Looking for freezer installation in Orleans?
              </p>
              <p className="text-center">
                Before making the purchase, check our repair vs. replace guide — it helps compare costs and long-term value.
              </p>
              <p className="text-center">
                With your new unit ready, we provide freezer installation in Orleans. We'll set it up, balance it, and test it using your existing hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ We don't create new wiring or plumbing lines.
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
        description="We provide appliance repair services across the entire Orleans area, including:"
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

      {/* Discover Orleans */}
      <ThingsToDoSection
        attractions={[
          { name: "Petrie Island", description: "Unwind at scenic trails and beaches" },
          { name: "Shenkman Arts Centre", description: "Catch a show" },
          { name: "Place d'Orleans", description: "Shop and eat" },
        ]}
        heading="Explore Orleans While We Fix Your Freezer"
        description="Here are a few things you can do nearby:"
        
        linkText="See the latest happenings in Orleans this month"
      />

      {/* FAQ */}
      <FAQSection applianceName="Freezer" faqs={faqs} />

      {/* Schedule Service */}
      <CTASection 
        heading="Schedule Your Freezer Repair in Orleans"
        description="Freezer not keeping food cold? Call Fixer Appliance Repair today to book service:"
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
