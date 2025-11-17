import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Overbrook Appliance Repair – Friendly Local Team | Fixer",
  description:
    "Trusted appliance repair in Overbrook. Washers, dryers, ovens, fridges & more. Insured Ottawa technicians, same-day availability, warranty.",
};

const services = [
  {
    name: "Washer repair Overbrook",
    description: "Keep laundry day running smoothly.",
    href: "/washer-repair/vanier",
  },
  {
    name: "Dryer repair Overbrook",
    description: "Restore fast, efficient drying.",
    href: "/dryer-repair/vanier",
  },
  {
    name: "Dishwasher repair Overbrook",
    description: "Spotless dishes without the hassle.",
    href: "/dishwasher-repair/vanier",
  },
  {
    name: "Oven repair Overbrook",
    description: "Even heat for every recipe.",
    href: "/oven-repair/vanier",
  },
  {
    name: "Cooktop repair Overbrook",
    description: "Reliable temperature control on every burner.",
    href: "/cooktop-repair/vanier",
  },
  {
    name: "Microwave repair Overbrook",
    description: "Safe, quick reheating.",
    href: "/microwave-repair/vanier",
  },
  {
    name: "Fridge repair Overbrook",
    description: "Keep groceries fresh and safe.",
    href: "/fridge-repair/vanier",
  },
  {
    name: "Freezer repair Overbrook",
    description: "Dependable deep-freeze storage.",
    href: "/freezer-repair/vanier",
  },
];

const attractions = [
  "Riverain Park on the Rideau River.",
  "Overbrook Community Centre.",
  "Local playgrounds and green spaces.",
];

const faqs = [
  {
    question: "Do you offer same-day service in Overbrook?",
    answer: "Yes, often possible if you call early.",
  },
  {
    question: "Do you fix washers and dishwashers?",
    answer: "Yes, all major appliances are covered.",
  },
  {
    question: "Do you guarantee your repairs?",
    answer: "Yes, every repair has a 90-day warranty.",
  },
  {
    question: "Do you also provide washer repair in Ottawa?",
    answer: "Yes, Ottawa-wide service is available. Book washer repair in Ottawa any time.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Beechwood Village Appliance Repair",
    href: "/service-areas/vanier/beechwood-village",
  },
  {
    name: "Cardinal Glen Appliance Repair",
    href: "/service-areas/vanier/cardinal-glen",
  },
];

const additionalAreas = [
  "Cummings",
  "McArthur",
  "Eastview",
  "North River Road",
  "Vanier Parkway",
  "St. Laurent Boulevard",
  "Queen Mary Street",
  "Donald Street",
];

export default function OverbrookServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Overbrook Appliance Repair You Can Rely On
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Appliance repair in Overbrook, Vanier. Our local technicians provide friendly, insured service with a 90-day warranty. Explore our{" "}
              <Link
                href="/service-areas/vanier"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Vanier appliance repair
              </Link>{" "}
              page, also serving Beechwood Village and Cardinal Glen.
            </p>
            <p className="text-lg text-gray-100">
              90-day repair guarantee. Friendly, insured specialists. Local Vanier techs. Same-day visits available.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Overbrook"
              description="We provide expert repair services for:"
              services={services}
              installationNote={{
                label: "appliance installation across Ottawa",
                href: "/appliance-installation/ottawa",
              }}
            />
          </div>
        </div>
      </section>

      <BrandsSection
        header="Brands We Service in Overbrook"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Overbrook While We Fix"
        description="While we repair your appliance, discover Overbrook:"
        link="https://ottawatourism.ca/en/see-and-do/events"
        linkText="See nearby events: Ottawa Tourism Events"
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
      <FAQSection applianceName="Overbrook" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Quick, reliable service in Overbrook"
        description="Dial 613-413-6969 or email service@fixerappliancerepair.ca."
      />
    </>
  );
}
