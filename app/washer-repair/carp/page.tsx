import { Metadata } from "next";
import Link from "next/link";
import { FaTshirt, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";

export const metadata: Metadata = {
  title: "Washer Repair Carp – Reliable Service for Homes & Farms | Fixer",
  description: "Fixer provides trusted washer repair in Carp for homes and farms. We fix leaks, power issues, and error codes. Same-day service + 90-day warranty. Call 613-413-6969.",
};

const commonIssues = [
  {
    title: "Power issues or washer not starting",
    description: "Whether it's a newer home or a long-standing property, intermittent power can affect washer electronics. We'll check the control panel, door switch, and wiring.",
  },
  {
    title: "Washer not draining properly",
    description: "Often caused by clogged pumps or misaligned hoses — especially in setups with longer drain paths.",
  },
  {
    title: "Washer shaking or walking",
    description: "Unbalanced loads, worn shocks, or uneven flooring can cause excessive vibration. We'll stabilize and replace parts as needed.",
  },
  {
    title: "Door won't unlock after a cycle",
    description: "Could be a sensor or lock issue. We'll safely open it and fix the underlying problem.",
  },
  {
    title: "Leaks or puddles after use",
    description: "We inspect all seals, hoses, and inlets to find and stop the leak.",
  },
  {
    title: "Error codes flashing",
    description: "From OE to LE, we'll quickly decode what's happening and fix it efficiently.",
  },
  {
    title: "Washer/dryer combo units",
    description: "We also repair combo units often found in secondary laundry areas or compact spaces.",
  },
];

const whyChooseUs = [
  "We're used to working in homes with older panels, longer pipe runs, and well pumps",
  "Same fair pricing — no city premiums",
  "15+ years of appliance repair experience",
  "Fully insured and respectful in your space",
  "Fast, clean, and honest service",
];

const neighborhoods = [
  "Village of Carp",
  "Huntley",
  "Corkery",
  "Upper Dwyer Hill",
];

const nearbyAreas = [
  { name: "Washer Repair Kanata", slug: "kanata" },
  { name: "Washer Repair Stittsville", slug: "stittsville" },
  { name: "Washer Repair Nepean", slug: "nepean" },
  { name: "Washer Repair Orleans", slug: "orleans" },
  { name: "Washer Repair Vanier", slug: "vanier" },
  { name: "Washer Repair Barrhaven", slug: "barrhaven" },
  { name: "Washer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Washer Repair Arnprior", slug: "arnprior" },
  { name: "Washer Repair Carleton Place", slug: "carleton-place" },
];

const carpAttractions = [
  "Carp Farmers' Market – one of the best in Ontario",
  "Diefenbunker Cold War Museum – unique and fascinating",
  "Rural Art Studios or seasonal markets",
  "Carp Ridge EcoWellness Centre – nature walks, spa, and more",
];

const faqs = [
  {
    question: "Do you work in homes with well water or septic systems?",
    answer: "Absolutely — we're familiar with all kinds of plumbing setups common in rural properties.",
  },
  {
    question: "Do you charge more for Carp visits?",
    answer: "Nope. Same fair pricing — whether it's Carp, Kanata, or Stittsville.",
  },
  {
    question: "What if my washer isn't repairable?",
    answer: "We'll give you honest feedback and help with your installation if you choose to replace it.",
  },
  {
    question: "Do you fix all brands?",
    answer: "Yes — we service most leading washer brands, including newer and older models commonly found in Carp homes.",
  },
  {
    question: "Do you work on weekends?",
    answer: "We do our best to offer flexible scheduling, including Saturdays.",
  },
];

const relatedServices = [
  { name: "Dryer Repair Carp", href: "/dryer-repair/carp" },
  { name: "Dishwasher Repair Carp", href: "/dishwasher-repair/carp" },
  { name: "Fridge Repair Carp", href: "/fridge-repair/carp" },
  { name: "Freezer Repair Carp", href: "/freezer-repair/carp" },
  { name: "Oven Repair Carp", href: "/oven-repair/carp" },
  { name: "Cooktop Repair Carp", href: "/cooktop-repair/carp" },
  { name: "Microwave Repair Carp", href: "/microwave-repair/carp" },
  { name: "Washer Installation", href: "/appliance-installation/washer" },
];

export default function WasherRepairCarpPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaTshirt className="text-[30px] mb-2 inline-block" /> Trusted Washer Repair for Carp Homes and Farms</h1>
            <p className="text-xl leading-relaxed mb-8">
              In Carp, a washer that rattles loudly or leaks mid-cycle is more than an inconvenience — it's a headache. Fixer Appliance Repair provides reliable service for rural homes and hobby farms, fixing issues like broken pumps, electronic failures, and unbalanced spins. We repair all major makes, from Samsung and LG to Whirlpool, GE, and Maytag.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, visit our{" "}
              <Link href="/service-areas/carp" className="font-semibold hover:underline">
                Carp appliance repair page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Common Washer Problems */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Washer Problems We See in Carp</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {commonIssues.map((issue, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{issue.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{issue.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Washer Installation */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-6">Washer Installation in Carp</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Need a new washer in Carp?</strong> Before replacing, read our{" "}
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                  repair vs. replace guide
                </Link>
                {" "}— it helps you compare repair costs and replacement value.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                If you've already bought one, we provide washer installation in Carp. We'll set it up, balance it, and run a test cycle using your existing connections.
              </p>
              <p className="text-gray-700 mb-6">
                👉 We don't create new water lines or high-voltage wiring.
              </p>
              <div className="text-center">
                <Link href="/appliance-installation/washer" className="btn-primary">
                  Learn more about Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection applianceName="Washer" benefits={whyChooseUs} />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area: Carp and Nearby"
        description="We provide appliance repair services across the entire Carp area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="washer"
        nearbyAreasLabel="We also repair washers for customers in:"
        surroundingLabel="and surrounding rural neighbourhoods"
        footerText={
          <p className="text-lg text-gray-700">
            👉 Need washer help beyond Carp? Learn more about our{" "}
            <Link href="/washer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              washer repair in Ottawa
            </Link>
            .
          </p>
        }
      />

      {/* Things to Do */}
      <ThingsToDoSection
        attractions={carpAttractions}
        heading="Enjoy Carp While We Handle the Repair"
        description="While we repair your washer, check out what Carp has to offer:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Washer" faqs={faqs} />

      {/* Schedule Your Washer Repair */}
      <CTASection 
        heading="Schedule Your Washer Repair in Carp"
        description="Need a hand with your washer in Carp? We'll make the trip. We're local, we're reliable, and we're happy to come to Carp."
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With…"
        description="We repair more than just washers — check out our other services in Carp:"
        applianceName="Washer"
      />
    </>
  );
}
