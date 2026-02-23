import { Metadata } from "next";
import Link from "next/link";
import { FaTshirt, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Washer Repair Nepean – Reliable Local Service | Fixer",
  description: "Fixer offers trusted washer repair in Nepean with same-day service, clear quotes, and a 90-day warranty. We fix leaks, errors, and power issues. Call today!",
};

const commonIssues = [
  {
    title: "Washer won't turn on?",
    description: "We check power supply, door latch, and control board issues — and fix them fast.",
  },
  {
    title: "Water not draining?",
    description: "Could be a clogged drain pump, kinked hose, or filter issue — all common in Nepean basements.",
  },
  {
    title: "Unit shaking or thumping?",
    description: "We inspect suspension, shocks, and flooring — especially in split-level or older homes.",
  },
  {
    title: "Stuck door?",
    description: "Front-loaders are notorious for lock issues. We'll get it open and repair the fault.",
  },
  {
    title: "Error codes like LE or OE?",
    description: "We've seen them all. We'll decode, repair, and test it fully.",
  },
  {
    title: "Washer leaking water?",
    description: "We'll find the source — hose, seal, or internal leak — and stop it before it causes floor damage.",
  },
];

const whyChooseUs = [
  "Trusted by homeowners across Nepean",
  "Same-day and evening appointment options",
  "90-day warranty on all labour",
  "Respectful, tidy technicians",
  "Honest advice before any repair",
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
  { name: "Washer Repair Kanata", slug: "kanata" },
  { name: "Washer Repair Stittsville", slug: "stittsville" },
  { name: "Washer Repair Orleans", slug: "orleans" },
  { name: "Washer Repair Vanier", slug: "vanier" },
  { name: "Washer Repair Barrhaven", slug: "barrhaven" },
  { name: "Washer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Washer Repair Arnprior", slug: "arnprior" },
  { name: "Washer Repair Carleton Place", slug: "carleton-place" },
];

const nepeanAttractions = [
  "Andrew Haydon Park – beautiful parkland with views of the water",
  "Bruce Pit – a favorite spot for dog walkers and families",
  "Merivale Mall – shopping and quick eats in one place",
  "Art Is In Bakery – creative pastries and breads worth the trip",
];

const faqs = [
  {
    question: "Do you work in condos and townhomes?",
    answer: "Yes — we service stacked and compact models, including washer/dryer combo units.",
  },
  {
    question: "Is your work guaranteed?",
    answer: "Yes — all repairs come with a 90-day labour warranty.",
  },
  {
    question: "Do you offer evening appointments?",
    answer: "We do our best to offer flexible times — just ask when booking.",
  },
  {
    question: "Do you repair all brands?",
    answer: "Yes — we work with most major washer brands. Just let us know your model, and we'll confirm before booking.",
  },
  {
    question: "Should I repair or replace my washer?",
    answer: "Depends on age and condition. We'll give you honest advice — or you can check our repair vs. replace guide.",
    link: "/blog/repair-vs-replace-appliance",
  },
];

const relatedServices = [
  { name: "Dryer Repair Nepean", href: "/dryer-repair/nepean" },
  { name: "Dishwasher Repair Nepean", href: "/dishwasher-repair/nepean" },
  { name: "Fridge Repair Nepean", href: "/fridge-repair/nepean" },
  { name: "Freezer Repair Nepean", href: "/freezer-repair/nepean" },
  { name: "Oven Repair Nepean", href: "/oven-repair/nepean" },
  { name: "Cooktop Repair Nepean", href: "/cooktop-repair/nepean" },
  { name: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { name: "Washer Installation Nepean", href: "/appliance-installation/washer" },
];

export default function WasherRepairNepeanPage() {
  return (
    <>
      <ServiceHero
        title="Reliable Washer Repair in Nepean"
        description="When your washer refuses to start, leaves suds behind, or makes unusual grinding noises, Fixer Appliance Repair can help. Our Nepean technicians offer same-day and next-day service, backed by honest estimates. We handle repairs for Samsung, Whirlpool, LG, Maytag, GE, and more."
        icon={<FaTshirt className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <p className="text-lg mb-8">
            👉 For all appliance services in your area, visit our{" "}
            <Link href="/nepean" className="font-semibold hover:underline">
              Nepean appliance repair page
            </Link>
            .
          </p>
        }
        useSectionPadding={true}
      />

      {/* Common Washer Problems */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Washer Problems in Nepean</h2>
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
            <h2 className="heading-md text-center mb-6">Washer Installation in Nepean</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Is your old washer giving up in Nepean?</strong> Before you rush to replace it, take a look at our{" "}
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                  repair vs. replace guide
                </Link>
                {" "}— it may help you save money.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                If replacement is the way, we also provide washer installation in Nepean. We'll connect and test it using the existing water and electrical hookups.
              </p>
              <p className="text-gray-700 mb-6">
                👉 We don't run new plumbing lines or high-voltage circuits.
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

      <RepairOrReplaceSection description="Not sure if it's time to fix or replace your washing machine? Check out our repair vs. replace guide for washers to make a smart decision based on cost, age, and reliability." />

      <InstallationCTASection
        applianceName="Washer"
        description="Upgrading to a new unit? We also offer washer installation in Nepean — fast, safe, and fully insured."
        href="/appliance-installation/washer"
      />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area: Nepean and Nearby"
        description="We provide appliance repair services across the entire Nepean area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="washer"
        nearbyAreasLabel="Our team also serves nearby communities like:"
        footerText={
          <p className="text-lg text-gray-700">
            👉 Looking for washer service across the city? Learn more about our{" "}
            <Link href="/service-areas/nepean" className="text-primary-600 hover:text-primary-700 font-semibold">
              washer repair in Ottawa
            </Link>
            .
          </p>
        }
      />

      {/* Things to Do */}
      <ThingsToDoSection
        attractions={nepeanAttractions}
        heading="Explore Nepean While We Repair Your Washer"
        description="Waiting for the laundry to be back on track? Take a little break nearby:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Washer" faqs={faqs} />

      {/* Schedule Washer Repair */}
      <CTASection 
        heading="Schedule Washer Repair in Nepean"
        description="Serving: Barrhaven, Craig Henry, Centrepointe, Tanglewood, Merivale, and nearby."
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With…"
        description="We handle more than just washers — here are our other services in Nepean:"
        applianceName="Washer"
      />
    </>
  );
}
