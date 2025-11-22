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
  title: "Fridge Repair Vanier – Local, Reliable Refrigerator Service | Fixer",
  description: "Fixer Appliance Repair provides expert fridge repair in Vanier. From cooling issues to leaks, noises, and control board failures, we service Whirlpool, Samsung, LG & more — with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Fridge won't start",
    description: "In older Vanier homes, worn wiring or blown fuses often cause this. We'll test and restore power safely.",
  },
  {
    title: "Fridge too cold",
    description: "If items freeze in the fresh food section, it's often a stuck damper or bad thermostat. We'll adjust or replace the part.",
  },
  {
    title: "Water dispenser leaking",
    description: "Cracked lines or loose fittings drip water inside the door. We'll replace and reseal them.",
  },
  {
    title: "Loud knocking noises",
    description: "A failing compressor or loose fan blades often make knocking sounds. We'll find the source and repair it.",
  },
  {
    title: "Lights or display not working",
    description: "From simple bulbs to faulty control boards, we'll restore full function.",
  },
];

const benefits = [
  "Skilled Vanier fridge repair and installation pros",
  "Straightforward pricing before work begins",
  "90-day warranty on all completed jobs",
  "Same-day and next-day service availability",
];

const serviceAreas = [
  "Overbrook",
  "Beechwood Village",
  "Cardinal Glen",
  "Notre Dame des Champs",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/fridge-repair/kanata" },
  { name: "Stittsville", slug: "/fridge-repair/stittsville" },
  { name: "Nepean", slug: "/fridge-repair/nepean" },
  { name: "Orleans", slug: "/fridge-repair/orleans" },
  { name: "Barrhaven", slug: "/fridge-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/fridge-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/fridge-repair/arnprior" },
  { name: "Carleton Place", slug: "/fridge-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you work on fridges in Vanier apartments and homes?",
    answer: "Yes — houses, condos, and rentals.",
  },
  {
    question: "Why is my fridge light not working?",
    answer: "Could be a bulb, switch, or wiring issue.",
  },
  {
    question: "Do you install refrigerators?",
    answer: "Yes — using current electrical and water lines.",
  },
  {
    question: "Do you handle all brands?",
    answer: "Yes — Whirlpool, Maytag, Samsung, LG, GE, and more.",
  },
  {
    question: "Do you provide a warranty?",
    answer: "Yes — every fridge repair or install includes a 90-day warranty.",
  },
];

export default function FridgeRepairVanierPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"><FaSnowflake className="text-[30px] mb-2 inline-block" /> Fridge Repair in Vanier</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Vanier residents count on Fixer Appliance Repair when refrigerators break down. From inconsistent temperatures to malfunctioning control boards, we offer professional service with same-day appointments in many neighbourhoods.
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
              We handle all major models, including Whirlpool, Maytag, Samsung, LG, and GE.
            </p>
          </div>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} heading="Common Fridge Issues We Fix in Vanier" />

      {/* Installation Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Fridge Installation in Vanier</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                Looking for fridge installation in Vanier?
              </p>
              <p className="text-center">
                Before you buy, review our repair vs. replace guide — it outlines costs, lifespan, and repair value.
              </p>
              <p className="text-center">
                For new units, we provide fridge installation in Vanier. We'll set it up and test it using your existing hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ We don't add plumbing or high-voltage wiring.
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
        description="We provide appliance repair services across the entire Vanier area, including:"
        neighborhoods={serviceAreas}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name,
          slug: area.slug.replace("/fridge-repair/", "")
        }))}
        applianceType="fridge"
        nearbyAreasLabel="We also provide fridge repair services in:"
        footerText={
          <p className="text-lg text-gray-700">
            For complete coverage, see our{" "}
            <Link href="/fridge-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Fridge Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Discover Vanier */}
      <ThingsToDoSection
        attractions={[
          { name: "Richelieu Park", description: "Peaceful city escape" },
          { name: "Museopark", description: "Local francophone history" },
          { name: "Beechwood Avenue", description: "Cafés and restaurants" },
        ]}
        heading="Discover Vanier While We Repair Your Fridge"
        description="Instead of waiting, enjoy:"
        
        linkText="See what's happening in Vanier"
      />

      {/* FAQ */}
      <FAQSection applianceName="Fridge" faqs={faqs} />

      {/* Schedule Service */}
      <CTASection 
        heading="Schedule Your Fridge Repair in Vanier"
        description="Don't let food spoil — reach out now and get your fridge repair scheduled:"
        />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Vanier", href: "/washer-repair/vanier" },
          { name: "Dryer Repair Vanier", href: "/dryer-repair/vanier" },
          { name: "Dishwasher Repair Vanier", href: "/dishwasher-repair/vanier" },
          { name: "Oven Repair Vanier", href: "/oven-repair/vanier" },
          { name: "Fridge Installation Vanier", href: "/fridge-installation" },
        ]}
        heading="Also Need Help With…"
        description="Fridges aren't all we repair — here are our other services in Vanier:"
        applianceName="Fridge"
      />

    </>
  );
}

