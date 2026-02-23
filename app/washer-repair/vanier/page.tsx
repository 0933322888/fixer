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
  title: "Vanier Washer Service – Honest, Reliable Repairs | Fixer",
  description: "Professional washer repair in Vanier, Ottawa. Local techs, same-day bookings, and a 90-day guarantee. Keep your laundry running smoothly — call today.",
};

const commonIssues = [
  {
    title: "Washer won't power on?",
    description: "In older Vanier homes, aging wiring or tripped breakers often cause this. If not electrical, the issue could be a bad latch or switch. We'll track it down and fix it.",
  },
  {
    title: "Draining problems?",
    description: "Kinked hoses or clogged pumps are frequent in tight laundry spaces. We'll inspect and restore proper drainage.",
  },
  {
    title: "Washer too loud on spin?",
    description: "Rattling or squealing is often from worn bearings or shocks. We'll diagnose and make sure your washer runs quietly.",
  },
  {
    title: "Door won't open?",
    description: "Locks and sensors on front-load washers in Vanier sometimes glitch. We'll safely open the door and fix the mechanism.",
  },
  {
    title: "Leaking water?",
    description: "Loose connections and aging seals often cause small puddles. We'll repair the leak before it spreads to your Vanier floors.",
  },
  {
    title: "Error messages?",
    description: "Codes like LE, UE, or OE are common. We'll interpret and repair the underlying problem.",
  },
];

const whyChooseUs = [
  "Local Vanier experts with 15+ years of experience",
  "Repairs and installations for all washer brands",
  "Same-day service available in multiple neighbourhoods",
  "90-day labour warranty with every repair",
];

const neighborhoods = [
  "Overbrook",
  "Beechwood Village",
  "Cardinal Glen",
  "Notre Dame des Champs",
];

const nearbyAreas = [
  { name: "Washer Repair Kanata", slug: "kanata" },
  { name: "Washer Repair Stittsville", slug: "stittsville" },
  { name: "Washer Repair Nepean", slug: "nepean" },
  { name: "Washer Repair Orleans", slug: "orleans" },
  { name: "Washer Repair Barrhaven", slug: "barrhaven" },
  { name: "Washer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Washer Repair Arnprior", slug: "arnprior" },
  { name: "Washer Repair Carleton Place", slug: "carleton-place" },
];

const vanierAttractions = [
  "Richelieu Park – wooded trails right in the city.",
  "Vanier Museopark – celebrating francophone heritage.",
  "Beechwood Avenue – cafés and unique shops.",
];

const faqs = [
  {
    question: "Do you offer urgent washer repairs in Vanier?",
    answer: "Yes — in many cases we can schedule you the same day.",
  },
  {
    question: "Do you fix both residential and small commercial washers?",
    answer: "Yes — we handle household units and some light commercial models.",
  },
  {
    question: "Do you work in nearby Ottawa East areas?",
    answer: "Yes — including Overbrook, Beechwood, and surrounding neighbourhoods.",
  },
];

const relatedServices = [
  { name: "Dryer Repair Vanier", href: "/dryer-repair/vanier" },
  { name: "Dishwasher Repair Vanier", href: "/dishwasher-repair" },
  { name: "Fridge Repair Vanier", href: "/fridge-repair/vanier" },
  { name: "Freezer Repair Vanier", href: "/freezer-repair/vanier" },
  { name: "Oven Repair Vanier", href: "/oven-repair/vanier" },
  { name: "Cooktop Repair Vanier", href: "/cooktop-repair/vanier" },
  { name: "Microwave Repair Vanier", href: "/microwave-repair/vanier" },
  { name: "Washer Installation Vanier", href: "/appliance-installation/washer" },
];

export default function WasherRepairVanierPage() {
  return (
    <>
      <ServiceHero
        title="Experienced Washer Repair in Vanier"
        description="When your washer gives you trouble, count on Fixer Appliance Repair for fast, friendly service in Vanier. We've been repairing washers in Ottawa East for more than 15 years, providing same-day visits in many areas, transparent pricing, and a 90-day guarantee on our work."
        icon={<FaTshirt className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <p className="text-lg mb-8">
            👉 For all appliance services in your area, check our{" "}
            <Link href="/service-areas/vanier" className="font-semibold hover:underline">
              Vanier appliance repair page
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
            <h2 className="heading-md text-center mb-12">Common Washer Issues We Fix in Vanier</h2>
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
        description="Got a new washer? We also provide washer installation in Vanier with same-day service available in most areas."
        href="/appliance-installation/washer"
      />

      <BenefitsSection applianceName="Washer" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="Not sure if it's time to fix or replace your washing machine? Check out our repair vs. replace guide for washers to make a smart decision based on cost, age, and reliability." />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Vanier area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="washer"
        nearbyAreasLabel="We also provide:"
        footerText={
          <p className="text-lg text-gray-700">
            👉 Need washer help across Ottawa? Learn more about our{" "}
            <Link href="/washer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              washer repair in Ottawa
            </Link>
            .
          </p>
        }
      />

      {/* Things to Do */}
      <ThingsToDoSection
        attractions={vanierAttractions}
        heading="Explore Vanier While We Fix Your Washer"
        description="While we repair your appliance, discover:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Washer" faqs={faqs} />

      {/* Contact CTA */}
      <CTASection 
        heading="Ready to Fix Your Washer in Vanier?"
        description="From noisy spins to leaks, our Vanier washer repair pros fix it right the first time — call us now!"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With..."
        description="We do more than just washer repair — check out our other Ottawa services:"
        applianceName="Washer"
      />
    </>
  );
}
