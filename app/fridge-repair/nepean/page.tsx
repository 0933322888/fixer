import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import FAQSection from "@/components/FAQSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import ServiceAreaSection from "@/components/ServiceAreaSection";

export const metadata: Metadata = {
  title: "Fridge Repair Nepean – Fast, Affordable Local Service | Fixer",
  description: "Fixer provides expert fridge repair in Nepean. We fix cooling, leaks & noise issues for Whirlpool, Samsung, LG & more — with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Fridge not cooling evenly",
    description: "Blocked vents or failing fans can cause warm spots.",
  },
  {
    title: "No power to fridge",
    description: "We test outlets, fuses, and internal wiring.",
  },
  {
    title: "Water leaking inside",
    description: "Clogged defrost drain or cracked interior liner.",
  },
  {
    title: "Rattling noise when running",
    description: "Loose fan blades or compressor mounts.",
  },
  {
    title: "Food spoils quickly",
    description: "Unstable thermostat or defrost failure.",
  },
  {
    title: "Door pops open",
    description: "Hinges may need adjustment or seal replacement.",
  },
  {
    title: "Ice maker leaking",
    description: "We replace faulty valves or lines.",
  },
  {
    title: "Digital display flashing",
    description: "Board or software reset may be needed.",
  },
  {
    title: "Fridge cycles too often",
    description: "Could be bad defrost timer or dirty coils.",
  },
  {
    title: "Water tastes odd",
    description: "We replace filters and flush the system.",
  },
];

const benefits = [
  "Clear, upfront pricing — always",
  "Repairs done with care and precision",
  "Flexible service times that fit your schedule",
  "Honest advice based on your fridge's real condition",
  "We clean up after every visit",
];

const serviceAreas = [
  "Barrhaven East",
  "Centrepointe",
  "Merivale Gardens",
  "Manordale",
  "Tanglewood",
  "Fallowfield",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/fridge-repair/kanata" },
  { name: "Stittsville", slug: "/fridge-repair/stittsville" },
  { name: "Orleans", slug: "/fridge-repair/orleans" },
  { name: "Vanier", slug: "/fridge-repair/vanier" },
  { name: "Barrhaven", slug: "/fridge-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/fridge-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/fridge-repair/arnprior" },
  { name: "Carleton Place", slug: "/fridge-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you service Parkwood Hills and Bells Corners?",
    answer: "Yes — those are common stops for our fridge technicians.",
  },
  {
    question: "Do you work with energy-efficient models?",
    answer: "Yes — including inverter-based and ENERGY STAR units.",
  },
  {
    question: "Do you diagnose control board problems?",
    answer: "Yes — we carry tools for advanced diagnostics.",
  },
  {
    question: "Can you repair noisy compressors?",
    answer: "Sometimes — if not, we'll explain next steps.",
  },
  {
    question: "Is same-day repair possible in Nepean?",
    answer: "Sometimes — call early to check availability.",
  },
];

export default function FridgeRepairNepeanPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"><FaSnowflake className="text-[30px] mb-2 inline-block" /> Fridge Repair in Nepean – Fast, Local, Affordable</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            From inconsistent cooling to faulty ice dispensers, fridge problems can't wait. Fixer Appliance Repair serves Nepean with fast, reliable refrigerator service and a 90-day warranty.
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
              We service Whirlpool, GE, Samsung, LG, Maytag, Frigidaire, and more.
            </p>
          </div>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} />

      {/* Fridge Installation CTA */}
      <InstallationCTASection
        applianceName="Fridge"
        description="Got a new fridge? We also provide fridge installation in Nepean with same-day service available in most areas."
        href="/appliance-installation"
      />

      <BenefitsSection applianceName="Fridge" benefits={benefits} />

      <CTASection />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area: Nepean and Nearby"
        description="We provide appliance repair services across the entire Nepean area, including:"
        neighborhoods={serviceAreas}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name,
          slug: area.slug.replace("/fridge-repair/", "")
        }))}
        applianceType="fridge"
        nearbyAreasLabel="We also provide fridge repair services in:"
        footerText={
          <p className="text-lg text-gray-700">
            For full coverage, visit our{" "}
            <Link href="/fridge-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Fridge Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Discover Nepean */}
      <ThingsToDoSection
        attractions={[
          { name: "Andrew Haydon Park", description: "Calm and scenic with walking paths" },
          { name: "Bruce Pit", description: "Community-loved dog park and trails" },
          { name: "Merivale Mall", description: "Shop or grab a bite nearby" },
          { name: "Art Is In Bakery", description: "Hip café for bread lovers" },
        ]}
        heading="Discover Nepean While We Repair Your Fridge"
        description="Instead of waiting around, explore some local favorites:"
        
        linkText="Explore what's on in town: Events in Nepean"
      />

      {/* FAQ */}
      <FAQSection applianceName="Fridge" faqs={faqs} />

      {/* Schedule Service */}
      <CTASection 
        heading="Book Your Fridge Repair in Nepean"
        description="Need help in Nepean? We're nearby and ready to fix your fridge fast."
        
        />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Nepean", href: "/washer-repair/nepean" },
          { name: "Dryer Repair Nepean", href: "/dryer-repair/nepean" },
          { name: "Dishwasher Repair Nepean", href: "/dishwasher-repair/nepean" },
          { name: "Oven Repair Nepean", href: "/oven-repair/nepean" },
          { name: "Fridge Installation Nepean", href: "/fridge-installation" },
        ]}
        heading="Also Need Help With…"
        description="We service more than just fridges — here are our other options in Nepean:"
        applianceName="Fridge"
      />

    </>
  );
}
