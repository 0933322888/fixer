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
  title: "Fridge Repair Arnprior – Trusted Local Technicians | Fixer",
  description: "Fixer Appliance Repair provides expert fridge repair in Arnprior. From cooling failures to leaks and ice maker issues, we service Whirlpool, Samsung, LG & more — with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Fridge won't cool at all",
    description: "In Arnprior homes, this is often a compressor or start relay failure. We'll get your fridge back to safe temperatures.",
  },
  {
    title: "Freezer not freezing",
    description: "If food stays soft, it may be a bad evaporator fan or clogged coils. We'll restore full freezing power.",
  },
  {
    title: "Water leaking onto the floor",
    description: "Loose inlet lines or cracked trays are common culprits. We'll seal leaks before they cause water damage.",
  },
  {
    title: "Interior lights not working",
    description: "Sometimes it's just a bulb, but it can also be a door switch fault. We'll check both.",
  },
  {
    title: "Digital display errors",
    description: "Modern fridges show codes when sensors fail. We'll decode the message and handle the repair.",
  },
];

const benefits = [
  "Experienced Arnprior fridge specialists with 15+ years of service",
  "Clear, upfront pricing on every job",
  "Same-day and next-day scheduling available",
  "Repairs and installs covered by a 90-day warranty",
];

const serviceAreas = [
  "Downtown Arnprior",
  "Braeside",
  "McNab",
  "White Lake",
  "Sand Point",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/fridge-repair/kanata" },
  { name: "Stittsville", slug: "/fridge-repair/stittsville" },
  { name: "Nepean", slug: "/fridge-repair/nepean" },
  { name: "Orleans", slug: "/fridge-repair/orleans" },
  { name: "Vanier", slug: "/fridge-repair/vanier" },
  { name: "Barrhaven", slug: "/fridge-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/fridge-repair/mississippi-mills" },
  { name: "Carleton Place", slug: "/fridge-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you repair fridges in Arnprior homes?",
    answer: "Yes — and nearby areas like Braeside and White Lake.",
  },
  {
    question: "Why is my fridge freezing food?",
    answer: "Likely a faulty thermostat or control board.",
  },
  {
    question: "Do you install new fridges?",
    answer: "Yes — installation with current hookups only.",
  },
  {
    question: "Do you service both standard and French-door fridges?",
    answer: "Yes — all major designs and brands.",
  },
  {
    question: "Do you provide a warranty?",
    answer: "Yes — 90-day labour warranty on all work.",
  },
];

export default function FridgeRepairArnpriorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"><FaSnowflake className="text-[30px] mb-2 inline-block" /> Fridge Repair in Arnprior</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            From ice maker problems to fridges that cycle constantly, Fixer Appliance Repair has Arnprior covered. Our technicians bring years of experience, same-day availability in many cases, and honest quotes before the work begins.
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
              We service most brands, including Frigidaire, Whirlpool, Samsung, LG, and GE.
            </p>
          </div>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} heading="Common Fridge Issues We Fix in Arnprior" />

      {/* Installation Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Fridge Installation in Arnprior</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                Need fridge installation in Arnprior?
              </p>
              <p className="text-center">
                Before replacing, take a look at our repair vs. replace guide — it explains costs and common repair issues.
              </p>
              <p className="text-center">
                When you bring home a new fridge, we provide installation in Arnprior. We'll connect, balance, and test it with the current hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ We don't create new plumbing or electrical lines.
              </p>
              <div className="text-center mt-6">
                <Link href="/fridge-installation" className="btn-primary">
                  Learn More About Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection applianceName="Fridge" benefits={benefits} />

      <CTASection />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Arnprior area, including:"
        neighborhoods={serviceAreas}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name,
          slug: area.slug.replace("/fridge-repair/", "")
        }))}
        applianceType="fridge"
        nearbyAreasLabel="We also provide fridge repair services in:"
        footerText={
          <p className="text-lg text-gray-700">
            For full coverage, see our{" "}
            <Link href="/fridge-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Fridge Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Discover Arnprior */}
      <ThingsToDoSection
        attractions={[
          { name: "Robert Simpson Park", description: "Riverside relaxation" },
          { name: "Gillies Grove", description: "Enjoy nature in the forest" },
          { name: "Downtown Arnprior", description: "Shopping and dining close by" },
        ]}
        heading="Discover Arnprior While We Fix Your Fridge"
        description="Take a break at some local favorites:"
        
        linkText="See local events in Arnprior"
      />

      {/* FAQ */}
      <FAQSection applianceName="Fridge" faqs={faqs} />

      {/* Schedule Service */}
      <CTASection 
        heading="Schedule Your Fridge Repair in Arnprior"
        description="Fridge problems? Contact Fixer Appliance Repair for quick, professional service:"
        />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Arnprior", href: "/washer-repair/arnprior" },
          { name: "Dryer Repair Arnprior", href: "/dryer-repair/arnprior" },
          { name: "Dishwasher Repair Arnprior", href: "/dishwasher-repair/arnprior" },
          { name: "Oven Repair Arnprior", href: "/oven-repair/arnprior" },
          { name: "Fridge Installation Arnprior", href: "/fridge-installation" },
        ]}
        heading="Also Need Help With…"
        description="We handle more than just fridges — here are our other services in Arnprior:"
        applianceName="Fridge"
      />

    </>
  );
}
