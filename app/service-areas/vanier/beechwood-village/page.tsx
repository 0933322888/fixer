import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Beechwood Village Appliance Repair – Call 613-413-6969 | Fixer",
  description:
    "Local appliance repair in Beechwood Village. Washers, dryers, fridges, ovens & more. Reliable service, insured team, 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Beechwood Village",
    description: "Keep laundry day running smoothly.",
    href: "/washer-repair/vanier",
  },
  {
    name: "Dryer repair Beechwood Village",
    description: "Restore fast, efficient drying.",
    href: "/dryer-repair/vanier",
  },
  {
    name: "Dishwasher repair Beechwood Village",
    description: "Spotless dishes without the hassle.",
    href: "/dishwasher-repair/vanier",
  },
  {
    name: "Oven repair Beechwood Village",
    description: "Even heat for every recipe.",
    href: "/oven-repair/vanier",
  },
  {
    name: "Cooktop repair Beechwood Village",
    description: "Reliable temperature control on every burner.",
    href: "/cooktop-repair/vanier",
  },
  {
    name: "Microwave repair Beechwood Village",
    description: "Safe, quick reheating.",
    href: "/microwave-repair/vanier",
  },
  {
    name: "Fridge repair Beechwood Village",
    description: "Keep groceries fresh and safe.",
    href: "/fridge-repair/vanier",
  },
  {
    name: "Freezer repair Beechwood Village",
    description: "Dependable deep-freeze storage.",
    href: "/freezer-repair/vanier",
  },
];

const attractions = [
  "Beechwood Avenue shops and cafés.",
  "Local art galleries and community spots.",
  "Rideau River walking paths.",
];

const faqs = [
  {
    question: "Do you handle weekend appointments in Beechwood Village?",
    answer: "Sometimes — call to check availability.",
  },
  {
    question: "Do you repair fridges and freezers?",
    answer: "Yes, we fix cooling appliances daily.",
  },
  {
    question: "Are your techs insured?",
    answer: "Yes, all are fully insured.",
  },
  {
    question: "Can I also book fridge repair in Ottawa?",
    answer: "Yes, we cover all Ottawa neighbourhoods. Book fridge repair in Ottawa any time.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Overbrook Appliance Repair",
    href: "/service-areas/vanier/overbrook",
  },
  {
    name: "Cardinal Glen Appliance Repair",
    href: "/service-areas/vanier/cardinal-glen",
  },
];

const additionalAreas = [
  "Cummings",
  "North River Road",
  "McArthur",
  "Eastview",
  "St. Laurent Boulevard",
  "Donald Street",
  "Queen Mary Street",
  "Vanier Parkway",
];

export default function BeechwoodVillageServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Beechwood Village Appliance Repair – Trusted Local Service
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Need appliance repair in Beechwood Village? We fix all major appliances quickly, backed by a 90-day warranty. Learn more via our{" "}
              <Link
                href="/service-areas/vanier"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Vanier appliance repair
              </Link>{" "}
              page, covering Overbrook and Cardinal Glen.
            </p>
            <p className="text-lg text-gray-100">
              Every repair backed by a 90-day warranty. Professional, insured team. Vanier-based technicians. Same-day repairs when possible.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Beechwood Village"
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
        header="Brands We Service in Beechwood Village"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Beechwood Village While We Fix"
        description="While we fix your appliance, explore Beechwood Village:"
        
        linkText="See what's happening this week: Ottawa Tourism Events"
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
      <FAQSection applianceName="Beechwood Village" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Call 613-413-6969 or write to service@fixerappliancerepair.ca"
        description="to schedule Beechwood Village appliance repair."
      />
    </>
  );
}
