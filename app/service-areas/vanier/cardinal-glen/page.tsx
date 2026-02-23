import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";
import ServiceAreaHero from "@/components/ServiceAreaHero";

export const metadata: Metadata = {
  title: "Cardinal Glen Appliance Repair – Professional Technicians | Fixer",
  description:
    "Appliance repair in Cardinal Glen. Washers, dryers, ovens, fridges & more. Insured local team, same-day service, 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Cardinal Glen",
    description: "Keep laundry day running smoothly.",
    href: "/washer-repair/vanier",
  },
  {
    name: "Dryer repair Cardinal Glen",
    description: "Restore fast, efficient drying.",
    href: "/dryer-repair/vanier",
  },
  {
    name: "Dishwasher repair Cardinal Glen",
    description: "Spotless dishes without the hassle.",
    href: "/dishwasher-repair/vanier",
  },
  {
    name: "Oven repair Cardinal Glen",
    description: "Even heat for every recipe.",
    href: "/oven-repair/vanier",
  },
  {
    name: "Cooktop repair Cardinal Glen",
    description: "Reliable temperature control on every burner.",
    href: "/cooktop-repair/vanier",
  },
  {
    name: "Microwave repair Cardinal Glen",
    description: "Safe, quick reheating.",
    href: "/microwave-repair/vanier",
  },
  {
    name: "Fridge repair Cardinal Glen",
    description: "Keep groceries fresh and safe.",
    href: "/fridge-repair/vanier",
  },
  {
    name: "Freezer repair Cardinal Glen",
    description: "Dependable deep-freeze storage.",
    href: "/freezer-repair/vanier",
  },
];

const attractions = [
  "Quiet residential parks and green areas.",
  "Local playgrounds and community spots.",
  "Walking distance to Beechwood Village shops.",
];

const faqs = [
  {
    question: "Do you cover Cardinal Glen with same-day service?",
    answer: "Yes, depending on schedule.",
  },
  {
    question: "Do you repair ovens and cooktops?",
    answer: "Yes, all kitchen appliances are included.",
  },
  {
    question: "Do you provide a service warranty?",
    answer: "Yes, 90-day coverage on all work.",
  },
  {
    question: "Can you also handle dryer repair in Ottawa?",
    answer: "Yes, Ottawa service is available. Book dryer repair in Ottawa any time.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Overbrook Appliance Repair",
    href: "/service-areas/vanier/overbrook",
  },
  {
    name: "Beechwood Village Appliance Repair",
    href: "/service-areas/vanier/beechwood-village",
  },
];

const additionalAreas = [
  "McArthur",
  "Cummings",
  "Queen Mary Street",
  "North River Road",
  "Eastview",
  "St. Laurent Boulevard",
  "Donald Street",
  "Vanier Parkway",
];

export default function CardinalGlenServiceAreaPage() {
  return (
    <>
      <ServiceAreaHero
        title="Cardinal Glen Appliance Repair – Fast & Reliable"
        description={
          <>
            Appliance repair in Cardinal Glen with insured local service. Same-day appointments often available. Check our{" "}
            <Link
              href="/service-areas/vanier"
              className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
            >
              Vanier appliance repair
            </Link>{" "}
            hub, also serving Beechwood Village and Overbrook.
          </>
        }
        additionalContent={
          <p>
            Solid 90-day warranty on all repairs. Courteous, insured pros. Local Vanier experts ready to help. Same-day scheduling available.
          </p>
        }
      />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Cardinal Glen"
              description="We provide expert repair services for:"
              services={services}
              installationNote={{
                label: "appliance installation across Ottawa",
                href: "/appliance-installation/locations/ottawa",
              }}
            />
          </div>
        </div>
      </section>

      <BrandsSection
        header="Brands We Service in Cardinal Glen"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Cardinal Glen While We Fix"
        description="While your appliance is being repaired, enjoy Cardinal Glen:"
        
        linkText="See current events: Ottawa Tourism Events"
      />

      {/* Neighbourhoods Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ServiceAreaNeighborhoodsSection
            title="Other Vanier Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Vanier? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Cardinal Glen" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Local help is one call away"
        description="Phone 613-413-6969 or email service@fixerappliancerepair.ca for Cardinal Glen appliance repair."
      />
    </>
  );
}
