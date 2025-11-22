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
  title: "Fridge Repair Orleans – Fast, Local Refrigerator Service | Fixer",
  description: "Fixer provides expert fridge repair in Orleans. From cooling issues to ice maker leaks, we service LG, Samsung, Whirlpool & more — with same-day service and 90-day warranty.",
};

const commonIssues = [
  {
    title: "Fridge not cooling enough",
    description: "In Orleans homes, this often happens after a power surge or when condenser coils get clogged. We'll get the temperature back to safe levels.",
  },
  {
    title: "Ice maker leaking water",
    description: "Overflowing or cracked lines are common in newer side-by-side models. We'll repair the leak before it damages your Orleans kitchen floor.",
  },
  {
    title: "Strange clicking noises",
    description: "Often a failing relay or compressor trying to start. We'll diagnose the noise and fix it quickly.",
  },
  {
    title: "Water dispenser not working",
    description: "Blocked filters or frozen water lines can cut the flow. We'll restore clean, cold water.",
  },
  {
    title: "Fridge running constantly",
    description: "If your refrigerator never shuts off, it's usually a thermostat or fan issue. Call us to save energy and keep food fresh.",
  },
];

const benefits = [
  "Local Orleans fridge specialists with years of experience",
  "Same-day and next-day service available",
  "90-day labour warranty on repairs and installations",
  "Transparent pricing, no hidden fees",
];

const serviceAreas = [
  "Fallingbrook",
  "Avalon",
  "Queenswood Heights",
  "Chapel Hill",
  "Convent Glen",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/fridge-repair/kanata" },
  { name: "Stittsville", slug: "/fridge-repair/stittsville" },
  { name: "Nepean", slug: "/fridge-repair/nepean" },
  { name: "Vanier", slug: "/fridge-repair/vanier" },
  { name: "Barrhaven", slug: "/fridge-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/fridge-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/fridge-repair/arnprior" },
  { name: "Carleton Place", slug: "/fridge-repair/carleton-place" },
];

const faqs = [
  {
    question: "Can I get same-day fridge repair in Orleans?",
    answer: "Often yes — call us early to check availability.",
  },
  {
    question: "Why is my fridge not cooling properly?",
    answer: "It could be a failing thermostat, compressor, or blocked airflow.",
  },
  {
    question: "Do you install new refrigerators?",
    answer: "Yes — we install fridges in Orleans using existing water and power connections.",
  },
  {
    question: "Do you serve areas near Orleans?",
    answer: "Yes — including Chapel Hill, Avalon, and Fallingbrook.",
  },
  {
    question: "Do you offer a warranty?",
    answer: "Yes — all fridge work is covered by our 90-day warranty.",
  },
];

export default function FridgeRepairOrleansPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"><FaSnowflake className="text-[30px] mb-2 inline-block" /> Fridge Repair in Orleans</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Fridge running warm or ice maker refusing to work? Fixer Appliance Repair provides Orleans households with fast, reliable refrigerator service. Our local techs fix everything from faulty thermostats to broken seals, always with clear pricing and a 90-day warranty.
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
              We service major brands such as LG, Samsung, Whirlpool, GE, and Maytag.
            </p>
          </div>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} heading="Common Fridge Issues We Fix in Orleans" />

      {/* Installation Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Fridge Installation in Orleans</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                Looking for fridge installation in Orleans?
              </p>
              <p className="text-center">
                Before you invest in a new one, review our repair vs. replace guide — it may help you save money.
              </p>
              <p className="text-center">
                For new purchases, we provide fridge installation in Orleans. We'll connect, level, and test your unit using the existing water and electrical connections.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ No new plumbing or wiring included.
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
        description="We provide appliance repair services across the entire Orleans area, including:"
        neighborhoods={serviceAreas}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name,
          slug: area.slug.replace("/fridge-repair/", "")
        }))}
        applianceType="fridge"
        nearbyAreasLabel="We also help customers in:"
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

      {/* Discover Orleans */}
      <ThingsToDoSection
        attractions={[
          { name: "Petrie Island", description: "Perfect for a walk along the water" },
          { name: "Shenkman Arts Centre", description: "Shows, exhibits, and events" },
          { name: "Place d'Orleans", description: "A hub for shopping and dining" },
        ]}
        heading="Discover Orleans While We Repair Your Fridge"
        description="Instead of waiting at home, try:"
        linkText="Check Orleans events this month"
      />

      {/* FAQ */}
      <FAQSection applianceName="Fridge" faqs={faqs} />

      {/* Schedule Service */}
      <CTASection 
        heading="Schedule Your Fridge Repair in Orleans"
        description="Fridge not cooling properly? Don't wait — call Fixer Appliance Repair now:"
        />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Orleans", href: "/washer-repair/orleans" },
          { name: "Dryer Repair Orleans", href: "/dryer-repair/orleans" },
          { name: "Dishwasher Repair Orleans", href: "/dishwasher-repair/orleans" },
          { name: "Oven Repair Orleans", href: "/oven-repair/orleans" },
          { name: "Fridge Installation Orleans", href: "/fridge-installation" },
        ]}
        heading="Also Need Help With…"
        description="Our team handles more than fridges — here's what else we do in Orleans:"
        applianceName="Fridge"
      />

    </>
  );
}
