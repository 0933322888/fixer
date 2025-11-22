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
  title: "Washer Repair Stittsville – Fast, Local Experts | Fixer",
  description: "Need washer repair in Stittsville? Fixer provides same-day service, clear pricing, and repairs for all major brands — backed by a 90-day warranty. Call today!",
};

const commonIssues = [
  {
    title: "Not draining?",
    description: "Clogs in basement setups are common in newer homes — we'll check the pump, hose, and filter.",
  },
  {
    title: "Shaking or banging?",
    description: "We've seen plenty of spin-cycle rumbles in Stittsville's new-construction laundry rooms. Unbalanced loads? Worn suspension? We'll fix it.",
  },
  {
    title: "Error codes flashing?",
    description: "No need to Google them — we've seen them all: LE, OE, UE, F03, and more.",
  },
  {
    title: "Washer won't turn on?",
    description: "We check everything from door switches to control boards and provide a clear, fast solution.",
  },
  {
    title: "Leaks under or around the unit?",
    description: "We track down the source and stop it cold — cracked hose, loose seal, or pump leak.",
  },
  {
    title: "Door stuck shut?",
    description: "Front-loaders in many new homes love to lock up. We'll get it open and solve the problem for good.",
  },
];

const whyChooseUs = [
  "Local service tailored to newer homes",
  "Transparent pricing, no surprise charges",
  "Skilled with developer-grade washers and their common issues",
  "Same-day/next-day appointments available",
  "Friendly, respectful techs who keep things tidy",
];

const neighborhoods = [
  "Crossing Bridge",
  "Jackson Trails",
  "Bryanston Gate",
  "West Ridge",
  "Timbermere",
  "Fairwinds",
];

const nearbyAreas = [
  { name: "Washer Repair Kanata", slug: "kanata" },
  { name: "Washer Repair Nepean", slug: "nepean" },
  { name: "Washer Repair Orleans", slug: "orleans" },
  { name: "Washer Repair Vanier", slug: "vanier" },
  { name: "Washer Repair Barrhaven", slug: "barrhaven" },
  { name: "Washer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Washer Repair Arnprior", slug: "arnprior" },
  { name: "Washer Repair Carleton Place", slug: "carleton-place" },
];

const stittsvilleAttractions = [
  "Amberwood Village Trails – a calm escape into nature",
  "Quitters Coffee – grab a latte and people-watch on the patio",
  "Village Square Park – a cozy green spot to relax",
];

const faqs = [
  {
    question: "What is the average washer repair cost in Stittsville?",
    answer: "The cost of washer repair depends on the exact issue and the parts required. Once we inspect your machine, we'll explain the problem clearly and let you know the best options before starting any work.",
  },
  {
    question: "Is it worth it to repair a washer?",
    answer: "Often yes — especially if it's under 10 years old and the issue is minor. But for older machines or major failures, replacement may be smarter. Check our repair vs. replace guide for more details.",
    link: "/blog/repair-vs-replace-appliance",
  },
  {
    question: "What is the most common washer issue you fix in Stittsville?",
    answer: "Clogged drain pumps and spin cycle imbalances in newer homes are common — especially on front-loaders with sensitive leveling.",
  },
  {
    question: "What to do if your washer isn't working at all?",
    answer: "First, check if it's under warranty — the manufacturer may offer a free repair or replacement. If not, call us. We'll diagnose it and explain your options.",
  },
  {
    question: "Can you install a new washer if mine can't be repaired?",
    answer: "Yes — we also offer professional washer installation in Stittsville.",
  },
];

const relatedServices = [
  { name: "Dryer Repair Stittsville", href: "/dryer-repair/stittsville" },
  { name: "Dishwasher Repair Stittsville", href: "/dishwasher-repair/stittsville" },
  { name: "Fridge Repair Stittsville", href: "/fridge-repair/stittsville" },
  { name: "Freezer Repair Stittsville", href: "/freezer-repair/stittsville" },
  { name: "Oven Repair Stittsville", href: "/oven-repair/stittsville" },
  { name: "Cooktop Repair Stittsville", href: "/cooktop-repair/stittsville" },
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Washer Installation Stittsville", href: "/appliance-installation/washer" },
];

export default function WasherRepairStittsvillePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaTshirt className="text-[30px] mb-2 inline-block" /> Professional Washer Repair in Stittsville</h1>
            <p className="text-xl leading-relaxed mb-8">
              Tired of a washer that won't drain, keeps stopping mid-cycle, or shakes across the floor? Fixer Appliance Repair delivers professional washer service throughout Stittsville, with fast response and fair pricing. We fix Whirlpool, GE, Samsung, LG, Maytag, and Frigidaire machines — both top-loaders and front-loaders.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, visit our{" "}
              <Link href="/service-areas/stittsville" className="font-semibold hover:underline">
                Stittsville appliance repair page
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
            <h2 className="heading-md text-center mb-12">Common Washer Problems in Stittsville Homes</h2>
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
            <h2 className="heading-md text-center mb-6">Washer Installation in Stittsville</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Considering a new washer in Stittsville?</strong> Don't decide before checking our{" "}
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                  repair vs. replace guide
                </Link>
                {" "}— it explains lifespan, costs, and when replacement makes sense.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                For new purchases, we handle washer installation in Stittsville. We'll hook up, level, and test your unit with the existing water and electrical setup.
              </p>
              <p className="text-gray-700 mb-6">
                👉 Please note: plumbing or new wiring isn't included.
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

      {/* Why Stittsville Calls Fixer */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <BenefitsSection applianceName="Washer" benefits={whyChooseUs} />
          </div>
        </div>
      </section>

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area: Stittsville and Nearby"
        description="We provide appliance repair services across the entire Stittsville area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="washer"
        nearbyAreasLabel="We also provide washer repair services for homes in:"
        footerText={
          <p className="text-lg text-gray-700">
            👉 Need washer service outside Stittsville? Learn more about our{" "}
            <Link href="/washer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              washer repair in Ottawa
            </Link>
            .
          </p>
        }
      />

      {/* Things to Do */}
      <ThingsToDoSection
        attractions={stittsvilleAttractions}
        heading="Explore Stittsville While We Fix Your Washer"
        description="Waiting for your laundry machine to be back on track? Spend some time around town:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Washer" faqs={faqs} />

      {/* CTA */}
      <CTASection 
        heading="Call or Text to Schedule Your Repair"
        description="Serving Stittsville and nearby communities — with fast, friendly, and fully insured washer repair."
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With…"
        description="Looking for more than washer service? Here are our other options in Stittsville:"
        applianceName="Washer"
      />
    </>
  );
}
