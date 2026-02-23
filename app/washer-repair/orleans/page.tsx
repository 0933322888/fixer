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
  title: "Orleans Washer Repair – Local Experts, 90-Day Warranty | Fixer",
  description: "Trusted washer repair in Orleans. Quick service, transparent pricing, and a 90-day workmanship guarantee. Book your repair with a local pro today.",
};

const commonIssues = [
  {
    title: "Washer not starting?",
    description: "In many Orleans homes, this can happen after a brief power surge or when the breaker trips. If electricity isn't the issue, the culprit might be a faulty door latch or start switch. We'll identify it quickly and get your laundry moving again.",
  },
  {
    title: "Not draining water properly?",
    description: "Basement setups in Orleans often mean long drain hoses — kinks or clogs are a common reason for standing water. We'll check the pump and hoses so your washer drains as it should.",
  },
  {
    title: "Unusual banging sounds during spin?",
    description: "A heavy load or worn suspension can cause loud noises. Orleans residents often notice this after washing bedding or large towels. We'll balance the load or replace parts if needed.",
  },
  {
    title: "Washer door won't unlock?",
    description: "Front-loaders in newer Orleans townhomes sometimes develop lock or sensor glitches. We'll free the door safely and repair the faulty mechanism.",
  },
  {
    title: "Water leaking around the washer?",
    description: "Loose hose connections and worn gaskets are the usual suspects. We'll locate the source fast and prevent any damage to your Orleans floors.",
  },
  {
    title: "Error codes flashing?",
    description: "Codes like OE, LE, or UE on Samsung, LG, or Whirlpool washers are common in Orleans. We'll interpret the message and fix the underlying issue.",
  },
];

const whyChooseUs = [
  "Local Orleans technicians who know the community",
  "Same-day availability in many neighbourhoods",
  "Clear, upfront pricing — no hidden costs",
  "90-day warranty on labour for your peace of mind",
];

const neighborhoods = [
  "Fallingbrook",
  "Avalon",
  "Queenswood Heights",
  "Chapel Hill",
  "Convent Glen",
];

const nearbyAreas = [
  { name: "Washer Repair Kanata", slug: "kanata" },
  { name: "Washer Repair Stittsville", slug: "stittsville" },
  { name: "Washer Repair Nepean", slug: "nepean" },
  { name: "Washer Repair Vanier", slug: "vanier" },
  { name: "Washer Repair Barrhaven", slug: "barrhaven" },
  { name: "Washer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Washer Repair Arnprior", slug: "arnprior" },
  { name: "Washer Repair Carleton Place", slug: "carleton-place" },
];

const orleansAttractions = [
  "Visit Petrie Island for sandy beaches and scenic walking trails.",
  "See a show at the Shenkman Arts Centre.",
  "Go shopping and dining at Place d'Orleans.",
];

const faqs = [
  {
    question: "Do you offer same-day washer repair in Orleans?",
    answer: "Yes — in many neighbourhoods we can come the same day. Call us to confirm availability.",
  },
  {
    question: "Can you fix both top-load and front-load washers?",
    answer: "Absolutely — we service all washer types and major brands.",
  },
  {
    question: "Do you work in rural areas near Orleans?",
    answer: "Yes — we also cover Cumberland and nearby communities.",
  },
];

const relatedServices = [
  { name: "Dryer Repair Orleans", href: "/dryer-repair/orleans" },
  { name: "Dishwasher Repair Orleans", href: "/dishwasher-repair/orleans" },
  { name: "Fridge Repair Orleans", href: "/fridge-repair/orleans" },
  { name: "Freezer Repair Orleans", href: "/freezer-repair/orleans" },
  { name: "Oven Repair Orleans", href: "/oven-repair/orleans" },
  { name: "Cooktop Repair Orleans", href: "/cooktop-repair/orleans" },
  { name: "Microwave Repair Orleans", href: "/microwave-repair/orleans" },
  { name: "Washer Installation", href: "/appliance-installation/washer" },
];

export default function WasherRepairOrleansPage() {
  return (
    <>
      <ServiceHero
        title="Reliable Washer Repair in Orleans"
        description="When laundry day grinds to a halt because your washer won't start or complete a cycle, Fixer Appliance Repair is here to help. Our Orleans technicians provide quick, effective washer repairs so you can get back to your routine without long delays. We serve all neighbourhoods in Orleans with upfront pricing, friendly service, and a 90-day workmanship guarantee."
        icon={<FaTshirt className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <p className="text-lg mb-8">
            👉 For all appliance services in your area, check our{" "}
            <Link href="/service-areas/orleans" className="font-semibold hover:underline">
              Orleans appliance repair page
            </Link>
            .
          </p>
        }
        useSectionPadding={true}
      />

      {/* Common Washer Issues */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Washer Issues We Fix in Orleans</h2>
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
        description="Got a new washer? We also provide washer installation in Orleans with same-day service available in most areas."
        href="/appliance-installation/washer"
      />

      <BenefitsSection applianceName="Washer" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="Not sure if it's time to fix or replace your washing machine? Check out our repair vs. replace guide for washers to make a smart decision based on cost, age, and reliability." />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Orleans area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="washer"
        nearbyAreasLabel="We proudly serve nearby locations such as:"
        footerText={
          <p className="text-lg text-gray-700">
            👉 Need washer help beyond Orleans? Learn more about our{" "}
            <Link href="/washer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              washer repair in Ottawa
            </Link>
            .
          </p>
        }
      />

      {/* Things to Do */}
      <ThingsToDoSection
        attractions={orleansAttractions}
        heading="Explore Orleans While We Fix Your Washer"
        description="While we handle the repair, you could:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Washer" faqs={faqs} />

      {/* Contact CTA */}
      <CTASection 
        heading="Need your washer fixed fast in Orleans?"
        description="Our friendly local team is ready to help — book your repair today! Fixer Appliance Repair — your friendly washer repair team in Orleans."
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With…"
        description="Our services go beyond washers — here's what else we offer in Orleans:"
        applianceName="Washer"
      />
    </>
  );
}
