import { Metadata } from "next";
import Link from "next/link";
import { FaTshirt, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import ServiceAreaSection from "@/components/ServiceAreaSection";

export const metadata: Metadata = {
  title: "Mississippi Mills Washer Service – Skilled Local Technicians | Fixer",
  description: "Professional washer repair in Mississippi Mills. Serving all brands with same-day availability in many areas. Backed by a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Washer won't power on?",
    description: "Out in Mississippi Mills, sudden outages or older wiring can cause trouble. If it's not the power supply, it may be a faulty start switch or control board. We'll sort it out and get you back on schedule.",
  },
  {
    title: "Water not draining fully?",
    description: "Rural homes often have longer drain runs — clogs or pump failures are frequent here. We'll clear the blockage and ensure smooth drainage.",
  },
  {
    title: "Loud thumping during spin?",
    description: "When the machine shakes the whole laundry room, it's usually an unbalanced load or worn suspension parts. We'll check and repair so your washer runs quietly.",
  },
  {
    title: "Door stuck shut?",
    description: "On front-load models, a jammed lock or control glitch can keep the door closed. We'll release it without damage and fix the lock.",
  },
  {
    title: "Leaks under the washer?",
    description: "Rubber seals and water lines wear down with time. We'll track down the leak before it affects your Mississippi Mills flooring.",
  },
  {
    title: "Error codes showing up?",
    description: "Flashing UE, LE, or similar codes are common across brands. We'll decode the message and handle the repair properly.",
  },
];

const whyChooseUs = [
  "Friendly, locally based service team",
  "Skilled with all major washer brands",
  "Same-day service offered in many areas",
  "Backed by a 90-day labour guarantee",
];

const neighborhoods = [
  "Almonte",
  "Appleton",
  "Blakeney",
  "Pakenham",
  "Ramsay",
];

const nearbyAreas = [
  { name: "Washer Repair Kanata", slug: "kanata" },
  { name: "Washer Repair Stittsville", slug: "stittsville" },
  { name: "Washer Repair Nepean", slug: "nepean" },
  { name: "Washer Repair Orleans", slug: "orleans" },
  { name: "Washer Repair Vanier", slug: "vanier" },
  { name: "Washer Repair Barrhaven", slug: "barrhaven" },
  { name: "Washer Repair Arnprior", slug: "arnprior" },
  { name: "Washer Repair Carleton Place", slug: "carleton-place" },
];

const mississippiMillsAttractions = [
  "A riverside stroll along the Almonte Riverwalk.",
  "Trails and history at the Mill of Kintail Conservation Area.",
  "Shopping and cafés in Downtown Almonte.",
];

const faqs = [
  {
    question: "Is same-day service available in Mississippi Mills?",
    answer: "In many parts of town, yes. Contact us to check today's schedule.",
  },
  {
    question: "What washer brands do you repair?",
    answer: "We handle all major brands, from modern models to trusted older units.",
  },
  {
    question: "Do you travel to smaller communities nearby?",
    answer: "Yes — including Almonte, Pakenham, and Clayton.",
  },
];

const relatedServices = [
  { name: "Dryer Repair Mississippi Mills", href: "/dryer-repair/mississippi-mills" },
  { name: "Dishwasher Repair Mississippi Mills", href: "/dishwasher-repair/mississippi-mills" },
  { name: "Fridge Repair Mississippi Mills", href: "/fridge-repair/mississippi-mills" },
  { name: "Freezer Repair Mississippi Mills", href: "/freezer-repair/mississippi-mills" },
  { name: "Oven Repair Mississippi Mills", href: "/oven-repair/mississippi-mills" },
  { name: "Cooktop Repair Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
  { name: "Microwave Repair Mississippi Mills", href: "/microwave-repair/mississippi-mills" },
  { name: "Washer Installation Mississippi Mills", href: "/appliance-installation/washer" },
];

export default function WasherRepairMississippiMillsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaTshirt className="text-[30px] mb-2 inline-block" /> Professional Washer Service in Mississippi Mills</h1>
            <p className="text-xl leading-relaxed mb-8">
              Whether you live in Almonte, Pakenham, or Clayton, a broken washer can throw off your whole week. At Fixer Appliance Repair, we've been fixing washers across Mississippi Mills for over 15 years. From leaks and loud spins to machines that simply won't run, we deliver dependable repairs backed by a 90-day guarantee.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, see our{" "}
              <Link href="/mississippi-mills" className="font-semibold hover:underline">
                Mississippi Mills appliance repair page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Common Washer Issues */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Washer Issues We Fix in Mississippi Mills</h2>
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

      {/* Washer Installation CTA */}
      <InstallationCTASection
        applianceName="Washer"
        description="Got a new washer? We also provide washer installation in Mississippi Mills with same-day service available in most areas."
        href="/appliance-installation/washer"
      />

      <BenefitsSection applianceName="Washer" benefits={whyChooseUs} />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Mississippi Mills area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="washer"
        nearbyAreasLabel="We also help residents in:"
        surroundingLabel="and surrounding rural neighbourhoods"
        footerText={
          <p className="text-lg text-gray-700">
            👉 Need washer help across Ottawa? Learn more about our{" "}
            <Link href="/service-areas/mississippi-mills" className="text-primary-600 hover:text-primary-700 font-semibold">
              washer repair in Ottawa
            </Link>
            .
          </p>
        }
      />

      {/* Things to Do */}
      <ThingsToDoSection
        attractions={mississippiMillsAttractions}
        heading="Explore Mississippi Mills While We Fix Your Washer"
        description="While we work on your appliance, enjoy:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Washer" faqs={faqs} />

      {/* Contact CTA */}
      <CTASection 
        heading="Washer Acting Up in Mississippi Mills?"
        description="Let our trusted local techs get it running again — call us now!"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With…"
        description="We don't just repair washers — here are more services in Mississippi Mills:"
        applianceName="Washer"
      />
    </>
  );
}
