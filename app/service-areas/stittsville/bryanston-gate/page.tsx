import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Bryanston Gate Appliance Repair – Call 613-413-6969 | Fixer",
  description:
    "Need appliance repair in Bryanston Gate? We fix washers, dryers, fridges, ovens & more. Insured techs, same-day availability, 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Bryanston Gate",
    description: "Reliable cycles without mid-load surprises.",
    href: "/washer-repair/stittsville",
  },
  {
    name: "Dryer repair Bryanston Gate",
    description: "Even, efficient drying every time.",
    href: "/dryer-repair/stittsville",
  },
  {
    name: "Dishwasher repair Bryanston Gate",
    description: "Glasses and dishes that shine.",
    href: "/dishwasher-repair/stittsville",
  },
  {
    name: "Oven repair Bryanston Gate",
    description: "Consistent heat for perfect meals.",
    href: "/oven-repair/stittsville",
  },
  {
    name: "Cooktop repair Bryanston Gate",
    description: "Smooth temperature control on every burner.",
    href: "/cooktop-repair/stittsville",
  },
  {
    name: "Microwave repair Bryanston Gate",
    description: "Safe reheating without sparks.",
    href: "/microwave-repair/stittsville",
  },
  {
    name: "Fridge repair Bryanston Gate",
    description: "Keep food cold and fresh.",
    href: "/fridge-repair/stittsville",
  },
  {
    name: "Freezer repair Bryanston Gate",
    description: "Dependable deep-freeze storage.",
    href: "/freezer-repair/stittsville",
  },
];

const attractions = [
  "Stittsville Main Street shops and dining.",
  "Local playgrounds and green spaces.",
  "Nearby access to community sports fields.",
];

const faqs = [
  {
    question: "Do you handle small appliance repairs?",
    answer: "We focus on large home appliances like washers, dryers, fridges, ovens, cooktops, and dishwashers.",
  },
  {
    question: "What's the cost of a diagnostic in Bryanston Gate?",
    answer: "Diagnostics are a flat fee, and we apply it toward the repair if you choose to proceed.",
  },
  {
    question: "Do you offer a warranty on parts and labour?",
    answer: "Yes, every repair comes with a 90-day warranty that covers labour and installed parts.",
  },
  {
    question: "If I need fridge repair in Ottawa, can I book that here?",
    answer: "Absolutely — our Ottawa-wide service covers all major appliances. Book fridge repair in Ottawa any time.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Crossing Bridge Appliance Repair",
    href: "/service-areas/stittsville/crossing-bridge",
  },
  {
    name: "Jackson Trails Appliance Repair",
    href: "/service-areas/stittsville/jackson-trails",
  },
];

const additionalAreas = [
  "Poole Creek",
  "Timbermere",
  "Amberway",
  "West Ridge",
  "Fairwinds",
  "Edenwylde",
  "Westwind Farms",
  "Fernbank Crossing",
];

export default function BryanstonGateServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Bryanston Gate Appliance Repair – Fast & Friendly
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Need appliance repair in Bryanston Gate? Our insured team fixes it right the
              first time with a 90-day guarantee. Check our{" "}
              <Link
                href="/service-areas/stittsville"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Stittsville appliance repair
              </Link>{" "}
              hub, also serving Jackson Trails and Crossing Bridge.
            </p>
            <p className="text-lg text-gray-100">
              Reliable 90-day warranty included. Friendly, fully insured team. Local Stittsville technicians who know the area. Fast response with same-day availability.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Bryanston Gate"
              description="We provide expert repair services for:"
              services={services}
              installationNote={{
                label: "appliance installation in Stittsville",
                href: "/appliance-installation/stittsville",
              }}
            />
          </div>
        </div>
      </section>

      <BrandsSection
        header="Brands We Service in Bryanston Gate"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Bryanston Gate While We Fix"
        description="While we fix your appliance, discover Bryanston Gate:"
        link="https://ottawatourism.ca/en/see-and-do/events"
        linkText="See what's on nearby: Ottawa Tourism Events"
      />

      {/* Neighbourhoods Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ServiceAreaNeighborhoodsSection
            title="Other Stittsville Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Stittsville? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Bryanston Gate" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Book your Bryanston Gate appliance repair today"
        description="Phone 613-413-6969 or email service@fixerappliancerepair.ca."
      />
    </>
  );
}
