import { Metadata } from "next";
import Link from "next/link";
import { FaUtensils } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import { FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import ServiceAreaSection from "@/components/ServiceAreaSection";

export const metadata: Metadata = {
  title: "Dishwasher Repair Arnprior – Fast, Reliable Local Service | Fixer",
  description: "Fixer provides expert dishwasher repair in Arnprior. We fix leaks, draining issues & error codes for Whirlpool, Bosch, Samsung & more — with same-day service & warranty.",
};

const commonIssues = [
  {
    title: "Dishwasher won't turn on",
    description: "Older Arnprior homes sometimes have wiring or breaker issues. If not, it could be the door switch or control board. We'll fix it fast.",
  },
  {
    title: "Won't drain water",
    description: "Drain pumps or hoses often clog with food debris. We'll clear the line so water drains fully.",
  },
  {
    title: "Unusual noises",
    description: "Grinding or rattling often points to a circulation pump problem. We'll replace the faulty part.",
  },
  {
    title: "Leaks near the door",
    description: "Door gaskets and seals wear down with time. We'll replace them to stop the leak.",
  },
  {
    title: "Dishes still dirty",
    description: "Clogged spray arms or weak water flow cause poor cleaning. We'll restore the wash performance.",
  },
  {
    title: "Error codes showing",
    description: "Flashing E-series codes are common in Bosch and Whirlpool dishwashers. We'll decode the issue and repair it.",
  },
];

const whyChooseUs = [
  "Friendly, professional Arnprior dishwasher specialists",
  "15+ years of appliance service experience",
  "Upfront pricing explained clearly",
  "Warranty coverage for 90 days",
];

const neighborhoods = [
  "Downtown Arnprior",
  "Braeside",
  "McNab",
  "White Lake",
  "Sand Point",
];

const nearbyAreas = [
  { name: "Dishwasher Repair Kanata", slug: "kanata" },
  { name: "Dishwasher Repair Stittsville", slug: "stittsville" },
  { name: "Dishwasher Repair Nepean", slug: "nepean" },
  { name: "Dishwasher Repair Orleans", slug: "orleans" },
  { name: "Dishwasher Repair Vanier", slug: "vanier" },
  { name: "Dishwasher Repair Barrhaven", slug: "barrhaven" },
  { name: "Dishwasher Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dishwasher Repair Carleton Place", slug: "carleton-place" },
];

const arnpriorAttractions = [
  "Robert Simpson Park – picnic by the river.",
  "Gillies Grove – historic forest trails.",
  "Downtown Arnprior – unique shops and eateries.",
];

const faqs = [
  {
    question: "Do you service dishwashers in Arnprior?",
    answer: "Yes — we work across town and nearby areas like Braeside and White Lake.",
  },
  {
    question: "Why does my dishwasher make loud grinding noises?",
    answer: "It could be the circulation pump, motor bearings, or foreign objects stuck inside.",
  },
  {
    question: "Do you provide dishwasher installation?",
    answer: "Yes — we install dishwashers in Arnprior using existing water and power hookups.",
  },
  {
    question: "Do you repair older and newer models?",
    answer: "Yes — from older Kenmore units to the latest Samsung and Bosch.",
  },
  {
    question: "Do you provide a warranty?",
    answer: "Yes — every job comes with our 90-day labour warranty.",
  },
];

const relatedServices = [
  { name: "Washer Repair Arnprior", href: "/washer-repair/arnprior" },
  { name: "Dryer Repair Arnprior", href: "/dryer-repair/arnprior" },
  { name: "Fridge Repair Arnprior", href: "/fridge-repair/arnprior" },
  { name: "Freezer Repair Arnprior", href: "/freezer-repair/arnprior" },
  { name: "Oven Repair Arnprior", href: "/oven-repair/arnprior" },
  { name: "Cooktop Repair Arnprior", href: "/cooktop-repair/arnprior" },
  { name: "Microwave Repair Arnprior", href: "/microwave-repair/arnprior" },
  { name: "Dishwasher Installation Arnprior", href: "/appliance-installation/dishwasher" },
];

export default function DishwasherRepairArnpriorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaUtensils className="text-[30px] mb-2 inline-block" /> Dishwasher Repair Arnprior 
              <br /> Fast, Reliable Local Service</h1>
            <p className="text-xl leading-relaxed mb-8">
              If your dishwasher in Arnprior is leaking, stopping mid-cycle, or leaving cloudy glasses, Fixer Appliance Repair can help. Our technicians know the area and provide fast, reliable repairs you can trust.
            </p>
            <p className="text-lg mb-6">
              We handle leading makes like Bosch, Whirlpool, Maytag, GE, and Samsung.
            </p>
            <p className="text-lg">
              👉 For all appliance services nearby, see our{" "}
              <Link href="/arnprior" className="font-semibold hover:underline">
                Local Arnprior page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Common Dishwasher Issues */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Dishwasher Issues We Fix in Arnprior</h2>
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

      {/* Dishwasher Installation CTA */}
      <InstallationCTASection
        applianceName="Dishwasher"
        description="Got a new dishwasher? We also provide dishwasher installation in Arnprior with same-day service available in most areas."
        href="/appliance-installation/dishwasher"
      />

      <BenefitsSection applianceName="Dishwasher" benefits={whyChooseUs} />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Arnprior area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="dishwasher"
        nearbyAreasLabel="We also repair dishwashers in:"
        surroundingLabel="and surrounding rural neighbourhoods"
        footerText={
          <p className="text-lg text-gray-700">
            For full coverage, visit our{" "}
            <Link href="/dishwasher-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Dishwasher Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Things to Do in Arnprior */}
      <ThingsToDoSection
        attractions={arnpriorAttractions}
        heading="Things to Do in Arnprior While We Repair Your Dishwasher"
        description="Make the most of your wait with these stops:"
        link="https://arnprior.ca/en/explore-and-play/events.aspx"
        linkText="Arnprior Events"
      />

      <FAQSection applianceName="Dishwasher" faqs={faqs} />

      {/* Contact CTA */}
      <CTASection 
        heading="Schedule Your Dishwasher Repair in Arnprior"
        description="Dishwasher acting up? Contact Fixer Appliance Repair for fast, local service:"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With..."
        description="We do more than just dishwasher repair — check out our other Ottawa services:"
        applianceName="Dishwasher"
      />
    </>
  );
}
