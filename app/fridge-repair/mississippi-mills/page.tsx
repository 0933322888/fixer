import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import FAQSection from "@/components/FAQSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Fridge Repair Mississippi Mills – Reliable Service in Almonte & Beyond | Fixer",
  description: "Fixer provides expert fridge repair in Mississippi Mills. From cooling issues to leaks and noisy compressors, we service Whirlpool, LG, Samsung & more — with same-day local service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Fridge too warm",
    description: "In rural Mississippi Mills homes, clogged vents or broken fans often stop air from circulating. We'll restore cooling fast.",
  },
  {
    title: "Freezer frosting up",
    description: "Heavy ice buildup points to a defrost system failure. We'll repair heaters or sensors so frost stays under control.",
  },
  {
    title: "Door seals worn out",
    description: "When gaskets don't seal, cold air escapes and hydro bills climb. We'll replace them with factory-fit parts.",
  },
  {
    title: "Loud buzzing or humming",
    description: "Motors and compressors sometimes get noisy before failing. We'll catch the problem early and prevent a breakdown.",
  },
  {
    title: "Water pooling inside fridge",
    description: "A clogged defrost drain often leaves puddles under drawers. We'll clear it and stop leaks for good.",
  },
];

const benefits = [
  "Trusted fridge repair & installation pros serving Mississippi Mills homes",
  "Clear estimates before we begin",
  "Fast response — often same or next day",
  "All work backed by a 90-day warranty",
];

const serviceAreas = [
  "Almonte",
  "Appleton",
  "Blakeney",
  "Pakenham",
  "Ramsay",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/fridge-repair/kanata" },
  { name: "Stittsville", slug: "/fridge-repair/stittsville" },
  { name: "Nepean", slug: "/fridge-repair/nepean" },
  { name: "Orleans", slug: "/fridge-repair/orleans" },
  { name: "Vanier", slug: "/fridge-repair/vanier" },
  { name: "Barrhaven", slug: "/fridge-repair/barrhaven" },
  { name: "Arnprior", slug: "/fridge-repair/arnprior" },
  { name: "Carleton Place", slug: "/fridge-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you service fridges in rural Mississippi Mills?",
    answer: "Yes — including Almonte, Appleton, and nearby areas.",
  },
  {
    question: "Why is my fridge making loud humming noises?",
    answer: "It may be the fan motor, compressor, or condenser coils.",
  },
  {
    question: "Do you handle fridge installation?",
    answer: "Yes — with existing hookups.",
  },
  {
    question: "Do you repair all fridge brands?",
    answer: "Yes — from Whirlpool and LG to GE and Samsung.",
  },
  {
    question: "Do you provide upfront pricing?",
    answer: "Always — no hidden fees.",
  },
];

export default function FridgeRepairMississippiMillsPage() {
  return (
    <>
      <ServiceHero
        title="Fridge Repair in Mississippi Mills"
        description="In Mississippi Mills, a broken fridge can quickly turn into wasted groceries. Whether it's uneven cooling, a noisy compressor, or water leaking onto the floor, Fixer Appliance Repair is here to help. Our team offers rural-friendly service across Almonte, Pakenham, and Clayton."
        icon={<FaSnowflake className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <p className="text-lg text-gray-200 mb-8">
            We repair popular brands including Whirlpool, Frigidaire, LG, GE, and Samsung.
          </p>
        }
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Fridge Issues We Fix in Mississippi Mills" />

      {/* Installation Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Fridge Installation in Mississippi Mills</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                Replacing your fridge in Mississippi Mills?
              </p>
              <p className="text-center">
                Before buying, see our repair vs. replace guide — it shows when a repair is better value.
              </p>
              <p className="text-center">
                Already purchased a new fridge? We provide installation in Mississippi Mills. Our team connects and tests it with your current hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ We don't install new plumbing or high-voltage wiring.
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

      <RepairOrReplaceSection description="Refrigerators are expensive to replace — and many common issues are easy to fix. If your fridge is less than 12 years old, check our repair vs replace comparison to make a smart decision based on cost, age, and reliability." />

      <InstallationCTASection
        applianceName="Fridge"
        description="Upgrading to a new unit? We also offer fridge installation in Mississippi Mills — fast, safe, and fully insured."
        href="/appliance-installation/fridge"
      />

      <CTASection />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Mississippi Mills area, including:"
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

      {/* Discover Mississippi Mills */}
      <ThingsToDoSection
        attractions={[
          { name: "Almonte Riverwalk", description: "Take in the scenery along the river" },
          { name: "Mill of Kintail", description: "Trails and heritage buildings" },
          { name: "Downtown Almonte", description: "Shop and grab a snack" },
        ]}
        heading="Discover Mississippi Mills While We Repair Your Fridge"
        description="Here are a few ideas for your wait:"
        
        linkText="Check Mississippi Mills events"
      />

      {/* FAQ */}
      <FAQSection applianceName="Fridge" faqs={faqs} />

      {/* Schedule Service */}
      <CTASection 
        heading="Schedule Your Fridge Repair in Mississippi Mills"
        description="Serving Almonte, Appleton, and more — schedule your fridge service with us today:"
        />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Mississippi Mills", href: "/washer-repair/mississippi-mills" },
          { name: "Dryer Repair Mississippi Mills", href: "/dryer-repair/mississippi-mills" },
          { name: "Dishwasher Repair Mississippi Mills", href: "/dishwasher-repair/mississippi-mills" },
          { name: "Oven Repair Mississippi Mills", href: "/oven-repair/mississippi-mills" },
          { name: "Fridge Installation Mississippi Mills", href: "/fridge-installation" },
        ]}
        heading="Also Need Help With…"
        description="Fridges are just the beginning — here are our other services in Mississippi Mills:"
        applianceName="Fridge"
      />

    </>
  );
}
